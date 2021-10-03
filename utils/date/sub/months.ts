import { addMonths } from '../add';

export const subMonths = (dt: Date = new Date(), size: number = 0) => {
  return addMonths(dt, -size);
};

export default subMonths;
