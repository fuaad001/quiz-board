//User-interface logic
//student identification form
$(document).ready(function(){
  $("#click").click(function(){
    $(".card").slideDown();
    $(".main p").slideUp();
  });
});

//Open second screen
$(document).ready(function(){
  $(".card").submit(function(event){
    $(".secondscreen").fadeIn();
    $(".firstscreen").hide();
    $("#footer").hide();

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

//Alert if questions are answered
$(document).ready(function(){
  var remindersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  remindersArray.forEach(function(reminder){
     $(".answer" + reminder).click(function(){
       $("." + reminder).text("Answered");
    });
  });
});



//Business logic
//variable holding the students score
var score = 0;
var percentage = 0;

//calculate percentage
var percent = function(){
  percentage = score / 10 * 100;
}

//Analyse student's performance
var tally = function(){
  if(percentage > 79){
    document.getElementById("celebration").src = "images/image5.gif";
    document.getElementById("tally").innerHTML = "Your score is: " + percentage + "%. You have excellently passed!";
    document.getElementById("score").innerHTML = score;
  }

  else if(percentage > 49){
    document.getElementById("celebration").src = "images/image3.gif";
    document.getElementById("tally").innerHTML = "Your score is: " + percentage + "%. You have fairly passed!";
    document.getElementById("score").innerHTML = score;
  }

  else{
    document.getElementById("celebration").src = "images/image4.gif";
    document.getElementById("tally").innerHTML = "Your score is: " + percentage + "%. You have scored poorly and you need to retake the test!";
    document.getElementById("score").innerHTML = score;
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
    percent();
    tally();
    $(".secondscreen").hide();
    $(".thirdscreen").show();
  });
});
