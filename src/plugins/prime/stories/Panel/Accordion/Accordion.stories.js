import {
  Template,
  TemplateWithDisabledPanel,
  TemplateWithMultiplePanels,
  TemplateWithHtmlInPanelHeader,
} from './Accordion.template';

export default {
  title: 'Prime/Panel/Accordion',
};

export const $аккордеонС1ЙПанелью = {
  render: Template.bind({}),
  name: 'Аккордеон с 1-й панелью',
};

export const $аккордеонСНесколькимиПанелямиСРежимомТолько1ЙОткрытойПанелиЗаРаз =
  {
    render: TemplateWithMultiplePanels.bind({}),
    name: 'Аккордеон с несколькими панелями с режимом только 1-й открытой панели за раз',
  };

export const $аккордеонСОднойВыключеннойПанелью = {
  render: TemplateWithDisabledPanel.bind({}),
  name: 'Аккордеон с одной выключенной панелью',
};

export const $заголовокПанелиСHtml = {
  render: TemplateWithHtmlInPanelHeader.bind({}),
  name: 'Заголовок панели с html',
};
