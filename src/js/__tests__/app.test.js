import Validator from '../app';

test.each([
  ['тестЮзер', false],
  ['testUsername', true],
  ['test-Username', true],
  ['test_Username', true],
  ['test111Username', true],
  ['test1111Username', false],
  ['1testUsername', false],
  ['testUsername1', false],
  ['TESTUSERNAME', true],
  ['_testUsername', false],
  ['testUsername_', false],
  ['-testUsername', false],
  ['testUsername-', false]
])('check username', (username, expectedResult) => {
  const validatename = new Validator(username);
  expect(validatename.validateUsername(username)).toBe(expectedResult);
});