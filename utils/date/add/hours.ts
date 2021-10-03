import { addMilliseconds } from './milliseconds';
import { MILLISECONDS_IN_MINUTE } from './minutes';

export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

export const addHours = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, size * MILLISECONDS_IN_HOUR);
};

export default addHours;
