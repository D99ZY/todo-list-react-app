import { useCallback, useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({ id: 0, value: '' });

  const persistData = useCallback(() => {
    localStorage.setItem('todoList', JSON.stringify({ todoList }));
  }, [todoList]);

  const handleAddTodos = useCallback(
    (newTodo) => {
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
      persistData();
    },
    [persistData]
  );

  const handleDeleteTodo = useCallback(
    (todo) => {
      setTodoList(
        todoList.filter((item) => {
          return item.id !== todo.id;
        })
      );
      persistData();
    },
    [persistData, todoList]
  );

  const handleEditTodo = useCallback(
    (todo) => {
      setTodoItem({ ...todo, id: todoItem.id, value: todo.value });
      handleDeleteTodo(todo);
      persistData();
    },
    [todoItem.id, handleDeleteTodo, persistData]
  );

  useEffect(() => {
    if (localStorage) {
      let localTodoList = localStorage.getItem('todoList');
      if (localTodoList) {
        localTodoList = JSON.parse(localTodoList).todoList;
        setTodoList(localTodoList);
      }
    }
  }, []);

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
