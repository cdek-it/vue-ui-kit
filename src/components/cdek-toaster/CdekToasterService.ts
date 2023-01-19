import Multitone, { getInstanceFactory } from '@/services/Multitone';
import useServiceFactory from '@/services/useServiceFactory';

interface Message {
  text: string;
  type: 'info' | 'success' | 'error';
}

class CdekToasterService extends Multitone {
  messages: Message[] = [];

  showMessage(message: Message) {
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
