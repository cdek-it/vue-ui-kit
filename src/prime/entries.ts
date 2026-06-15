export type PrimeEntry = {
  out: string;
  module: string;
  style: string;
  component: string;
};

// Single source of truth for Prime wrappers/styles that are generated to dist/prime/*.
export const PRIME_ENTRIES: PrimeEntry[] = [
  { out: 'button', module: 'button', style: 'button', component: 'PVButton' },
  {
    out: 'inputtext',
    module: 'inputtext',
    style: 'inputtext',
    component: 'PVInputText',
  },
  { out: 'select', module: 'select', style: 'select', component: 'PVSelect' },
  {
    out: 'checkbox',
    module: 'checkbox',
    style: 'checkbox',
    component: 'PVCheckbox',
  },
  {
    out: 'accordion',
    module: 'accordion',
    style: 'accordion',
    component: 'PVAccordion',
  },
  {
    out: 'accordionpanel',
    module: 'accordionpanel',
    style: 'accordion',
    component: 'PVAccordionPanel',
  },
  {
    out: 'accordionheader',
    module: 'accordionheader',
    style: 'accordion',
    component: 'PVAccordionHeader',
  },
  {
    out: 'accordioncontent',
    module: 'accordioncontent',
    style: 'accordion',
    component: 'PVAccordionContent',
  },
  { out: 'dialog', module: 'dialog', style: 'dialog', component: 'PVDialog' },
  {
    out: 'message',
    module: 'message',
    style: 'message',
    component: 'PVMessage',
  },
  { out: 'tag', module: 'tag', style: 'tag', component: 'PVTag' },
  { out: 'chip', module: 'chip', style: 'chip', component: 'PVChip' },
  { out: 'badge', module: 'badge', style: 'badge', component: 'PVBadge' },
  {
    out: 'rating',
    module: 'rating',
    style: 'rating',
    component: 'PVRating',
  },
  {
    out: 'divider',
    module: 'divider',
    style: 'divider',
    component: 'PVDivider',
  },
  { out: 'card', module: 'card', style: 'card', component: 'PVCard' },
  { out: 'tabs', module: 'tabs', style: 'tabs', component: 'PVTabs' },
  { out: 'tablist', module: 'tablist', style: 'tabs', component: 'PVTabList' },
  { out: 'tab', module: 'tab', style: 'tabs', component: 'PVTab' },
  {
    out: 'tabpanels',
    module: 'tabpanels',
    style: 'tabs',
    component: 'PVTabPanels',
  },
  {
    out: 'tabpanel',
    module: 'tabpanel',
    style: 'tabs',
    component: 'PVTabPanel',
  },
  {
    out: 'skeleton',
    module: 'skeleton',
    style: 'skeleton',
    component: 'PVSkeleton',
  },
  {
    out: 'breadcrumb',
    module: 'breadcrumb',
    style: 'breadcrumb',
    component: 'PVBreadcrumb',
  },
  {
    out: 'popover',
    module: 'popover',
    style: 'popover',
    component: 'PVPopover',
  },
  { out: 'menu', module: 'menu', style: 'menu', component: 'PVMenu' },
];
