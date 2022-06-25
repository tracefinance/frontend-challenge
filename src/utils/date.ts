/**
 * Converts to a long date format, ex. 10 de novembro de 1970
 * TODO: Enforce Date format instead of string
 * */
export const toLongDate = (date: string, locale = 'pt-BR'): string => {
  const timezonefixed = fixDayOffDateProblem(date)
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
    timezonefixed,
  )
}

/**
 * Replaces slashes with dashes and reverses the order of a string
 * @param str date string in format dd/mm/yyyy
 * @returns date string in format yyyy-mm-dd
 */
export const formatDateString = (str: string) =>
  str.split('/').reverse().join('-')

/**
 * Fix the 1 day off javascript date problem with timezones (temporally)
 * TODO: Fix it in a better way
 * https://dev.to/zachgoll/a-complete-guide-to-javascript-dates-and-why-your-date-is-off-by-1-day-fi1
 */
function fixDayOffDateProblem(date: string) {
  const dayoff = new Date(date)
  const timezonefixed = new Date(
    dayoff.getTime() + dayoff.getTimezoneOffset() * 60000,
  )
  return timezonefixed
}
