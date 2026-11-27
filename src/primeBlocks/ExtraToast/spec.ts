import type { ExtraStorySpec } from '../storybook/storyMeta';

export const extraToastSpec: ExtraStorySpec = {
  description:
    '`Toast` используется для отображения всплывающих уведомлений поверх интерфейса. Требует подключения `toastService` при инициализации приложения. Слот messageicon заменяет иконку стандартного сообщения; message и container полностью заменяют соответствующее содержимое и имеют приоритет.',
  importName: 'ExtraToast',
  figmaUrl:
    'https://www.figma.com/design/Khh7arsuXss3ncqy1Dz3OZ/UI-Kit--DS--v2.0?node-id=15953-4478',
  designTokensPrefix: '--p-toast',
  usageSnippet: `import { createApp } from 'vue';
import { toastService } from '@cdek-it/vue-ui-kit';

const app = createApp(App);
app.use(toastService);`,
  usageSnippetLanguage: 'ts',
};
