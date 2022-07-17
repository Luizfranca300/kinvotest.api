export function parseInteger(value: any): number {
  const isNumeric = ((): boolean => {
    const typeIsValid = ['string', 'number'].includes(typeof value);
    const regexMatch = /^-?\d+$/.test(value);
    const finite = isFinite(value);

    return typeIsValid && regexMatch && finite;
  })();

  if (!isNumeric) return value;

  return parseInt(value, 10);
}
