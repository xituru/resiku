const isObject = (value: any) => {
  return (
    typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

export default isObject
