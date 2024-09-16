import { useEffect, useState, useCallback } from 'react';
import { ALL_TASKS } from '../constants/constant';

export const useTasks = () => {
	const [listOfTasks, setListOfTasks] = useState([]);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = useCallback(async () => {
		console.log('fetchTasks');
		const response = await fetch('https://dummyjson.com/todos?limit=30');
		const jsonResponse = await response.json();
		console.log('print tasks', jsonResponse);
		const tasks = jsonResponse?.todos;
		setListOfTasks(tasks);
	});

	return listOfTasks;
};
