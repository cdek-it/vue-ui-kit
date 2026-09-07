import Accordion from 'primevue/accordion';
import {
  Template,
  TemplateMultiple,
  TemplateDisabled,
} from './Accordion.template';

const meta = {
  title: 'Prime/Panel/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Группирует контент в раскрывающиеся панели. \n\n \`\`\`js \n import Accordion from 'primevue/accordion'; \n import AccordionPanel from 'primevue/accordionpanel'; \n import AccordionHeader from 'primevue/accordionheader'; \n import AccordionContent from 'primevue/accordioncontent'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-accordion' },
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Позволяет открывать несколько панелей одновременно',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    lazy: {
      control: 'boolean',
      description:
        'Ленивый рендеринг — контент панели создаётся только при первом открытии',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const AccordionDefault = {
  name: 'Accordion',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>

<template>
  <Accordion value="0">
    <AccordionPanel value="0">
      <AccordionHeader>
        <div>
          <i class="ti ti-user" />
          <span>Header I</span>
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">Содержимое первой панели.</p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
      <AccordionHeader>
        <div>
          <i class="ti ti-settings" />
          <span>Header II</span>
        </div>
      </AccordionHeader>
      <AccordionContent>
        <p class="m-0">Содержимое второй панели.</p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Multiple = {
  render: TemplateMultiple,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Accordion :value="['0']" multiple>
    <AccordionPanel value="0">
      <AccordionHeader>
        <div><i class="ti ti-user" /><span>Header I</span></div>
      </AccordionHeader>
      <AccordionContent><p class="m-0">Содержимое первой панели.</p></AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
      <AccordionHeader>
        <div><i class="ti ti-settings" /><span>Header II</span></div>
      </AccordionHeader>
      <AccordionContent><p class="m-0">Содержимое второй панели.</p></AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
        `,
      },
    },
  },
};

export const Disabled = {
  render: TemplateDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Accordion value="0">
    <AccordionPanel value="0">
      <AccordionHeader>
        <div><i class="ti ti-user" /><span>Header I</span></div>
      </AccordionHeader>
      <AccordionContent><p class="m-0">Содержимое первой панели.</p></AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1" disabled>
      <AccordionHeader>
        <div><i class="ti ti-settings" /><span>Header II</span></div>
      </AccordionHeader>
      <AccordionContent><p class="m-0">Этот раздел недоступен.</p></AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
        `,
      },
    },
  },
};
