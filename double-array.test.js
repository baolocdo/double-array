const doubleArray = require('./double-array');

test('should returns [2, 2, 2]', () => {
  expect(doubleArray([1, 1, 1])).toEqual([2, 2, 2]);
});

test('should returns [1]', () => {
  expect(doubleArray([1])).toEqual([2]);
});

test('should returns []', () => {
  expect(doubleArray([])).toEqual([]);
});

test('should returns [2, 4, 6, 8]', () => {
  expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});
