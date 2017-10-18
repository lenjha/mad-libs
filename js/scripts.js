$(document).ready(function() {
  $('#formOne').submit(function(event) {
    var nounInput = $("input#noun").val();
    var exclamationInput = $("input#exclamation").val();
    var verbingInput = $("input#verbing").val();
    var personsNameInput = $("input#personsName").val();
    var adjectiveInput = $("input#adjective").val();
    var noun2Input = $("input#noun2").val();
    var personInRoomInput = $("input#personInRoom").val();
    var numberInput = $("input#number").val();
    var number2Input = $("input#number2").val();
    var pluralNounInput = $("input#pluralNoun").val();
    var noun3Input = $("input#noun3").val();
    var adjective2Input = $("input#adjective2").val();
    var colorInput = $("input#color").val();
    var verbInput = $("input#verb").val();

    $(".noun").text(nounInput);
    $(".exclamation").text(exclamationInput);
    $(".verbing").text(verbingInput);
    $(".personsName").text(personsNameInput);
    $(".adjective").text(adjectiveInput);
    $(".noun2").text(noun2Input);
    $(".personInRoom").text(personInRoomInput);
    $(".number").text(numberInput);
    $(".number2").text(number2Input);
    $(".pluralNoun").text(pluralNounInput);
    $(".noun3").text(noun3Input);
    $(".adjective2").text(adjective2Input);
    $(".color").text(colorInput);
    $(".verb").text(verbInput);

    $("#story").show();

    event.preventDefault();
  });
});
