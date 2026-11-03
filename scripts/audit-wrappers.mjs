import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const output = process.env.WRAPPER_AUDIT_DIR ?? '/tmp/vue-wrappers-audit';
const storybookUrl = (
  process.env.STORYBOOK_URL ?? 'http://127.0.0.1:6006'
).replace(/\/$/, '');
const browserUrl = (process.env.CDP_URL ?? 'http://127.0.0.1:9238').replace(
  /\/$/,
  ''
);
await fs.mkdir(output, { recursive: true });
const index = await fetch(`${storybookUrl}/index.json`).then((response) => {
  if (!response.ok) {
    throw new Error(`Storybook index: ${response.status}`);
  }
  return response.json();
});
const wrapperNames = [
  ...(
    await fs.readFile(
      new URL('../src/primeBlocks/index.ts', import.meta.url),
      'utf8'
    )
  ).matchAll(/import (Extra\w+) from/g),
].map((match) => match[1].toLowerCase());
const stories = Object.values(index.entries).filter(
  (story) =>
    story.type === 'story' &&
    wrapperNames.some((name) => story.id.includes(name))
);
for (const name of wrapperNames) {
  assert.ok(
    stories.some((story) => story.id.includes(name)),
    `Missing stories: ${name}`
  );
}
const targets = await fetch(`${browserUrl}/json/list`).then((response) =>
  response.json()
);
const socket = new WebSocket(
  targets.find((target) => target.type === 'page').webSocketDebuggerUrl
);
const pending = new Map();
let sequence = 0;
let errors = [];
socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.method === 'Runtime.exceptionThrown') {
    errors.push(
      message.params.exceptionDetails.text +
        ': ' +
        (message.params.exceptionDetails.exception?.description ?? '')
    );
  }
  if (
    message.method === 'Runtime.consoleAPICalled' &&
    message.params.type === 'error'
  ) {
    errors.push(
      message.params.args
        .map((argument) => argument.value ?? argument.description)
        .join(' ')
    );
  }
  const request = pending.get(message.id);
  if (request) {
    pending.delete(message.id);
    message.error
      ? request.reject(new Error(JSON.stringify(message.error)))
      : request.resolve(message.result);
  }
};
await new Promise((resolve) => (socket.onopen = resolve));
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
}
await send('Page.enable');
await send('Runtime.enable');
await send('DOM.enable');
await send('CSS.enable');
await send('Emulation.setFocusEmulationEnabled', { enabled: true });
const results = [];
const selector =
  'input.p-inputtext,textarea.p-textarea,.p-togglebutton,.p-toast,.p-toast-message,.p-toast-summary,.p-toast-detail,.p-toast-close-button,.p-toast-message-icon,.extra-toast__accent-line,.p-megamenu,.p-menubar,.p-panelmenu,.extra-menuitem-link,.extra-menuitem-label,.extra-menuitem-icon,.extra-menuitem-description,.extra-menuitem-submenu-icon,.extra-inputtext__left-label,.extra-textarea__left-label,.p-floatlabel label';
async function capture(story, theme, viewport, interaction = 'default') {
  const data = await evaluate(`(() => {
    const paint = element => {
      const style = getComputedStyle(element); const box = element.getBoundingClientRect();
      return {classes: typeof element.className === 'string' ? element.className : element.className.baseVal, tag: element.tagName, text: element.textContent.slice(0,80),
        case: element.closest('[data-visual-case]')?.dataset.visualCase, x: box.x, y: box.y, width: box.width, height: box.height,
        fontFamily: style.fontFamily, fontSize: style.fontSize, fontWeight: style.fontWeight, lineHeight: style.lineHeight,
        background: style.backgroundColor, color: style.color, border: style.border, borderRadius: style.borderRadius,
        padding: style.padding, gap: style.gap, shadow: style.boxShadow, outline: style.outline, opacity: style.opacity,
        overflow: style.overflow, placeholder: element.matches('input,textarea') ? getComputedStyle(element, '::placeholder').color : null};
    };
    return {rootFont: getComputedStyle(document.documentElement).fontSize,
      fonts: {noto: document.fonts.check('12px "Noto Sans"'), heading: document.fonts.check('12px "TT Fellows"'), base: document.fonts.check('12px "PT Sans"')},
      elements: [...document.querySelectorAll(${JSON.stringify(
        selector
      )})].filter(element => element.getBoundingClientRect().height > 0).map(paint),
      bodyText: document.body.innerText.slice(0,500), overflow: document.documentElement.scrollWidth > innerWidth};
  })()`);
  assert.equal(data.rootFont, '16px');
  const metrics = await send('Page.getLayoutMetrics');
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: !story.id.includes('extratoast'),
    ...(story.id.includes('extratoast')
      ? {}
      : {
          clip: {
            x: 0,
            y: 0,
            width: viewport,
            height: Math.min(metrics.cssContentSize.height, 16000),
            scale: 1,
          },
        }),
  });
  const filename = `${story.id}-${theme}-${viewport}-${interaction}.png`;
  await fs.writeFile(
    `${output}/${filename}`,
    Buffer.from(screenshot.data, 'base64')
  );
  results.push({
    story: story.id,
    theme,
    viewport,
    interaction,
    errors: [...errors],
    screenshot: filename,
    ...data,
  });
}
for (const story of stories) {
  errors = [];
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send('Page.navigate', {
    url: `${storybookUrl}/iframe.html?id=${story.id}&viewMode=story`,
  });
  await sleep(1000);
  for (
    let attempt = 0;
    attempt < 25 &&
    !(await evaluate(
      `document.querySelector('#storybook-root')?.children.length > 0`
    ));
    attempt++
  ) {
    await sleep(200);
  }
  await evaluate(
    `Promise.race([document.fonts.ready.then(() => true), new Promise(resolve => setTimeout(() => resolve(false), 4000))])`
  );
  const { root } = await send('DOM.getDocument');
  const { nodeIds } = await send('DOM.querySelectorAll', {
    nodeId: root.nodeId,
    selector: '[data-visual-state]',
  });
  for (const nodeId of nodeIds) {
    const { attributes } = await send('DOM.getAttributes', { nodeId });
    const state = attributes[attributes.indexOf('data-visual-state') + 1];
    const query = await send('DOM.querySelector', {
      nodeId,
      selector: 'input,textarea,button',
    });
    if (!query.nodeId) {
      continue;
    }
    const pseudoClasses =
      state === 'hover'
        ? ['hover']
        : state.includes('focus')
        ? ['focus', 'focus-visible']
        : [];
    if (pseudoClasses.length) {
      await send('CSS.forcePseudoState', {
        nodeId: query.nodeId,
        forcedPseudoClasses: pseudoClasses,
      });
      const { nodeIds: containers } = await send('DOM.querySelectorAll', {
        nodeId,
        selector: '.p-floatlabel',
      });
      for (const container of containers) {
        await send('CSS.forcePseudoState', {
          nodeId: container,
          forcedPseudoClasses: ['focus-within'],
        });
      }
    }
  }
  for (const theme of ['light', 'dark']) {
    await evaluate(
      `document.documentElement.classList.toggle('theme-prime-dark', ${
        theme === 'dark'
      }); document.querySelector('[data-visual-toast-trigger]')?.click();`
    );
    await sleep(500);
    await capture(story, theme, 1440);
  }
  if (
    /extra(megamenu|menubar|panelmenu)--(horizontal|vertical|basic)$/.test(
      story.id
    )
  ) {
    for (const theme of ['light', 'dark']) {
      await evaluate(
        `document.documentElement.classList.toggle('theme-prime-dark', ${
          theme === 'dark'
        });document.querySelector('.extra-menuitem-link')?.click();`
      );
      await sleep(400);
      const point = await evaluate(
        `(() => {const box = document.querySelector('.extra-menuitem-link')?.getBoundingClientRect();return box ? {x: box.x+box.width/2, y:box.y+box.height/2}:null;})()`
      );
      if (point) {
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          ...point,
        });
      }
      await capture(story, theme, 1440, 'interactive');
    }
  }
  if (
    /extra(megamenu|menubar|panelmenu)--(horizontal|vertical|basic)$|extra(inputtext|textarea)--default$/.test(
      story.id
    )
  ) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await sleep(300);
    await capture(story, 'dark', 390, 'mobile');
  }
  process.stdout.write(
    String(
      `${story.id}: ${results.at(-1).errors.length ? 'ERROR' : 'rendered'}`
    ) + '\n'
  );
}
await fs.writeFile(`${output}/runtime.json`, JSON.stringify(results, null, 2));
process.stdout.write(
  String(
    JSON.stringify({
      wrappers: wrapperNames.length,
      stories: stories.length,
      captures: results.length,
      runtimeErrors: results
        .filter((result) => result.errors.length)
        .map((result) => ({ story: result.story, errors: result.errors })),
    })
  ) + '\n'
);
socket.close();
