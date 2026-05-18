import { ref } from 'vue';
import {
  usePBlockToast,
  PBlockToastMessageIcon,
} from '@/primeBlocks/PBlockToast/usePBlockToast';

import PBlockToast from '@/primeBlocks/PBlockToast/PBlockToast.vue';
import Button from 'primevue/button';

const commonToastConfig = {
  summary: 'Заголовок сообщения',
  detail: 'Дополнительная информация',
  life: 3_000,
};

const commonInlineMessages = [
  {
    id: 1,
    severity: 'success',
    icon: PBlockToastMessageIcon.success,
    ...commonToastConfig,
  },
  {
    id: 2,
    severity: 'info',
    icon: PBlockToastMessageIcon.info,
    ...commonToastConfig,
  },
  {
    id: 3,
    severity: 'warn',
    icon: PBlockToastMessageIcon.warn,
    ...commonToastConfig,
  },
  {
    id: 4,
    severity: 'error',
    icon: PBlockToastMessageIcon.error,
    ...commonToastConfig,
  },
];

const commonSeverities = [
  { severity: 'success', icon: PBlockToastMessageIcon.success },
  { severity: 'info', icon: PBlockToastMessageIcon.info },
  { severity: 'warn', icon: PBlockToastMessageIcon.warn },
  { severity: 'error', icon: PBlockToastMessageIcon.error },
];

export const Template = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const toastConfig = {
      severity: 'success',
      ...commonToastConfig,
      group: 'storyA',
    };

    const onClickToastShowBtn = () => toast.add(toastConfig);

    return {
      args,
      toastConfig,
      onClickToastShowBtn,
    };
  },
  template: `
    <div>
      <PBlockToast group="storyA" style="z-index: 1" />

      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Как выглядит Toast</h3>
        <div class="flex flex-col gap-4">
          <div class="p-toast-message p-toast-message-success">
            <div class="p-toast-message-content">
              <div class="p-toast-accent-line"></div>
              <i class="p-toast-message-icon ti ti-circle-check"></i>
              <div class="p-toast-message-text">
                <span class="p-toast-summary">{{ toastConfig.summary }}</span>
                <div class="p-toast-detail">{{ toastConfig.detail }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="inline-flex flex-col gap-4">
          <Button label="Показать Toast" @click="onClickToastShowBtn" />
        </div>
      </div>
    </div>
  `,
});

export const TemplateToastTypes = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const inlineMessages = ref([...commonInlineMessages]);

    const showToastByType = (severity) => {
      toast.add({
        severity,
        ...commonToastConfig,
        group: 'storyB',
      });
    };

    const severities = Object.keys(PBlockToastMessageIcon).map((k) => ({
      severity: k,
    }));

    return {
      args,
      showToastByType,
      severities,
      inlineMessages,
    };
  },
  template: `
    <div>
      <PBlockToast group="storyB" style="z-index: 1" />
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Как выглядят Toast'ы</h3>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="message in inlineMessages"
            :key="message.id"
          >
            <div class="font-semibold"><span>{{ message.severity }}</span></div>
            <br>
            <div
              :class="'p-toast-message p-toast-message-' + message.severity"
            >
              <div class="p-toast-message-content">
                <div class="p-toast-accent-line"></div>
                <i :class="'p-toast-message-icon ti ' + message.icon"></i>
                <div class="p-toast-message-text">
                  <span class="p-toast-summary">{{ message.summary }}</span>
                  <div class="p-toast-detail">{{ message.detail }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="inline-flex gap-4">
          <Button
            v-for="({ severity }, index) in severities"
            :key="index"
            :label="'Показать ' + severity.toUpperCase() + ' Toast'"
            @click="showToastByType(severity)"
          />
        </div>
      </div>
    </div>
  `,
});

export const CustomContainer = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const severities = [...commonSeverities];
    const inlineMessages = ref([...commonInlineMessages]);

    const showCustomToast = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        icon,
        group: 'storyC',
      });
    };

    return {
      args,
      severities,
      inlineMessages,
      showCustomToast,
    };
  },
  template: `
    <div>
      <PBlockToast group="storyC" style="z-index: 1" >
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="'p-toast-message-icon ti ' + message.icon"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
            <Button
              class="p-toast-close-button"
              icon="ti ti-x"
              variant="text"
              @click="closeCallback"
            />
          </div>
        </template>
      </PBlockToast>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Как выглядят Toast'ы</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="message in inlineMessages" :key="message.id">
            <div class="font-semibold"><span>{{ message.severity }}</span></div>
            <br />
            <div :class="'p-toast-message p-toast-message-' + message.severity">
              <div class="p-toast-message-content">
                <div class="p-toast-accent-line"></div>
                <i :class="'p-toast-message-icon ti ' + message.icon"></i>
                <div class="p-toast-message-text">
                  <span class="p-toast-summary">{{ message.summary }}</span>
                  <div class="p-toast-detail">{{ message.detail }}</div>
                </div>
                <Button
                  class="p-toast-close-button"
                  icon="ti ti-x"
                  variant="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="inline-flex gap-4">
          <Button
            v-for="({ severity, icon }, index) in severities"
            :key="index"
            :label="'Показать ' + severity + ' Toast'"
            @click="showCustomToast(severity, icon)"
          />
        </div>
      </div>
    </div>
  `,
});

export const WithContent = (args) => ({
  components: { PBlockToast, Button },
  setup() {
    const toast = usePBlockToast();

    const severities = [...commonSeverities];
    const messages = [...commonInlineMessages].map((m) => ({
      ...m,
      content: 'Контент',
      cells: ['Ячейка 1', 'Ячейка 2'],
    }));
    const inlineMessages = ref([...messages]);

    const showToastWithContent = (severity, icon) => {
      toast.add({
        severity,
        ...commonToastConfig,
        icon,
        content: 'Контент',
        cells: ['Ячейка 1', 'Ячейка 2'],
        group: 'storyD',
      });
    };

    return {
      args,
      severities,
      inlineMessages,
      showToastWithContent,
    };
  },
  template: `
    <div>
      <PBlockToast group="storyD" style="z-index: 1">
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="'p-toast-message-icon ti ' + message.icon"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-detail">{{ message.detail }}</div>
              <div class="mt-4">
                <div class="text-sm">{{ message.content }}</div>
              </div>
              <div class="flex gap-2 mt-2">
                <div
                  v-for="(cell, idx) in message.cells"
                  :key="idx"
                  class="text-sm"
                >{{ cell }}</div>
              </div>
            </div>
            <Button
              class="p-toast-close-button"
              icon="ti ti-x"
              variant="text"
              @click="closeCallback"
            />
          </div>
        </template>
      </PBlockToast>
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Как выглядят Toast'ы</h3>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="message in inlineMessages"
            :key="message.id"
          >
            <div :class="'p-toast-message p-toast-message-' + message.severity">
              <div class="p-toast-message-content">
                <div class="p-toast-accent-line"></div>
                <i :class="'p-toast-message-icon ti ' + message.icon"></i>
                <div class="p-toast-message-text">
                  <span class="p-toast-summary">{{ message.summary }}</span>
                  <div class="p-toast-detail">{{ message.detail }}</div>
                  <div class="mt-4">
                    <div class="text-sm">{{ message.content }}</div>
                  </div>
                  <div class="flex gap-2 mt-2">
                    <div
                      v-for="(cell, idx) in message.cells"
                      :key="idx"
                      class="text-sm"
                    >{{ cell }}</div>
                  </div>
                </div>
                <Button
                  class="p-toast-close-button"
                  icon="ti ti-x"
                  variant="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="inline-flex gap-4">
          <Button
            v-for="({ severity, icon }, index) in severities"
            :key="index"
            :label="'Показать ' + severity.toUpperCase() + ' toast'"
            @click="showToastWithContent(severity, icon)"
          />
        </div>
      </div>
    </div>
  `,
});
