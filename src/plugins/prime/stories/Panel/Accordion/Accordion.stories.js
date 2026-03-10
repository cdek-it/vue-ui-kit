import {
  Template,
  TemplateWithDisabledPanel,
  TemplateWithMultiplePanels,
  TemplateWithHtmlInPanelHeader,
} from './Accordion.template';

export default {
  title: 'Prime/Panel/Accordion',
};

export const AccordionOnePanel = {
  render: Template.bind({}),
  name: 'Аккордеон с 1-й панелью',
};

export const AccordionWithMultiplePanelsSingleOpenMode = {
  render: TemplateWithMultiplePanels.bind({}),
  name: 'Аккордеон с несколькими панелями с режимом только 1-й открытой панели за раз',
};

export const AccordionWithOneDisabledPanel = {
  render: TemplateWithDisabledPanel.bind({}),
  name: 'Аккордеон с одной выключенной панелью',
};

export const PanelHeaderWithHtml = {
  render: TemplateWithHtmlInPanelHeader.bind({}),
  name: 'Заголовок панели с html',
};
