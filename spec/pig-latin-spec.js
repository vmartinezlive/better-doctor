import {pigLatinizer} from "./../src/scripts.js";

describe("pigLatinizer",function() {
  it("if each word begins with a vowel it should add way to the end of that word ",function(){
    expect(pigLatinizer("ask")).toEqual("askway");
  });
  it("if a word has a q or u in it, the first letter of the word should be q , u ",function(){
    expect(pigLatinizer("liquid")).toEqual("iquidlay");
  });
});
