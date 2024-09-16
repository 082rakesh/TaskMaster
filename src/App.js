import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/HeaderComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Error from './components/Error/Error';
import { RouterPathChildren } from './Router';

const App = () => {
	return (
		<div className='App'>
			<HeaderComponent />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: RouterPathChildren,
		errorElement: <Error />,
	},
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
