//User-interface logic
//student identification form
$(document).ready(function(){
  $("#click").click(function(){
    $(".card").show();
  });
});

//Open second screen
$(document).ready(function(){
  $(".card").submit(function(event){
    $(".secondscreen").show();
    $(".firstscreen").hide();

    var nameInput =$("input#name").val();
    var classInput = $("input#class").val();
    var admissionInput = $("input#admission").val();

    $(".name1").text(nameInput);
    $(".class1").text(classInput);
    $(".admission1").text(admissionInput);

    event.preventDefault();
  });
});
