import Skeleton from 'primevue/skeleton';

export const TemplateRectangles = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-col gap-3">
      <Skeleton :animation="args.animation" height="1rem" />
      <Skeleton :animation="args.animation" height="1rem" width="75%" />
      <Skeleton :animation="args.animation" height="1rem" width="50%" />
    </div>
  `,
});

export const TemplateCircle = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center gap-4">
      <Skeleton :animation="args.animation" shape="circle" size="3rem" />
      <Skeleton :animation="args.animation" shape="circle" size="4rem" />
      <Skeleton :animation="args.animation" shape="circle" size="6rem" />
    </div>
  `,
});

export const TemplateCard = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex gap-4">
      <Skeleton :animation="args.animation" shape="circle" size="4rem" class="flex-shrink-0" />
      <div class="flex flex-col gap-2 flex-1">
        <Skeleton :animation="args.animation" height="1rem" width="60%" />
        <Skeleton :animation="args.animation" height="0.75rem" width="40%" />
        <Skeleton :animation="args.animation" height="0.75rem" />
      </div>
    </div>
  `,
});

export const TemplateNoAnimation = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-col gap-3">
      <Skeleton :animation="args.animation" height="1rem" />
      <Skeleton :animation="args.animation" height="1rem" width="75%" />
      <Skeleton :animation="args.animation" shape="circle" size="4rem" />
    </div>
  `,
});
