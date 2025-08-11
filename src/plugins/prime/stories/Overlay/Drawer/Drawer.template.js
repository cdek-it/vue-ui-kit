import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

export const Template = (args) => ({
    components: { Drawer, Button },
    data() {
        return {
            visible: false,
        };
    },
    setup() {
        return { args };
    },
    template: `
<div>
  <Button label="Show Drawer" @click="visible = true" />
  <Drawer v-model:visible="visible" v-bind="args">
    <template #header>
      <h3>Drawer Header</h3>
    </template>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </Drawer>
</div>
`,
});

export const TemplatePositions = (args) => ({
    components: { Drawer, Button },
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
        };
    },
    setup() {
        return { args };
    },
    template: `
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Button label="Left" @click="visibleLeft = true" />
  <Button label="Right" @click="visibleRight = true" />
  <Button label="Top" @click="visibleTop = true" />
  <Button label="Bottom" @click="visibleBottom = true" />
  
  <Drawer v-model:visible="visibleLeft" position="left" v-bind="args">
    <template #header>
      <h3>Left Drawer</h3>
    </template>
    <p>Content for left drawer</p>
  </Drawer>
  
  <Drawer v-model:visible="visibleRight" position="right" v-bind="args">
    <template #header>
      <h3>Right Drawer</h3>
    </template>
    <p>Content for right drawer</p>
  </Drawer>
  
  <Drawer v-model:visible="visibleTop" position="top" v-bind="args">
    <template #header>
      <h3>Top Drawer</h3>
    </template>
    <p>Content for top drawer</p>
  </Drawer>
  
  <Drawer v-model:visible="visibleBottom" position="bottom" v-bind="args">
    <template #header>
      <h3>Bottom Drawer</h3>
    </template>
    <p>Content for bottom drawer</p>
  </Drawer>
</div>
`,
});

export const TemplateCustomSize = (args) => ({
    components: { Drawer, Button },
    data() {
        return {
            visibleSmall: false,
            visibleLarge: false,
            visibleFullScreen: false,
        };
    },
    setup() {
        return { args };
    },
    template: `
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Button label="Small (300px)" @click="visibleSmall = true" />
  <Button label="Large (600px)" @click="visibleLarge = true" />
  <Button label="Full Screen" @click="visibleFullScreen = true" />
  
  <Drawer v-model:visible="visibleSmall" style="width: 300px" v-bind="args">
    <template #header>
      <h3>Small Drawer</h3>
    </template>
    <p>Small drawer content (300px width)</p>
  </Drawer>
  
  <Drawer v-model:visible="visibleLarge" style="width: 600px" v-bind="args">
    <template #header>
      <h3>Large Drawer</h3>
    </template>
    <p>Large drawer content (600px width)</p>
  </Drawer>
  
  <Drawer v-model:visible="visibleFullScreen" style="width: 100vw" v-bind="args">
    <template #header>
      <h3>Full Screen Drawer</h3>
    </template>
    <p>Full screen drawer content</p>
  </Drawer>
</div>
`,
});