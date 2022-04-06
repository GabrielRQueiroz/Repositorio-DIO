let player,
	winner = null;
let playerContainer = document.getElementById('turn-of');
let winnerContainer = document.getElementById('winner');
let playerDiv = document.getElementsByClassName('player');
let winnerDiv = document.getElementsByClassName('winner');

changePlayer('X');

function pickSquare(id) {
	if (winner !== null) {
		return;
	}

	let square = document.getElementById(id);
	if (square.innerHTML !== '-') {
		return;
	}

	square.innerHTML = player;
	square.style.color = '#000';

	if (player === 'X') {
		player = 'O';
	} else {
		player = 'X';
	}

	changePlayer(player);
	checkWinner();
}

function changePlayer(value) {
	player = value;
	playerContainer.innerHTML = player;
}

function checkWinner() {
	let square1 = document.getElementById(1);
	let square2 = document.getElementById(2);
	let square3 = document.getElementById(3);
	let square4 = document.getElementById(4);
	let square5 = document.getElementById(5);
	let square6 = document.getElementById(6);
	let square7 = document.getElementById(7);
	let square8 = document.getElementById(8);
	let square9 = document.getElementById(9);

	if (checkSequence(square1, square2, square3)) {
		changeSquareColor(square1, square2, square3);
		changeWinner(square1);
		return;
	}

	if (checkSequence(square4, square5, square6)) {
		changeSquareColor(square4, square5, square6);
		changeWinner(square4);
		return;
	}

	if (checkSequence(square7, square8, square9)) {
		changeSquareColor(square7, square8, square9);
		changeWinner(square7);
		return;
	}

	if (checkSequence(square1, square4, square7)) {
		changeSquareColor(square1, square4, square7);
		changeWinner(square1);
		return;
	}

	if (checkSequence(square2, square5, square8)) {
		changeSquareColor(square2, square5, square8);
		changeWinner(square2);
		return;
	}

	if (checkSequence(square3, square6, square9)) {
		changeSquareColor(square3, square6, square9);
		changeWinner(square3);
		return;
	}

	if (checkSequence(square1, square5, square9)) {
		changeSquareColor(square1, square5, square9);
		changeWinner(square1);
		return;
	}

	if (checkSequence(square3, square5, square7)) {
		changeSquareColor(square3, square5, square7);
		changeWinner(square3);
	}
}

function changeWinner(square) {
	winner = square.innerHTML;
	playerDiv[0].style.display = 'none';
	winnerContainer.innerHTML = winner;
	winnerDiv[0].style.display = 'inline-block';
}

function changeSquareColor(square1, square2, square3) {
	square1.style.background = 'rgba(50, 250, 50, 0.4)';
	square2.style.background = 'rgba(50, 250, 50, 0.4)';
	square3.style.background = 'rgba(50, 250, 50, 0.4)';
}

function checkSequence(square1, square2, square3) {
	let isEqual = false;

	if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
		isEqual = true;
	}

	return isEqual;
}

function restart() {
	winner = null;
	winnerContainer.innerHTML = '';
	playerDiv[0].style.display = 'inline-block';
	winnerDiv[0].style.display = 'none';

	for (let i = 1; i <= 9; i++) {
		let square = document.getElementById(i);
		square.style.background = 'rgba(115, 135, 190, 0.4)';
		square.style.color = 'transparent';
		square.innerHTML = '-';
	}

	changePlayer('X');
}
