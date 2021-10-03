export const addLeadingZeros = (target: number, size: number) => {
  const sign = target < 0 ? '-' : ''
  let output = Math.abs(target).toString()

  while (output.length < size) {
    output = '0' + output
  }

  return sign + output
}
