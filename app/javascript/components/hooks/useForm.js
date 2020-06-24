import React from 'react';

const useForm = ({ initialValues }) => {
	const [formValues, setFormValues] = React.useState(initialValues)
	
	const handleChange = event => {
		const { target } = event;
		const { name, value } = target;
		setFormValues({ ...formValues, [name]: value });
	}
	
	return {
		formValues,
		setFormValues,
		handleChange,
	}
};

export default useForm;
