import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.scss';
import New from './Todo/New';
import Todos from './Todo/Todos';
import useTrueFalse from './hooks/useTrueFalse';
import todoService from '../services/todo';

const useFetchTodos = () => {
	const [todos, setTodos] = React.useState([])

	React.useEffect(() => {
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
	}, [])
	
	return { todos, setTodos };
}

const Home = () => {
	const { todos, setTodos } = useFetchTodos();
	const {
		bool: showModal,
		toggleTrueFalse: toggleModal
	} = useTrueFalse({ initial: false })

	return (
			<Row>
				<Col lg={12} className='home'>
					<div className='home__heading'>
            <span className='home__new-todo'>
              <Button onClick={toggleModal}>New Todo</Button>
            </span>
						<h3 className='home__title'>Todos</h3>
					</div>
					<Todos todos={todos} />
					<New
						show={showModal}
						handleClose={toggleModal}
						setTodos={setTodos} />
				</Col>
			</Row>
	)
}

export default Home;
