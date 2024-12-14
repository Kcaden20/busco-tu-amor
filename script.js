var inputReady = true;
dialogueCounter = 0;
dayCounter = 0;
suggestionCount = 0;

var input = $('.404-input');
input.focus();
$(`.container`).on('click', function(e){
  input.focus();
});

window.addEventListener("load", (event) => {
	$('#date').html(dateArray[dayCounter]);
	$('#opening-message').html(openingMessages[dayCounter]);
  });
input.on('keyup', function(e){
  $('.new-output').text(input.val());
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  var href;
 if(dialogueCounter > buscoTuMessages[dayCounter].length - 2) {
	dayCounter++;
	dialogueCounter = 0;
	if(dayCounter == 5) {
		dayCounter = 4;
		dialogueCounter = 0;
		$('.container').addClass('display-none');
		setTimeout(function() {
			$('.container').removeClass('display-none');
		  }, 2000);
	} else {
	$('.container').addClass('display-none');
	setTimeout(function() {
		$('.container').removeClass('display-none');
	  }, 2000);
	$('#date').html(dateArray[dayCounter]);
	$('.new-output').removeClass('new-output');
	input.val('');
	$('.terminal').html('<p id="opening-message" class="prompt">' + openingMessages[dayCounter] + '</p><p class="prompt output new-output"></p>')
	
	$('#suggestion').html(userInput[dayCounter][dialogueCounter])
	}

  } else if (val == userInput[dayCounter][dialogueCounter].toLowerCase().replace(/[^a-zA-Z0-9]/g, '')){
    newForm();
  } else {
    resetForm();
  }
});

function newForm() {
	dialogueCounter++;
	var message = buscoTuMessages[dayCounter][dialogueCounter]
	var autoSug = userInput[dayCounter][dialogueCounter]
	$('.new-output').removeClass('new-output');
	input.val('');
	$('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');
	if(autoSug == '' || autoSug == 'undefined') {
		$('#suggestion').html('');
	} else { 
		if (suggestionCount == 0) {
			$('#suggestion').html(' NEW SUGGESTION:' + autoSug);
			suggestionCount = 1;
		} else{ 
			$('#suggestion').html(autoSug);
		}
	}
	
	$('.new-output').velocity(
	  'scroll'
	), {duration: 100}
}

function resetForm(){
  var message = "To build our server, please follow the suggested search or action."
  var input = $('.404-input');
  if(dayCounter == 4){
	$('.new-output').removeClass('new-output');
	input.val('');
	$('.terminal').append('<p class="prompt error"> BUSCO-TU is shutting down. Inputs will not be registered.' + '</p><p class="prompt output new-output"></p>');
  
	$('.new-output').velocity(
	  'scroll'
	), {duration: 100}
  } else {

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt error">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}

  }
}

	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 10;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};