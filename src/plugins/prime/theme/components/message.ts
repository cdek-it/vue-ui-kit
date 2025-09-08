import type { MessageTokenSections } from '@primeuix/themes/types/message';

const content: MessageTokenSections.Content = {
  gap: '1rem',
};

const icon: MessageTokenSections.Icon = {
  size: '{message.messages.messageIconFontSize}',
};

export const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-message {
    outline: unset;
    border: 1px solid;
    border-left-width: ${dt('message.messages.messageBorderWidth')};
  }
  
  .p-message-info {
    color: ${dt('message.severities.info.infoMessageIconColor')};
    border-color: ${dt('message.severities.info.infoMessageBorderColor')};
    border-left-color: ${dt('message.severities.info.infoMessageIconColor')};
  }
  
  .p-message-success {
    color: ${dt('message.severities.success.successMessageIconColor')};
    border-color: ${dt('message.severities.success.successMessageBorderColor')};
    border-left-color: ${dt(
      'message.severities.success.successMessageIconColor'
    )};
  }
  
  .p-message-warn {
    color: ${dt('message.severities.warning.warningMessageIconColor')};
    border-color: ${dt('message.severities.warning.warningMessageBorderColor')};
    border-left-color: ${dt(
      'message.severities.warning.warningMessageIconColor'
    )};
  }
  
  .p-message-error {
    color: ${dt('message.severities.danger.dangerMessageIconColor')};
    border-color: ${dt('message.severities.danger.dangerMessageBorderColor')};
    border-left-color: ${dt(
      'message.severities.danger.dangerMessageIconColor'
    )};
  }
  
`;

export default {
  content,
  icon,
  css,
};
