var number,
	array = [], // Collects intial array to be added to equation
	collect, // This will join a collection numbers
	equation = []; // This is the final array to be evaluated for '='

$(document).ready(function() {

	// this will take the numbers clicked and add them to the display
	$('.number').click(function() {
		number = $(this).text();
		array.push(number);
		collect = array.join('');
		$('div#display').text(collect);
		if(collect.length === 8 || array.length ===8) {
			array = [];
			collect = '';
			$('div#display').text('ERROR');
		}
	});

	// Clear all logic from memory and display
	$('.clear').click(function() {
		array = [];
		equation = [];
		console.log("Everything clear");
		$('div#display').text('0');
	});

	// Links numbers together with operators and create equation
	$('.oper').click(function() {
		var oper = $(this).data('value');
		equation.push(collect);
		array = [];
		collect = '';
		equation.push(oper);
		$('div#display').empty();
		$('div#display').text(oper);
	});

	// Takes assembled equation, evaluates and displays final answer
	$('.equal').click(function() {
		var last = equation.length - 1;

		$('div#display').empty();
		equation.push(collect);
		console.log(equation);
		final = eval(equation.join(''));
		console.log(final);
		test = '' + final;
		if(test.length >= 8) {
			$('div#display').text('ERROR')
		} else {
			$('div#display').text(final)
		}
		array = [];
		equation = [];
	});

});

// Things to do...

// Style
// Default '0' on display?
// How to string operations together?
