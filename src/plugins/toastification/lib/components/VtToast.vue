<template>
  <div
    :class="classes"
    @click="clickHandler"
    @mouseenter="hoverPause"
    @mouseleave="hoverPlay"
  >
    <div :role="accessibility.toastRole || 'alert'" :class="bodyClasses">
      <template v-if="typeof content === 'string'">{{ content }}</template>
      <component
        :is="getVueComponentFromObj(content)"
        v-else
        :toast-id="id"
        v-bind="hasProp(content, 'props') ? content.props : {}"
        v-on="hasProp(content, 'listeners') ? content.listeners : {}"
        @closeToast="closeToast"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { EVENTS, VT_NAMESPACE } from '../ts/constants';
import PROPS from '../ts/propValidators';
import {
  getVueComponentFromObj,
  hasProp,
  isDOMRect,
  isString,
} from '../ts/utils';

export default defineComponent({
  name: 'VtToast',
  inheritAttrs: false,

  props: Object.assign({}, PROPS.CORE_TOAST, PROPS.TOAST),

  data() {
    const data: {
      dragRect: DOMRect | Record<string, unknown>;
      isRunning: boolean;
      disableTransitions: boolean;
      beingDragged: boolean;
      dragStart: number;
      dragPos: { x: number; y: number };
    } = {
      isRunning: true,
      disableTransitions: false,

      beingDragged: false,
      dragStart: 0,
      dragPos: { x: 0, y: 0 },
      dragRect: {},
    };
    return data;
  },

  computed: {
    classes(): string[] {
      const classes = [
        `${VT_NAMESPACE}__toast`,
        `${VT_NAMESPACE}__toast--${this.type}`,
        `${this.position}`,
      ].concat(this.toastClassName);
      if (this.disableTransitions) {
        classes.push('disable-transition');
      }
      if (this.rtl) {
        classes.push(`${VT_NAMESPACE}__toast--rtl`);
      }

      return classes;
    },
    bodyClasses(): string[] {
      return [
        `${VT_NAMESPACE}__toast-${
          isString(this.content) ? 'body' : 'component-body'
        }`,
      ].concat(this.bodyClassName);
    },
  },

  mounted() {
    if (this.pauseOnFocusLoss) {
      this.focusSetup();
    }
  },
  beforeUnmount() {
    if (this.pauseOnFocusLoss) {
      this.focusCleanup();
    }
  },

  methods: {
    hasProp,
    getVueComponentFromObj,
    closeToast() {
      this.eventBus.emit(EVENTS.DISMISS, this.id);
    },
    clickHandler() {
      if (this.onClick) {
        this.onClick(this.closeToast);
      }
      if (this.closeOnClick) {
        if (!this.beingDragged || this.dragStart === this.dragPos.x) {
          this.closeToast();
        }
      }
    },
    timeoutHandler() {
      this.closeToast();
    },
    hoverPause() {
      if (this.pauseOnHover) {
        this.isRunning = false;
      }
    },
    hoverPlay() {
      if (this.pauseOnHover) {
        this.isRunning = true;
      }
    },
    focusPause() {
      this.isRunning = false;
    },
    focusPlay() {
      this.isRunning = true;
    },

    focusSetup() {
      addEventListener('blur', this.focusPause);
      addEventListener('focus', this.focusPlay);
    },
    focusCleanup() {
      removeEventListener('blur', this.focusPause);
      removeEventListener('focus', this.focusPlay);
    },
  },
});
</script>
