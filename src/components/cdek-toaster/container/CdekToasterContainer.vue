<template>
  <div>
    <!--
      <CdekToast v-for="toast in toasterService.messages" message="toast.message" />
    -->
  </div>
</template>

<script lang="ts" setup>
// import { useToasterService } from '../CdekToasterService';

// const toasterService = useToasterService();

const toasterService = {
  messages: [
    {
      text: 'Ошибка',
      type: 'error',
    },
    {
      text: 'Успех',
      type: 'success',
    },
    {
      text: 'Инфа',
      type: 'info',
    },
  ],
};
</script>
