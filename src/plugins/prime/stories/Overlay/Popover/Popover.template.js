import { ref } from 'vue';
import Popover from 'primevue/popover';
import Button from 'primevue/button';

// Template for individual popover variants
export const Template = (args) => ({
  components: { Popover, Button },
  setup() {
    const op = ref();

    const toggle = (event) => {
      op.value.toggle(event);
    };

    return { args, op, toggle };
  },
  template: `
<div style="display: flex; justify-content: center; align-items: center; min-height: 200px;">
  <Button 
    type="button" 
    :label="args.buttonLabel || 'Toggle'" 
    @click="toggle" 
  />
  
  <Popover 
    ref="op"
    v-bind="args"
  >
    <div style="padding: 1rem;">
      <p style="margin: 0;">{{ args.content || 'Popover content' }}</p>
    </div>
  </Popover>
</div>
`,
});

// Template for position and alignment matrix
export const TemplateMatrix = () => ({
  components: { Popover, Button },
  setup() {
    const popoverRefs = ref({});

    const positions = ['top', 'bottom', 'left', 'right'];
    const alignments = ['start', 'center', 'end'];

    const toggle = (position, alignment, event) => {
      const key = `${position}-${alignment}`;
      if (popoverRefs.value[key]) {
        popoverRefs.value[key].toggle(event);
      }
    };

    const setRef = (position, alignment) => (el) => {
      const key = `${position}-${alignment}`;
      popoverRefs.value[key] = el;
    };

    return { positions, alignments, toggle, setRef };
  },
  template: `
<div style="padding: 40px;">
  <h3 style="margin-bottom: 20px;">Popover Positions & Alignments</h3>
  
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;">
    <template v-for="position in positions" :key="position">
      <div>
        <h4 style="margin-bottom: 16px; text-transform: capitalize;">{{ position }}</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <template v-for="alignment in alignments" :key="alignment">
            <div>
              <Button 
                :label="\`\${alignment}\`" 
                @click="(e) => toggle(position, alignment, e)"
                size="small"
                style="width: 100%;"
              />
              <Popover 
                :ref="setRef(position, alignment)"
                :position="position"
                :align="alignment"
              >
                <div style="padding: 0.75rem; min-width: 150px;">
                  <p style="margin: 0; font-size: 14px;">
                    <strong>{{ position }}</strong> / {{ alignment }}
                  </p>
                </div>
              </Popover>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</div>
`,
});

// Template for content variations
export const TemplateContent = () => ({
  components: { Popover, Button },
  setup() {
    const opShort = ref();
    const opMedium = ref();
    const opLong = ref();
    const opCustom = ref();

    return { opShort, opMedium, opLong, opCustom };
  },
  template: `
<div style="display: flex; gap: 20px; justify-content: center; align-items: center; min-height: 300px; flex-wrap: wrap;">
  <div>
    <Button label="Short Content" @click="(e) => opShort.toggle(e)" />
    <Popover ref="opShort">
      <div style="padding: 0.75rem;">
        <p style="margin: 0;">Short text</p>
      </div>
    </Popover>
  </div>

  <div>
    <Button label="Medium Content" @click="(e) => opMedium.toggle(e)" />
    <Popover ref="opMedium">
      <div style="padding: 1rem; max-width: 250px;">
        <p style="margin: 0;">
          This is a medium-length content that demonstrates how the popover handles multiple lines of text.
        </p>
      </div>
    </Popover>
  </div>

  <div>
    <Button label="Long Content" @click="(e) => opLong.toggle(e)" />
    <Popover ref="opLong">
      <div style="padding: 1rem; max-width: 300px;">
        <p style="margin: 0 0 0.5rem 0;">
          This is a longer content example that shows how the popover component handles extensive text content with proper wrapping and spacing.
        </p>
        <p style="margin: 0;">
          Multiple paragraphs are also supported within the popover content area.
        </p>
      </div>
    </Popover>
  </div>

  <div>
    <Button label="Custom Content" @click="(e) => opCustom.toggle(e)" />
    <Popover ref="opCustom">
      <div style="padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 16px;">Custom Header</h4>
        <p style="margin: 0 0 0.75rem 0; color: #666;">
          You can add any custom content here.
        </p>
        <div style="display: flex; gap: 8px;">
          <Button label="Action 1" size="small" />
          <Button label="Action 2" size="small" severity="secondary" />
        </div>
      </div>
    </Popover>
  </div>
</div>
`,
});
