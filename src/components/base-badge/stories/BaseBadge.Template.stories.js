import BaseBadge from '../BaseBadge.vue';
import EyeIcon from '../svg/eye.svg?component';

export default {
  title: 'Components/Badge/Template',
  component: BaseBadge,
  parameters: {
    docs: {
      description: {
        component: 'Бейджи поддерживают кастомное содержимое через слоты для гибкой настройки.',
      },
    },
  },
};

export const Slot = () => ({
  components: { BaseBadge },
  template: `
    <BaseBadge>
      <span>Status</span>
    </BaseBadge>
  `,
});
Slot.parameters = {
  docs: {
    description: {
      story: 'Использование слота для кастомного текста.',
    },
    source: {
      code: `
<CdekBadge>
  <span>Status</span>
</CdekBadge>`,
    },
  },
};

export const IconSlot = () => ({
  components: { BaseBadge, EyeIcon },
  template: `
    <BaseBadge>
      <EyeIcon />
    </BaseBadge>
  `,
});
IconSlot.parameters = {
  docs: {
    description: {
      story: 'Использование слота для отображения иконки в бейдже.',
    },
    source: {
      code: `
<CdekBadge>
  <EyeIcon /> 
</CdekBadge>`,
    },
  },
};
