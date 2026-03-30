import { AutoComplete, FloatLabel } from 'primevue';
import { ref } from 'vue';

const allCities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Berlin', code: 'BE' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Tokyo', code: 'TYO' },
];

const sizeToClass = (size) => {
  if (size === 'small') {
    return 'p-inputtext-sm p-inputfield-sm';
  }
  if (size === 'large') {
    return 'p-inputtext-lg p-inputfield-lg';
  }
  if (size === 'xlarge') {
    return 'p-inputtext-xlg p-inputfield-xlg';
  }
  return '';
};
const sizeToProps = (size) =>
  size === 'small' || size === 'large' ? size : null;

export const BasicTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);

    const search = (event) => {
      suggestions.value = event.query
        ? allCities.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          )
        : allCities;
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `<AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" placeholder="Search..." v-bind="args" :size="sizeToProps(args.size)" :inputClass="sizeToClass(args.size)" />`,
});

export const MultipleTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref([]);
    const suggestions = ref([]);

    const search = (event) => {
      suggestions.value = event.query
        ? allCities.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          )
        : allCities;
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `<AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" multiple @complete="search" placeholder="Search..." v-bind="args" :size="sizeToProps(args.size)" :pt="{ inputmultiple: { class: sizeToClass(args.size) } }" />`,
});

export const GroupedTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);
    const groupedCities = [
      {
        label: 'Germany',
        items: [
          { name: 'Berlin', code: 'BE' },
          { name: 'Frankfurt', code: 'FR' },
          { name: 'Hamburg', code: 'HA' },
        ],
      },
      {
        label: 'USA',
        items: [
          { name: 'Chicago', code: 'CH' },
          { name: 'Los Angeles', code: 'LA' },
          { name: 'New York', code: 'NY' },
        ],
      },
    ];

    const search = (event) => {
      if (!event.query) {
        suggestions.value = groupedCities;
        return;
      }
      suggestions.value = groupedCities
        .map((group) => ({
          ...group,
          items: group.items.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          ),
        }))
        .filter((group) => group.items.length > 0);
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `
    <AutoComplete
      v-model="value"
      :suggestions="suggestions"
      optionLabel="name"
      optionGroupLabel="label"
      optionGroupChildren="items"
      @complete="search"
      placeholder="Search..."
      v-bind="args"
      :size="sizeToProps(args.size)"
      :inputClass="sizeToClass(args.size)"
    >
      <template #optiongroup="slotProps">
        <div class="flex items-center gap-2">
          <i class="ti ti-flag" />
          <span>{{ slotProps.option.label }}</span>
        </div>
      </template>
    </AutoComplete>
  `,
});

export const CustomTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);

    const search = (event) => {
      suggestions.value = event.query
        ? allCities.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          )
        : allCities;
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `
    <AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" placeholder="Search..." v-bind="args" :size="sizeToProps(args.size)" :inputClass="sizeToClass(args.size)">
      <template #option="slotProps">
        <div class="flex items-center gap-2">
          <i class="ti ti-map-pin" />
          <span>{{ slotProps.option.name }}</span>
          <small style="margin-left: auto; opacity: 0.6;">{{ slotProps.option.code }}</small>
        </div>
      </template>
    </AutoComplete>
  `,
});

export const DropdownTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);

    const search = (event) => {
      suggestions.value = event.query
        ? allCities.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          )
        : allCities;
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `<AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" dropdown @complete="search" placeholder="Search..." v-bind="args" :size="sizeToProps(args.size)" :inputClass="sizeToClass(args.size)" />`,
});

export const DisabledTemplate = (args) => ({
  components: { AutoComplete },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);

    return { args, value, suggestions, sizeToClass, sizeToProps };
  },
  template: `<AutoComplete v-model="value" :suggestions="suggestions" optionLabel="name" disabled placeholder="Search..." v-bind="args" :size="sizeToProps(args.size)" :inputClass="sizeToClass(args.size)" />`,
});

export const FloatLabelTemplate = (args) => ({
  components: { AutoComplete, FloatLabel },
  setup() {
    const value = ref(null);
    const suggestions = ref([]);

    const search = (event) => {
      suggestions.value = event.query
        ? allCities.filter((c) =>
            c.name.toLowerCase().startsWith(event.query.toLowerCase())
          )
        : allCities;
    };

    return { args, value, suggestions, search, sizeToClass, sizeToProps };
  },
  template: `
    <FloatLabel variant="in">
      <AutoComplete id="in_label" v-model="value" :suggestions="suggestions" optionLabel="name" @complete="search" v-bind="args" :size="sizeToProps(args.size)" :inputClass="sizeToClass(args.size)" />
      <label for="in_label">In Label</label>
    </FloatLabel>
  `,
});
