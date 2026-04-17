import { ref, computed } from 'vue';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import FloatLabel from 'primevue/floatlabel';

export const BasicTemplate = (args) => ({
  components: { Password },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `
    <Password 
      v-model="value" 
      v-bind="args" 
      style="width: 100%"
      inputStyle="width: 100%"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
    />
  `,
});

export const FloatLabelTemplate = (args) => ({
  components: { Password, FloatLabel },
  setup() {
    const value = ref(null);
    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.label;
      return rest;
    });

    return { args, value, inputProps };
  },
  template: `
    <FloatLabel variant="in">
      <Password 
        id="password_label" 
        v-model="value" 
        v-bind="inputProps" 
        variant="filled"
        style="width: 100%"
        inputStyle="width: 100%"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
      />
      <label for="password_label">{{ args.label || 'Password' }}</label>
    </FloatLabel>
  `,
});

export const CustomContentTemplate = (args) => ({
  components: { Password, Divider },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `
    <Password v-model="value" v-bind="args" style="width: 100%" inputStyle="width: 100%">
      <template #header>
        <div class="font-semibold text-sm mb-2" style="font-size: 0.875rem;">Введите пароль</div>
      </template>
      <template #footer>
        <Divider />
        <ul class="p-password-rules mt-2">
          <li class="p-password-rule">
            <i :class="['ti', !value ? 'ti-circle' : (value.length >= 8 ? 'ti-circle-check' : 'ti-circle-x')]" />
            <span>Минимум 8 символов</span>
          </li>
          <li class="p-password-rule">
            <i :class="['ti', !value ? 'ti-circle' : (/[a-z]/.test(value) ? 'ti-circle-check' : 'ti-circle-x')]" />
            <span>Строчная буква</span>
          </li>
          <li class="p-password-rule">
            <i :class="['ti', !value ? 'ti-circle' : (/[A-Z]/.test(value) ? 'ti-circle-check' : 'ti-circle-x')]" />
            <span>Заглавная буква</span>
          </li>
          <li class="p-password-rule">
            <i :class="['ti', !value ? 'ti-circle' : (/[0-9]/.test(value) ? 'ti-circle-check' : 'ti-circle-x')]" />
            <span>Хотя бы одна цифра</span>
          </li>
          <li class="p-password-rule">
            <i :class="['ti', !value ? 'ti-circle' : (/[^A-Za-z0-9]/.test(value) ? 'ti-circle-check' : 'ti-circle-x')]" />
            <span>Спецсимвол</span>
          </li>
        </ul>
      </template>
    </Password>
  `,
});
