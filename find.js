const find = (obj, ...rest) => {
  const value = rest.pop();
  return Object
    .keys(obj)
    .filter(key => typeof obj[key] === typeof value)
    .join(', ')
}
rest.push(5020);
return (undefined)
})
const result = find({ a: 1, b: 2, c: 'hello', d: false }, 'hello');
console.log(result);
