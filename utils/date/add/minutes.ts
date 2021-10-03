import { addMilliseconds } from './milliseconds';
import { MILLISECONDS_IN_SECOND } from './seconds';

export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;

export const addMinutes = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, size * MILLISECONDS_IN_MINUTE);
};

export default addMinutes;
