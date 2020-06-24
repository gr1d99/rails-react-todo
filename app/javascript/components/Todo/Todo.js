import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './todo.scss';
import todoService from '../../services/todo';
import useFetchTodo from './hooks/useFetchTodo';

const Todo = ({ todoId }) => {
	const { todo, setTodo } = useFetchTodo({ todoId, service: todoService })

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
						<h4
							className={`todo__header-item ${todo.done ? 'done': ''}`}
						>
							{todo.name}
						</h4>
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
