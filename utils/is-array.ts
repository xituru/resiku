const isArray = (value: any) => {
  return (
    typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object Array]' &&
    Array.isArray(value)
  )
}

export default isArray
