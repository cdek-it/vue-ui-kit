import { defineAsyncComponent } from 'vue';

export const WarningIcon = defineAsyncComponent(() => import('./warning.svg'));
export const InfoIcon = defineAsyncComponent(() => import('./info.svg'));
export const WifiOffIcon = defineAsyncComponent(() => import('./wifi-off.svg'));
export const CrossIcon = defineAsyncComponent(() => import('./cross.svg'));
export const CheckInCircleIcon = defineAsyncComponent(
  () => import('./check-in-circle.svg')
);
