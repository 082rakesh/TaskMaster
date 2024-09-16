import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import DarkModeToggle from './ThemeComponent';

const HeaderComponent = () => {
	return (
		<div className='flex justify-between border border-spacing-5 bg-gray-50 dark:bg-gray-900'>
			<div className='logo-container'>
				<Link to={'/'} className='p-5'>
					<img
						className='w-40 ml-10 mt-5'
						src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg'
					/>
				</Link>
			</div>
			<div className='m-20 flex-col bg-gray-50 dark:bg-gray-900 space-y-5'>
				<div className=' bg-gray-50 dark:bg-gray-900'>
					<ul>
						<Link to={'/'} className='p-5 text-black dark:text-white'>
							Dashboard
						</Link>
						<Link to={'/tasks'} className='p-2 text-black dark:text-white'>
							Tasks
						</Link>
						<Link to={'./contact'} className='p-2 text-black dark:text-white'>
							Contact Us
						</Link>
					</ul>
				</div>
				<DarkModeToggle />
			</div>
		</div>
	);
};

export default HeaderComponent;
