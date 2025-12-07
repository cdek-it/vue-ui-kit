import Skeleton from 'primevue/skeleton';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Skeleton },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-col gap-4 w-full md:w-96">
        <Skeleton />
        <Skeleton width="75%" />
        <Skeleton width="50%" />
      </div>
    </div>
  `
});

// Формы
export const ShapesTemplate = () => ({
  components: { Skeleton },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex gap-4">
        <Skeleton shape="square" size="4rem" />
        <Skeleton shape="circle" size="4rem" />
      </div>
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { Skeleton },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex gap-4 items-end">
        <Skeleton shape="circle" size="3rem" />
        <Skeleton shape="circle" size="4rem" />
        <Skeleton shape="circle" size="5rem" />
      </div>
    </div>
  `
});

// Карточка
export const CardTemplate = () => ({
  components: { Skeleton },
  template: `
    <div class="flex justify-center p-4">
      <div class="border border-surface-200 rounded-lg p-4 w-full md:w-96">
        <div class="flex mb-4">
          <Skeleton shape="circle" size="4rem" class="mr-2" />
          <div class="flex-1">
            <Skeleton width="100%" class="mb-2" />
            <Skeleton width="75%" />
          </div>
        </div>
        <Skeleton width="100%" height="150px" />
        <div class="flex justify-between mt-4">
          <Skeleton width="4rem" height="2rem" />
          <Skeleton width="4rem" height="2rem" />
        </div>
      </div>
    </div>
  `
});

// Список
export const ListTemplate = () => ({
  components: { Skeleton },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <div v-for="i in 5" :key="i" class="flex items-center p-4 border-b border-surface-200">
          <Skeleton shape="circle" size="4rem" class="mr-4" />
          <div class="flex-1">
            <Skeleton width="100%" class="mb-2" />
            <Skeleton width="75%" />
          </div>
        </div>
      </div>
    </div>
  `
});

