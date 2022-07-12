var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;
    $(document).keypress(function() {
        if (!started) {
          $("#level-title").text("Level " + level);
          nextSequence();
          started = true;
        }
      });

      $(".btn").click(function() {

        var userChosenColour = $(this).attr("id");
        userPattern.push(userChosenColour);
        console.log(userPattern);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userPattern.length-1);

      });

    function checkAnswer(userInput){
        if(gamePattern[userInput] === userPattern[userInput]){
            if(gamePattern.length === userPattern.length){
                setTimeout(function(){
                    nextSequence();
                }, 1000);
            }
        }else{
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            startOver();
        }
    }
      
    function nextSequence(){
        userPattern = [];
        level++;
        $("#level-title").text("Level: "+level);
        let randomNumber = Math.floor(Math.random() * 4 );
        let randomColor = buttonColors[randomNumber];
        gamePattern.push(randomColor);
        console.log(gamePattern);
        $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomColor);
        
        
    }
    
    function playSound(name){
        let audio = new Audio("sounds/"+name+".mp3");
        audio.play();
    };

    function animatePress(currentColor) {
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColor).removeClass("pressed")
        }, 100);
    };

    function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
    }

        // function checkAnswer(indexOfLastElement){
    //     if (gamePattern[indexOfLastElement] === userPattern[indexOfLastElement]) {
            
    //         if(userPattern.length === gamePattern.length){
    //             setTimeout(function () {
    //                 nextSequence()
    //             }, 1000);
    //         }
    //         console.log(gamePattern, userPattern);
    //     }else{
    //         console.log("no");
    //         playSound("wrong");
    //         $("body").addClass("game-over");
    //         $("#level-title").text("Game Over, Press Any Key to Restart");
    //         setTimeout(function () {
    //           $("body").removeClass("game-over");
    //         }, 200);
    //         startOver();
            
            
    //     }
    // }
