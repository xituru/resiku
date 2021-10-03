import { toDate } from '../to-date';

export const differenceInCalendarMonths = (
  dtLeft: Date | number,
  dtRight: Date | number
): number => {
  const dateLeft = toDate(dtLeft);
  const dateRight = toDate(dtRight);

  const yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  const monthDiff = dateLeft.getMonth() - dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
};

export default differenceInCalendarMonths;
