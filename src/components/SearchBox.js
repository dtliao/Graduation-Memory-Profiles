import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--blue w-15 f3 helvetica bg-lightest-blue'
				type='search' 
				placeholder= '&#xf002; search alumni' 
				onChange={searchChange}
			/>
		</div> 
	);
}

export default SearchBox;