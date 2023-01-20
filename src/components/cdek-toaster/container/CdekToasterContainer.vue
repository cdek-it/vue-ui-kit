<template>
  <div class="toaster-container">
    <!--
      <CdekToast v-for="toast in toasterService.messages" message="toast.message" />
    -->
  </div>
</template>

<script lang="ts" setup>
// import { useToasterService } from '../CdekToasterService';

import { CheckInCircleIcon, InfoIcon, WarningIcon } from '../toast/svg';

// const toasterService = useToasterService();

const toasterService = {
  messages: [
    {
      content: {
        title: 'Просто информация',
        text: 'С текстом',
      },
      icon: InfoIcon,
      type: 'info',
      button: {
        text: 'CLICK',
        action: () => console.log('CLICK'),
      },
    },
    {
      content: {
        title: 'Успех',
        text: 'Все получилось',
      },
      icon: CheckInCircleIcon,
      type: 'success',
      button: {
        text: 'CLICK',
        action: () => console.log('CLICK'),
      },
    },
    {
      content: {
        title: 'Ошибка',
        text: 'Ничего не получилось',
      },
      icon: WarningIcon,
      type: 'info',
    },
  ],
};
</script>

<style lang="scss" scoped>
.toaster-container {
  display: flex;
  gap: 15px;
  flex-direction: column;
}
</style>
