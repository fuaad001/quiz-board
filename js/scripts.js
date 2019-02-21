//User-interface logic
//student identification form
$(document).ready(function(){
  $("#click").click(function(){
    $(".card").slideDown();
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

//Open first screen
var home = function(){
  window.open("index.html", "_self");
};




//Business logic
//variable holding the students score
var score = 0;

//Analyse student's performance
var tally = function(){
  if(score > 79){
    document.getElementById("celebration").src = "images/image2.gif"
    document.getElementById("tally").innerHTML = "Your score is: " + score + "%. You have excellently passed!";
  }

  else if(score > 49){
    document.getElementById("celebration").src = "images/image3.gif"
    document.getElementById("tally").innerHTML = "Your score is: " + score + "%. You have fairly passed!"
  }

  else{
    document.getElementById("celebration").src = "images/image4.gif"
    document.getElementById("tally").innerHTML = "Your score is: " + score + "%. You have scored poorly and they need to retake the test!"
  }
};

//Calculate students score
$(document).ready(function(){
  $(".questions").submit(function(event){
    answerArray = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7", "answer8", "answer9", "answer10"];
    answerArray.forEach(function(ans){
      var value = $("input:radio[name=" + ans + "]:checked").val();
      var value1 = parseInt(value);
      score = score + value1;
    })
    event.preventDefault();
    tally();
    $(".secondscreen").hide();
    $(".thirdscreen").show();
  });
});
