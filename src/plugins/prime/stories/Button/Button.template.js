import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';

export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>rounded</code></span>
  <span><code>variant="outlined"</code></span>
  <span><code>variant="text"</code></span>
  <span><code>disabled</code></span>
  <span><code>loading</code></span>

  <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
  <Button size="large" v-bind="args" />
  <Button size="large" rounded v-bind="args" />
  <Button size="large" variant="outlined" v-bind="args" />
  <Button size="large" variant="text" v-bind="args" />
  <Button size="large" disabled v-bind="args" />
  <Button size="large" loading v-bind="args" />

  <span></span>
  <Button v-bind="args" />
  <Button rounded v-bind="args" />
  <Button variant="outlined" v-bind="args" />
  <Button variant="text" v-bind="args" />
  <Button disabled v-bind="args" />
  <Button loading v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>size="small"</code></span>
  <Button size="small" v-bind="args" />
  <Button size="small" rounded v-bind="args" />
  <Button size="small" variant="outlined" v-bind="args" />
  <Button size="small" variant="text" v-bind="args" />
  <Button size="small" disabled v-bind="args" />
  <Button size="small" loading v-bind="args" />
</div>
`,
});

export const TemplateBadge = (args) => ({
  components: { OverlayBadge, Button },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '40px', rowGap: '20px', color: 'black', alignItems: 'center', justifyItems: 'center' }">
  <span><code>size="large"</code></span>
  <span></span>
  <span><code>size="small"</code></span>

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
