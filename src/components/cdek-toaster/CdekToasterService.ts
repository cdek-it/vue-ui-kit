import Multitone, { getInstanceFactory } from '@/services/Multitone';
import useServiceFactory from '@/services/useServiceFactory';
import type { Component } from 'vue';

export interface IMessage {
  type?: 'info' | 'success' | 'error';
  content: {
    title: string;
    text?: string;
  };
  /**
   * SVG иконка в виде компонента (будет выставлен размер 24х24px)
   */
  icon?: Component;
  button?: {
    text: string;
    action: () => void;
  };
}

class CdekToasterService extends Multitone {
  messages: IMessage[] = [];

  showMessage(message: IMessage) {
    this.messages.push(message);
    // Через какое-то время убрать этот message из массива
  }
}

export const getToasterService =
  getInstanceFactory<CdekToasterService>(CdekToasterService);

export const useToasterService = useServiceFactory(
  getToasterService,
  CdekToasterService
);
