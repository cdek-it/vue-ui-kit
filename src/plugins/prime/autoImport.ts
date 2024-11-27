import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export type AutoImportOptions = {
  onlyPrime?: boolean;
  componentPrefix?: string;
  directivePrefix?: string;
};

export const getPrimeVueResolver = (options?: AutoImportOptions) => {
  const { componentPrefix, directivePrefix } = options || {};

  return PrimeVueResolver({
    components: {
      prefix: componentPrefix || 'Prime',
    },
    directives: {
      prefix: directivePrefix || 'p',
    },
  });
};

export const getComponentsAutoImportOptions = (options?: AutoImportOptions) => {
  const { onlyPrime, componentPrefix, directivePrefix } = options || {};

  const excludePrefix = `^(?!
    (${componentPrefix || 'Prime'}|${directivePrefix || 'p'}-)).+`;
  const excludeNames = onlyPrime ? [new RegExp(excludePrefix)] : [];

  return {
    excludeNames: excludeNames,
    resolvers: [getPrimeVueResolver(options)],
  };
};
