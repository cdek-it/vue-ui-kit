import { shallowRef } from 'vue';
import Multitone, { getInstanceFactory } from '../../../services/Multitone';
import useServiceFactory from '../../../services/useServiceFactory';
import type { IModalProps } from '../CdekModal.vue';

class ModalService extends Multitone {
  isOpen = false;
  modalData: IModalProps = {} as IModalProps;

  openModal<T>(
    component: IModalProps['component'],
    propsAndSettings?: Omit<IModalProps<T>, 'component'>
  ) {
    this.modalData = {
      component: shallowRef(component),
      props: propsAndSettings?.props,
      settings: propsAndSettings?.settings,
    };
    this.isOpen = true;
  }

  closeModal() {
    this.modalData = {} as IModalProps;
    this.isOpen = false;
  }
}

const getModalService = getInstanceFactory<ModalService>(ModalService);
const useModalService = useServiceFactory<ModalService>(
  getModalService,
  ModalService
);

export { useModalService };
