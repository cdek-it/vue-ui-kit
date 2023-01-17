<template>
  <div>Тестовый базовый компонент</div>
  <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style lang="scss">
h1 {
  @include headline-1;
}
</style>
