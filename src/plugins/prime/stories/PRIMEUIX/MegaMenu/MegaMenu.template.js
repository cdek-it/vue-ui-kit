import MegaMenu from 'primevue/megamenu';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { MegaMenu },
  setup() {
    const items = ref([
      {
        label: 'Мебель',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Гостиная',
              items: [
                { label: 'Диван' },
                { label: 'Кресло' },
                { label: 'Стол' }
              ]
            }
          ],
          [
            {
              label: 'Спальня',
              items: [
                { label: 'Кровать' },
                { label: 'Шкаф' },
                { label: 'Тумбочка' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Электроника',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Компьютер',
              items: [
                { label: 'Ноутбук' },
                { label: 'Клавиатура' },
                { label: 'Мышь' }
              ]
            }
          ],
          [
            {
              label: 'Телефоны',
              items: [
                { label: 'Смартфон' },
                { label: 'Планшет' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Спорт',
        icon: 'pi pi-heart'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <MegaMenu :model="items" class="w-full" />
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { MegaMenu },
  setup() {
    const items = ref([
      {
        label: 'Мебель',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Гостиная',
              items: [
                { label: 'Диван' },
                { label: 'Кресло' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Электроника',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Компьютер',
              items: [
                { label: 'Ноутбук' },
                { label: 'Клавиатура' }
              ]
            }
          ]
        ]
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <MegaMenu :model="items" orientation="vertical" class="w-80" />
    </div>
  `
});

