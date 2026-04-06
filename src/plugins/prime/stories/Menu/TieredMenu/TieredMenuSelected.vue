<script setup>
import { TieredMenu } from 'primevue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';

const { items } = useMenu();
</script>

<template>
  <TieredMenu :model="items" />
</template>
