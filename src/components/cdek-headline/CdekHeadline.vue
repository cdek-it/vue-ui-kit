<script lang="ts" setup>
import { computed } from 'vue';

type Size = '1' | '2' | '3' | '4' | '5' | '6' | '7';

const props = withDefaults(
  defineProps<{
    size?: Size;
    smSize?: Size;
    mdSize?: Size;
    lgSize?: Size;
    xlSize?: Size;
    xxlSize?: Size;
  }>(),
  { size: '1' }
);

const classes = computed(() => {
  const classes = [];

  if (props.size) {
    classes.push(`headline-${props.size}`);
  }

  if (props.smSize) {
    classes.push(`headline-sm-${props.smSize}`);
  }

  if (props.mdSize) {
    classes.push(`headline-md-${props.mdSize}`);
  }

  if (props.lgSize) {
    classes.push(`headline-lg-${props.lgSize}`);
  }

  if (props.xlSize) {
    classes.push(`headline-xl-${props.xlSize}`);
  }

  if (props.xxlSize) {
    classes.push(`headline-xxl-${props.xxlSize}`);
  }

  return classes;
});

const tag = computed(() => {
  if (
    props.smSize ||
    props.mdSize ||
    props.lgSize ||
    props.xlSize ||
    props.xxlSize
  ) {
    return 'div';
  }

  return `h${props.size}`;
});
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@mixin headliner($size) {
  @if ($size == 1) {
    @include headline-1;
  } @else if($size == 2) {
    @include headline-2;
  } @else if($size == 3) {
    @include headline-3;
  } @else if($size == 4) {
    @include headline-4;
  } @else if($size == 5) {
    @include headline-5;
  } @else if($size == 6) {
    @include headline-6;
  } @else if($size == 7) {
    @include headline-6;
  }
}

.headline {
  @for $i from 1 through 7 {
    &-#{$i} {
      @include headliner($i);
    }
  }

  @include media-min-sm {
    @for $i from 1 through 7 {
      &-sm-#{$i} {
        @include headliner($i);
      }
    }
  }

  @include media-min-md {
    @for $i from 1 through 7 {
      &-md-#{$i} {
        @include headliner($i);
      }
    }
  }

  @include media-min-lg {
    @for $i from 1 through 7 {
      &-lg-#{$i} {
        @include headliner($i);
      }
    }
  }

  @include media-min-xl {
    @for $i from 1 through 7 {
      &-xl-#{$i} {
        @include headliner($i);
      }
    }
  }

  @include media-min-xxl {
    @for $i from 1 through 7 {
      &-xxl-#{$i} {
        @include headliner($i);
      }
    }
  }
}
</style>
