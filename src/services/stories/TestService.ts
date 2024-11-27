import { getInstanceFactory, Multitone, useServiceFactory } from '@/services';

class TestService extends Multitone {
  checkInstance?: boolean;
  name = 'test';
  firstname = 'testov';

  get completeName() {
    return this.name + ' ' + this.firstname;
  }

  getThis() {
    this.checkInstance = this instanceof TestService;

    return this;
  }
}

export const getTestService = getInstanceFactory<TestService>(TestService);

export const useTestService = useServiceFactory<TestService>(
  getTestService,
  TestService
);
