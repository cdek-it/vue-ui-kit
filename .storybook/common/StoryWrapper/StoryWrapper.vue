<script lang="ts" setup>
import Button from 'primevue/button';


const emit = defineEmits<{
  (e: 'toggled'): void;
}>();
const toggleTheme = () => {
  emit('toggled')
};


</script>

<template>
  <div class="story">
    <Button class="story__button" @click="toggleTheme" label="Сменить тему"/>

    <div class="story__component">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.sb-show-main.sb-main-padded {
  padding: 0;
}
</style>

<style lang="scss" scoped>
.story {
  &__button {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:deep(path) {
      fill: #fff;
    }
  }

  &__component {
    border-top: 1px solid #000;
    padding-top: 20px;
  }
}
</style>
