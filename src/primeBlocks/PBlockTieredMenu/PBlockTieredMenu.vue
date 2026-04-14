<script setup lang="ts">
import { TieredMenu } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';

defineProps<{
  model: MenuItem[];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TieredMenu :model="model" v-bind="$attrs" />
</template>
