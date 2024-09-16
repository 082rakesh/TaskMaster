import { useState, useEffect } from 'react';

function DarkModeToggle() {
	const [darkMode, setDarkMode] = useState(() => {
		// Check the user's preference for dark mode from localStorage
		return localStorage.getItem('theme') === 'dark';
	});

	useEffect(() => {
		// Add or remove the 'dark' class to the root element
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	return (
		<button
			onClick={() => setDarkMode(!darkMode)}
			className='p-2 bg-gray-200 dark:bg-white rounded-lg'
		>
			{darkMode ? 'Light Mode' : 'Dark Mode'}
		</button>
	);
}

export default DarkModeToggle;
