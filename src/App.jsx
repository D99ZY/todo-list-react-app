import { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({ id: 0, value: '' });

  const handleAddTodos = useCallback(
    (newTodo) => {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
      console.log(todoItem);
    },
    [todoItem]
  );

  const handleDeleteTodo = useCallback(
    (todo) => {
      setTodoList(
        todoList.filter((item) => {
          return item.id !== todo.id;
        })
      );
    },
    [todoList]
  );

  const handleEditTodo = useCallback(
    (todo) => {
      setTodoItem({ ...todo, id: todoItem.id, value: todo.value });
      handleDeleteTodo(todo);
    },
    [todoItem.id, handleDeleteTodo]
  );

  return (
    <>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} handleAddTodos={handleAddTodos} />
      <TodoList
        todoList={todoList}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
