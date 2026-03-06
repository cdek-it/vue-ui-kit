import Badge from 'primevue/badge';

export const Template = (args) => ({
  components: { Badge },
  setup() {
    const severity = [
      'primary',
      'secondary',
      'success',
      'info',
      'warn',
      'danger',
    ];
    return { args, severity };
  },
  template: `
    <div class="grid grid-cols-2 gap-4">
      <template v-for="(item, index) in severity" :key="index">
        <span>
        {{ item }}
        </span>

        <Badge :severity="item" v-bind="args" class="w-fit"/>
      </template>
    </div>
  `,
});

export const SizeTemplate = (args) => ({
  components: { Badge },
  setup() {
    const sizes = [
      { size: null, label: 'Base' },
      { size: 'large', label: 'Large' },
      { size: 'xlarge', label: 'XLarge' },
    ];
    return { args, sizes };
  },
  template: `
    <div class="flex flex-col gap-6">
      <template v-for="(sizeItem, index) in sizes" :key="index">
        <div>
          <h3 class="mb-3 font-semibold">{{ sizeItem.label }}</h3>
          <div class="flex gap-4 items-center flex-wrap">
            <Badge value="Badge" severity="primary" :size="sizeItem.size" />
            <Badge value="Badge" severity="info" :size="sizeItem.size" />
            <Badge value="Badge" severity="success" :size="sizeItem.size" />
            <Badge value="Badge" severity="warn" :size="sizeItem.size" />
            <Badge value="Badge" severity="danger" :size="sizeItem.size" />
          </div>
        </div>
      </template>
    </div>
  `,
});

export const DotTemplate = (args) => ({
  components: { Badge },
  setup() {
    const severity = ['primary', 'success', 'info', 'warn', 'danger'];
    const sizes = [
      { size: null, label: 'Base' },
      { size: 'large', label: 'Large' },
      { size: 'xlarge', label: 'XLarge' },
    ];
    return { args, severity, sizes };
  },
  template: `
    <div class="flex flex-col gap-6">
      <template v-for="(sizeItem, index) in sizes" :key="index">
        <div>
          <h3 class="mb-3 font-semibold">{{ sizeItem.label }}</h3>
          <div class="flex gap-4 items-center">
            <Badge v-for="item in severity" :key="item" :severity="item" :size="sizeItem.size" />
          </div>
        </div>
      </template>
    </div>
  `,
});
