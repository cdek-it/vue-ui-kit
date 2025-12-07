import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  template: `
    <div class="flex justify-center p-4">
      <Accordion value="0" class="w-full md:w-[600px]">
        <AccordionPanel value="0">
          <AccordionHeader>Заголовок I</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Заголовок II</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Заголовок III</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  `
});

// Множественный выбор
export const MultipleTemplate = () => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  template: `
    <div class="flex justify-center p-4">
      <Accordion multiple class="w-full md:w-[600px]">
        <AccordionPanel value="0">
          <AccordionHeader>Заголовок I</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Заголовок II</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Заголовок III</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  `
});

// Управляемый
export const ControlledTemplate = () => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  setup() {
    const { ref } = require('vue');
    const activeIndex = ref(['0']);
    
    return { activeIndex };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-[600px]">
        <div class="mb-4">
          <p class="text-sm">Активные индексы: {{ activeIndex }}</p>
        </div>
        <Accordion v-model:value="activeIndex" multiple>
          <AccordionPanel value="0">
            <AccordionHeader>Заголовок I</AccordionHeader>
            <AccordionContent>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="1">
            <AccordionHeader>Заголовок II</AccordionHeader>
            <AccordionContent>
              <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="2">
            <AccordionHeader>Заголовок III</AccordionHeader>
            <AccordionContent>
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  template: `
    <div class="flex justify-center p-4">
      <Accordion value="0" class="w-full md:w-[600px]">
        <AccordionPanel value="0">
          <AccordionHeader>
            <span class="flex items-center gap-2">
              <span class="pi pi-user"></span>
              <span class="font-bold">О нас</span>
            </span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>
            <span class="flex items-center gap-2">
              <span class="pi pi-building"></span>
              <span class="font-bold">Компания</span>
            </span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>
            <span class="flex items-center gap-2">
              <span class="pi pi-phone"></span>
              <span class="font-bold">Контакты</span>
            </span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  `
});

// Отключенный
export const DisabledTemplate = () => ({
  components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
  template: `
    <div class="flex justify-center p-4">
      <Accordion value="0" class="w-full md:w-[600px]">
        <AccordionPanel value="0">
          <AccordionHeader>Заголовок I</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1" disabled>
          <AccordionHeader>Заголовок II (отключен)</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Заголовок III</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  `
});

