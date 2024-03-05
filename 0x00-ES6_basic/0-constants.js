export const taskFirst = function() {
	const task = 'I prefer const when I can.';
	return task;
}

export const getLast = function() {
	return ' is okay';
}

export let taskNext = function() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
