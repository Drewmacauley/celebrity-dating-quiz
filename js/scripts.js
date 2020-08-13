$(document).ready(function() {
  $("form#yourInfo").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (gender === 'male') {
      if (age > 60) {
        $("#celebrity").text("Captain Blackbeard");
      } else if (age > 30) {
        $("#celebrity").text("Moby Dick")
      } else if (age <= 30) {
        $("#celebrity").text("Betty White")
      }
    } else if (gender === 'female') {
      if (age > 60) {
        $("#celebrity").text("Shawn Conecone")
      } else if (age === 34) {
        $("#celebrity").text("Brad Pitt")
      } else if (age > 30) {
        $("#celebrity").text("Carrot Top")
      } else {
        $("#celebrity").text("Jonas Brothers")
      }
    } else {
      if (age > 60) {
        $("#celebrity").text("Johnny Bravo");
      } else if (age > 30) {
        $("#celebrity").text("Spongebob Squarepants")
      } else if (age <= 30) {
        $("#celebrity").text("Squidward")
      }
    }


    $("#result").show();

    event.preventDefault();
  });
});