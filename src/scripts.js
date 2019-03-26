export class DoctorSearch {
  getDoctor(symptoms,doctor) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    console.log(request);
    let apiKey = process.env.exports.apiKey;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=45.5122%2C-122.658%2C100&name=${doctor}&user_location=45.512%2C122.658&skip=0&limit=10&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
    });
  }
}
