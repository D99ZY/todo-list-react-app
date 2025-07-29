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
      const localTodoList = localStorage.getItem('todoList');
      console.log(localTodoList);
      if (localTodoList) {
        const parsedLocalTodoList = JSON.parse(localTodoList).todoList;
        console.log(`parsedLocalTodoList: ${JSON.stringify(parsedLocalTodoList)}`);
        setTodoList(parsedLocalTodoList);
        const myId = parsedLocalTodoList.at(-1).id;
        console.log(`myId: ${myId}`);
        setTodoItem({ id: myId + 1, value: '' });
        console.log(`todoItem: ${JSON.stringify(todoItem)}`);
        // localTodoList = JSON.parse(localTodoList).todoList;
        // setTodoList(localTodoList);
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
