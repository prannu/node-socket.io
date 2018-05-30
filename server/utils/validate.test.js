var expect = require('expect');

var {isRealString} = require('./validate');

describe('isRealString', () => {
  it('should Check the strings', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });
  it('should Reject the strings with spaces', () => {
    var res = isRealString('  ');
    expect(res).toBe(false);
  });
  it('Should allow strings ', () => {
    var res = isRealString(' praveen  ');
    expect(res).toBe(true);
  });
});
