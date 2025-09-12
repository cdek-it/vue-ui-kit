import Tag from 'primevue/tag';

export const Template = (args) => ({
  components: { Tag },
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

        <Tag :severity="item" v-bind="args" class="w-fit"/>
      </template>
    </div>
  `,
});
