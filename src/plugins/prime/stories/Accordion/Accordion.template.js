import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

export const Template = (args) => ({
  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="p-6 bg-gray-300 rounded">
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader>Заголовок панели</AccordionHeader>
          <AccordionContent>
            Контент панели<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.
          </AccordionContent> 
        </AccordionPanel>
      </Accordion>
    </div>
  `,
});

export const TemplateWithMultiplePanels = (args) => ({
  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
  setup() {
    const panelsCount = 3;

    const accordionPanels = (() => {
      const panels = [];

      for (let panelIndex = 1; panelIndex <= panelsCount; panelIndex++) {
        panels.push({
          title: `Заголовок панели #${panelIndex}`,
          content: `
            Контент панели.<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Delectus, saepe.
          `,
          value: panelIndex,
          disabled: false,
        });
      }

      return panels;
    })();

    return {
      args,
      accordionPanels,
    };
  },
  template: `
    <div class="p-6 bg-gray-300 rounded">
      <Accordion>
        <AccordionPanel
          v-for="(panel, panelIndex) in accordionPanels"
          :key="panelIndex"
          :value="panel.value"
        >
          <AccordionHeader>{{ panel.title }}</AccordionHeader>
          <AccordionContent>
            <div v-html="panel.content" />
          </AccordionContent> 
        </AccordionPanel>
      </Accordion>
    </div>
  `,
});

export const TemplateWithDisabledPanel = (args) => ({
  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="p-6 rounded">
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader>Заголовок панели</AccordionHeader>
          <AccordionContent>
            Контент панели<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.
          </AccordionContent> 
        </AccordionPanel>
        <AccordionPanel value="2" disabled>
          <AccordionHeader>Заголовок панели</AccordionHeader>
          <AccordionContent>
            Контент панели<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  `,
});

export const TemplateWithHtmlInPanelHeader = (args) => ({
  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="p-6 bg-gray-300 rounded">
      <Accordion>
        <AccordionPanel value="1">
          <AccordionHeader>
            <div class="flex gap-2 items-center">
              <i class="ti ti-alert-triangle text-danger" />
              <span>Заголовок панели</span>
            </div>
          </AccordionHeader>
          <AccordionContent>
            Контент панели<br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, saepe.
          </AccordionContent> 
        </AccordionPanel>
      </Accordion>
    </div>
  `,
});
