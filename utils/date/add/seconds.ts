import { addMilliseconds } from './milliseconds';

export const MILLISECONDS_IN_SECOND = 1000;

export const addSeconds = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, size * MILLISECONDS_IN_SECOND);
};

export default addSeconds;
