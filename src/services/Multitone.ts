type ScopedInstancesType = {
  [key: string]: object;
};

/**
 * Добавляет сервисные поля для хранения экземпляров класса
 *
 * @example
 * class SomeService extends Multitone { }
 */
export default class Multitone {
  /**
   * экземпляр класса
   */
  static instance: object | null = null;

  /**
   * объект для хранения экземпляров по ключу
   */
  static scopedInstances: ScopedInstancesType = {};

  init() {
    // Для асинхронных действий в инициализации при использовании во Vue компонентах
  }
}

/**
 * Фабрика для создания функции типа InstanceGetter для переданного класса
 * Использует поля из Multitone
 *
 * @param Service - ваш класс
 *
 * @example
 * class SomeService extends Multitone { }
 * const getInstance = getInstanceFactory<SomeService>(SomeService)
 */
export const getInstanceFactory =
  <T>(Service: any) =>
  /**
   * Отдает существующий или новый экземпляр класса (если существующий еще не создан)
   *
   * @param key - ключ для получения именнованного экземпляря, иначе отдает общий
   * @returns требуемый экземпляр класса
   */
  (key: string = '') => {
    if (key) {
      return (Service.scopedInstances[key] ||
        (Service.scopedInstances[key] = new Service())) as T;
    }

    return (Service.instance || (Service.instance = new Service())) as T;
  };

/**
 * Фабрика для создания функции уничтожении экземпляров
 * Использует поля из Multitone
 *
 * @param Service - ваш класс
 */
export const destroyFactory =
  (Service: any) =>
  /**
   * Уничтожение базового экземпляра или по ключам
   *
   * @param keys - если не передано ничего, то уничтожаем базовый,
   *  если переданы строки через запятую, то уничтожаем все экземпляры
   *
   * @example
   * destroyServiceName();
   * destroyServiceName('someKey');
   * destroyServiceName('someKey', 'someAnotherKey');
   */
  (...keys: string[]) => {
    if (keys.length > 0) {
      for (const key of keys) {
        delete Service.scopedInstances[key];
      }
    } else {
      Service.instance = null;
    }
  };
