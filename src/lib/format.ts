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

const SHORT_TIMESTAMP_FORMATTER = new Intl.DateTimeFormat('id-ID', {
  timeStyle: 'short'
});

const LONG_TIMESTAMP_FORMATTER = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'short'
});

const FULL_TIMESTAMP_FORMATTER = new Intl.DateTimeFormat('id-ID', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

/**
 * Get a full formatted date from a Firestore timestamp.
 *
 * @param timestamp The timestamp to format.
 * @returns A formatted date string.
 */

/**
 * Returns a converted date from a Firestore timestamp.
 */

/**
 * Returns a boolean whether the given date is today.
 */
function dateIsToday(date: Date): boolean {
  return new Date().toDateString() === date.toDateString();
}

/**
 * Returns a boolean whether the given date is yesterday.
 */
function dateIsYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday.toDateString() === date.toDateString();
}
