import React from 'react';

const useTrueFalse = ({ initial }) => {
	const [bool, setBool] = React.useState(initial)
	
	const toggleTrueFalse = () => {
		setBool(!bool);
	}
	
	return {
		bool,
		toggleTrueFalse,
	}
};

export default useTrueFalse;
