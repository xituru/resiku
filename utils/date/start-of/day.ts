import { toDate } from '../to-date';

export const startOfDay = (dt: Date | number = new Date()): Date => {
  const date = toDate(dt);
  date.setHours(0, 0, 0, 0);

  return date;
};

export default startOfDay;
