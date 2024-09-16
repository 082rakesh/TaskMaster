import React from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const todos = [
	{
		name: 'Task A',
		completed: true,
	},
	{
		name: 'Task B',
		completed: true,
	},
	{
		name: 'Task C',
		completed: true,
	},
	{
		name: 'Task D',
		completed: false,
	},
	{
		name: 'Task E',
		completed: false,
	},
	{
		name: 'Task F',
		completed: false,
	},
	{
		name: 'Task G',
		completed: false,
	},
];

const Dashboard = () => {
	const completedCount = todos.filter((todo) => todo.completed).length;
	const incompleteCount = todos.length - completedCount;

	// Chart data
	const data = {
		labels: ['Completed', 'Incomplete'],
		datasets: [
			{
				label: 'Task Status',
				data: [completedCount, incompleteCount],
				backgroundColor: ['#36A2EB', '#FF6384'], // Colors for each section
				hoverBackgroundColor: ['#36A2EB', '#FF6384'],
			},
		],
	};

	return (
		<div className='flex bg-gray-50 dark:bg-gray-900 items-center justify-center'>
			<div className='w-1/3 h-1/3'>
				<Pie data={data} />
			</div>
		</div>
	);
};

export default Dashboard;
