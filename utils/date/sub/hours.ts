import { addHours } from '../add';

export const subHours = (dt: Date = new Date(), size: number = 0) => {
  return addHours(dt, -size);
};

export default subHours;
