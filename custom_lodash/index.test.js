import filter from './filter.js';
import find from './find.js';
import chunk from './chunk.js';
import compact from './compact.js';
import drop from './drop.js';
import dropWhile from './dropWhile.js';
import includes from './includes.js';
import map from './map.js';
import zip from './zip.js';
import take from './take.js';
import merge from './merge.js';
import omit from './omit.js';
import omitBy from './omitBy.js';
import pick from './pick.js';
import pickBy from './pickBy.js';
import toPairs from './toPairs.js';

describe("Filter Function", () => {
  test("function Filter is defined", () => {
    expect(filter).toBeDefined();
  });

  test("filter([-1, 0, 6, 5, -9], el => el> 0) returns [6, 5]", () => {
    expect(filter([-1, 0, 6, 5, -9], (element) => element > 0)).toStrictEqual([6, 5]);
  });

  test("Array.isArray(filter([-1, 0, 6, 5, -9], (element) => element > 0) returns true", () => {
    expect(Array.isArray(filter([-1, 0, 6, 5, -9], (element) => element > 0))).toBe(true);
  });

  test("function Find is defined", () => {
    expect(find).toBeDefined();
  });

  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
  ];

  test("find(users, (el) => el.active === false) returns { 'user': 'fred', 'age': 40, 'active': false }", () => {
    expect(find(users, (el) => el.active === false)).toStrictEqual({ 'user': 'fred', 'age': 40, 'active': false })
  })

  test("find(users, (el) => el.active === true) returns { 'user': 'barney', 'age': 36, 'active': true }", () => {
    expect(find(users, (el) => el.active === true)).toStrictEqual({ 'user': 'barney', 'age': 36, 'active': true })
  })

  test("find([1, 2, 0, [-1, 2]], (el, i, arr) => el > 0) returns 1", () => {
    expect(find([1, 2, 0, [-1, 2]], (el, i, arr) => el > 0)).toStrictEqual(1)
  });

  test("find([1, 2, 0, [-1, 2]], (el, i, arr) => el === -1) returns -1", () => {
    expect(find([1, 2, 0, [-1, 2]], (el, i, arr) => el === -1)).toStrictEqual(-1)
  });

  test('predicate called times', () => {
    const predicate = jest.fn();
    find(predicate);
    expect(predicate).toHaveBeenCalledTimes(0);
  })
  test("find([1, 2, 0, [-1, 2]], (el, i, arr) => el < -1) returns undefined", () => {
    expect(find([1, 2, 0, [-1, 2]], (el, i, arr) => el < -1)).toBeUndefined()
  });

  test("function chunk is defined", () => {
    expect(chunk).toBeDefined();
  });

  test('chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) returns [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  test('chunk([], 0) returns underfinded', () => {
    expect(chunk([], 0)).toEqual(undefined);
  });

  test('chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) returns [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  test("function compact is defined", () => {
    expect(compact).toBeDefined();
  });

  test('(compact([0, null, 1, false, 2, "", 3, NaN, undefined]) returns [1, 2, 3]', () => {
    expect(compact([0, null, 1, false, 2, '', 3, NaN, undefined])).toStrictEqual([1, 2, 3]);
  });

  test("function drop is defined", () => {
    expect(drop).toBeDefined();
  });

  test('drop([1, 2, 3], 2) returns [3]', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
  });

  test('drop([1, 2, 3], 0) returns [1, 2, 3]', () => {
    expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
  });
  test('drop([1, 2, 3], 4) returns []', () => {
    expect(drop([1, 2, 3], 4)).toStrictEqual([]);
  });
  test('drop([1, 2, 3], 1) returns [2, 3]', () => {
    expect(drop([1, 2, 3], 1)).toStrictEqual([2, 3]);
  });
  test('drop(0, 1) returns []', () => {
    expect(drop(0, 1)).toStrictEqual([]);
  });
  test('drop("abc", 1) returns []', () => {
    expect(drop('abc', 1)).toStrictEqual([]);
  });
  test('drop(false, 1) returns []', () => {
    expect(drop(false, 1)).toStrictEqual([]);
  });
  test("drop(['a', 'b', 'c'], 1) returns ['b', 'c']", () => {
    expect(drop(['a', 'b', 'c'], 1)).toStrictEqual(['b', 'c']);
  });
  test('drop([1, 2, 3], undefined) returns [2, 3]', () => {
    expect(drop([1, 2, 3], undefined)).toEqual([2, 3]);
  })
  test("function dropWhile is defined", () => {
    expect(dropWhile).toBeDefined();
  });

  var usersForDropWhile = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  test("dropWhile(usersForDropWhile, function(o) {return !o.active;}) returns [{ 'user': 'pebbles', 'active': true }]", () => {
    expect(dropWhile(usersForDropWhile, function(o) {return !o.active;})).toStrictEqual([{ 'user': 'pebbles', 'active': true }])
  })
  test("function includes is defined", () => {
    expect(includes).toBeDefined();
  });
  test('includes([1, 2, 3], 1) returns true', () => {
    expect(includes([1, 2, 3], 1)).toEqual(true);
  });
  test('includes(([1, 2, 3], 1, 2)) false', () => {
    expect(includes(([1, 2, 3], 1, 2))).toEqual(false);
  });
 test("includes({ 'a': 1, 'b': 2 }, 1) return true", () => {
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toStrictEqual(true);
  });
  test('includes([1, 2, 3], 3, -1) returns true', () => {
    expect(includes([1, 2, 3], 3, -1)).toEqual(true);
  });
  test("includes({ 'a': 1, 'b': 2 }, 2, 1) return true", () => {
    expect(includes({ 'a': 1, 'b': 2 }, 2, 1)).toStrictEqual(true);
  });
   test("function map is defined", () => {
    expect(map).toBeDefined();
  });
  test('map return elem to square', () => {
    function square(n) {
      return n * n;
    }
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
  });
  test("function zip is defined", () => {
    expect(zip).toBeDefined();
  });

  test("zip(['a', 'b'], [1, 2], [true, false]) returns [['a', 1, true], ['b', 2, false]] ", () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
  });

  test("function take is defined", () => {
    expect(take).toBeDefined();
  });

  test('take([1, 2, 3], 1) returns [1]', () => {
    expect(take([1, 2, 3], 1)).toStrictEqual([1]);
  });
  test('take([1, 2, 3], 2) returns [1, 2]', () => {
    expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  test("function merge is defined", () => {
    expect(merge).toBeDefined();
  });
  test('merge 2 objects', () => {
    var object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    var other = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    expect(merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
  });

    test("function omit is defined", () => {
    expect(omit).toBeDefined();
  });

  test("omit property paths ['a', 'c'] from object returns {'b': '2'}" , () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toStrictEqual({'b': '2'});
  });

  test("function omitBy is defined", () => {
    expect(omitBy).toBeDefined();
  });

  test("omitBy(object, (key) => typeof key === 'number') returns {'b': '2'}" , () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omitBy(object, (key) => typeof key === 'number')).toStrictEqual({'b': '2'});
  });

  test("function pick is defined", () => {
    expect(pick).toBeDefined();
  });

  test('pick number values from object' , () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });
  test("function pickBy is defined", () => {
    expect(pickBy).toBeDefined();
  });

  test("pickBy(object, (key) => typeof key === 'number') returns { 'a': 1, 'c': 3 }" , () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pickBy(object, (key) => typeof key === 'number')).toStrictEqual({ 'a': 1, 'c': 3 });
  });

  test("function toPairs is defined", () => {
    expect(toPairs).toBeDefined();
  });

  
  test("toPairs(new Foo) creates[['a', 1], ['b', 2]]" , () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    expect(toPairs(new Foo)).toStrictEqual([['a', 1], ['b', 2]]);
  });
});

