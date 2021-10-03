import { MILLISECONDS_IN_HOUR } from './hours';
import { addMilliseconds } from './milliseconds';

export const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;

export const addDays = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, size * MILLISECONDS_IN_DAY);
};

export default addDays;
