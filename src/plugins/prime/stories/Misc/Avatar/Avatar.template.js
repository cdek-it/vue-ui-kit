import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import OverlayBadge from 'primevue/overlaybadge';

export const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const TemplateLabelBadge = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <OverlayBadge value="4" severity="danger">
        <Avatar label="U" size="xlarge" />
      </OverlayBadge>
      <OverlayBadge value="new" severity="info">
        <Avatar label="A" size="large" />
      </OverlayBadge>
    </div>
  `,
});

export const TemplateIconBadge = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <OverlayBadge severity="success">
        <Avatar icon="ti ti-user" size="xlarge" />
      </OverlayBadge>
      <OverlayBadge value="!" severity="warn">
        <Avatar icon="ti ti-bell" size="large" />
      </OverlayBadge>
    </div>
  `,
});

export const TemplateImageBadge = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <OverlayBadge severity="success">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
      </OverlayBadge>
      <OverlayBadge severity="danger">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
      </OverlayBadge>
    </div>
  `,
});

export const TemplateLabel = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <Avatar label="P" />
      <Avatar label="V" size="large" />
      <Avatar label="U" size="xlarge" />
    </div>
  `,
});

export const TemplateIcon = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <Avatar icon="ti ti-user" />
      <Avatar icon="ti ti-search" size="large" />
      <Avatar icon="ti ti-check" size="xlarge" />
    </div>
  `,
});

export const TemplateImage = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="xlarge" />
    </div>
  `,
});

export const TemplateGroup = (args) => ({
  components: { Avatar, AvatarGroup },
  setup() {
    return { args };
  },
  template: `
    <AvatarGroup>
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png" shape="circle" />
      <Avatar label="+2" shape="circle" />
    </AvatarGroup>
  `,
});

export const TemplateSizes = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-end gap-4">
      <Avatar label="M" />
      <Avatar label="L" size="large" />
      <Avatar label="XL" size="xlarge" />
    </div>
  `,
});

export const TemplateShapes = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <Avatar label="S" />
      <Avatar label="C" shape="circle" />
    </div>
  `,
});
