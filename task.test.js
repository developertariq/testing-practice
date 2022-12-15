const task = require ('./task');
const myCalculator = new task.Calculator();


test('takes a string and returns its characters count', () => {
  expect(task.stringLength('hello')).toBe(5);
});

test('check if the length of string is between 1 to 10', () => {
  expect(task.stringLength('The quick brown jumps over a lazy dog.')).toBe('string is too short or long');
});

test('Reverse a string', () => {
  expect(task.reverseString('Hello')).toBe('olleH');
});

describe.each([
  [1, 1, 2],
  [5, 2, 7],
  [2, 3, 5],
])('Calculator.add(%i, %i)', (a, b, expected) => {
  test(`${a} + ${b} = ${expected}`, () => {
    expect(myCalculator.add(a, b)).toBe(expected);
  });
});

describe.each([
  {a: 5, b: 2, expected: 3},
  {a: 11, b: 5, expected: 6},
  {a: 9, b: 12, expected: -3},
])('Calculator.subtract($a, $b)', ({a, b, expected}) => {
  test(`${a} - ${b} = ${expected}`, () => {
    expect(myCalculator.subtract(a, b)).toBe(expected);
  });
});

describe.each`
  a    | b    | expected
  ${5} | ${5} | ${25}
  ${4} | ${2} | ${8}
  ${2} | ${13} | ${26}
`('Calculator.multiply($a, $b)', ({a, b, expected}) => {
  test(`${a} * ${b} = ${expected}`, () => {
    expect(myCalculator.multiply(a, b)).toBe(expected);
  });
});

describe('Calculator.divide(x, y)', () => {
  test('10 / 2 = 5', () => {
    expect(myCalculator.divide(10, 2)).toBe(5);
  });

  test('28 / 7 = 4', () => {
    expect(myCalculator.divide(28, 7)).toBe(4);
  });

  test('10 / 5 = 2', () => {
    expect(myCalculator.divide(10, 5)).toBe(2);
  });
});


test(`Capitalizing`, () => {
  expect(task.capitalize("microverse")).toEqual("Microverse");
})