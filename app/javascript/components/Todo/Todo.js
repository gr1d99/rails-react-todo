import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './todo.scss';
import todoService from '../../services/todo';

const useFetchTodo = ({ todoId }) => {
	const [todo, setTodo] = React.useState(null);
	
	React.useEffect(() => {
		todoService
			.get(todoId)
			.then(response => {
				const { data } = response;
				setTodo(data);
			})
			.catch(error => {})
	}, [])
	
	return { todo, setTodo };
}

const Todo = ({ todoId }) => {
	const { todo, setTodo } = useFetchTodo({ todoId })

	const markAsDone = () => {
		const { id } = todo;
		const data = {
			todo: {
				done: true,
			},
		};

		todoService.update({ id, data })
			.then(response => {
				const { data } = response;
				setTodo(data)
			}).catch(error => {
			console.log(error.response)
		})
	}

	return (
		<>
			{todo ? (
				<ListGroup.Item>
					<div className='todo__header'>
						<span
							className={`todo__header-item ${todo.done ? 'done': ''}`}
						>
							{todo.name}
						</span>
						<span className='todo__header-item todo__mark-done' onClick={markAsDone}>Mark as Done</span>
					</div>
					<div>
						<p>{todo.description}</p>
					</div>
				</ListGroup.Item>
			) : (
				<div>
					<p>Loading...</p>
				</div>
			)}
			</>
	);
}

export default Todo;
