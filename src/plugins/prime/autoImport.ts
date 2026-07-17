import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export type AutoImportOptions = {
  onlyPrime?: boolean;
};

const PRIME_COMPONENT_PREFIX = 'Prime';
const PRIME_DIRECTIVE_PREFIX = 'p';

export const getPrimeVueResolver = () => {
  return PrimeVueResolver({
    components: {
      prefix: PRIME_COMPONENT_PREFIX,
    },
    directives: {
      prefix: PRIME_DIRECTIVE_PREFIX,
    },
  });
};

export const getComponentsAutoImportOptions = (options?: AutoImportOptions) => {
  const { onlyPrime } = options || {};

  const excludePrefix = `^(?!
    (${PRIME_COMPONENT_PREFIX}|${PRIME_DIRECTIVE_PREFIX}-)).+`;
  const excludeNames = onlyPrime ? [new RegExp(excludePrefix)] : [];

  return {
    excludeNames: excludeNames,
    resolvers: [getPrimeVueResolver()],
  };
};
