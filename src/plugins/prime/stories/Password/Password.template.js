import { ref } from 'vue';
import Password from 'primevue/password';

export const Template = (args) => ({
  components: { Password },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>value="Password"</code></span>
  <span><code>toggleMask</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <Password placeholder="Password" v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" toggleMask v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>invalid</code></span>
  <Password placeholder="Password" invalid v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" invalid v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" toggleMask invalid v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <Password placeholder="Password" disabled v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" disabled v-bind="args" />
  <Password placeholder="Password" :default-value="'Password'" toggleMask disabled v-bind="args" />
</div>
`,
});

const PasswordCustom = {
  components: { Password },
  setup() {
    const password = ref('');

    const rules = ref([
      { label: 'At least 8 characters', regex: /.{8,}/, icon: 'ti-point' },
      {
        label: 'At least one lowercase letter',
        regex: /[a-z]/,
        icon: 'ti-point',
      },
      {
        label: 'At least one uppercase letter',
        regex: /[A-Z]/,
        icon: 'ti-point',
      },
      { label: 'At least one number', regex: /[0-9]/, icon: 'ti-point' },
      {
        label: 'At least one special character',
        regex: /[!@#$%^&*]/,
        icon: 'ti-point',
      },
    ]);

    const checkRules = () => {
      rules.value.forEach((rule) => {
        rule.icon = rule.regex.test(password.value)
          ? 'ti-circle-check'
          : 'ti-circle-x';
      });
    };

    const getColor = (icon) => {
      switch (icon) {
        case 'ti-circle-check':
          return 'green';
        case 'ti-circle-x':
          return 'red';
        default:
          return 'grey';
      }
    };

    return { password, rules, checkRules, getColor };
  },
  template: `
<Password placeholder="Password" v-model="password" @change="checkRules">
  <template #footer>
    <div :style="{ padding: '1rem' }">
      <div v-for="rule in rules" :key="rule.label" :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
        <i class="ti" :class="rule.icon" :style="{ color: getColor(rule.icon) }" />
        <span>{{ rule.label }}</span>
      </div>
    </div>
  </template>
</Password>
`,
};

export const TemplateCustom = (args) => ({
  components: { PasswordCustom },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>value="Password"</code></span>
  <span><code>toggleMask</code></span>

  <PasswordCustom v-bind="args" />
  <PasswordCustom :default-value="'Password'" v-bind="args" />
  <PasswordCustom :default-value="'Password'" toggleMask v-bind="args" />
</div>
`,
});
