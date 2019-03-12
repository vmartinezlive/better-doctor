import { leapProcesser } from './../src/scripts.js';

console.log("TEST!!!!!! "+ leapProcesser("2020"));

describe('Leap Processer', function() {

  it('should correctly display true for 2020', function() {
    expect(leapProcesser("2020")).toEqual(true);
  });
});
