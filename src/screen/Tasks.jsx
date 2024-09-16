import { useState, useMemo, useEffect, useCallback } from 'react';
import { useTasks } from '../hooks/useTasks';
import Shimmer from '../components/Error/Shimmer';
import Button from '../components/Button';
import { ADD_TASK, ALL_TASKS } from '../constants/constant';
import {
	fetchTasks,
	updateTask,
	deleteTask,
	addTask,
} from '../Services/TaskService';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [addTodo, setAddTodo] = useState('');
	const [isSortedByStatus, setIsSortedByStatus] = useState(false);
	const [isSortedByTitle, setIsSortedByTitle] = useState(false);

	// custom hook to fetch tasks
	const allTask = useTasks();
	updateTaskList(allTask);

	function updateTaskList(list) {
		const updateData = useMemo(() => {
			setTasks(list);
		}, [list]);
	}

	const addNewTask = async (newTodo) => {
		const jsonRes = await addTask(newTodo);
		console.log('response is ->', jsonRes);
	};

	const updateTODO = useCallback(async (taskId, updateTodo) => {
		const jsonRes = await updateTask(taskId, updateTodo);
		console.log('update response is ->', jsonRes);
	});

	/**
	 * handlers
	 */
	const buttonHandler = () => {
		const request = {
			todo: addTodo,
			completed: false,
			userId: 5,
		};
		console.log('buttonHandler pressed', request);
		addNewTask(request);
	};

	const deleteHandler = async (todo) => {
		const res = await deleteTask(todo.id);
		console.log('deleteHandler pressed', res, res.isDeleted);
	};

	const updateHandler = (todo) => {
		const request = {
			completed: true,
		};
		console.log('updateHandler pressed', todo, todo.id);
		updateTODO(todo.id, request);
	};

	const sortHandler = () => {
		setIsSortedByTitle(!isSortedByTitle);
		const sortedTasks = isSortedByTitle
			? tasks.toSorted((a, b) => a.todo.localeCompare(b.todo))
			: tasks.toSorted((a, b) => b.todo.localeCompare(a.todo));
		setTasks(sortedTasks);
	};
	const sortStatusHandler = () => {
		setIsSortedByStatus(!isSortedByStatus);
		const sortedTasks = isSortedByStatus
			? tasks.toSorted((a, b) => a.completed - b.completed)
			: tasks.toSorted((a, b) => b.completed - a.completed);
		setTasks(sortedTasks);
	};

	return tasks === null ? (
		<Shimmer />
	) : (
		<div className=' bg-gray-50 dark:bg-gray-900'>
			<div className=' bg-gray-50 dark:bg-gray-900 w-6/12 mx-auto my-2 shadow-lg flex-col justify-between'>
				<div className='flex space-x-9 justify-between'>
					<div className=' mt-5'>
						<input
							className='p-1 border-spacing-5 border border-solid border-blue-400 mr-5 rounded'
							placeholder='Add TODO'
							value={addTodo}
							onChange={(e) => setAddTodo(e.target.value)}
						></input>
						<Button onClick={buttonHandler} title='Add' />
					</div>
					<div className='space-x-5'>
						<Button onClick={sortStatusHandler} title='Sort by status' />
						<Button onClick={sortHandler} title='Sort by title' />
					</div>
				</div>

				{tasks?.map((item, index) => (
					<div
						key={item.id}
						className=' bg-gray-50 w-6/12 mx-auto my-2 shadow-lg flex-col justify-between'
					>
						<div className=' p-2 w-10/12 '>
							<div>
								<span className=' text-xs mt-2'>{item.todo}</span>
							</div>
							<div className='flex justify-between'>
								<p className='text-xs mt-2'>
									{item.completed ? 'Status: Completed' : 'Status: Pending'}
								</p>
								<div className='flex justify-between space-x-5'>
									<Button onClick={() => deleteHandler(item)} title='Delete' />
									{!item.completed && (
										<Button
											onClick={() => updateHandler(item)}
											title='Update'
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Tasks;
