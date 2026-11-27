export interface ExtraStorySpec {
  description: string;
  importName: string;
  importPath?: string;
  figmaUrl?: string;
  designTokensPrefix?: string;
  usageSnippet?: string;
  usageSnippetLanguage?: string;
}

function buildLinks(spec: ExtraStorySpec) {
  const links: string[] = [];

  if (spec.figmaUrl) {
    links.push(`[Макет](${spec.figmaUrl})`);
  }

  return links;
}

export function buildComponentDescription(spec: ExtraStorySpec) {
  const importPath = spec.importPath ?? '@cdek-it/vue-ui-kit';
  const snippet = spec.usageSnippet
    ? spec.usageSnippet.trim()
    : `import { ${spec.importName} } from '${importPath}';`;
  const snippetLanguage = spec.usageSnippetLanguage ?? 'js';
  const blocks = [spec.description];
  const links = buildLinks(spec);

  if (links.length > 0) {
    blocks.push(links.join(', '));
  }

  blocks.push(`\`\`\`${snippetLanguage}\n${snippet}\n\`\`\``);

  return blocks.join('\n\n');
}

export function buildStoryParameters(spec: ExtraStorySpec) {
  return {
    docs: {
      description: {
        component: buildComponentDescription(spec),
      },
    },
    ...(spec.designTokensPrefix
      ? {
          designToken: { disable: false },
          designTokens: { prefix: spec.designTokensPrefix },
        }
      : {}),
    ...(spec.figmaUrl
      ? {
          design: {
            type: 'figma',
            url: spec.figmaUrl,
          },
        }
      : {}),
  };
}
