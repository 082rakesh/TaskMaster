import Tasks from './screen/Tasks';
import Contact from './screen/Contact';
import App from './App';
import Dashboard from './screen/DashBoard';

export const RouterPathChildren = [
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/tasks',
		element: <Tasks />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
];
