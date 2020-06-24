import React from 'react';
import { ListGroup } from 'react-bootstrap';
import shortId from 'shortid';
import Todo from './Todo';

const Todos = ({ todos }) => {
	return (
			<ListGroup>
				{todos.map(todo => {
					const { id } = todo;
					return <Todo key={shortId.generate()} todoId={id} />
				})}
			</ListGroup>
	)
}

export default Todos;
