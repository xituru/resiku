import { addLeadingZeros } from '../add-leading-zero';
import defaultLocalize from './locale/en-US/localize';

export const formatters = {
  // Era
  G: eraFormatter,

  // Year
  y: yearFormatter,

  // Extended year
  u: extendedYearFormatter,

  // Quarter
  Q: quarterFormatter,

  // Standalone quarter
  q: standAloneQuarterFormatter,

  // Month
  M: monthFormatter,

  // Standalone month
  L: standAloneMonthFormatter,

  // Day of the month
  d: dayOfMonthFormatter,

  // Day of week
  E: dayOfWeekFormatter,

  // ISO day of week
  i: dayOfWeekIsoFormatter,

  // Hour [1-12]
  h: twelveHourFormatter,

  // Hour [0-23]
  H: twentyFourHourFormatter,

  // Minute
  m: minuteFormatter,

  // Second
  s: secondFormatter,

  // Fraction of second
  S: fractionOfSecondFormatter,

  // Abbreviated (AM or PM)
  a: abbreviatedHourFormatter,
};

const defaultLocalizeMap = {
  1: 'abbreviated',
  2: 'abbreviated',
  3: 'abbreviated',
  4: 'wide',
  5: 'narrow',
  6: 'short',
};

const defaultLocalizeMapLen = Object.keys(defaultLocalizeMap).length;

function eraFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  const era = dt.getUTCFullYear() > 0 ? 1 : 0;
  const eraWidthMap = {
    ...defaultLocalizeMap,
    6: 'wide',
  };

  return localize.era(era, {
    width: eraWidthMap[<keyof typeof eraWidthMap>fragment.length] || 'wide',
  });
}

function yearFormatter(dt: Date, fragment: string) {
  const originYear = dt.getFullYear();

  // Returns 1 for Year 0
  const year = originYear > 0 ? originYear : 1 - originYear;
  return addLeadingZeros(
    fragment === 'yy' ? year % 100 : year,
    fragment.length
  );
}

function extendedYearFormatter(dt: Date, fragment: string) {
  return addLeadingZeros(dt.getUTCFullYear(), fragment.length);
}

function quarterFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize,
  context?: string
) {
  const quarter = Math.ceil((dt.getUTCMonth() + 1) / 3);

  if (fragment === 'Qo') return localize.ordinalNumber(quarter);

  if (fragment.length <= 2 || fragment.length >= defaultLocalizeMapLen)
    return fragment.length === 1
      ? String(quarter)
      : addLeadingZeros(quarter, fragment.length);

  const quarterWidthMap = {
    ...defaultLocalizeMap,
  };

  return localize.quarter(quarter, {
    width:
      quarterWidthMap[<keyof typeof quarterWidthMap>fragment.length] || 'wide',
    context: context || 'formatting',
  });
}

function standAloneQuarterFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  return quarterFormatter(
    dt,
    String(fragment || '').replace('q', 'Q'),
    localize,
    'standalone'
  );
}

function monthFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize,
  context?: string
) {
  const month = dt.getMonth() + 1;
  const utcMonth = dt.getUTCMonth();

  if (fragment === 'Mo') return localize.ordinalNumber(month);

  if (fragment.length <= 2 || fragment.length >= defaultLocalizeMapLen)
    return fragment.length === 1 ? String(month) : addLeadingZeros(month, 2);

  const monthWidthMap = {
    ...defaultLocalizeMap,
  };

  return localize.month(utcMonth, {
    width: monthWidthMap[<keyof typeof monthWidthMap>fragment.length] || 'wide',
    context: context || 'formatting',
  });
}

function standAloneMonthFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  return monthFormatter(
    dt,
    String(fragment || '').replace('L', 'M'),
    localize,
    'standalone'
  );
}

function dayOfMonthFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  if (fragment === 'do') {
    return localize.ordinalNumber(dt.getUTCDate());
  }

  return addLeadingZeros(dt.getDate(), fragment.length);
}

function dayOfWeekFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  const dayOfWeek = dt.getUTCDay();
  const dayOfWeekWidthMap = {
    ...defaultLocalizeMap,
  };

  return localize.day(dayOfWeek, {
    width:
      dayOfWeekWidthMap[<keyof typeof dayOfWeekWidthMap>fragment.length] ||
      'wide',
    context: 'formatting',
  });
}

function dayOfWeekIsoFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  const dayOfWeek = dt.getUTCDay();
  const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

  if (fragment === 'io') return localize.ordinalNumber(isoDayOfWeek);

  if (fragment.length <= 2)
    return fragment.length === 1
      ? String(isoDayOfWeek)
      : addLeadingZeros(isoDayOfWeek, fragment.length);

  return dayOfWeekFormatter(
    dt,
    Array(fragment.length).fill('i').join(''),
    localize
  );
}

function twelveHourFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  if (fragment === 'ho') {
    let hours = dt.getUTCHours() % 12;
    if (hours === 0) hours = 12;

    return localize.ordinalNumber(hours);
  }

  return addLeadingZeros(dt.getHours() % 12 || 12, fragment.length);
}

function twentyFourHourFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  if (fragment === 'Ho') {
    return localize.ordinalNumber(dt.getUTCHours());
  }

  return addLeadingZeros(dt.getHours(), fragment.length);
}

function minuteFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  if (fragment === 'mo') {
    return localize.ordinalNumber(dt.getUTCMinutes());
  }

  return addLeadingZeros(dt.getMinutes(), fragment.length);
}

function secondFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  if (fragment === 'so') return localize.ordinalNumber(dt.getUTCSeconds());

  return addLeadingZeros(dt.getSeconds(), fragment.length);
}

function fractionOfSecondFormatter(dt: Date, fragment: string) {
  const milliseconds = dt.getMilliseconds();
  const fractionOfSeconds = Math.floor(
    milliseconds * Math.pow(10, fragment.length - 3)
  );

  return addLeadingZeros(fractionOfSeconds, fragment.length);
}

function abbreviatedHourFormatter(
  dt: Date,
  fragment: string,
  localize: typeof defaultLocalize
) {
  const dayPeriod = dt.getHours() / 12 >= 1 ? 'pm' : 'am';

  const abbrWidthMap = {
    ...defaultLocalizeMap,
    6: 'wide',
  };

  return localize.dayPeriod(dayPeriod, {
    width: abbrWidthMap[<keyof typeof abbrWidthMap>fragment.length] || 'wide',
    context: 'formatting',
  });
}

export default formatters;
