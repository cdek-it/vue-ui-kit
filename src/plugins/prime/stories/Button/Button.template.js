import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';

// Template for individual button variants
export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button
    v-bind="args"
    :size="args.size === 'xlarge' ? undefined : args.size"
    :class="args.size === 'xlarge' ? 'p-button-xlg' : ''"
  />`,
});

// Template for badge overlay
export const TemplateBadge = (args) => ({
  components: { OverlayBadge, Button },
  setup() {
    return { args };
  },
  template: `
<OverlayBadge :value="args.value" :severity="args.badgeSeverity || args.severity">
  <Button v-bind="args" />
</OverlayBadge>
`,
});

// Template for severity buttons (handled by Controls in Storybook)
export const TemplateSeverity = Template;

// Template for severity buttons with icons
export const TemplateSeverityWithIcons = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(5, max-content); gap: 20px; align-items: center;">
  <span></span>
  <span><code>danger</code></span>
  <span><code>warn</code></span>
  <span><code>success</code></span>
  <span><code>info</code></span>

  <span><code>icon prefix</code></span>
  <Button v-bind="args" severity="danger" label="Button" icon="ti ti-arrow-down-right" />
  <Button v-bind="args" severity="warn" label="Button" icon="ti ti-alert-triangle" />
  <Button v-bind="args" severity="success" label="Button" icon="ti ti-check" />
  <Button v-bind="args" severity="info" label="Button" icon="ti ti-info-circle" />

  <span><code>icon postfix</code></span>
  <Button v-bind="args" severity="danger" label="Button" icon="ti ti-arrow-down-right" iconPos="right" />
  <Button v-bind="args" severity="warn" label="Button" icon="ti ti-alert-triangle" iconPos="right" />
  <Button v-bind="args" severity="success" label="Button" icon="ti ti-check" iconPos="right" />
  <Button v-bind="args" severity="info" label="Button" icon="ti ti-info-circle" iconPos="right" />

  <span><code>icon only</code></span>
  <Button v-bind="args" severity="danger" icon="ti ti-arrow-down-right" />
  <Button v-bind="args" severity="warn" icon="ti ti-alert-triangle" />
  <Button v-bind="args" severity="success" icon="ti ti-check" />
  <Button v-bind="args" severity="info" icon="ti ti-info-circle" />
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

  <!-- Disabled States -->
  <div>
    <h3 style="margin-bottom: 20px;">Disabled States</h3>
    <div style="display: grid; grid-template-columns: repeat(5, max-content); gap: 15px; align-items: center;">
      <span></span>
      <span><code>default</code></span>
      <span><code>outlined</code></span>
      <span><code>text</code></span>
      <span><code>link</code></span>

      <span><code>xlarge</code></span>
      <Button label="Button" class="p-button-xlg" disabled />
      <Button label="Button" class="p-button-xlg" variant="outlined" disabled />
      <Button label="Button" class="p-button-xlg" variant="text" disabled />
      <Button label="Button" class="p-button-xlg" variant="link" disabled />

      <span><code>large</code></span>
      <Button label="Button" size="large" disabled />
      <Button label="Button" size="large" variant="text" disabled />
      <Button label="Button" size="large" variant="link" disabled />

      <span><code>base</code></span>
      <Button label="Button" disabled />
      <Button label="Button" variant="text" disabled />
      <Button label="Button" variant="link" disabled />

      <span><code>small</code></span>
      <Button label="Button" size="small" disabled />
      <Button label="Button" size="small" variant="text" disabled />
      <Button label="Button" size="small" variant="link" disabled />
    </div>
  </div>
</div>
`,
});
