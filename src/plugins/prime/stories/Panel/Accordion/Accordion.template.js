import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const PANELS = [
  {
    value: '0',
    header: 'Header I',
    icon: 'ti ti-user',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    value: '1',
    header: 'Header II',
    icon: 'ti ti-settings',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    value: '2',
    header: 'Header III',
    icon: 'ti ti-bell',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  },
];

export const Template = (args) => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  setup() {
    return { args, panels: PANELS };
  },
  template: `
    <Accordion value="0" style="max-width: 600px" v-bind="args">
      <AccordionPanel v-for="panel in panels" :key="panel.value" :value="panel.value">
        <AccordionHeader>
          <div>
            <i :class="panel.icon" />
            <span>{{ panel.header }}</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">{{ panel.content }}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  `,
});

export const TemplateMultiple = (args) => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  setup() {
    return { args, panels: PANELS };
  },
  template: `
    <Accordion :value="['0']" multiple style="max-width: 600px" v-bind="args">
      <AccordionPanel v-for="panel in panels" :key="panel.value" :value="panel.value">
        <AccordionHeader>
          <div>
            <i :class="panel.icon" />
            <span>{{ panel.header }}</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">{{ panel.content }}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  `,
});

export const TemplateDisabled = (args) => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  setup() {
    return { args };
  },
  template: `
    <Accordion value="0" style="max-width: 600px" v-bind="args">
      <AccordionPanel value="0">
        <AccordionHeader>
          <div>
            <i class="ti ti-user" />
            <span>Header I</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1" disabled>
        <AccordionHeader>
          <div>
            <i class="ti ti-settings" />
            <span>Header II</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">Этот раздел недоступен.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>
          <div>
            <i class="ti ti-bell" />
            <span>Header III</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  `,
});
