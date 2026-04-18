import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const SEVERITIES = [
  { type: 'info', icon: 'ti ti-info-circle', label: 'Информация' },
  { type: 'success', icon: 'ti ti-circle-check', label: 'Успех' },
  { type: 'warn', icon: 'ti ti-alert-triangle', label: 'Предупреждение' },
  { type: 'error', icon: 'ti ti-alert-circle', label: 'Ошибка' },
];

const POSITIONS = [
  { position: 'top-left', label: 'Вверх слева', group: 'pos-top-left' },
  { position: 'top-center', label: 'Вверх по центру', group: 'pos-top-center' },
  { position: 'top-right', label: 'Вверх справа', group: 'pos-top-right' },
  { position: 'bottom-left', label: 'Вниз слева', group: 'pos-bottom-left' },
  {
    position: 'bottom-center',
    label: 'Вниз по центру',
    group: 'pos-bottom-center',
  },
  { position: 'bottom-right', label: 'Вниз справа', group: 'pos-bottom-right' },
];

export const Template = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToast = (severity, icon) => {
      toast.add({
        group: args.group,
        severity,
        summary: 'Сообщение',
        detail: 'Подпись',
        life: args.life ?? 5000,
        icon,
      });
    };

    return { args, showToast, severities: SEVERITIES };
  },
  template: `
    <div>
      <Toast :position="args.position" :group="args.group">
        <template #container="{ message }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <div
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :class="'p-toast-message p-toast-message-' + type"
        >
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">Сообщение</span>
              <div class="p-toast-detail">Подпись</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          variant="outlined"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateWithCloseButton = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToast = (severity, icon) => {
      toast.add({
        group: args.group,
        severity,
        summary: 'Сообщение',
        detail: 'Подпись',
        life: 5000,
        icon,
      });
    };

    return { args, showToast, severities: SEVERITIES };
  },
  template: `
    <div>
      <Toast :group="args.group">
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
            <button class="p-button p-component p-button-text p-toast-close-button" type="button" @click="closeCallback">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <div
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :class="'p-toast-message p-toast-message-' + type"
        >
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">Сообщение</span>
              <div class="p-toast-detail">Подпись</div>
            </div>
            <button class="p-button p-component p-button-text p-toast-close-button" type="button">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          variant="outlined"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateWithContent = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToast = (severity, icon) => {
      toast.add({
        group: args.group,
        severity,
        summary: 'Сообщение',
        detail: 'Подпись',
        life: 5000,
        icon,
      });
    };

    return { args, showToast, severities: SEVERITIES };
  },
  template: `
    <div>
      <Toast :group="args.group">
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
              <div class="mt-4">
                <div class="text-sm">Дополнительный контент</div>
              </div>
              <div class="flex gap-2 mt-2">
                <div class="text-sm">Ячейка 1</div>
                <div class="text-sm">Ячейка 2</div>
              </div>
            </div>
            <button class="p-button p-component p-button-text p-toast-close-button" type="button" @click="closeCallback">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <div
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :class="'p-toast-message p-toast-message-' + type"
        >
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">Сообщение</span>
              <div class="p-toast-detail">Подпись</div>
              <div class="mt-4">
                <div class="text-sm">Дополнительный контент</div>
              </div>
              <div class="flex gap-2 mt-2">
                <div class="text-sm">Ячейка 1</div>
                <div class="text-sm">Ячейка 2</div>
              </div>
            </div>
            <button class="p-button p-component p-button-text p-toast-close-button" type="button">
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          variant="outlined"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

const SIZES = [
  {
    key: 'sm',
    label: 'Small (20rem)',
    cls: 'p-toast-sm',
    width: '20rem',
    group: 'width-sm',
  },
  {
    key: 'base',
    label: 'Base (25rem)',
    cls: '',
    width: '25rem',
    group: 'width-base',
  },
  {
    key: 'lg',
    label: 'Large (30rem)',
    cls: 'p-toast-lg',
    width: '30rem',
    group: 'width-lg',
  },
  {
    key: 'xlg',
    label: 'X-Large (45rem)',
    cls: 'p-toast-xlg',
    width: '45rem',
    group: 'width-xlg',
  },
];

export const TemplateWidth = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    const currentSize = ref(SIZES[1]);

    const showToast = (size) => {
      toast.removeGroup('width-preview');
      currentSize.value = size;
      toast.add({
        group: 'width-preview',
        severity: 'info',
        summary: 'Сообщение',
        detail: 'Ширина: ' + size.width,
        life: 3000,
        icon: 'ti ti-info-circle',
      });
    };

    return { showToast, sizes: SIZES, currentSize };
  },
  template: `
    <div>
      <Toast
        group="width-preview"
        :class="currentSize.cls"
      >
        <template #container="{ message }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <div
          v-for="({ key, width }, index) in sizes"
          :key="index"
          class="p-toast-message p-toast-message-info"
          :style="{ width }"
        >
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i class="ti ti-info-circle p-toast-message-icon"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">Сообщение</span>
              <div class="p-toast-detail">Ширина {{ key }}: {{ width }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="(size) in sizes"
          :key="size.label"
          :label="size.label"
          severity="contrast"
          @click="showToast(size)"
        />
      </div>
    </div>
  `,
});

export const TemplatePosition = () => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToast = (group, position) => {
      toast.add({
        group,
        severity: 'info',
        summary: 'Сообщение',
        detail: 'Позиция: ' + position,
        life: 3000,
        icon: 'ti ti-info-circle',
      });
    };

    return { showToast, positions: POSITIONS };
  },
  template: `
    <div>
      <Toast
        v-for="({ position, group }) in positions"
        :key="group"
        :position="position"
        :group="group"
      >
        <template #container="{ message }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-2 items-center justify-center min-h-48">
        <Button
          v-for="({ position, label, group }) in positions"
          :key="group"
          :label="label"
          severity="contrast"
          @click="showToast(group, position)"
        />
      </div>
    </div>
  `,
});
