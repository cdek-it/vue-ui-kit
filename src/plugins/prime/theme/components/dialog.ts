import type { DialogTokenSections } from '@primeuix/themes/types/dialog';

const root: DialogTokenSections.Root = {
  background: '{overlay.overlay.overlayContentBg}',
  shadow: '0 0.25rem 0.25rem 0 {form.overlay.inputOverlayShadowColor}',
};

const header: DialogTokenSections.Header = {
  padding: '{overlay.dialog.header.dialogHeaderPadding}',
};

const title: DialogTokenSections.Title = {
  // Нет токена в нашей базе
  fontWeight: '700',
};

const content: DialogTokenSections.Content = {
  padding: '{overlay.dialog.body.dialogContentPadding}',
};

const footer: DialogTokenSections.Footer = {
  padding: '{overlay.dialog.footer.dialogFooterPadding}',
};

const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-dialog-footer {
    justify-content: flex-start;
  }
  
  .p-dialog .p-button-secondary[data-pc-name="pcclosebutton"] {
    outline: unset;
    color: ${dt('general.actionIconColor')};
    border-radius: ${dt('general.actionIconBorderRadius')};
    background: ${dt('general.actionIconBg')};
  }
  
  .p-dialog .p-button-secondary[data-pc-name="pcclosebutton"]:focus-visible {
    outline: unset;
  }
  
  .p-dialog .p-button[data-pc-name="pcclosebutton"]:not(:disabled):not(:active):hover {
    box-shadow: none;
    color: ${dt('general.actionIconHoverColor')};
    background: ${dt('general.actionIconHoverBg')};
    padding: ${dt('form.calendar.calendarCellDatePadding')};
  }
`;

export default {
  root,
  header,
  title,
  content,
  footer,
  css,
};
