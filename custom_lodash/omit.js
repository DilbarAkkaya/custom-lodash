function omit(obj, paths) {
  /*   test('omit property paths ["a", "c"] from object' , () => {
      var object = { 'a': 1, 'b': '2', 'c': 3 };
      expect(omit(object, ['a', 'c'])).toStrictEqual({'b': '2'});
    }); */
  let omittedObj = obj;
  for (let key in obj) {
    for (let i = 0; i < paths.length; i++) {
      if (paths[i] === key) {
        omittedObj[key] === obj[key]
        delete omittedObj[key]
      }
    }


  }
  console.log(omittedObj)
  return omittedObj
}

export default omit;