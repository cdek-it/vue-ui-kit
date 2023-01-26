<template>
  <span class="cdek-link"><slot /></span>
</template>

<style lang="scss" scoped>
.cdek-link {
  @include body-1;

  color: $Primary;

  :slotted(a) {
    color: inherit;
  }

  :slotted(button) {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    background: transparent;
    border: unset;
    cursor: pointer;
    text-decoration: underline;
    padding: unset;
  }
}
</style>
