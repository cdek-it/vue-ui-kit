<script setup lang="ts">
import Password from 'primevue/password';
import { ref } from 'vue';

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

const getColor = (icon: string) => {
  switch (icon) {
    case 'ti-circle-check':
      return 'green';
    case 'ti-circle-x':
      return 'red';
    default:
      return 'grey';
  }
};
</script>

<template>
  <Password placeholder="Password" v-model="password" @change="checkRules">
    <template #footer>
      <div class="p-4">
        <div
          v-for="rule in rules"
          :key="rule.label"
          class="flex items-center gap-2"
        >
          <i
            class="ti"
            :class="rule.icon"
            :style="{ color: getColor(rule.icon) }"
          />
          <span>{{ rule.label }}</span>
        </div>
      </div>
    </template>
  </Password>
</template>
