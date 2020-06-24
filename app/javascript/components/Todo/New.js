import React from 'react';
import { Button, Form, FormGroup, FormControl, Modal } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import todoService from '../../services/todo';

const New = ({ show, handleClose, setTodos }) => {
	const initialValues = { name: '', description: '', done: false };
	const {
		formValues,
		setFormValues,
		handleChange
	} = useForm({ initialValues });

	const handleSubmit = event => {
		event.preventDefault();
		const data = {
			todo: formValues,
		}
		todoService.create(data)
			.then(() => {
				todoService.all().then(response => {
					const { data } = response;
					setTodos(data);
				}).catch(error => {
					if (error.response) {
						const { response } = error;
						return console.log(response)
					}
					console.log(error)
				})
				handleClose();
				setFormValues({
					name: '',
					description: ''
				})
			}).catch(error => {
				const { response } = error;
				if (response) {
					console.log(response)
				} else {
					console.log(error)
				}
			})
	}

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title className='text-center'>
					New Todo
				</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<FormGroup controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
									type='text'
									name='name'
									placeholder='Todo name'
									value={formValues.name}
									onChange={handleChange} />
						</FormGroup>
						<FormGroup controlId='description'>
							<Form.Label>Description</Form.Label>
							<FormControl
									as='textarea'
									rows='3'
									name='description'
									value={formValues.description}
									onChange={handleChange} />
						</FormGroup>
					<Button variant="primary" type='submit'>
						Submit
					</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
	)
}

export default New;
