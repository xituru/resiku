/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
export const getTimezoneOffsetInMilliseconds = (dt: Date = new Date()) => {
  const utcDate = new Date(
    Date.UTC(
      dt.getFullYear(),
      dt.getMonth(),
      dt.getDate(),
      dt.getHours(),
      dt.getMinutes(),
      dt.getSeconds(),
      dt.getMilliseconds()
    )
  );

  utcDate.setUTCFullYear(dt.getFullYear());

  return dt.getTime() - utcDate.getTime();
};

export default getTimezoneOffsetInMilliseconds;
