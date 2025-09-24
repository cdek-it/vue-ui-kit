import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

export const AvatarTemplate = (args) => ({
  components: { Avatar },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 35px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
    <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <Avatar label="U" size="xlarge" />
      <Avatar label="U" size="xlarge" shape="circle" />
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <Avatar label="U" size="large" />
      <Avatar label="U" size="large" shape="circle" />
      
      <span></span>
      <Avatar label="U" />
      <Avatar label="U" shape="circle" />
    </div>
  `,
});

export const AvatarIconTemplate = (args) => ({
  components: { Avatar },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 35px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
      <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <Avatar icon="ti ti-user" size="xlarge" />
      <Avatar icon="ti ti-user" size="xlarge" shape="circle" />
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <Avatar icon="ti ti-user" size="large" />
      <Avatar icon="ti ti-user" size="large" shape="circle" />
      
      <span></span>
      <Avatar icon="ti ti-user" />
      <Avatar icon="ti ti-user" shape="circle" />
    </div>
  `,
});

export const AvatarImageTemplate = (args) => ({
  components: { Avatar },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 35px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
      <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <Avatar image="assets/avatar.png" size="xlarge" />
      <Avatar image="assets/avatar.png" size="xlarge" shape="circle" />
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <Avatar image="assets/avatar.png" size="large" />
      <Avatar image="assets/avatar.png" size="large" shape="circle" />
      
      <span></span>
      <Avatar image="assets/avatar.png" />
      <Avatar image="assets/avatar.png" shape="circle" />
    </div>
  `,
});

export const AvatarBadgeTemplate = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 55px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
    <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <OverlayBadge value="Badge" severity="primary">
        <Avatar label="U" size="xlarge" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="info">
        <Avatar label="U" size="xlarge" shape="circle" />
      </OverlayBadge>
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <OverlayBadge value="Badge" severity="secondary">
        <Avatar label="U" size="large" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="warn">
        <Avatar label="U" size="large" shape="circle" />
      </OverlayBadge>
      
      <span></span>
      <OverlayBadge value="Badge" severity="info">
        <Avatar label="U" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="danger">
        <Avatar label="U" shape="circle" />
      </OverlayBadge>
    </div>
  `,
});

export const AvatarIconBadgeTemplate = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 55px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
    <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <OverlayBadge value="Badge" severity="primary">
        <Avatar icon="ti ti-user" size="xlarge" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="info">
        <Avatar icon="ti ti-user" size="xlarge" shape="circle" />
      </OverlayBadge>
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <OverlayBadge value="Badge" severity="secondary">
        <Avatar icon="ti ti-user" size="large" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="warn">
        <Avatar icon="ti ti-user" size="large" shape="circle" />
      </OverlayBadge>
      
      <span></span>
      <OverlayBadge value="Badge" severity="info">
        <Avatar icon="ti ti-user" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="danger">
        <Avatar icon="ti ti-user" shape="circle" />
      </OverlayBadge>
    </div>
  `,
});

export const AvatarImageBadgeTemplate = (args) => ({
  components: { Avatar, OverlayBadge },
  setup() {
    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '15px 55px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    return { args, containerStyles };
  },
  template: `
    <div :style="containerStyles">
      <span></span>
      <span></span>
      <span>rounded</span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="xlarge"</code></span>
      <OverlayBadge value="Badge" severity="primary">
        <Avatar image="assets/avatar.png" size="xlarge" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="info">
        <Avatar image="assets/avatar.png" size="xlarge" shape="circle" />
      </OverlayBadge>
      
      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <OverlayBadge value="Badge" severity="secondary">
        <Avatar image="assets/avatar.png" size="large" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="warn">
        <Avatar image="assets/avatar.png" size="large" shape="circle" />
      </OverlayBadge>
      
      <span></span>
      <OverlayBadge value="Badge" severity="info">
        <Avatar image="assets/avatar.png" />
      </OverlayBadge>
      <OverlayBadge value="Badge" severity="danger">
        <Avatar image="assets/avatar.png" shape="circle" />
      </OverlayBadge>
    </div>
  `,
});
