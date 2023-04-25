#!/bin/bash

# Название компонента
NAME=$1

NAME_DASH=$(echo $1        \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')

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
import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import $NAME from './$NAME.vue';

class ${NAME}Builder {
  build() {
    return shallowMount($NAME, {});
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

export default {
  title: 'Ui kit/$NAME',
  component: $NAME,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma]()',
      },
    },
    version: {
      major: '0',
      minor: '0',
      patch: '1',
    },
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
      code: '<$NAME />',
    },
  },
};
EOM

# index template
touch index.ts
cat > index.ts <<- EOM
export { default as $NAME } from './$NAME.vue';
EOM