import { ADD_TASK, ALL_TASKS } from '../constants/constant';

export const fetchTasks = async () => {
	const response = await fetch(ALL_TASKS);
	const jsonResponse = await response.json();
	console.log('print tasks', jsonResponse);
	return jsonResponse?.todos;
};

export const updateTask = async (taskId, updateTodo) => {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updateTodo),
	};
	const response = await fetch(
		'https://dummyjson.com/todos/' + taskId,
		requestOptions
	);
	return await response.json();
};

export const deleteTask = async (taskId) => {
	const requestOptions = {
		method: 'DELETE',
	};
	const response = await fetch(
		'https://dummyjson.com/todos/' + taskId,
		requestOptions
	);
	return await response.json();
};

export const addTask = async (newTodo) => {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTodo),
	};
	const response = await fetch(ADD_TASK, requestOptions);
	return await response.json();
};
