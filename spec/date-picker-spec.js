import {DayPicker}from "./../src/scripts.js"

describe ("day picker",function() {

  const grooveDate= "2019-03-22";
  const datePicker= new DayPicker();
  const dateObject= datePicker.stringToObject(grooveDate)
  it("should return the day of the week",function(){
    expect(typeof dateObject).toEqual("object")
  });

  it("given a date object it will find the day of the week",function(){
    expect(datePicker.findDay()).toEqual("Friday")
  });
});
