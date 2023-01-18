<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    color?: 'green' | 'white' | string;
    /**
     * small - 24, medium - 32, big - 48
     */
    size?: 'small' | 'medium' | 'big' | number;
  }>(),
  { color: 'green', size: 'small' }
);

const SIZES: any = {
  small: 24,
  medium: 32,
  big: 48,
};

const sizeFinal = computed(() => {
  return SIZES[props.size] || props.size;
});

const COLORS: any = {
  green: '#1AB248',
  white: '#FFFFFF',
};

const currentColor = computed(() => {
  return COLORS[props.color] || props.color;
});
</script>

<template>
  <svg
    :width="sizeFinal"
    :height="sizeFinal"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient
        id="paint0_angular_102_1932"
        cx="24"
        cy="0"
        r="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.177083" :stop-color="currentColor" stop-opacity="0.5" />
        <stop offset="1" :stop-color="currentColor" stop-opacity="0" />
      </radialGradient>
    </defs>
    <circle
      cx="24"
      cy="24"
      r="23"
      :stroke="currentColor"
      stroke-opacity="0.1"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48V46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2V0Z"
      fill="url(#paint0_angular_102_1932)"
    />
    <circle cx="24" cy="1" r="1" :fill="currentColor" />
    <animateTransform
      from="0 0 0"
      to="360 0 0"
      attributeName="transform"
      type="rotate"
      repeatCount="indefinite"
      dur="1300ms"
    />
  </svg>
</template>
