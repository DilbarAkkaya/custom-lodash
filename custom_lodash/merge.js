function merge(obj, sources) {
/*   test('merge 2 objects', () => {
    var object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    var other = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    expect(merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
  }); */
  let valuesObj = [...obj.a];
  let valuesSources = [...sources.a]
  let third = [{...valuesObj[0], ...valuesSources[0]}, {...valuesObj[1], ...valuesSources[1]}]
  obj.a = third
  return obj
}

export default merge;