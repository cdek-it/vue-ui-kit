import Button from 'primevue/button';

// Template for individual tooltip variants
export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
<div style="display: flex; gap: 20px; align-items: center; justify-content: center; padding: 40px;">
  <Button v-tooltip="args.text || 'Tooltip text'" :label="args.label || 'Hover me'" />
</div>
`,
});

// Complete variants matrix
export const TemplateVariants = () => ({
  components: { Button },
  template: `
<div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
  <!-- Default Tooltip -->
  <div>
    <h3 style="margin-bottom: 20px;">Default</h3>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <Button v-tooltip="'Short tooltip'" label="Short text" />
      <Button v-tooltip="'This is a longer tooltip with more information'" label="Long text" />
      <Button v-tooltip="'Tooltip with very long text that should wrap to multiple lines when it exceeds the maximum width'" label="Very long text" />
    </div>
  </div>

  <!-- Tooltip Positions -->
  <div>
    <h3 style="margin-bottom: 20px;">Positions</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; place-items: center;">
      <Button v-tooltip.top="'Top tooltip'" label="Top" />
      <Button v-tooltip.bottom="'Bottom tooltip'" label="Bottom" />
      <Button v-tooltip.left="'Left tooltip'" label="Left" />
      <Button v-tooltip.right="'Right tooltip'" label="Right" />
    </div>
  </div>

  <!-- Tooltip with Different Severities -->
  <div>
    <h3 style="margin-bottom: 20px;">With Different Button Severities</h3>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <Button v-tooltip="'Primary button tooltip'" label="Primary" severity="primary" />
      <Button v-tooltip="'Secondary button tooltip'" label="Secondary" severity="secondary" />
      <Button v-tooltip="'Success button tooltip'" label="Success" severity="success" />
      <Button v-tooltip="'Info button tooltip'" label="Info" severity="info" />
      <Button v-tooltip="'Warning button tooltip'" label="Warning" severity="warn" />
      <Button v-tooltip="'Danger button tooltip'" label="Danger" severity="danger" />
    </div>
  </div>

  <!-- Tooltip on Icon Buttons -->
  <div>
    <h3 style="margin-bottom: 20px;">On Icon Buttons</h3>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <Button v-tooltip="'Edit'" icon="ti ti-pencil" />
      <Button v-tooltip="'Delete'" icon="ti ti-trash" severity="danger" />
      <Button v-tooltip="'Settings'" icon="ti ti-settings" severity="secondary" />
      <Button v-tooltip="'Download'" icon="ti ti-download" severity="success" />
    </div>
  </div>
</div>
`,
});
