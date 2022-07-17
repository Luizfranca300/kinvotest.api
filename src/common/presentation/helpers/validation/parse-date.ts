export function parseDate(value: any): Date {
  if (!value) return value;

  if (value instanceof Date) return value;

  return new Date(value);
}
