
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
    // console.log("I'm here");


    let newDoctorSearch = new DoctorSearch();
    let promise = newDoctorSearch.getDoctor(symptoms, doctor)


    promise.then(function(response) {
    let body =JSON.parse(response);
    // console.log(body);

    let name = [];
    let address = [];
    let medicine = [];
    let bio = [];
    const nameHTML = [];

    var i = 0;
    for(i in body.data) {
      name = body.data[i].profile.first_name + " " + body.data[i].profile.last_name;

      address = body.data[i].practices[0].visit_address.city + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.state_long + " " + body.data[i].practices[0].visit_address.zip + " " + "Phone: " +
      body.data[i].practices[0].phones[0].number;

      medicine = body.data[i].specialties[0].name ;
      bio = body.data[i].profile.bio;

      $("#symptomsResult").append("<li>" + name + "<br>" + address + "<br>" + medicine + "</li>");
      $("#doctorsList").append("<li>" + name + "<br>" + address + "<br>" + medicine +  "<br>" + bio +"</li>");
      // console.log(address);
      
    }

}, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
