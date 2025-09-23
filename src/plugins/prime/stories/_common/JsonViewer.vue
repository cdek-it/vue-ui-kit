<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  code: {
    type: [String, Object, Array],
    required: true,
  },
});

const formatted = computed(() => {
  return typeof props.code === 'string'
    ? props.code
    : JSON.stringify(props.code, null, 2);
});
</script>

<template>
  <pre><code class="json" v-html="formatted"></code></pre>
</template>

<style>
pre {
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  color: #fff;
}

code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
}
</style>
