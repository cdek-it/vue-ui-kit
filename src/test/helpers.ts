export const dti = (id: string) => `[data-test-id="${id}"]`;

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};
