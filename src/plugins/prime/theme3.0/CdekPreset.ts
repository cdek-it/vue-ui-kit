/**
 *
 * Финальная тема PrimeVue 4.x
 * CSS-функции передаются в definePreset — PrimeVue вызывает их сам,
 * подставляя свой dt() → CSS-переменные (var(--p-...))
 */

import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';

import baseTokens from './tokens.json';

import accordion from './components/css/accordion';
import avatar from './components/css/avatar';
import badge from './components/css/badge';
import breadcrumb from './components/css/breadcrumb';
import button from './components/css/button';
import card from './components/css/card';
import checkbox from './components/css/checkbox';
import confirmdialog from './components/css/confirmdialog';
import dialog from './components/css/dialog';
import divider from './components/css/divider';
import drawer from './components/css/drawer';
import listbox from './components/css/listbox';
import menu from './components/css/menu';
import message from './components/css/message';
import metergroup from './components/css/metergroup';
import popover from './components/css/popover';
import progressbar from './components/css/progressbar';
import progressspinner from './components/css/progressspinner';
import selectbutton from './components/css/selectbutton';
import stepper from './components/css/stepper';
import tabs from './components/css/tabs';
import tag from './components/css/tag';
import toggleswitch from './components/css/toggleswitch';
import tooltip from './components/css/tooltip';
import globalCss from './css';

// ─── Типы ────────────────────────────────────────────────────────────────────

type CssFn = (ctx: { dt: (token: string) => string }) => string;

type Tokens = typeof baseTokens & {
  css?: CssFn;
  components?: Record<string, Record<string, unknown>>;
};

// ─── Маппинг: имя компонента → CSS-функция ───────────────────────────────────

const componentCss: Record<string, CssFn> = {
  accordion,
  avatar,
  badge,
  breadcrumb,
  button,
  card,
  checkbox,
  confirmdialog,
  dialog,
  divider,
  drawer,
  listbox,
  menu,
  message,
  metergroup,
  popover,
  progressbar,
  progressspinner,
  selectbutton,
  stepper,
  tabs,
  tag,
  toggleswitch,
  tooltip,
};

// ─── Мёрджим css в токены ─────────────────────────────────────────────────────

const tokens = baseTokens as Tokens;

tokens.css = globalCss;

if (tokens.components) {
  for (const [name, cssFn] of Object.entries(componentCss)) {
    if (tokens.components[name]) {
      tokens.components[name].css = cssFn;
    }
  }
}

// ─── Финальный пресет ─────────────────────────────────────────────────────────

export const CdekPreset = definePreset(Lara, tokens);
