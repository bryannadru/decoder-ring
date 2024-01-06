const expect = require('chai').expect;
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should encode a message correctly', () => {
    const input = 'thinkful';
    const shift = 3;
    const expected = 'wklqnixo';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should decode a message correctly', () => {
    const input = 'wklqnixo';
    const shift = 3;
    const expected = 'thinkful';
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
  });

  it('should keep spaces and non-alphabetical symbols', () => {
    const input = 'this is a secret message!';
    const shift = 2;
    const expected = 'vjku ku c ugetgv oguucig!';
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });

  it('should ignore capital letters', () => {
    const input = 'THINKFUL';
    const shift = 3;
    const expected = 'wklqnixo';
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });

  it('should return false if shift value is missing, 0, less than -25, or greater than 25', () => {
    const input = 'thinkful';
    const shift = '';
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });

  it('should wrap around to the front of the alphabet if alphabet reaches end', () => {
    const input = 'z';
    const shift = 8;
    const expected = 'h';
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });
});