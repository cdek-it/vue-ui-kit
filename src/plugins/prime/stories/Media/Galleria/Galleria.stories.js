import Galleria from 'primevue/galleria';
import {
  Template,
  TemplateIndicators,
  TemplateThumbnails,
  TemplateCaption,
  TemplateFullScreen,
  TemplateAutoplay,
} from './Galleria.template';

const meta = {
  title: 'Prime/Media/Galleria',
  component: Galleria,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для отображения изображений в виде галереи с поддержкой миниатюр, индикаторов, навигации и полноэкранного режима.',
      },
    },
  },
  argTypes: {
    numVisible: {
      control: { type: 'number' },
      description: 'Количество видимых миниатюр',
      table: {
        category: 'Props',
        defaultValue: { summary: '3' },
        type: { summary: 'number' },
      },
    },
    showItemNavigators: {
      control: 'boolean',
      description: 'Показывать кнопки навигации между изображениями',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showIndicators: {
      control: 'boolean',
      description: 'Показывать индикаторы текущего изображения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showThumbnails: {
      control: 'boolean',
      description: 'Показывать миниатюры изображений',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    circular: {
      control: 'boolean',
      description: 'Циклическая прокрутка изображений',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    autoPlay: {
      control: 'boolean',
      description: 'Автоматическая смена изображений',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    transitionInterval: {
      control: { type: 'number' },
      description: 'Интервал автосмены изображений (мс)',
      table: {
        category: 'Props',
        defaultValue: { summary: '4000' },
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const GalleriaDefault = {
  name: 'Galleria',
  render: Template,
  args: {
    numVisible: 5,
    showItemNavigators: true,
    showIndicators: true,
    showThumbnails: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Galleria
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showIndicators="true"
    :circular="true"
    :pt="ptGalleria"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Indicators = {
  render: TemplateIndicators,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Galleria
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showIndicators="true"
    :circular="true"
    :pt="ptGalleria"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};

export const Thumbnails = {
  render: TemplateThumbnails,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Galleria
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showThumbnails="true"
    :showIndicators="false"
    :circular="true"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
    <template #previousThumbnailButton="slotProps">
      <button class="p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button" type="button" @click="slotProps.onClick">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-prev-icon">
          <path d="M..." fill="currentColor" />
        </svg>
      </button>
    </template>
    <template #nextThumbnailButton="slotProps">
      <button class="p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button" type="button" @click="slotProps.onClick">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-galleria-thumbnail-next-icon">
          <path d="M..." fill="currentColor" />
        </svg>
      </button>
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};

export const Caption = {
  render: TemplateCaption,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Galleria
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showThumbnails="false"
    :showIndicators="true"
    :circular="true"
    :pt="ptGalleria"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #caption="slotProps">
      <div>
        <h4>{{ slotProps.item.title }}</h4>
        <p>{{ slotProps.item.alt }}</p>
      </div>
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};

export const FullScreen = {
  render: TemplateFullScreen,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const visible = ref(false);
</script>

<template>
  <button @click="visible = true">Открыть галерею</button>
  <Galleria
    :value="images"
    :numVisible="5"
    :showItemNavigators="true"
    :showThumbnails="true"
    :fullScreen="true"
    :circular="true"
    :pt="ptGalleria"
    v-model:visible="visible"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};

export const Autoplay = {
  render: TemplateAutoplay,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Galleria
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showIndicators="true"
    :autoPlay="true"
    :transitionInterval="3000"
    :circular="true"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>
</template>
        `,
      },
    },
  },
};
