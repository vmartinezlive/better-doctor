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
    let promise = newDoctorSearch.getDoctor(symptoms, doctor)


    promise.then(function(response) {
    let body =JSON.parse(response);
    console.log(body);
    let first_name = (`${body.data[3].profile.first_name}`);
    let last_name = (`${body.data[3].profile.last_name}`);
    let city = (`${body.data[3].practices[0].visit_address.city}`);
    let street = (`${body.data[3].practices[0].visit_address.street}`);
    let state = (`${body.data[3].practices[0].visit_address.state}`);
    let zip = (`${body.data[3].practices[0].visit_address.zip}`);


    const name = first_name + last_name + city + street + state + zip;
    // console.log(body.meta.data.practices[]);

    $('#results1').text(name);
    console.log('results1');
    $('#results2').text(`${doctor}`);
}, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
