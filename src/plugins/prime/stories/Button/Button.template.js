import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';

// Template for individual button variants
export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 20px; align-items: center;">
  <span><code>size="small"</code></span>
  <span><code>size="base"</code></span>
  <span><code>size="large"</code></span>
  <span><code>class="p-button-xlg"</code></span>

  <Button size="small" v-bind="args" />
  <Button v-bind="args" />
  <Button size="large" v-bind="args" />
  <Button class="p-button-xlg" v-bind="args" />
</div>
`,
});

// Template for badge overlay
export const TemplateBadge = (args) => ({
  components: { OverlayBadge, Button },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 40px; row-gap: 20px; align-items: center; justify-items: center;">
  <span><code>class="p-button-xlg"</code></span>
  <span><code>size="large"</code></span>
  <span></span>
  <span><code>size="small"</code></span>

  <OverlayBadge v-bind="args">
    <Button label="Button" class="p-button-xlg" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" size="large" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" size="small" />
  </OverlayBadge>
</div>
`,
});

// Complete variants matrix matching Figma design
export const TemplateVariants = () => ({
  components: { Button },
  template: `
<div style="display: flex; flex-direction: column; gap: 40px;">
  <!-- Primary Variant -->
  <div>
    <h3 style="margin-bottom: 20px;">Primary (Default)</h3>
    <div style="display: grid; grid-template-columns: repeat(8, max-content); gap: 15px; align-items: center;">
      <span></span>
      <span><code>default</code></span>
      <span><code>rounded</code></span>
      <span><code>text</code></span>
      <span><code>link</code></span>
      <span><code>disabled</code></span>
      <span><code>loading</code></span>
      <span><code>icon-only</code></span>

      <span><code>xlarge</code></span>
      <Button label="Button" class="p-button-xlg" />
      <Button label="Button" class="p-button-xlg" rounded />
      <Button label="Button" class="p-button-xlg" variant="text" />
      <Button label="Button" class="p-button-xlg" variant="link" />
      <Button label="Button" class="p-button-xlg" disabled />
      <Button label="Button" class="p-button-xlg" loading />
      <Button icon="ti ti-check" class="p-button-xlg" />

      <span><code>large</code></span>
      <Button label="Button" size="large" />
      <Button label="Button" size="large" rounded />
      <Button label="Button" size="large" variant="text" />
      <Button label="Button" size="large" variant="link" />
      <Button label="Button" size="large" disabled />
      <Button label="Button" size="large" loading />
      <Button icon="ti ti-check" size="large" />

      <span><code>base</code></span>
      <Button label="Button" />
      <Button label="Button" rounded />
      <Button label="Button" variant="text" />
      <Button label="Button" variant="link" />
      <Button label="Button" disabled />
      <Button label="Button" loading />
      <Button icon="ti ti-check" />

      <span><code>small</code></span>
      <Button label="Button" size="small" />
      <Button label="Button" size="small" rounded />
      <Button label="Button" size="small" variant="text" />
      <Button label="Button" size="small" variant="link" />
      <Button label="Button" size="small" disabled />
      <Button label="Button" size="small" loading />
      <Button icon="ti ti-check" size="small" />
    </div>
  </div>

  <!-- Secondary Variant -->
  <div>
    <h3 style="margin-bottom: 20px;">Secondary</h3>
    <div style="display: grid; grid-template-columns: repeat(8, max-content); gap: 15px; align-items: center;">
      <span></span>
      <span><code>default</code></span>
      <span><code>rounded</code></span>
      <span><code>text</code></span>
      <span><code>link</code></span>
      <span><code>disabled</code></span>
      <span><code>loading</code></span>
      <span><code>icon-only</code></span>

      <span><code>xlarge</code></span>
      <Button label="Button" class="p-button-xlg" severity="secondary" />
      <Button label="Button" class="p-button-xlg" severity="secondary" rounded />
      <Button label="Button" class="p-button-xlg" severity="secondary" variant="text" />
      <Button label="Button" class="p-button-xlg" severity="secondary" variant="link" />
      <Button label="Button" class="p-button-xlg" severity="secondary" disabled />
      <Button label="Button" class="p-button-xlg" severity="secondary" loading />
      <Button icon="ti ti-check" class="p-button-xlg" severity="secondary" />

      <span><code>large</code></span>
      <Button label="Button" size="large" severity="secondary" />
      <Button label="Button" size="large" severity="secondary" rounded />
      <Button label="Button" size="large" severity="secondary" variant="text" />
      <Button label="Button" size="large" severity="secondary" variant="link" />
      <Button label="Button" size="large" severity="secondary" disabled />
      <Button label="Button" size="large" severity="secondary" loading />
      <Button icon="ti ti-check" size="large" severity="secondary" />

      <span><code>base</code></span>
      <Button label="Button" severity="secondary" />
      <Button label="Button" severity="secondary" rounded />
      <Button label="Button" severity="secondary" variant="text" />
      <Button label="Button" severity="secondary" variant="link" />
      <Button label="Button" severity="secondary" disabled />
      <Button label="Button" severity="secondary" loading />
      <Button icon="ti ti-check" severity="secondary" />

      <span><code>small</code></span>
      <Button label="Button" size="small" severity="secondary" />
      <Button label="Button" size="small" severity="secondary" rounded />
      <Button label="Button" size="small" severity="secondary" variant="text" />
      <Button label="Button" size="small" severity="secondary" variant="link" />
      <Button label="Button" size="small" severity="secondary" disabled />
      <Button label="Button" size="small" severity="secondary" loading />
      <Button icon="ti ti-check" size="small" severity="secondary" />
    </div>
  </div>

  <!-- Tertiary Variant -->
  <div>
    <h3 style="margin-bottom: 20px;">Tertiary</h3>
    <div style="display: grid; grid-template-columns: repeat(8, max-content); gap: 15px; align-items: center;">
      <span></span>
      <span><code>default</code></span>
      <span><code>rounded</code></span>
      <span><code>text</code></span>
      <span><code>link</code></span>
      <span><code>disabled</code></span>
      <span><code>loading</code></span>
      <span><code>icon-only</code></span>

      <span><code>xlarge</code></span>
      <Button label="Button" class="p-button-xlg" severity="contrast" />
      <Button label="Button" class="p-button-xlg" severity="contrast" rounded />
      <Button label="Button" class="p-button-xlg" severity="contrast" variant="text" />
      <Button label="Button" class="p-button-xlg" severity="contrast" variant="link" />
      <Button label="Button" class="p-button-xlg" severity="contrast" disabled />
      <Button label="Button" class="p-button-xlg" severity="contrast" loading />
      <Button icon="ti ti-check" class="p-button-xlg" severity="contrast" />

      <span><code>large</code></span>
      <Button label="Button" size="large" severity="contrast" />
      <Button label="Button" size="large" severity="contrast" rounded />
      <Button label="Button" size="large" severity="contrast" variant="text" />
      <Button label="Button" size="large" severity="contrast" variant="link" />
      <Button label="Button" size="large" severity="contrast" disabled />
      <Button label="Button" size="large" severity="contrast" loading />
      <Button icon="ti ti-check" size="large" severity="contrast" />

      <span><code>base</code></span>
      <Button label="Button" severity="contrast" />
      <Button label="Button" severity="contrast" rounded />
      <Button label="Button" severity="contrast" variant="text" />
      <Button label="Button" severity="contrast" variant="link" />
      <Button label="Button" severity="contrast" disabled />
      <Button label="Button" severity="contrast" loading />
      <Button icon="ti ti-check" severity="contrast" />

      <span><code>small</code></span>
      <Button label="Button" size="small" severity="contrast" />
      <Button label="Button" size="small" severity="contrast" rounded />
      <Button label="Button" size="small" severity="contrast" variant="text" />
      <Button label="Button" size="small" severity="contrast" variant="link" />
      <Button label="Button" size="small" severity="contrast" disabled />
      <Button label="Button" size="small" severity="contrast" loading />
      <Button icon="ti ti-check" size="small" severity="contrast" />
    </div>
  </div>

  <!-- With Icons -->
  <div>
    <h3 style="margin-bottom: 20px;">With Icons (Primary)</h3>
    <div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 15px; align-items: center;">
      <span></span>
      <span><code>icon prefix</code></span>
      <span><code>icon postfix</code></span>
      <span><code>rounded</code></span>

      <span><code>xlarge</code></span>
      <Button icon="ti ti-check" label="Button" class="p-button-xlg" />
      <Button label="Button" icon="ti ti-arrow-right" iconPos="right" class="p-button-xlg" />
      <Button icon="ti ti-check" label="Button" class="p-button-xlg" rounded />

      <span><code>large</code></span>
      <Button icon="ti ti-check" label="Button" size="large" />
      <Button label="Button" icon="ti ti-arrow-right" iconPos="right" size="large" />
      <Button icon="ti ti-check" label="Button" size="large" rounded />

      <span><code>base</code></span>
      <Button icon="ti ti-check" label="Button" />
      <Button label="Button" icon="ti ti-arrow-right" iconPos="right" />
      <Button icon="ti ti-check" label="Button" rounded />

      <span><code>small</code></span>
      <Button icon="ti ti-check" label="Button" size="small" />
      <Button label="Button" icon="ti ti-arrow-right" iconPos="right" size="small" />
      <Button icon="ti ti-check" label="Button" size="small" rounded />
    </div>
  </div>
</div>
`,
});
