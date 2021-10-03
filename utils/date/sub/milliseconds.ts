import { addMilliseconds } from '../add';

export const subMilliseconds = (dt: Date = new Date(), size: number = 0) => {
  return addMilliseconds(dt, -size);
};

export default subMilliseconds;
