import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';

export const Template = (args) => ({
  components: { InputGroup, InputGroupAddon, InputText },
  setup() {
    return { args };
  },
  template: `
<div>
  <InputGroup v-if="args.icon === 'left'">
    <InputGroupAddon>
        <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="InputText" />
  </InputGroup>

  <InputGroup v-else-if="args.icon === 'right'">
    <InputText placeholder="InputText" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>

  <InputGroup v-else>
    <InputGroupAddon>
        <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="InputText" />
    <InputGroupAddon>
        <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
</div>
`,
});
