import {
  BasicTemplate,
  WithIconTemplate,
  CustomTemplate,
  WithItemAsTemplate,
  WithSlotsTemplate,
  WithItemIconSlotTemplate,
  WithSubmenuIconSlotTemplate,
  WithSubmenuIconActiveStateTemplate,
  WithButtonSlotTemplate,
  WithButtonIconSlotTemplate,
} from './MenuBar.template';

const DOC_ITEMS_NESTED = `[
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      {
        label: 'Core',
        icon: 'ti ti-cpu',
        items: [
          { label: 'API', icon: 'ti ti-braces' },
          { label: 'CLI', icon: 'ti ti-terminal-2' },
        ],
      },
      { label: 'UI Kit', icon: 'ti ti-palette' },
    ],
  },
  { label: 'Settings', icon: 'ti ti-settings' },
]`;

const DOC_ITEMS_FLAT = `[
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      { label: 'Core', icon: 'ti ti-cpu' },
      { label: 'UI Kit', icon: 'ti ti-palette' },
    ],
  },
  { label: 'Settings', icon: 'ti ti-settings' },
]`;

export default {
  title: 'Prime/Menu/MenuBar',
  parameters: {
    docs: {
      description: {
        component:
          'Горизонтальная навигационная панель с поддержкой вложенных выпадающих подменю.',
      },
      story: { height: '300px' },
    },
    designTokens: { prefix: '--p-menubar' },
  },
};

export const Basic = {
  render: BasicTemplate,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref([
  { label: 'Features' },
  {
    label: 'Projects',
    items: [
      { label: 'Components' },
      { label: 'Blocks' },
      { label: 'UI Kit' },
      {
        label: 'Templates',
        items: [{ label: 'Apollo' }, { label: 'Ultima' }],
      },
    ],
  },
  {
    icon: 'ti ti-user',
    label: 'Contact',
    disabled: true,
  },
]);
</script>
        `,
      },
    },
  },
};

export const WithIcon = {
  render: WithIconTemplate,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref([
  { label: 'Home', icon: 'ti ti-home' },
  {
    label: 'Features',
    icon: 'ti ti-star',
    items: [
      { label: 'Core', icon: 'ti ti-cpu' },
      { label: 'Blocks', icon: 'ti ti-layout-grid' },
      { label: 'UI Kit', icon: 'ti ti-palette' },
      {
        label: 'Templates',
        icon: 'ti ti-template',
        items: [
          { label: 'Apollo', icon: 'ti ti-rocket' },
          { label: 'Ultima', icon: 'ti ti-diamond' },
        ],
      },
    ],
  },
  {
    label: 'Projects',
    icon: 'ti ti-folder',
    items: [
      { label: 'Active', icon: 'ti ti-circle-check' },
      { label: 'Archived', icon: 'ti ti-archive' },
    ],
  },
  { label: 'Settings', icon: 'ti ti-settings' },
]);
</script>
        `,
      },
    },
  },
};

export const Custom = {
  render: CustomTemplate,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref([
  {
    label: 'Home',
    icon: 'ti ti-home',
    description: 'Перейти на главную',
  },
  {
    label: 'Features',
    icon: 'ti ti-star',
    description: 'Explore features',
    badge: 'New',
    items: [
      { label: 'Core', icon: 'ti ti-cpu', description: 'Основные возможности' },
      { label: 'UI Kit', icon: 'ti ti-palette', description: 'UI компоненты' },
    ],
  },
  {
    label: 'Settings',
    icon: 'ti ti-settings',
    description: 'Настройки приложения',
  },
]);
</script>
        `,
      },
    },
  },
};

export const WithItemAs = {
  render: WithItemAsTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Menubar с кастомным тегом/компонентом для пунктов меню через проп `itemAs`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items" item-as="button" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_NESTED});
</script>
        `,
      },
    },
  },
};

export const WithSlots = {
  render: WithSlotsTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Menubar с использованием слотов `start`, `submenuicon` и `end`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #start>
      <span class="ti ti-brand-vue" style="font-size: 1.5rem; margin-right: 0.5rem;" />
    </template>
    <template #submenuicon>
      <span class="ti ti-chevron-down" style="font-size: 0.75rem;" />
    </template>
    <template #end>
      <button class="p-button p-button-text p-button-sm">Logout</button>
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_NESTED});
</script>
        `,
      },
    },
  },
};

export const WithItemIconSlot = {
  render: WithItemIconSlotTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Кастомный рендер иконки пункта меню через слот `itemicon`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #itemicon="{ item }">
      <span v-if="item.icon" :class="item.icon" class="text-violet-600" />
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_NESTED});
</script>
        `,
      },
    },
  },
};

export const WithSubmenuIconSlot = {
  render: WithSubmenuIconSlotTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Кастомный рендер иконки подменю через слот `submenuicon`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #submenuicon="{ root }">
      <span :class="root ? 'ti ti-caret-down-filled text-emerald-500' : 'ti ti-caret-right-filled text-emerald-500'" />
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_NESTED});
</script>
        `,
      },
    },
  },
};

export const WithSubmenuIconActiveState = {
  render: WithSubmenuIconActiveStateTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Иконка подменю с визуальной реакцией на активный пункт через `data-p-active`. Откройте `Features → Core`, чтобы увидеть nested-состояние.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #submenuicon="{ root }">
      <span
        :class="[
          root ? 'ti ti-chevron-down' : 'ti ti-chevron-right',
          'text-emerald-500 transition-transform duration-200',
          '[li[data-p-active=true]_&]:rotate-180',
        ]"
      />
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_NESTED});
</script>
        `,
      },
    },
  },
};

export const WithButtonSlot = {
  render: WithButtonSlotTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Кастомная кнопка раскрытия мобильного меню через слот `button`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #button="{ toggleCallback }">
      <button class="p-button p-button-text p-button-sm" type="button" @click="toggleCallback">
        <span class="ti ti-menu-2" style="margin-right: 0.25rem;" />
        Menu
      </button>
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_FLAT});
</script>
        `,
      },
    },
  },
};

export const WithButtonIconSlot = {
  render: WithButtonIconSlotTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Кастомная иконка кнопки раскрытия через слот `buttonicon`.',
      },
      source: {
        language: 'html',
        code: `
<template>
  <PBlockMenubar :model="items">
    <template #buttonicon>
      <span class="ti ti-layout-sidebar-right-collapse text-sky-500" />
    </template>
  </PBlockMenubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PBlockMenubar } from '@cdek-it/vue-ui-kit';

const items = ref(${DOC_ITEMS_FLAT});
</script>
        `,
      },
    },
  },
};
