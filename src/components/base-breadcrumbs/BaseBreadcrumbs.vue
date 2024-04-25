<template>
  <div :class="$style['prefix-breadcrumbs']">
    <slot />
  </div>
</template>

<style lang="scss" scoped module>
.prefix-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 32px;

  &:slotted(> *) {
    @include body-2;

    position: relative;
    color: $Bottom_66;
    text-decoration: none;
    border: none;
    background: none;
    padding-inline: 0;
    cursor: pointer;
    transition: color 0.2s ease;

    @include media-hover {
      text-decoration: none;
      color: $Primary_Active;
    }

    &:active {
      text-decoration: none;
      color: $Primary_Active;
    }

    &:last-child {
      pointer-events: none;
      color: $Primary_Active;

      @include media-hover {
        color: $Primary_Active;
      }
    }

    &:not(:last-child)::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -24px;
      width: 16px;
      height: 16px;
      background-image: url(./svg/chevron-right.svg);
      pointer-events: none;
    }
  }
}
</style>
