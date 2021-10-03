// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
const extendedIsoRegex =
  /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
const basicIsoRegex =
  /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
const tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
const isoDates = [
  [['YYYYYY-MM-DD', /[+-](\d{6})-(\d{2})-(\d{2})/], '$1-$2-$3'],
  [['YYYY-MM-DD', /(\d{4})-(\d{2})-(\d{2})/], '$1-$2-$3'],
  [['GGGG-[W]WW-E', /(\d{4})-(W\d{2})-(\d)/], '$1-$2-$3'],
  [['GGGG-[W]WW', /(\d{4})-(W\d{2})/, false], '$1-$2'],
  [['YYYY-DDD', /(\d{4})-(\d{3})/], '$1-$2'],
  [['YYYY-MM', /(\d{4})-(\d{2})/, false], '$1-$2'],
  [['YYYYYYMMDD', /[+-](\d{6})(\d{2})(\d{2})/], '$1$2$3'],
  [['YYYYMMDD', /(\d{4})(\d{2})(\d{2})/], '$1$2$3'],
  [['GGGG[W]WWE', /(\d{4})(W\d{3})/], '$1$2'],
  [['GGGG[W]WW', /(\d{4})(W\d{2})/, false], '$1$2'],
  [['YYYYDDD', /(\d{4})(\d{3})/], '$1$2'],
  [['YYYYMM', /(\d{4})(\d{2})/, false], '$1$2'],
  [['YYYY', /(\d{4})/, false], '$1'],
];
// iso time formats and regexes
const isoTimes = [
  [['HH:mm:ss.SSSS', /(\d{2}):(\d{2}):(\d{2})\.(\d+)/], '$1:$2:$3.$4'],
  [['HH:mm:ss,SSSS', /(\d{2}):(\d{2}):(\d{2}),(\d+)/], '$1:$2:$3,$4'],
  [['HH:mm:ss', /(\d{2}):(\d{2}):(\d{2})/], '$1:$2:$3'],
  [['HH:mm', /(\d{2}):(\d{2})/], '$1:$2'],
  [['HHmmss.SSSS', /(\d{2})(\d{2})(\d{2})\.(\d+)/], '$1$2$3.$4'],
  [['HHmmss,SSSS', /(\d{2})(\d{2})(\d{2}),(\d+)/], '$1$2$3,$4'],
  [['HHmmss', /(\d{2})(\d{2})(\d{2})/], '$1$2$3'],
  [['HHmm', /(\d{2})(\d{2})/], '$1$2'],
  [['HH', /(\d{2})/], '$1'],
];
const aspNetJsonRegex = /^\/?Date\((-?\d+)/i;

function fromISO(string: string) {
  let i, l, allowTime, dateFormat, timeFormat, tzFormat, date, time, tz;

  const match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string);
  const isoDatesLen = isoDates.length;
  const isoTimesLen = isoTimes.length;

  if (!match) return;

  for (i = 0, l = isoDatesLen; i < l; i++) {
    if ((<RegExp>isoDates[i][0][1]).exec(match[1])) {
      dateFormat = isoDates[i][0][0];
      date = match[1].replace(
        <RegExp>isoDates[i][0][1],
        <string>isoDates[i][1]
      );
      allowTime = isoDates[i][0][2] !== false;
      break;
    }
  }

  if (dateFormat == null) return;

  if (match[3]) {
    for (i = 0, l = isoTimesLen; i < l; i++) {
      if ((<RegExp>isoTimes[i][0][1]).exec(match[3])) {
        // match[2] should be 'T' or space
        timeFormat = (match[2] || ' ') + isoTimes[i][0][0];
        time =
          (match[2] || ' ') +
          match[3].replace(<RegExp>isoTimes[i][0][1], <string>isoTimes[i][1]);
        break;
      }
    }

    if (timeFormat == null) return;
  }

  if (!allowTime && timeFormat != null) return;

  if (match[4]) {
    if (!tzRegex.exec(match[4])) return;

    tzFormat = 'Z';
    tz = tzFormat;
  }

  return [date, time, tz].join('');
}

export const toDate = (argument: Date | number | string): Date => {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' && argStr === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if (
      (typeof argument === 'string' || argStr === '[object String]') &&
      typeof console !== 'undefined'
    ) {
      // eslint-disable-next-line no-console
      // console.warn(new Error().stack);
      const matched = aspNetJsonRegex.exec(argument);
      if (matched !== null) {
        return new Date(+matched[1]);
      }

      const extractFromIso = fromISO(argument);
      if (typeof extractFromIso === 'string') {
        return new Date(extractFromIso);
      }
    }
    return new Date(NaN);
  }
};

export default toDate;
