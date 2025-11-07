import Toast from './lib';
import type { PluginOptions } from './lib';
import './lib/scss/index.scss';
import './toastification.scss';

const options: PluginOptions = {
  maxToasts: 5,
};

export default function register(app: any) {
  app.use(Toast, options);
}
