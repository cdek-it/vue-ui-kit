<template>
  <div class="cdek-dropdown-box">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.cdek-dropdown-box {
  background: $Peak;
  border-radius: 8px;
  padding: 12px 0;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  outline: none;
  position: absolute;
  margin-top: 4px;
  z-index: 1000;
}
</style>
