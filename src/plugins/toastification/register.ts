import Toast from 'vue-toastification';
import type { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options: PluginOptions = {
  // You can set your default options here
};

export default function register(app: any) {
  app.use(Toast, options);
}
