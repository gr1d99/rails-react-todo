import React from 'react';

const useFetchTodo = ({ todoId, service }) => {
  const [todo, setTodo] = React.useState(null);
  
  React.useEffect(() => {
    service
      .get(todoId)
      .then(response => {
        const { data } = response;
        setTodo(data);
      })
      .catch(error => {})
  }, [])
  
  return { todo, setTodo };
}

export default useFetchTodo;
