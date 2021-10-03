import { addSeconds } from '../add';

export const subSeconds = (dt: Date = new Date(), size: number = 0) => {
  return addSeconds(dt, -size);
};

export default subSeconds;
