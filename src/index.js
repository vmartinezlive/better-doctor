import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from "./scripts.js";


$(document).ready(function(){
  event.preventDefault();
  $("#doctor-form").submit(function(event){

    const nameInput = $("#inputName").val();
    const addressInput = $("#inputAddress").val();
    const cityInput = $("#inputCity").val();
    const stateInput = $("#inputState").val();
    const zipInput = $("#inputZip").val();
    let symptomsInput = $("#inputSymptoms").val();
    let doctorInput = $("#inputDoctor").val();


    promise.then(function(response) {
    let body =JSON.parse(response);
    console.log(body._embedded.events[0]);
    $('#results-nameInput').text(`${nameInput} next event is: ${body._embedded.events[0].name}`);
    // $('#results-nameInput').text(`${nameInput} next event is: ${body._embedded.events[0].name}`);
    // $('#results-bio').text(`Learn more about this artist: ${body.artists[0].strBiographyEN}`);
    // setTimeout(function() {
    //   $('#results-pic').html(`here is a picture <img src="${body.artists[0].strArtistFanart}">`);
    // }, 3000);
}, function(error) {
  $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

  });
});
