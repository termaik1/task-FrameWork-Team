export function getObjValue<T extends object, R extends keyof T>(
  obj: T,
  key: R
) {
  return obj[key];
}
