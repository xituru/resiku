import { addDays } from '../add';

export const subDays = (dt: Date = new Date(), size: number = 0) => {
  return addDays(dt, -size);
};

export default subDays;
