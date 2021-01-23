'use strict';

const multiBracketMatching = require('./multi-bracket-validation');

describe('Multi Bracket Validation', () => {
  it('returns true for matched brackets', () => {
    expect(multiBracketMatching('{}(){}')).toEqual(true) ;
  });

  it('returns true for nested brackets', () => {
    expect(multiBracketMatching('()[[]]')).toEqual(true) ;
  });

  it('returns false for unmatched brackets', () => {
    expect(multiBracketMatching('()[[{}]]')).toEqual(true) ;
  });

  it('returns false for null input', () => {
    expect(multiBracketMatching(' ')).toEqual(true) ;
  });

});
