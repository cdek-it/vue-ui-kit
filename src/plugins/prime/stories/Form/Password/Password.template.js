import { ref } from 'vue';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';

export const Template = (args) => ({
  components: { Password },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>
  <span><code>toggleMask</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>default</code></span>
  <Password placeholder="Password" v-bind="args" />
  <Password placeholder="Password" invalid v-bind="args" />
  <Password placeholder="Password" disabled v-bind="args" />
  <Password placeholder="Password" toggleMask v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>value="Password"</code></span>
  <Password placeholder="Password" :model-value="'Password'" v-bind="args" />
  <Password placeholder="Password" :model-value="'Password'" invalid v-bind="args" />
  <Password placeholder="Password" :model-value="'Password'" disabled v-bind="args" />
  <Password placeholder="Password" :model-value="'Password'" toggleMask v-bind="args" />
</div>
`,
});

export const TemplateMeter = (args) => ({
  components: { Password },
  setup() {
    const weak = ref('pass');
    const medium = ref('Pass123');
    const strong = ref('Pass123!@#');
    return { args, weak, medium, strong };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span><code>Weak password</code></span>
    <Password v-model="weak" placeholder="Password" toggleMask v-bind="args" />
  </div>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span><code>Medium password</code></span>
    <Password v-model="medium" placeholder="Password" toggleMask v-bind="args" />
  </div>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <span><code>Strong password</code></span>
    <Password v-model="strong" placeholder="Password" toggleMask v-bind="args" />
  </div>
</div>
`,
});

export const TemplateFloatLabel = (args) => ({
  components: { Password, FloatLabel },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
<FloatLabel variant="in">
  <Password id="password" v-model="value" toggleMask :feedback="false" />
  <label for="password">Password</label>
</FloatLabel>
`,
});

export const TemplateCustom = (args) => ({
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

    return { password, rules, checkRules, getColor, args };
  },
  template: `
<Password placeholder="Password" v-model="password" @input="checkRules" toggleMask v-bind="args">
  <template #footer>
    <div :style="{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }">
      <div v-for="rule in rules" :key="rule.label" :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
        <i class="ti" :class="rule.icon" :style="{ color: getColor(rule.icon) }" />
        <span>{{ rule.label }}</span>
      </div>
    </div>
  </template>
</Password>
`,
});

export const TemplateClearIcon = (args) => ({
  components: { Password },
  setup() {
    const passwordValue = ref('');

    const onClearPassword = () => {
      passwordValue.value = '';
    };

    return { args, passwordValue, onClearPassword };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
  <span><code>Custom Clear (v-show)</code></span>
  <div class="custom-password-wrapper">
    <Password 
      v-model="passwordValue" 
      placeholder="Password" 
      toggleMask 
      :feedback="false"
      v-bind="args"
    />
    <i 
      v-show="passwordValue"
      class="ti ti-x p-icon p-password-clear-icon custom-clear-icon"
      @click="onClearPassword"
    />
  </div>
</div>
`,
});
