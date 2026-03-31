import InputText from 'primevue/inputtext';
import PrimeFloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { ref, computed } from 'vue';
import { Template } from './InputText.template';

/**
 * Компонент текстового ввода.
 */
const meta = {
  title: 'Prime/Form/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер поля ввода',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Отображает иконку очистки содержимого поля',
      table: { category: 'Custom' },
    },
    invalid: {
      control: 'boolean',
      description: 'Флаг невалидности поля (меняет цвет границ)',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность ввода в поле',
      table: { category: 'Props' },
    },
    readonly: {
      control: 'boolean',
      description: 'Переводит поле в режим [только чтение]',
      table: { category: 'Props' },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки внутри поля',
      table: { category: 'Props' },
    },
    label: {
      control: 'text',
      description: 'Текст плавающего лейбла',
      table: { category: 'Custom' },
    },
  },
  args: {
    size: 'medium',
    placeholder: 'Placeholder...',
    invalid: false,
    disabled: false,
    readonly: false,
    showClear: true,
    label: 'In Label',
  },
};

export default meta;

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
};

export const FloatLabel = {
  args: {
    size: 'large',
    placeholder: undefined,
  },
  render: (args) => ({
    components: { InputText, PrimeFloatLabel, IconField, InputIcon },
    setup() {
      const value = ref('');
      const onClickClear = () => {
        value.value = '';
      };

      // Отфильтровываем наши кастомные пропсы для стори, чтобы они не попали в InputText
      const inputProps = computed(() => {
        const rest = { ...args };
        delete rest.label;
        delete rest.showClear;
        return rest;
      });

      return { args, value, onClickClear, inputProps };
    },
    template: `
      <PrimeFloatLabel variant="in">
        <IconField v-if="args.showClear" style="width: 100%">
            <InputText 
              id="in_label" 
              v-model="value" 
              v-bind="inputProps" 
              variant="filled"
              style="width: 100%" 
            />
            <InputIcon v-if="value" @click.stop="onClickClear" style="cursor: pointer; z-index: 1">
                <i class="ti ti-x" />
            </InputIcon>
        </IconField>
        <InputText 
          v-else 
          id="in_label" 
          v-model="value" 
          v-bind="inputProps" 
          variant="filled"
          style="width: 100%" 
        />
        <label for="in_label">{{ args.label }}</label>
      </PrimeFloatLabel>
    `,
  }),
  argTypes: {
    size: { table: { disable: true } },
  },
};
