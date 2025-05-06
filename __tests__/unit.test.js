// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number 2', () => {
    expect(isPhoneNumber('111-111-1111')).toBe(true);
  });

  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('123-abc-7890')).toBe(false);
  });

  test('invalid phone number with non numeric characters', () => {
    expect(isPhoneNumber('abcd')).toBe(false);
  });
});
describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('abcd@ucsd.edu')).toBe(true);
  }
  );
  test('valid email 2', () => {
    expect(isEmail('abcd@gmail.com')).toBe(true);
  }
  );
  test('invalid email with no domain', () => {
    expect(isEmail('abcd@')).toBe(false);
  });
  test('invalid email with no @', () => {
    expect(isEmail('abcd.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('abcd1234')).toBe(true);
  });

  test('valid strong password 2', () => {
    expect(isStrongPassword('abcd_1234')).toBe(true);
  });

  test('invalid strong password with special characters', () => {
    expect(isStrongPassword('abcd@1234')).toBe(false);
  });

  test('invalid strong password with less than 4 characters', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });
}
);
describe('isDate', () => {
  test('valid date', () => {
    expect(isDate('12/12/2022')).toBe(true);
  });

  test('valid date 2', () => {
    expect(isDate('1/1/2022')).toBe(true);
  });

  test('invalid date with letters', () => {
    expect(isDate('12/abc/2022')).toBe(false);
  });

  test('invalid date with no year', () => {
    expect(isDate('12/12/')).toBe(false);
  });
}
);

describe('isHexColor', () => {
  test('valid hex color', () => {
    expect(isHexColor('#123456')).toBe(true);
  });

  test('valid hex color 2', () => {
    expect(isHexColor('#abc')).toBe(true);
  });

  test('invalid hex color with non hex letters', () => {
    expect(isHexColor('#abcxyz')).toBe(false);
  });

  test('invalid hex color with too many characters', () => {
    expect(isHexColor('12345678')).toBe(false);
  });
}
);