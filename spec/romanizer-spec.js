import { romanizer } from './../src/scripts.js';

describe('Romanizer', function() {

  it('should correctly convert 2019 to MMXIX', function() {
    expect(romanizer("2019")).toEqual("MMXIX");
  });
  it('should correctly convert 1234 to MCCXXXIV', function() {
    expect(romanizer("1234")).toEqual("MCCXXXIV");
  });
  it('should add an M for every thousand', function() {
    expect(romanizer("1000")).toEqual("M");
  });

  it('should add a D for every 500', function() {
    expect(romanizer("500")).toEqual("D");
  });

  it('should add a C for every 100', function() {
    expect(romanizer("100")).toEqual("C");
  });

  it('should add a L for every 50', function() {
    expect(romanizer("50")).toEqual("L");
  });

  it('should add a X for every 10', function() {
    expect(romanizer("10")).toEqual("X");
  });

  it('should add a V for every 5', function() {
    expect(romanizer("5")).toEqual("V");
  });

  it('should add a I for every 1', function() {
    expect(romanizer("1")).toEqual("I");
  });

});
