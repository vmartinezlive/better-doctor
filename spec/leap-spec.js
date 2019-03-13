import { leapProcesser } from './../src/scripts.js';

describe('Leap Processer', function() {

  it('should correctly display true for 2020', function() {
    expect(leapProcesser("2020")).toEqual(true);
  });
});
