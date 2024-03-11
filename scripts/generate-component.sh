#!/bin/bash

# Название компонента
NAME=$1

NAME_DASH=$(echo $1        \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')

NAME_CDEK="${NAME/Base/"Cdek"}"

cd ./src/components
mkdir ./$NAME_DASH

cd ./$NAME_DASH

# Vue template
touch $NAME.vue
cat > $NAME.vue <<- EOM
<script lang="ts" setup>

</script>

<template>

</template>

<style lang="scss" scoped>

</style>
EOM

# Test template
touch $NAME.test.ts
cat > $NAME.test.ts <<- EOM
import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import $NAME from './$NAME.vue';

interface ExtraMethods {
  setProp: (val: string) => ${NAME}Builder;
}

interface ${NAME}Builder extends ExtraMethods {}

class ${NAME}Builder {
  @builderProp
  prop?: string;

  build() {
    return mount($NAME, {
      props: {
        prop: this.prop,
      },
    });
  }
}

describe('Unit: $NAME', () => {
  test('Should mount', () => {
    const wrapper = new ${NAME}Builder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
});
EOM

# Stories template
touch $NAME.stories.js
cat > $NAME.stories.js <<- EOM
import $NAME from './$NAME.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/$NAME_CDEK',
  component: $NAME,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma]()',
      },
    },
    version: getVersion('0.1.0'),
  },
};

const Template = (args) => ({
  components: { $NAME },
  setup() {
    return { args };
  },
  template: \`
    <$NAME v-bind="args" />
  \`,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<$NAME_CDEK />',
    },
  },
};
EOM

# index template
touch index.ts
cat > index.ts <<- EOM
export { default as $NAME_CDEK } from './$NAME.vue';
EOM

