import React, { useState, useCallback } from 'react';

const Input = ({ onEnter }) => {
	const [value, setValue]= useState('');
	const changeHandler = useCallback(({ target: { value } }) => {
		setValue(value);
	}, []);
	
	const keydownHandler = useCallback((e) => {
		if (e.which === 13) {
			onEnter(value);
		}
	}, [value, onEnter]);

	return <input value={value} onChange={changeHandler} onKeyDown={keydownHandler}/>;
};

export default Input;