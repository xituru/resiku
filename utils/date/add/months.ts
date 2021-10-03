import { MILLISECONDS_IN_DAY } from './days';
import { addMilliseconds } from './milliseconds';

export const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_DAY * 30;

export const addMonths = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, size * MILLISECONDS_IN_MONTH);
};

export default addMonths;
