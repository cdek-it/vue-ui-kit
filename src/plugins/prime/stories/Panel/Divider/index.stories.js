import Divider from 'primevue/divider';

export default {
  title: 'Prime/Panel/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          'Divider компонент для визуального разделения контента горизонтальными или вертикальными линиями.',
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация разделителя',
      defaultValue: 'horizontal',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'top', 'center', 'bottom'],
      description: 'Выравнивание контента внутри разделителя',
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Тип линии разделителя',
      defaultValue: 'solid',
    },
  },
};

const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="padding: 1rem;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <Divider v-bind="args" />
      
      <div style="padding: 1rem;">
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      
      <Divider v-bind="args" />
      
      <div style="padding: 1rem;">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Базовый горизонтальный разделитель без контента.',
    },
  },
};

const WithContentTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="padding: 1rem;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <Divider align="left" v-bind="args">
        <span style="color: #6c757d;">Left</span>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      
      <Divider align="center" v-bind="args">
        <span style="color: #6c757d;">Center</span>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      
      <Divider align="right" v-bind="args">
        <span style="color: #6c757d;">Right</span>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  `,
});

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {};
WithContent.parameters = {
  docs: {
    description: {
      story: 'Горизонтальный разделитель с текстовым контентом и различным выравниванием (left, center, right).',
    },
  },
};

const WithIconTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="padding: 1rem;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <Divider align="center" v-bind="args">
        <div>
          <i class="ti ti-star" style="color: #6c757d;"></i>
        </div>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      
      <Divider align="center" v-bind="args">
        <div style="color: #6c757d;">
          <i class="ti ti-circle-filled" style="font-size: 0.5rem;"></i>
          <span>Section</span>
          <i class="ti ti-circle-filled" style="font-size: 0.5rem;"></i>
        </div>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      
      <Divider align="center" v-bind="args">
        <div>
          <i class="ti ti-info-circle" style="color: #6c757d;"></i>
          <span style="color: #6c757d;">Content</span>
        </div>
      </Divider>
      
      <div style="padding: 1rem;">
        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
    </div>
  `,
});

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = {};
WithIcon.parameters = {
  docs: {
    description: {
      story: 'Разделитель с иконками в качестве контента.',
    },
  },
};

const TypesTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="padding: 1rem;">
        <h4 style="margin: 0;">Solid (по умолчанию)</h4>
      </div>
      
      <Divider type="solid" v-bind="args" />
      
      <div style="padding: 1rem;">
        <h4 style="margin: 0;">Dashed</h4>
      </div>
      
      <Divider type="dashed" v-bind="args" />
      
      <div style="padding: 1rem;">
        <h4 style="margin: 0;">Dotted</h4>
      </div>
      
      <Divider type="dotted" v-bind="args" />
      
      <div style="padding: 1rem;">
        <p>Контент после разделителей</p>
      </div>
    </div>
  `,
});

export const Types = TypesTemplate.bind({});
Types.args = {};
Types.parameters = {
  docs: {
    description: {
      story: 'Различные типы линий разделителя: solid, dashed, dotted.',
    },
  },
};

const VerticalTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="display: flex; align-items: center; padding: 1rem;">
        <div style="flex: 1;">
          <h4>Раздел 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <Divider layout="vertical" v-bind="args" />
        
        <div style="flex: 1;">
          <h4>Раздел 2</h4>
          <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        
        <Divider layout="vertical" v-bind="args" />
        
        <div style="flex: 1;">
          <h4>Раздел 3</h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
      </div>
    </div>
  `,
});

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {};
Vertical.parameters = {
  docs: {
    description: {
      story: 'Вертикальный разделитель для разделения контента по горизонтали.',
    },
  },
};

const VerticalWithContentTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div>
      <div style="display: flex; align-items: stretch; min-height: 300px; padding: 1rem;">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <h4>Верхний раздел</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        
        <Divider layout="vertical" align="top" v-bind="args">
          <span style="color: #6c757d;">Top</span>
        </Divider>
        
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <h4>Центральный раздел</h4>
          <p>Ut enim ad minim veniam.</p>
        </div>
        
        <Divider layout="vertical" align="center" v-bind="args">
          <span style="color: #6c757d;">Center</span>
        </Divider>
        
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <h4>Нижний раздел</h4>
          <p>Duis aute irure dolor.</p>
        </div>
        
        <Divider layout="vertical" align="bottom" v-bind="args">
          <span style="color: #6c757d;">Bottom</span>
        </Divider>
        
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <h4>Последний раздел</h4>
          <p>Excepteur sint occaecat.</p>
        </div>
      </div>
    </div>
  `,
});

export const VerticalWithContent = VerticalWithContentTemplate.bind({});
VerticalWithContent.args = {};
VerticalWithContent.parameters = {
  docs: {
    description: {
      story: 'Вертикальный разделитель с контентом и различным выравниванием (top, center, bottom).',
    },
  },
};

const InFormTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <div style="max-width: 500px; padding: 1rem; border: 1px solid #dee2e6; border-radius: 8px;">
      <h3 style="margin-top: 0;">Регистрация</h3>
      
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem;">Имя</label>
        <input type="text" style="width: 100%; padding: 0.5rem; border: 1px solid #ced4da; border-radius: 4px;" />
      </div>
      
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem;">Email</label>
        <input type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #ced4da; border-radius: 4px;" />
      </div>
      
      <Divider align="center" v-bind="args">
        <span style="color: #6c757d; font-size: 0.875rem;">ИЛИ</span>
      </Divider>
      
      <button style="width: 100%; padding: 0.75rem; background: #fff; border: 1px solid #ced4da; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
        <i class="ti ti-brand-google"></i>
        Войти через Google
      </button>
      
      <button style="width: 100%; padding: 0.75rem; background: #fff; border: 1px solid #ced4da; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 0.5rem;">
        <i class="ti ti-brand-github"></i>
        Войти через GitHub
      </button>
    </div>
  `,
});

export const InForm = InFormTemplate.bind({});
InForm.args = {};
InForm.parameters = {
  docs: {
    description: {
      story: 'Практический пример использования Divider в форме регистрации для разделения способов входа.',
    },
  },
};
