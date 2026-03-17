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
        <Avatar image="https://i.pravatar.cc/300?u=a" size="xlarge" shape="circle" />
      </OverlayBadge>
      <OverlayBadge severity="danger">
        <Avatar image="https://i.pravatar.cc/300?u=b" size="large" />

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
      <Avatar image="https://i.pravatar.cc/300?u=a" />
      <Avatar image="https://i.pravatar.cc/300?u=b" size="large" />
      <Avatar image="https://i.pravatar.cc/300?u=c" size="xlarge" />
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
      <Avatar image="https://i.pravatar.cc/300?u=a" shape="circle" />
      <Avatar image="https://i.pravatar.cc/300?u=b" shape="circle" />
      <Avatar image="https://i.pravatar.cc/300?u=c" shape="circle" />
      <Avatar image="https://i.pravatar.cc/300?u=d" shape="circle" />
      <Avatar image="https://i.pravatar.cc/300?u=e" shape="circle" />
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
