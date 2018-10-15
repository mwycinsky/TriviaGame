
// QUESTIONS
const panel = $("#quiz-questions");

const questions = [{
  question: "What is the name of the big purple guy with the shiny glove that sounds an awful lot like the older brother from “The Goonies”?",
  answers: ["     Grimace     ", "     Michael Jackson after bad seafood     ", "     Thanos     ", "     Sloth     "],
  correctAnswer: "     Thanos     "
}, 
{
  question: "The walking, talking tree voiced by Vin Diesel in the Guardian of the Galaxy franchise has an extremely limited vocabulary.  What is it?",
  answers: ["     I am Groot     ", "     I am Snoot     ", "     I play flute     ", "     I am Cornholio     "],
  correctAnswer: "     I am Groot     "
}, 
{
  question: "Who is the only actor to play two different major roles in different Marvel movies?",
  answers: ["     Chris Evans     ", "     Ryan Reynolds     ", "     Chris Pratt     ", "     Michael Keaton     "],
  correctAnswer: "     Chris Evans     "
}, 
{
  question: "What is the name of the Spider-man villain that wears a cape and a fish-bowl on his head?",
  answers: ["     Hyperion     ", "     Mysterio     ", "     Captain Goldfish     ", "     Electro     "],
  correctAnswer: "     Mysterio     "
}, 
{
  question: "The “B-team” of super heroes, based out of New York that consists of Daredevil, Jessica Jones, Luke Cage, and Iron Fist (yea, that’s his real name...)",
  answers: ["     The Repremanders     ", "     The Offenders     ", "     The Defenders     ", "     The Pretenders     "],
  correctAnswer: "     The Defenders     "
}, 
{
  question: "According to the story, who is the oldest of the Earth-based Avengers?",
  answers: ["     Tony Stark     ", "     Natasha Romanoff     ", "     Bruce Banner     ", "     Steve Rogers     "],
  correctAnswer: "     Steve Rogers     "
}, 
{
  question: "What successful Marvel franchise would never have been made if not for public outcry after leaked test footage appeared on the internet?",
  answers: ["     Ant-Man     ", "     Deadpool     ", "     Guardians of the Galaxy     ", "     Green Lantern     "],
  correctAnswer: "     Deadpool     "
}, 
{
  question: "What actors have played Spider-man in the last 3 renditions of the Spider-man franchise?",
  answers: ["     Toby Maguire, Anthony Anderson, Tom Hiddleston     ", "     Toby Maguire, Andrew Dice Clay, Tom Hardy     ", "     Toby Maguire, Anthony Hopkins, Tom Hanks     ", "     Toby Maguire, Andrew Garfield, Tom Holland     "],
  correctAnswer: "     Toby Maguire, Andrew Garfield, Tom Holland     "
}];



// TRIVIA CALCULATIONS
var timer;
var trivCalcs = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    trivCalcs.counter--;
    $("#counter-number").html(trivCalcs.counter);
    if (trivCalcs.counter === 0) {
      console.log("TIMES UP");
      trivCalcs.done();
    }
  },

  start: function() {
    timer = setInterval(trivCalcs.countdown, 1000);

    $("#hidden-container").prepend("<h2>Time Left: <span id='counter-number'>120</span> Seconds</h2>");
    
    $("#start-button").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done-button'>DONE</button>");
  },


//   CHECKS QUESTIONS
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;

      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        trivCalcs.correct++;
      }
      else {
        trivCalcs.incorrect++;
      }
    });

    this.result();

  },

     result: function() {

    clearInterval(timer);


    $("#hidden-container").remove();


    // UPDATE HTML WITH RESULTS

    function resultsHTML () {
        panel.append("<h3>Correct Answers: " + trivCalcs.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + trivCalcs.incorrect + "</h3>");
        panel.append("<h3>Refused to Answer: " + (questions.length - (trivCalcs.incorrect + trivCalcs.correct)) + "</h3>");
        panel.append("<button id='retry-button'>TRY AGAIN</button>");
    };
       
        if (this.correct === 8) {
            panel.html("<h2>Time is up!  You frikkin' nailed that!  Nerd...</h2>");  
            resultsHTML();  
        } 
        else if (this.correct < 8 && this.correct > 4) {
            panel.html("<h2>Time is up!  Not bad. You've got a mean swing, Point Break!</h2>");  
            resultsHTML();
        }
        else if (this.correct < 5 && this.correct > 0) {
            panel.html("<h2>Time is up.</h2>");  
            panel.html("<h2>You really need to work on your nerd game.</h2>");  
            resultsHTML();
        }
        else {
            panel.html("<h2>Time is up. You didn't get one right.  Not one.</h2>");
            panel.html("<h2>Just get outta here.  I can't even look at you right now.</h2>");
            resultsHTML();
        }


}
};

// BUTTON CLICK EVENTS

$(document).on("click", "#start-button", function() {
  trivCalcs.start();
});

$(document).on("click", "#done-button", function() {
  trivCalcs.done();
});

$(document).on("click", "#retry-button", function() {
    location.reload();
  });