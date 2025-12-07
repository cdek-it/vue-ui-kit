import Badge from 'primevue/badge';
import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Badge },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Badge value="2" />
        <Badge value="8" severity="success" />
        <Badge value="4" severity="info" />
        <Badge value="12" severity="warn" />
        <Badge value="3" severity="danger" />
      </div>
    </div>
  `
});

// Иконка
export const IconTemplate = () => ({
  components: { Badge, Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Button type="button" label="Электронная почта" icon="ti ti-inbox" v-badge="2" />
        <Button type="button" label="Сообщения" icon="ti ti-inbox" severity="secondary" v-badge.danger="8" />
      </div>
    </div>
  `
});

// Размеры
export const SizesTemplate = () => ({
  components: { Badge },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4 items-end">
        <Badge value="6" size="xlarge" />
        <Badge value="4" size="large" />
        <Badge value="2" />
      </div>
    </div>
  `
});

// Без значения
export const DotTemplate = () => ({
  components: { Badge, Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Badge severity="info" />
        <Button type="button" label="Новые уведомления" icon="ti ti-bell" v-badge.danger />
      </div>
    </div>
  `
});

// Позиция
export const PositionTemplate = () => ({
  components: { Badge, Button },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Button type="button" icon="ti ti-bell" v-badge="2" />
        <Button type="button" icon="ti ti-bell" v-badge.danger="5" />
        <Button type="button" icon="ti ti-bell" severity="secondary" v-badge.success />
      </div>
    </div>
  `
});

// Модификаторы тяжести
export const SeverityTemplate = () => ({
  components: { Badge },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-4">
        <Badge value="Primary" />
        <Badge value="Success" severity="success" />
        <Badge value="Info" severity="info" />
        <Badge value="Warn" severity="warn" />
        <Badge value="Danger" severity="danger" />
        <Badge value="Secondary" severity="secondary" />
        <Badge value="Contrast" severity="contrast" />
      </div>
    </div>
  `
});

// Overlay
export const OverlayTemplate = () => ({
  components: { OverlayBadge },
  template: `
    <div class="card flex flex-wrap justify-center gap-6">
      <OverlayBadge value="2">
        <i class="ti ti-bell" style="font-size: 2rem" />
      </OverlayBadge>
      <OverlayBadge value="4" severity="danger">
        <i class="ti ti-calendar" style="font-size: 2rem" />
      </OverlayBadge>
      <OverlayBadge severity="danger">
        <i class="ti ti-mail" style="font-size: 2rem" />
      </OverlayBadge>
    </div>
  `
});

