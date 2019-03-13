import {countVowels}from "./../src/scripts";

describe("count Vowels" , function() {

  it("should take in sentence and counts the vowels", function () {
    expect(countVowels("i like apples and pears")).toEqual(8)
  });

});
