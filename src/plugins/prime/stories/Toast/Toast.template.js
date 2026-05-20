import { ref } from 'vue';
import {
  PBlockToast,
  usePBlockToast,
  PBlockToastMessageIcon,
} from '@/primeBlocks';
import Button from 'primevue/button';

const SEVERITIES = [
  { type: 'success', icon: PBlockToastMessageIcon.success, label: 'Успех' },
  { type: 'info', icon: PBlockToastMessageIcon.info, label: 'Информация' },
  { type: 'warn', icon: PBlockToastMessageIcon.warn, label: 'Предупреждение' },
  { type: 'error', icon: PBlockToastMessageIcon.error, label: 'Ошибка' },
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

const SIZES = [
  {
    key: 'sm',
    label: 'Small (20rem)',
    width: '20rem',
    group: 'width-sm',
  },
  {
    key: 'base',
    label: 'Base (25rem)',
    width: '25rem',
    group: 'width-base',
  },
  {
    key: 'lg',
    label: 'Large (30rem)',
    width: '30rem',
    group: 'width-lg',
  },
  {
    key: 'xlg',
    label: 'X-Large (45rem)',
    width: '45rem',
    group: 'width-xlg',
  },
];

const commonToastConfig = {
  summary: 'Заголовок сообщения',
  detail: 'Дополнительная информация',
};

export const Template = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const showToast = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        life: args.life ?? 5_000,
        icon,
        group: args.group || `story_${Date.now()}`,
      });
    };

    return {
      args,
      showToast,
      severities: SEVERITIES,
    };
  },
  template: `
    <div>
      <PBlockToast :position="args.position" :group="args.group" style="z-index:1" />

      <div class="grid grid-cols-2 gap-4">
        <div v-for="({ type, icon }, index) in severities" :key="index">
          <div :class="'p-toast-message p-toast-message-' + type">
            <div class="p-toast-message-content">
              <div class="p-toast-accent-line"></div>
              <i :class="'p-toast-message-icon ti ' + icon"></i>
              <div class="p-toast-message-text">
                <span class="p-toast-summary">Заголовок сообщения</span>
                <div class="p-toast-detail">Дополнительная информация</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать Toast: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateCloseButton = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const showToast = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        life: args.life ?? 5_000,
        icon,
        group: args.group || `story_${Date.now()}`,
        closable: true,
      });
    };

    return {
      args,
      showToast,
      severities: SEVERITIES,
    };
  },
  template: `
    <div>
      <PBlockToast :position="args.position" :group="args.group" style="z-index:1" />

      <div class="grid grid-cols-2 gap-4">
        <div v-for="({ type, icon }, index) in severities" :key="index">
          <div :class="'p-toast-message p-toast-message-' + type">
            <div class="p-toast-message-content">
              <div class="p-toast-accent-line"></div>
              <i :class="'p-toast-message-icon ti ' + icon"></i>
              <div class="p-toast-message-text">
                <span class="p-toast-summary">Заголовок сообщения</span>
                <div class="p-toast-detail">Дополнительная информация</div>
              </div>
              <button class="p-toast-close-button" type="button">
                <i class="ti ti-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать Toast: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateWithContent = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const showToast = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        life: args.life ?? 5_000,
        icon,
        group: args.group || `story_${Date.now()}`,
      });
    };

    return {
      args,
      severities: SEVERITIES,
      showToast,
    };
  },
  template: `
    <div>
      <PBlockToast :group="args.group" style="z-index:1">
        <template #container="{ message }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="'p-toast-message-icon ti ' + message.icon"></i>
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
          </div>
        </template>
      </PBlockToast>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="({ type, icon }, idx) in severities" :key="idx">
          <div :class="'p-toast-message p-toast-message-' + type">
            <div class="p-toast-message-content">
              <div class="p-toast-accent-line"></div>
              <i :class="'p-toast-message-icon ti ' + icon"></i>
              <div class="p-toast-message-text">
                <span class="p-toast-summary">Заголовок сообщения</span>
                <div class="p-toast-detail">Дополнительная информация</div>
                <div class="mt-4">
                  <div class="text-sm">Дополнительный контент</div>
                </div>
                <div class="flex gap-2 mt-2">
                  <div class="text-sm">Ячейка 1</div>
                  <div class="text-sm">Ячейка 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать Toast: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateCustomContentWithCloseButton = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const showToast = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        life: args.life ?? 5_000,
        icon,
        group: args.group,
      });
    };

    return {
      args,
      showToast,
      severities: SEVERITIES,
    };
  },
  template: `
    <div>
      <PBlockToast :group="args.group" style="z-index:1">
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="'p-toast-message-icon ti ' + message.icon"></i>
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
            <button
              class="p-button p-component p-button-text p-toast-close-button"
              type="button"
              @click="closeCallback"
            >
              <span class="p-button-icon ti ti-x"></span>
            </button>
          </div>
        </template>
      </PBlockToast>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="({ type, icon }, index) in severities"
          :key="index"
        >
          <div :class="'p-toast-message p-toast-message-' + type">
            <div class="p-toast-message-content">
              <div class="p-toast-accent-line"></div>
              <i :class="'p-toast-message-icon ti ' + icon"></i>
              <div class="p-toast-message-text">
                <span class="p-toast-summary">Заголовок сообщения</span>
                <div class="p-toast-detail">Дополнительная информация</div>
                <div class="mt-4">
                  <div class="text-sm">Дополнительный контент</div>
                </div>
                <div class="flex gap-2 mt-2">
                  <div class="text-sm">Ячейка 1</div>
                  <div class="text-sm">Ячейка 2</div>
                </div>
              </div>
              <button class="p-toast-close-button" type="button">
                <i class="ti ti-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <div class="flex flex-wrap gap-2 mt-6">
        <Button
          v-for="({ type, icon, label }, index) in severities"
          :key="index"
          :label="'Показать Toast: ' + label"
          :severity="type === 'error' ? 'danger' : type"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const TemplateWidth = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();
    const currentSize = ref(SIZES[1]);
    const group = args?.group || 'width-preview';

    const showToast = (size) => {
      toast.removeGroup(group);
      currentSize.value = size;

      toast.add({
        severity: 'info',
        ...commonToastConfig,
        detail: 'Ширина: ' + size.width,
        life: args.life ?? 5_000,
        group,
      });
    };

    return {
      currentSize,
      sizes: SIZES,
      showToast,
    };
  },
  template: `
    <div>
      <PBlockToast
        group="width-preview"
        :width="currentSize.key"
      />
      <div class="flex flex-col gap-4">
        <div
          v-for="({ key, width }, index) in sizes"
          :key="index"
          class="p-toast-message p-toast-message-info"
          :style="'width:' + width"
        >
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i class="p-toast-message-icon ti ti-info-circle"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">Заголовок сообщения</span>
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
          @click="showToast(size)"
        />
      </div>
    </div>
  `,
});

export const TemplatePosition = () => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const showToast = (group, position) => {
      toast.add({
        group,
        severity: 'info',
        ...commonToastConfig,
        detail: 'Позиция: ' + position,
        life: 5_000,
      });
    };

    return {
      showToast,
      positions: POSITIONS,
    };
  },
  template: `
    <div>
      <PBlockToast
        v-for="({ position, group }) in positions"
        :key="group"
        :position="position"
        :group="group"
        style="z-index:1"
      />
      <div class="grid grid-cols-3 gap-2">
        <Button
          v-for="({ position, label, group }) in positions"
          :key="group"
          :label="label"
          @click="showToast(group, position)"
        />
      </div>
    </div>
  `,
});
