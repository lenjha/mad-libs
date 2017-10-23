$(document).ready(function() {
  $('#formOne').submit(function(event) {

    var blanks = ["noun", "exclamation", "verbing", "personsName", "adjective", "noun2", "personInRoom", "number", "number2", "pluralNoun", "noun3", "adjective2", "color", "verb"]

    blanks.forEach(function(blank) {
      var input = $("input#" + blank).val();
      $("." + blank).text(input);
    });


    $("#story").show();

    event.preventDefault();
  });
});
