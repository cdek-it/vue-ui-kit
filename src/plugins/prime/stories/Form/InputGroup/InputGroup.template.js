import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

export const Template = (args) => ({
  components: { InputText, InputGroup, InputGroupAddon },
  setup() {
    return { args };
  },
  template: `
    <InputGroup :class="{ 'p-inputgroup-xlg': args.size === 'xlarge' }">
      <InputGroupAddon v-if="args.leftIcon || args.leftText">
        <i v-if="args.leftIcon" :class="args.leftIcon"></i>
        <span v-else>{{ args.leftText }}</span>
      </InputGroupAddon>
      
      <InputText 
        v-bind="args" 
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
        style="width: 100%"
      />
      
      <InputGroupAddon v-if="args.rightIcon || args.rightText">
        <i v-if="args.rightIcon" :class="args.rightIcon"></i>
        <span v-else>{{ args.rightText }}</span>
      </InputGroupAddon>
    </InputGroup>
  `,
});
