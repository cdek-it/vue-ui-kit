import ScrollPanel from 'primevue/scrollpanel';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ScrollPanel },
  template: `
    <div class="flex justify-center p-4">
      <ScrollPanel style="width: 100%; max-width: 600px; height: 200px">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Vitae et leo duis ut diam quam nulla. Interdum velit euismod in pellentesque massa placerat duis. 
          Sapien faucibus et molestie ac feugiat sed. Tortor vitae purus faucibus ornare suspendisse.
        </p>
        <p>
          Auctor augue mauris augue neque gravida. Faucibus a pellentesque sit amet porttitor eget dolor morbi. 
          Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Porta lorem mollis aliquam ut porttitor leo a diam.
        </p>
        <p>
          Viverra vitae congue eu consequat ac felis donec et odio. Arcu dictum varius duis at consectetur lorem donec massa sapien. 
          Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
        </p>
      </ScrollPanel>
    </div>
  `
});

// Пользовательский стиль
export const CustomTemplate = () => ({
  components: { ScrollPanel },
  template: `
    <div class="flex justify-center p-4">
      <ScrollPanel style="width: 100%; max-width: 600px; height: 300px" class="custom-scrollpanel">
        <div v-for="i in 20" :key="i" class="p-3 border-b border-surface-200">
          Элемент {{ i }}
        </div>
      </ScrollPanel>
    </div>
  `
});

