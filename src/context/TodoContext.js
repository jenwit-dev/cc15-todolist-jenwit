import { createContext } from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const BASE_URL = "http://localhost:8080/api/todos";

// ชื่อ context
const TodoContext = createContext();

// Setup Context ฝั่ง Provider
function TodoContextProvider(props) {
  const [allTodos, setAllTodos] = useState([]);
  const [showTodos, setShowTodos] = useState([]);

  const searchTodo = (keyword) => {
    const newShowTodos = allTodos.filter((todoObj) => {
      return todoObj.task.toLowerCase().includes(keyword.toLowerCase());
    });
    setShowTodos(newShowTodos);
  };

  const fetchAllTodos = async () => {
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
      });
      const todoData = await response.json();
      const newTodoLists = todoData.todos.map((todo) => {
        const newTodo = { ...todo, due_date: todo.date };
        delete todo.date;
        return newTodo;
      });
      setAllTodos(newTodoLists);
      setShowTodos(newTodoLists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const addTodo = async (taskInput) => {
    const newTodo = {
      task: taskInput,
      status: false,
      due_date: dayjs().format("D-M-YY"),
    };
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      };
      const response = await fetch(BASE_URL, option);
      const data = await response.json();
      setAllTodos((prev) => [data.todo, ...prev]);
      setShowTodos((prev) => [data.todo, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (todoId, newTodoObj) => {
    // Format not compatible with objects for sending HTTP request (not array but it has to be object with required task and status keys according to API doc)

    // const newTodoLists = allTodos.reduce((acc, todo) => {
    //   if (todo.id !== todoId) acc.push(todo);
    //   else acc.push({ ...todo, ...newTodoObj });
    //   return acc;
    // }, []);
    // setAllTodos(newTodoLists);
    try {
      const foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundIndex !== -1) {
        const requestObj = { ...allTodos[foundIndex], ...newTodoObj };
        const option = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestObj),
        };
        const response = await fetch(`${BASE_URL}/${todoId}`, option);
        const data = await response.json();
        const newTodoLists = [...allTodos];
        newTodoLists[foundIndex] = data.todo;
        setAllTodos(newTodoLists);
        setShowTodos(newTodoLists);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(`${BASE_URL}/${todoId}`, {
        method: "DELETE",
      });
      setAllTodos((prev) => prev.filter((item) => item.id !== todoId));
      setShowTodos((prev) => prev.filter((item) => item.id !== todoId));
    } catch (err) {
      console.log(err);
    }
  };

  const sharedObj = {
    allTodos,
    showTodos,
    addTodo,
    fetchAllTodos,
    editTodo,
    deleteTodo,
    searchTodo,
  };

  return (
    <TodoContext.Provider value={sharedObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
