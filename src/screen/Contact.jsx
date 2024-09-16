import Input from 'postcss/lib/input';
import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
	const [firstInput, setFirstInput] = useState('');
	const [secondInput, setSecondInput] = useState('');

	const buttonHandler = () => {
		console.log('buttonHandler');
	};
	return (
		<div>
			<h1 className='font-bold text-3xl p'>Contact Us page</h1>
			<div className=' mt-5'>
				<input
					className='p-1 border-spacing-5 border border-solid border-blue-400 mr-5 rounded'
					placeholder='first text input'
					value={firstInput}
					onChange={(e) => setFirstInput(e.target.value)}
				></input>
				<input
					className='p-1 border-spacing-5 border border-solid border-blue-400 mr-5 rounded'
					placeholder='second text input'
					value={secondInput}
					onChange={(e) => setSecondInput(e.target.value)}
				></input>
				<Button onClick={buttonHandler} title='Submit' />
			</div>
		</div>
	);
};
export default Contact;
