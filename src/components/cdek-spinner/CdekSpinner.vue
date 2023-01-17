<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    color?: 'green' | 'white';
    size?: 'small' | 'medium' | 'big' | number;
  }>(),
  { color: 'green', size: 'small' }
);
</script>
