<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
  }>(),
  { size: '1' }
);
</script>

<template>
  <h1 v-if="size === '1'" class="headline-1"><slot /></h1>
  <div v-else :class="`headline-${size}`"><slot /></div>
</template>

<style lang="scss" scoped>
.headline-1 {
  @include headline-1;

  @include media-xs {
    font-size: 24px;
    line-height: 32px;
  }
}
.headline-2 {
  @include headline-2;
}
.headline-3 {
  @include headline-3;
}
.headline-4 {
  @include headline-4;
}
.headline-5 {
  @include headline-5;
}
.headline-6 {
  @include headline-6;
}
.headline-7 {
  @include headline-7;
}
</style>
