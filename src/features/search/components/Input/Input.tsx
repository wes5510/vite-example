import React, { useState, useCallback } from 'react';

interface InputProps {
	onEnter: (value: string) => void;
}

const Input = ({ onEnter }: InputProps) => {
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