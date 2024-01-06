const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("substitution", () => {
  it("should encode 'thinkful' correctlyt", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });

  it("should encode 'You are an excellent spy' correctly", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });

  it("should decode 'jrufscpw' correctly", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.eql(expected);
  });

  it("should encode 'message' correctly", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.eql(expected);
  });

  it("should decode 'y&ii$r&' correctly", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.eql(expected);
  });

  it("should return false if alphabet is not a string of 26 characters", () => {
    const expected = false;
    const actual1 = substitution("thinkful", "short");
    const actual2 = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
  });

  it("should maintain spaces throughout encoding/decoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });

});