import { ref } from 'vue';
import { Drawer } from 'primevue';
import { ExtraButton } from '@/primeBlocks';

export default {
  title: 'Prime/Drawer',
};

export const Basic = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visible = ref(false);

    return { visible };
  },
  template: `
    <div>
      <ExtraButton label="Открыть Drawer" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Drawer Header">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Drawer>
    </div>
  `,
});

export const Sizes = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visibleDefault = ref(false);
    const visibleSm = ref(false);
    const visibleLg = ref(false);
    const visibleXlg = ref(false);

    return { visibleDefault, visibleSm, visibleLg, visibleXlg };
  },
  template: `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ExtraButton label="Default (100)" @click="visibleDefault = true" />
      <ExtraButton label="Small (80)" @click="visibleSm = true" />
      <ExtraButton label="Large (120)" @click="visibleLg = true" />
      <ExtraButton label="Extra Large (128)" @click="visibleXlg = true" />

      <Drawer v-model:visible="visibleDefault" header="Default Drawer">
        <p>Default width drawer (sizing.100)</p>
      </Drawer>

      <Drawer v-model:visible="visibleSm" header="Small Drawer" class="p-drawer-sm">
        <p>Small width drawer (sizing.80)</p>
      </Drawer>

      <Drawer v-model:visible="visibleLg" header="Large Drawer" class="p-drawer-lg">
        <p>Large width drawer (sizing.120)</p>
      </Drawer>

      <Drawer v-model:visible="visibleXlg" header="Extra Large Drawer" class="p-drawer-xlg">
        <p>Extra large width drawer (sizing.128)</p>
      </Drawer>
    </div>
  `,
});

export const Position = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visibleLeft = ref(false);
    const visibleRight = ref(false);
    const visibleTop = ref(false);
    const visibleBottom = ref(false);

    return { visibleLeft, visibleRight, visibleTop, visibleBottom };
  },
  template: `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ExtraButton label="Left" @click="visibleLeft = true" />
      <ExtraButton label="Right" @click="visibleRight = true" />
      <ExtraButton label="Top" @click="visibleTop = true" />
      <ExtraButton label="Bottom" @click="visibleBottom = true" />

      <Drawer v-model:visible="visibleLeft" header="Left Drawer" position="left">
        <p>Content for left drawer</p>
      </Drawer>

      <Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
        <p>Content for right drawer</p>
      </Drawer>

      <Drawer v-model:visible="visibleTop" header="Top Drawer" position="top">
        <p>Content for top drawer</p>
      </Drawer>

      <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom">
        <p>Content for bottom drawer</p>
      </Drawer>
    </div>
  `,
});

export const WithFooter = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visible = ref(false);

    const save = () => {
      visible.value = false;
    };

    return { visible, save };
  },
  template: `
    <div>
      <ExtraButton label="Открыть с Footer" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Drawer with Footer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <ExtraButton label="Cancel" variant="text" @click="visible = false" />
            <ExtraButton label="Save" variant="tertiary" @click="save" />
          </div>
        </template>
      </Drawer>
    </div>
  `,
});

export const CustomHeader = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visible = ref(false);

    return { visible };
  },
  template: `
    <div>
      <ExtraButton label="Открыть с Custom Header" @click="visible = true" />
      <Drawer v-model:visible="visible">
        <template #header>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="pi pi-user" style="font-size: 1.5rem;"></i>
            <span style="font-weight: 600; font-size: 1.25rem;">User Profile</span>
          </div>
        </template>
        <p>Custom header content with icon</p>
      </Drawer>
    </div>
  `,
});

export const FullScreen = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visible = ref(false);

    return { visible };
  },
  template: `
    <div>
      <ExtraButton label="Открыть Full Screen" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Full Screen Drawer" position="full">
        <p>
          This drawer takes up the full screen. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Drawer>
    </div>
  `,
});

export const WithoutModal = () => ({
  components: { Drawer, ExtraButton },
  setup() {
    const visible = ref(false);

    return { visible };
  },
  template: `
    <div>
      <ExtraButton label="Открыть без Modal" @click="visible = true" />
      <Drawer v-model:visible="visible" header="Drawer without Modal" :modal="false">
        <p>This drawer doesn't have a modal backdrop</p>
      </Drawer>
    </div>
  `,
});
