import { addons } from 'storybook/preview-api';
import { EVENT_UPDATE, PARAM_KEY } from './constants.js';

// ── Category detection ────────────────────────────────────────────────────────

const CATEGORIES = [
  { pattern: /color|background|foreground/,  label: 'Colors'        },
  { pattern: /shadow/,                        label: 'Shadow'        },
  { pattern: /font-size|font-weight|font-family|line-height/, label: 'Typography' },
  { pattern: /border-radius/,                 label: 'Border Radius' },
  { pattern: /border-width/,                  label: 'Border Width'  },
  { pattern: /padding|gap|margin|spacing/,    label: 'Spacing'       },
  { pattern: /width|height|size/,             label: 'Sizing'        },
];

function getCategory(name) {
  for (const { pattern, label } of CATEGORIES) {
    if (pattern.test(name)) return label;
  }
  return 'Other';
}

// ── CSS variable scanning ─────────────────────────────────────────────────────

function scanTokens(prefix) {
  const found = {};
  const computed = getComputedStyle(document.documentElement);

  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules || []) {
        if (!rule.style) continue;
        for (let i = 0; i < rule.style.length; i++) {
          const prop = rule.style[i];
          if (prop.startsWith(prefix) && !(prop in found)) {
            found[prop] =
              computed.getPropertyValue(prop).trim() ||
              rule.style.getPropertyValue(prop).trim();
          }
        }
      }
    } catch {
      // cross-origin stylesheet — skip
    }
  }

  return found;
}

function groupTokens(tokens) {
  const groups = {};

  for (const [name, value] of Object.entries(tokens)) {
    const cat = getCategory(name);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push({ name, value });
  }

  return groups;
}

// ── Decorator ─────────────────────────────────────────────────────────────────

export const decorators = [
  (storyFn, context) => {
    const prefix = context.parameters?.[PARAM_KEY]?.prefix;

    if (prefix) {
      // setTimeout 0 — ensure PrimeVue styles are injected before scanning
      setTimeout(() => {
        const tokens = scanTokens(prefix);
        const groups = groupTokens(tokens);
        addons.getChannel().emit(EVENT_UPDATE, { prefix, groups });
      }, 0);
    } else {
      addons.getChannel().emit(EVENT_UPDATE, { prefix: null, groups: {} });
    }

    return storyFn();
  },
];
