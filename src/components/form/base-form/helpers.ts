export function trimForm<F>(valuesOrig: any) {
  const values = { ...valuesOrig };

  for (const key in values) {
    if (typeof values[key] === 'string') {
      values[key] = (values[key] as unknown as string).trim();
    }
  }

  return values as F;
}
