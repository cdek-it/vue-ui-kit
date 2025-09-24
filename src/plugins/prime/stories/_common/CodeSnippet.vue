<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import JsonViewer from '@/plugins/prime/stories/_common/JsonViewer.vue';

defineProps({
  code: {
    type: [String, Object],
    required: true,
  },
});
</script>

<template>
  <Accordion>
    <AccordionPanel value="0">
      <AccordionHeader>Items</AccordionHeader>
      <AccordionContent>
        <JsonViewer :code="code"></JsonViewer>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
