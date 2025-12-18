<script setup lang="ts">
// Компоненты PrimeVue, стилизованные темой 3.0
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue';

// Локальное состояние формы авторизации
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// Событие отправки формы, чтобы блок можно было переиспользовать
const emit = defineEmits<{
  (
    e: 'submit',
    payload: { email: string; password: string; rememberMe: boolean },
  ): void;
}>();

// Обработчик сабмита — эмитим данные наружу
const onSubmit = () => {
  emit('submit', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
};
</script>

<template>
  <!-- Внешний контейнер, центрирует карточку по экрану -->
  <div class="min-h-screen flex items-center justify-center bg-surface-50">
    <!-- Карточка авторизации -->
    <Card class="w-full max-w-md shadow-md">
      <template #title>
        <div class="flex flex-col gap-1">
          <h1 class="text-xl font-semibold text-surface-900">
            Sign in
          </h1>
          <p class="text-sm text-surface-500">
            Use your work email to access your account.
          </p>
        </div>
      </template>

      <template #content>
        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <!-- Кнопка авторизации через Google -->
          <Button
            type="button"
            class="w-full"
            severity="secondary"
            outlined
          >
            <span class="flex items-center justify-center gap-2">
              <i class="ti ti-brand-google text-base" />
              <span>Continue with Google</span>
            </span>
          </Button>

          <!-- Разделитель с текстом "or" -->
          <div class="flex items-center gap-3 text-xs text-surface-400">
            <div class="flex-1 h-px bg-surface-200" />
            <span class="uppercase tracking-wide">or</span>
            <div class="flex-1 h-px bg-surface-200" />
          </div>

          <!-- Поле Email -->
          <div class="flex flex-col gap-1 text-sm">
            <label class="font-medium text-surface-700">
              Email
            </label>
            <InputText
              v-model="email"
              type="email"
              placeholder="you@company.com"
              class="w-full"
            />
          </div>

          <!-- Поле Password -->
          <div class="flex flex-col gap-1 text-sm">
            <label class="flex items-center justify-between text-surface-700">
              <span class="font-medium">Password</span>
              <button
                type="button"
                class="text-xs text-primary hover:underline"
              >
                Forgot password?
              </button>
            </label>

            <Password
              v-model="password"
              :feedback="false"
              toggleMask
              inputClass="w-full"
              class="w-full"
              placeholder="Enter your password"
            />
          </div>

          <!-- Запомнить меня -->
          <div class="flex items-center justify-between text-xs text-surface-600">
            <label class="inline-flex items-center gap-2 cursor-pointer">
              <Checkbox v-model="rememberMe" binary />
              <span>Remember me</span>
            </label>
          </div>

          <!-- Кнопка отправки формы -->
          <Button
            type="submit"
            class="w-full"
            label="Sign in"
          />

          <!-- Текст под формой, как в design system -->
          <p class="mt-1 text-[11px] leading-snug text-center text-surface-500">
            By continuing you agree to our
            <a href="#" class="underline">Terms</a>
            and
            <a href="#" class="underline">Privacy Policy</a>.
          </p>
        </form>
      </template>
    </Card>
  </div>
</template>


