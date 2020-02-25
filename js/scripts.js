$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var yourfirstname = $("#yourfirstname").val();
    console.log(yourfirstname);
    var yourlastname = $("#yourlastname").val();
    console.log(yourlastname);
    var address = $("#address").val();
    console.log(address);
    $("#output").text("Your receipt:" + " " + yourfirstname + " " + yourlastname + " " + address)
    return;
  });
});
