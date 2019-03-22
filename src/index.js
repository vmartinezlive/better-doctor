import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from "./scripts.js";


$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    const symptoms = $('#inputSymptoms').val();
    const doctor = $('#inputDoctor').val();
    // console.log(doctor);

//
//     // const nameInput = $("#inputName").val();
//     // const addressInput = $("#inputAddress").val();
//     // const cityInput = $("#inputCity").val();
//     // const stateInput = $("#inputState").val();
//     // const zipInput = $("#inputZip").val();
//     let symptomsInput = $("#inputSymptoms").val();
//     let doctorInput = $("#inputDoctor").val();
//
    let newDoctorSearch = new DoctorSearch();
    let promise = newDoctorSearch.getDoctor()
    // console.log(promise);

    promise.then(function(response) {
    let body =JSON.parse(response);
    console.log(body);
    // console.log(body.meta.data.practices[]);

    $('#results1').text(`${symptoms}`);
    $('#results2').text(`${doctor}`);
}, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
