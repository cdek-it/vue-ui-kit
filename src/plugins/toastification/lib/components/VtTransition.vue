<template>
  <transition-group
    tag="div"
    :enter-active-class="`${transition}-enter-active`"
    :move-class="`${transition}-move`"
    :leave-active-class="`${transition}-leave-active`"
  >
    <slot></slot>
  </transition-group>
</template>
<script lang="ts" setup>
import PROPS from '../ts/propValidators';

defineProps(PROPS.TRANSITION);
</script>
