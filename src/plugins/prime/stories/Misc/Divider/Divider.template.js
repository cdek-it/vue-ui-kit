import Divider from 'primevue/divider';

export const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: '<Divider v-bind="args" />',
});

export const TemplateContent = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div class="card">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Divider align="left">
            <div class="inline-flex items-center">
                <i class="ti ti-user"></i>
                <b>Left</b>
            </div>
        </Divider>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Divider align="center">
            <div class="inline-flex items-center">
                <i class="ti ti-search"></i>
                <b>Center</b>
            </div>
        </Divider>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Divider align="right">
            <div class="inline-flex items-center">
                <i class="ti ti-check"></i>
                <b>Right</b>
            </div>
        </Divider>
    </div>
  `,
});

export const TemplateVertical = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center h-[24px]">
        <span>Component 1</span>
        <Divider layout="vertical" />
        <span>Component 2</span>
        <Divider layout="vertical" />
        <span>Component 3</span>
    </div>
  `,
});

export const TemplateVerticalContent = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div class="flex h-[200px] justify-center text-center">
        <Divider layout="vertical" align="top">
            <div class="flex items-center">
                <i class="ti ti-user"></i>
                <b>Top</b>
            </div>
        </Divider>
        <Divider layout="vertical" align="center">
            <div class="flex items-center">
                <i class="ti ti-search"></i>
                <b>Center</b>
            </div>
        </Divider>
        <Divider layout="vertical" align="bottom">
            <div class="flex items-center">
                <i class="ti ti-check"></i>
                <b>Bottom</b>
            </div>
        </Divider>
    </div>
  `,
});

export const TemplateType = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div class="card">
        <p>Solid</p>
        <Divider type="solid" />
        <p>Dashed</p>
        <Divider type="dashed" />
        <p>Dotted</p>
        <Divider type="dotted" />
    </div>
  `,
});
