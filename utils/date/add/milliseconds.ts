export const addMilliseconds = (dt: Date = new Date(), size: number = 0) => {
  const timestamp = dt.getTime();

  return new Date(timestamp + size);
};

export default addMilliseconds;
