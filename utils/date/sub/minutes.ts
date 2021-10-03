import { addMinutes } from '../add';

export const subMinutes = (dt: Date = new Date(), size: number = 0) => {
  return addMinutes(dt, -size);
};

export default subMinutes;
