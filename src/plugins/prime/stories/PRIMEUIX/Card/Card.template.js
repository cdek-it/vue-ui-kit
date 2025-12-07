import Card from 'primevue/card';
import Button from 'primevue/button';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Card, Button },
  template: `
    <div class="flex justify-center p-4">
      <Card class="w-full md:w-96">
        <template #title>Простая карточка</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>
  `
});

// С подзаголовком
export const SubtitleTemplate = () => ({
  components: { Card, Button },
  template: `
    <div class="flex justify-center p-4">
      <Card class="w-full md:w-96">
        <template #title>Заголовок</template>
        <template #subtitle>Подзаголовок</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>
  `
});

// Расширенная
export const AdvancedTemplate = () => ({
  components: { Card, Button },
  template: `
    <div class="flex justify-center p-4">
      <Card class="w-full md:w-96">
        <template #header>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Расширенная карточка</template>
        <template #subtitle>Подзаголовок карточки</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 justify-end">
            <Button label="Отменить" severity="secondary" text />
            <Button label="Сохранить" />
          </div>
        </template>
      </Card>
    </div>
  `
});

