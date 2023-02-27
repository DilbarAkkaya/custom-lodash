function pick(obj, paths) {
  let pickedObj ={};
  for (let key in obj) {
    for (let i = 0; i < paths.length; i++) {
      if (paths[i] === key) {
        pickedObj = {...pickedObj, [paths[i]]: obj[paths[i]]}
      }
    }
  }
  return pickedObj
}

console.log(pick({'a': 1, 'b': '2', 'c': 3}, ['a', 'c']))

export default pick;