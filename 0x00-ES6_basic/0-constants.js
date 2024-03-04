export taskFirst = function() {
	const task = 'I prefer const when I can.';
	return task;
}
export getLast = function() {
	return ' is okay';
}

export taskNext = function() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
