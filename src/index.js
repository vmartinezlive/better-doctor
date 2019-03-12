import './scss/styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {countVowels, leapProcesser, pigLatinizer, romanizer } from './scripts.js';

$(document).ready(function(){
  $("form#sen").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var finalCount = countVowels(userInput);
    $("span.answer").text(finalCount);
    $("p#outputSentence").show();
  });
  $("form#leapForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#yearInput").val();
    var conclusion= leapProcesser(userInput);
    if (conclusion===false){
      $("span.yearDetermination").text("not ")
    } else {
      $("span.yearDetermination").text("");
    }
    $("p#yearOutput").show();
  });
  $("form#pigForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigInput").val();
    var pigLatinTranslation = pigLatinizer(userInput);
    $("p#pigOutput").text(pigLatinTranslation).show();
  });
  $("form#romeForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#romeInput").val();
    var outputSentence = romanizer(userInput);
    $("p#romeOutput").text(outputSentence).show();
  })
});
