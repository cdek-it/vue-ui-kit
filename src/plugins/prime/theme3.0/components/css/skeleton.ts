const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовый скелетон — прямоугольник */
.p-skeleton {
  border-radius: ${dt('skeleton.root.borderRadius')};
  background: ${dt('skeleton.root.background')};
}

/* Анимация wave */
.p-skeleton::after {
  background: linear-gradient(
    90deg,
    transparent,
    ${dt('skeleton.root.animationBackground')},
    transparent
  );
}

/* Круглая форма */
.p-skeleton.p-skeleton-circle {
  border-radius: 50%;
}
`;

export default css;
