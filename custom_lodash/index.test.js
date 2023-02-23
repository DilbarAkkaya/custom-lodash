import filter from './filter.js';
import find from './find.js';

describe("Filter Function", () => {
  test("function Filter is defined", () => {
    expect(filter).toBeDefined();
  });

  test("Predicate for filter elements > 0 is worked", () => {
    expect(filter([-1, 0, 6, 5, -9], (element) => element > 0)).toStrictEqual([6, 5]);
  });

  test("Predicate for filter elements > 0 is worked", () => {
    expect(Array.isArray(filter([-1, 0, 6, 5, -9], (element) => element > 0))).toBe(true);
  });


  test("function Find is defined", () => {
    expect(find).toBeDefined();
  });
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  test("first element  predicate (el => el.active === false)", () => {
    expect(find(users, (el) => el.active === false)).toStrictEqual({ 'user': 'fred', 'age': 40, 'active': false })
  })

  test("first element  predicate (el => el.active === true)", () => {
    expect(find(users, (el) => el.active === true)).toStrictEqual({ 'user': 'barney',  'age': 36, 'active': true })
  })

  test("first element  predicate (el => el > 0)", () => {
    expect(find([1, 2, 0, [-1, 2]], (el, i, arr) => el > 0)).toStrictEqual(1)
  });

  test("first element  predicate (el => el === -1)", () => {
    expect(find([1, 2, 0, [-1, 2]], (el, i, arr) => el === -1)).toStrictEqual(-1)
  });

  test('predicate called times', () => {
    const predicate = jest.fn();
    find(predicate);
    expect(predicate).toHaveBeenCalledTimes(0);
  })
});

