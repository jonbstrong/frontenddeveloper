var question = 'Which of these do you prefer?';
var options = ['Chocolate', 'Candy', 'Cookies'];

var answerUrl = 'response.json';

function displayResults(data) {
	$('#question, #options').hide();
	$('#results').show();
	$.each(data.results.distribution, function (index, item) {
		var percentRow = '<span>' + item + '%</span>';
		var optionRow = '<span>' + options[index] + '</span>';
		$('#results').append('<li>' + percentRow + optionRow + '</li>');
	});
}

function submitResult(question, answer) {
	$.get(answerUrl, {
		question: question,
		answer: answer
	}, function (data) {
		displayResults(data);
	});
}

function answerClicked(event) {
	var chosenAnswer = $(event.target);
	var answer = chosenAnswer.text();
	submitResult(question, answer);
}

function initQuestion() {
	$('#question').text(question);
	$.each(options, function (index, item) {
		$('#options').append('<li>' + item + '</li>');
	});

	$('#options li').click(answerClicked);
}
initQuestion();