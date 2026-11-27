import ExtraButton from './ExtraButton.vue';
import OverlayBadge from 'primevue/overlaybadge';

// Template for individual button variants
export const Template = (args) => ({
  components: { ExtraButton },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 20px; align-items: center; justify-items: start;">
  <span><code>size="small"</code></span>
  <span><code>size="base"</code></span>
  <span><code>size="large"</code></span>
  <span><code>size="xlarge"</code></span>

  <ExtraButton size="small" v-bind="args" />
  <ExtraButton v-bind="args" />
  <ExtraButton size="large" v-bind="args" />
  <ExtraButton size="xlarge" v-bind="args" />
</div>
`,
});

// Template for badge overlay
export const TemplateBadge = (args) => ({
  components: { OverlayBadge, ExtraButton },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 40px; row-gap: 20px; align-items: center; justify-items: center;">
  <span><code>size="small"</code></span>
  <span><code>size="base"</code></span>
  <span><code>size="large"</code></span>
  <span><code>size="xlarge"</code></span>

  <OverlayBadge v-bind="args">
    <ExtraButton label="Button" size="small" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <ExtraButton label="Button" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <ExtraButton label="Button" size="large" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <ExtraButton label="Button" size="xlarge" />
  </OverlayBadge>
</div>
`,
});

// Template for severity buttons (all severity variants in a grid)
export const TemplateSeverity = (args) => ({
  components: { ExtraButton },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(5, max-content); gap: 20px; align-items: center;">
  <span></span>
  <span><code>success</code></span>
  <span><code>info</code></span>
  <span><code>warning</code></span>
  <span><code>danger</code></span>

  <span><code>small</code></span>
  <ExtraButton size="small" v-bind="args" severity="success" label="Button" />
  <ExtraButton size="small" v-bind="args" severity="info" label="Button" />
  <ExtraButton size="small" v-bind="args" severity="warning" label="Button" />
  <ExtraButton size="small" v-bind="args" severity="danger" label="Button" />

  <span><code>base</code></span>
  <ExtraButton v-bind="args" severity="success" label="Button" />
  <ExtraButton v-bind="args" severity="info" label="Button" />
  <ExtraButton v-bind="args" severity="warning" label="Button" />
  <ExtraButton v-bind="args" severity="danger" label="Button" />

  <span><code>large</code></span>
  <ExtraButton size="large" v-bind="args" severity="success" label="Button" />
  <ExtraButton size="large" v-bind="args" severity="info" label="Button" />
  <ExtraButton size="large" v-bind="args" severity="warning" label="Button" />
  <ExtraButton size="large" v-bind="args" severity="danger" label="Button" />

  <span><code>xlarge</code></span>
  <ExtraButton size="xlarge" v-bind="args" severity="success" label="Button" />
  <ExtraButton size="xlarge" v-bind="args" severity="info" label="Button" />
  <ExtraButton size="xlarge" v-bind="args" severity="warning" label="Button" />
  <ExtraButton size="xlarge" v-bind="args" severity="danger" label="Button" />
</div>
`,
});

// Template for severity buttons with icons
export const TemplateSeverityWithIcons = (args) => ({
  components: { ExtraButton },
  setup() {
    return { args };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(5, max-content); gap: 20px; align-items: center;">
  <span></span>
  <span><code>danger</code></span>
  <span><code>warning</code></span>
  <span><code>success</code></span>
  <span><code>info</code></span>

  <span><code>icon prefix</code></span>
  <ExtraButton v-bind="args" severity="danger" label="Button" icon="ti ti-arrow-down-right" />
  <ExtraButton v-bind="args" severity="warning" label="Button" icon="ti ti-alert-triangle" />
  <ExtraButton v-bind="args" severity="success" label="Button" icon="ti ti-check" />
  <ExtraButton v-bind="args" severity="info" label="Button" icon="ti ti-info-circle" />

  <span><code>icon postfix</code></span>
  <ExtraButton v-bind="args" severity="danger" label="Button" icon="ti ti-arrow-down-right" iconPosition="right" />
  <ExtraButton v-bind="args" severity="warning" label="Button" icon="ti ti-alert-triangle" iconPosition="right" />
  <ExtraButton v-bind="args" severity="success" label="Button" icon="ti ti-check" iconPosition="right" />
  <ExtraButton v-bind="args" severity="info" label="Button" icon="ti ti-info-circle" iconPosition="right" />

  <span><code>icon only</code></span>
  <ExtraButton v-bind="args" severity="danger" icon="ti ti-arrow-down-right" />
  <ExtraButton v-bind="args" severity="warning" icon="ti ti-alert-triangle" />
  <ExtraButton v-bind="args" severity="success" icon="ti ti-check" />
  <ExtraButton v-bind="args" severity="info" icon="ti ti-info-circle" />
</div>
`,
});

// Template for severity disabled states
export const TemplateSeverityDisabled = () => ({
  components: { ExtraButton },
  template: `
<div style="display: grid; grid-template-columns: repeat(5, max-content); gap: 20px; align-items: center;">
  <span></span>
  <span><code>success</code></span>
  <span><code>info</code></span>
  <span><code>warning</code></span>
  <span><code>danger</code></span>

  <span><code>default</code></span>
  <ExtraButton severity="success" label="Button" disabled />
  <ExtraButton severity="info" label="Button" disabled />
  <ExtraButton severity="warning" label="Button" disabled />
  <ExtraButton severity="danger" label="Button" disabled />

  <span><code>outlined</code></span>
  <ExtraButton severity="success" label="Button" disabled />
  <ExtraButton severity="info" label="Button" disabled />
  <ExtraButton severity="warning" label="Button" disabled />
  <ExtraButton severity="danger" label="Button" disabled />

  <span><code>text</code></span>
  <ExtraButton severity="success" label="Button" variant="text" disabled />
  <ExtraButton severity="info" label="Button" variant="text" disabled />
  <ExtraButton severity="warning" label="Button" variant="text" disabled />
  <ExtraButton severity="danger" label="Button" variant="text" disabled />
</div>
`,
});

// Complete variants matrix matching Figma design
export const TemplateVariants = () => ({
  components: { ExtraButton },
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
      <ExtraButton label="Button" size="xlarge" />
      <ExtraButton label="Button" size="xlarge" rounded />
      <ExtraButton label="Button" size="xlarge" variant="text" />
      <ExtraButton label="Button" size="xlarge" variant="link" />
      <ExtraButton label="Button" size="xlarge" disabled />
      <ExtraButton label="Button" size="xlarge" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="xlarge" />

      <span><code>large</code></span>
      <ExtraButton label="Button" size="large" />
      <ExtraButton label="Button" size="large" rounded />
      <ExtraButton label="Button" size="large" variant="text" />
      <ExtraButton label="Button" size="large" variant="link" />
      <ExtraButton label="Button" size="large" disabled />
      <ExtraButton label="Button" size="large" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="large" />

      <span><code>base</code></span>
      <ExtraButton label="Button" />
      <ExtraButton label="Button" rounded />
      <ExtraButton label="Button" variant="text" />
      <ExtraButton label="Button" variant="link" />
      <ExtraButton label="Button" disabled />
      <ExtraButton label="Button" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" />

      <span><code>small</code></span>
      <ExtraButton label="Button" size="small" />
      <ExtraButton label="Button" size="small" rounded />
      <ExtraButton label="Button" size="small" variant="text" />
      <ExtraButton label="Button" size="small" variant="link" />
      <ExtraButton label="Button" size="small" disabled />
      <ExtraButton label="Button" size="small" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="small" />
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
      <ExtraButton label="Button" size="xlarge" variant="secondary" />
      <ExtraButton label="Button" size="xlarge" variant="secondary" rounded />
      <ExtraButton label="Button" size="xlarge" variant="text" />
      <ExtraButton label="Button" size="xlarge" variant="link" />
      <ExtraButton label="Button" size="xlarge" variant="secondary" disabled />
      <ExtraButton label="Button" size="xlarge" variant="secondary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="xlarge" variant="secondary" />

      <span><code>large</code></span>
      <ExtraButton label="Button" size="large" variant="secondary" />
      <ExtraButton label="Button" size="large" variant="secondary" rounded />
      <ExtraButton label="Button" size="large" variant="text" />
      <ExtraButton label="Button" size="large" variant="link" />
      <ExtraButton label="Button" size="large" variant="secondary" disabled />
      <ExtraButton label="Button" size="large" variant="secondary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="large" variant="secondary" />

      <span><code>base</code></span>
      <ExtraButton label="Button" variant="secondary" />
      <ExtraButton label="Button" variant="secondary" rounded />
      <ExtraButton label="Button" variant="text" />
      <ExtraButton label="Button" variant="link" />
      <ExtraButton label="Button" variant="secondary" disabled />
      <ExtraButton label="Button" variant="secondary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" variant="secondary" />

      <span><code>small</code></span>
      <ExtraButton label="Button" size="small" variant="secondary" />
      <ExtraButton label="Button" size="small" variant="secondary" rounded />
      <ExtraButton label="Button" size="small" variant="text" />
      <ExtraButton label="Button" size="small" variant="link" />
      <ExtraButton label="Button" size="small" variant="secondary" disabled />
      <ExtraButton label="Button" size="small" variant="secondary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="small" variant="secondary" />
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
      <ExtraButton label="Button" size="xlarge" variant="tertiary" />
      <ExtraButton label="Button" size="xlarge" variant="tertiary" rounded />
      <ExtraButton label="Button" size="xlarge" variant="text" />
      <ExtraButton label="Button" size="xlarge" variant="link" />
      <ExtraButton label="Button" size="xlarge" variant="tertiary" disabled />
      <ExtraButton label="Button" size="xlarge" variant="tertiary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="xlarge" variant="tertiary" />

      <span><code>large</code></span>
      <ExtraButton label="Button" size="large" variant="tertiary" />
      <ExtraButton label="Button" size="large" variant="tertiary" rounded />
      <ExtraButton label="Button" size="large" variant="text" />
      <ExtraButton label="Button" size="large" variant="link" />
      <ExtraButton label="Button" size="large" variant="tertiary" disabled />
      <ExtraButton label="Button" size="large" variant="tertiary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="large" variant="tertiary" />

      <span><code>base</code></span>
      <ExtraButton label="Button" variant="tertiary" />
      <ExtraButton label="Button" variant="tertiary" rounded />
      <ExtraButton label="Button" variant="text" />
      <ExtraButton label="Button" variant="link" />
      <ExtraButton label="Button" variant="tertiary" disabled />
      <ExtraButton label="Button" variant="tertiary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" variant="tertiary" />

      <span><code>small</code></span>
      <ExtraButton label="Button" size="small" variant="tertiary" />
      <ExtraButton label="Button" size="small" variant="tertiary" rounded />
      <ExtraButton label="Button" size="small" variant="text" />
      <ExtraButton label="Button" size="small" variant="link" />
      <ExtraButton label="Button" size="small" variant="tertiary" disabled />
      <ExtraButton label="Button" size="small" variant="tertiary" loading />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="small" variant="tertiary" />
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
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="xlarge" />
      <ExtraButton label="Button" icon="ti ti-arrow-right" iconPosition="right" size="xlarge" />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="xlarge" rounded />

      <span><code>large</code></span>
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="large" />
      <ExtraButton label="Button" icon="ti ti-arrow-right" iconPosition="right" size="large" />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="large" rounded />

      <span><code>base</code></span>
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" />
      <ExtraButton label="Button" icon="ti ti-arrow-right" iconPosition="right" />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" rounded />

      <span><code>small</code></span>
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="small" />
      <ExtraButton label="Button" icon="ti ti-arrow-right" iconPosition="right" size="small" />
      <ExtraButton aria-label="Подтвердить" icon="ti ti-check" label="Button" size="small" rounded />
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
      <ExtraButton label="Button" size="xlarge" disabled />
      <ExtraButton label="Button" size="xlarge" disabled />
      <ExtraButton label="Button" size="xlarge" variant="text" disabled />
      <ExtraButton label="Button" size="xlarge" variant="link" disabled />

      <span><code>large</code></span>
      <ExtraButton label="Button" size="large" disabled />
      <ExtraButton label="Button" size="large" variant="text" disabled />
      <ExtraButton label="Button" size="large" variant="link" disabled />

      <span><code>base</code></span>
      <ExtraButton label="Button" disabled />
      <ExtraButton label="Button" variant="text" disabled />
      <ExtraButton label="Button" variant="link" disabled />

      <span><code>small</code></span>
      <ExtraButton label="Button" size="small" disabled />
      <ExtraButton label="Button" size="small" variant="text" disabled />
      <ExtraButton label="Button" size="small" variant="link" disabled />
    </div>
  </div>
</div>
`,
});
