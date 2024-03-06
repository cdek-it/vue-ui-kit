<template>
  <!-- TODO: Проверить, как просто текст выглядит -->
  <span class="cdek-link"><slot /></span>
</template>

<style lang="scss" scoped>
.cdek-link {
  @include body-1;

  color: $Primary_Active;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;

  @include media-xs {
    @include body-2;
  }

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
    cursor: inherit;
    text-decoration: inherit;
    padding: unset;
    text-align: left;
  }
}
</style>
