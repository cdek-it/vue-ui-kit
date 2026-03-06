import Tag from 'primevue/tag';

// Template for individual tag variants
export const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: `
<div style="display: flex; gap: 12px; align-items: center;">
  <Tag v-bind="args" />
</div>
`,
});

// Complete variants matrix
export const TemplateVariants = () => ({
  components: { Tag },
  template: `
<div style="display: flex; flex-direction: column; gap: 40px;">
  <!-- Default Tags -->
  <div>
    <h3 style="margin-bottom: 20px;">Default</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag value="Primary" severity="primary" />
      <Tag value="Secondary" severity="secondary" />
      <Tag value="Success" severity="success" />
      <Tag value="Info" severity="info" />
      <Tag value="Warning" severity="warn" />
      <Tag value="Danger" severity="danger" />
    </div>
  </div>

  <!-- Rounded Tags -->
  <div>
    <h3 style="margin-bottom: 20px;">Rounded</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag value="Primary" severity="primary" rounded />
      <Tag value="Secondary" severity="secondary" rounded />
      <Tag value="Success" severity="success" rounded />
      <Tag value="Info" severity="info" rounded />
      <Tag value="Warning" severity="warn" rounded />
      <Tag value="Danger" severity="danger" rounded />
    </div>
  </div>

  <!-- Tags with Icons -->
  <div>
    <h3 style="margin-bottom: 20px;">With Icons</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag value="Primary" severity="primary" icon="ti ti-check" />
      <Tag value="Secondary" severity="secondary" icon="ti ti-info-circle" />
      <Tag value="Success" severity="success" icon="ti ti-check" />
      <Tag value="Info" severity="info" icon="ti ti-info-circle" />
      <Tag value="Warning" severity="warn" icon="ti ti-alert-triangle" />
      <Tag value="Danger" severity="danger" icon="ti ti-x" />
    </div>
  </div>

  <!-- Rounded Tags with Icons -->
  <div>
    <h3 style="margin-bottom: 20px;">Rounded with Icons</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag value="Primary" severity="primary" icon="ti ti-check" rounded />
      <Tag value="Secondary" severity="secondary" icon="ti ti-info-circle" rounded />
      <Tag value="Success" severity="success" icon="ti ti-check" rounded />
      <Tag value="Info" severity="info" icon="ti ti-info-circle" rounded />
      <Tag value="Warning" severity="warn" icon="ti ti-alert-triangle" rounded />
      <Tag value="Danger" severity="danger" icon="ti ti-x" rounded />
    </div>
  </div>

  <!-- Icon Only Tags -->
  <div>
    <h3 style="margin-bottom: 20px;">Icon Only</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag icon="ti ti-check" severity="primary" />
      <Tag icon="ti ti-info-circle" severity="secondary" />
      <Tag icon="ti ti-check" severity="success" />
      <Tag icon="ti ti-info-circle" severity="info" />
      <Tag icon="ti ti-alert-triangle" severity="warn" />
      <Tag icon="ti ti-x" severity="danger" />
    </div>
  </div>

  <!-- Icon Only Rounded Tags -->
  <div>
    <h3 style="margin-bottom: 20px;">Icon Only Rounded</h3>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <Tag icon="ti ti-check" severity="primary" rounded />
      <Tag icon="ti ti-info-circle" severity="secondary" rounded />
      <Tag icon="ti ti-check" severity="success" rounded />
      <Tag icon="ti ti-info-circle" severity="info" rounded />
      <Tag icon="ti ti-alert-triangle" severity="warn" rounded />
      <Tag icon="ti ti-x" severity="danger" rounded />
    </div>
  </div>
</div>
`,
});
