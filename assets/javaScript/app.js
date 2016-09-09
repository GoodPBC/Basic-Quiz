//this is jQuery onclick event function  

$("#start").on("click" , function() {   //when we click the #start btn
	game.start();						
  //$("#start").remove();   														//STEP 7 -- We go back to add this line of code to remove the button once it is pressed -- .hide might work here to.
  //console.log('YOU CLICKED ME');   												// 1st step --we console.log for control. Make sure you are connected to the page.
  //$('#sub-wrapper').remove();														//2nd step -- it does what we tell it to do 
  //for (var i = 0; i < questions.length; i++) {									//3rd step  at 8:47 in the video the instructor say hes going to remove subwrapper and replace it with a for loop that loops through each question in the questions object and append it to #subwrapper
  //	$("#sub-wrapper").append('<h2>' + questions[i].question + '</h2>'); 		//4th step -- we use jQuery to append to #subwrapper and use questions[i] which is our loop so it will append each question as it loops and append it inside our h2 element
  //		for (var j = 0; j < questions[i].answers.length; j++) {					//5th step -- at 9:51 in the video the instructor says he is going to put a sub loop in here without explaining any logic as to why
  																					//6th step -- then he say we will have this "bit right here that is going to be..." and proceeds to code out loud. what this is telling the program to do is to: append each question with the radio type, then with a name that is equal to the number of the question, then a value that is equal to the answer. that way we can store the value in the button themselves.  I NEED TO GO OVER THIS BLOCK OF CODE WITH SOMEONE
  //			$("#sub-wrapper").append("<input type='radio' name='question-' "+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);  
  // 		}
  //}									 
});

//create questions array. we could create all the html for the questions and answers and then .append it into the div over and over again, but that would long and tedious. we create a questions variable that is an  array object
var questions  = [{
	question: "WHAT IS A QUESTION?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
	}, {
	question: "WHAT IS A QUESTION1?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
	}, {
	question: "WHAT IS A QUESTION2?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
	}, {
	question: "WHAT IS A QUESTION3?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
	}, {
	question: "WHAT IS A QUESTION4?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
	}, {
	question: "WHAT IS A QUESTION5?",
	answers: ['test1','test2', 'test3'],
	correctAnswer: "test2",
}];

//  STEP 8 Here we create a game object that has some unique properties and methods
var game = {
	correct: 0, 	//starts at 0 and will keep track of how many the questions the player gets right.
	incorrect: 0, 	//starts at 0 and will keep track of how many the questions the player gets wrong.
	counter: 45,	//game clock starts at 120 and we want it to count backwards to 0 in 1000ms increments. in order to do this we have to create a method called countdown
	countdown: function() {  //notice here we make countdown equal to function
		game.counter--;  //in this function we decrement the game.counter value by 1
		$("#counter").html(game.counter); 	// here we create #counter div (which doesnt exist on our page yet) we set it so that the html in that #counter div will be equal to game.counter
		if(game.counter <= 0) {				//here we make it so that if the game.counter is less than/equal to zero than we want the game to end so we first: 
			console.log('The Game is OVER');//set a console.log that we will use as a control for ourselves(we will remove later and replace with game.done function)
			game.done();					//here we reference another method that we have not yet created. when we create it it will run when the game is done
		}
	},
	start: function() {		//we declare the start function and in this method we cut and paste the code we made in the beginning (lines 5-15) and put it into this function, so above we can call game.start() inside the onclick for our start button
		timer = setInterval(game.countdown, 1000); // this is going to run out game clock and game.done(which we still have not created) will end the game when the counter reaches 0
		$("#sub-wrapper").prepend("<h2><b>Time Remaining:</b> <span id='counter'>120</span> Seconds</h2>"); 	//we also want to prepend the game clock to the page so we do that with jQuery statement here  **WHY PREPEND vs APPEND HERE?**
		$("#start").remove();		//here we remove the start button from the page
		for (var i = 0; i < questions.length; i++) {		//we loop throught the questions object
			$("#sub-wrapper").append('<h2>' + questions[i].question + '</h2>'); 	//each time we loop we grab the question property of the questions object and append it to our #sub-wrapper	
			for (var j = 0; j < questions[i].answers.length; j++) {					//we create a sub-loop to loop through the answers property of the questions object and till we reach the end of the array
				$("#sub-wrapper").append("<input type='radio' name='question-' "+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);  
			}
		}				
	},
	done: function() {       //this is the function we called on line 54 (before we created it). we are now creating it and it will be responsible for checking each question to see if it is right or wrong
		$.each($('input[name="question-0]": checked'),function(){		//$.each is looks for each element that we mention inside the parenthesis. so we have it search for each input and
			if($(this).val()==questions[0].correctAnswer){				//
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1]': checked"),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2]': checked"),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3]': checked"),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4]': checked"),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-5]': checked"),function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
	}
};