import Button from 'primevue/button';
import Card from 'primevue/card';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex gap-3">
        <Button v-ripple label="По умолчанию" />
        <Button v-ripple label="Успех" severity="success" />
        <Button v-ripple label="Инфо" severity="info" />
      </div>
    </div>
  `
});

// На карточке
export const CardTemplate = () => ({
  components: { Card },
  template: `
    <div class="flex justify-center p-4">
      <Card v-ripple class="w-96 cursor-pointer">
        <template #title>Карточка с Ripple</template>
        <template #content>
          <p class="m-0">
            Кликните на карточку, чтобы увидеть эффект ripple.
          </p>
        </template>
      </Card>
    </div>
  `
});

// Пользовательский цвет
export const CustomColorTemplate = () => ({
  components: { Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex gap-3">
        <Button 
          v-ripple="{ class: 'bg-red-400' }" 
          label="Красный ripple" 
          severity="secondary"
        />
        <Button 
          v-ripple="{ class: 'bg-green-400' }" 
          label="Зеленый ripple" 
          severity="secondary"
        />
        <Button 
          v-ripple="{ class: 'bg-blue-400' }" 
          label="Синий ripple" 
          severity="secondary"
        />
      </div>
    </div>
  `
});

