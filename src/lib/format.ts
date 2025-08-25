const NUMBER_FORMATTER = new Intl.NumberFormat();

/**
 * Returns a formatted number string with thousand separators.
 */
export function formatNumber(numberValue: number): string {
  return NUMBER_FORMATTER.format(numberValue);
}

const DATE_FORMATTER = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'long'
});

/**
 * Get a formatted date string.
 *
 * @param dateString a string in `YYYY-MM-DD` format.
 * @returns a formatted date string.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return DATE_FORMATTER.format(date);
}
