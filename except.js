const except = (obj, ...exclude) => {
  const set = new Set(exclude);
  return Object.fromEntries(
    Object
    .entries(obj)
    .filter(([key]) => !set.has(key)))
}
const result = EXCEPT({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
