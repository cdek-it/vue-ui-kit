import Toast from 'vue-toastification';
import type { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './toastification.scss';

const options: PluginOptions = {
  icon: false,
  closeButton: false,
  maxToasts: 5,
  draggable: false,
  hideProgressBar: true,
};

export default function register(app: any) {
  app.use(Toast, options);
}
