import isObject from './is-object'

const get = (dirtyObj: any, path: string, defaultValue: any = undefined) => {
  const obj = (isObject(dirtyObj) && dirtyObj) || {}

  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call((typeof path === 'string' && path) || String(path || ''), regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      )
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return result === undefined || result === obj ? defaultValue : result
}

export default get
