// import { useState } from "react";
// import dayjs from "dayjs";

// const BASE_URL = "http://localhost:8080/api/todos";

// function useTodo() {
//   const [allTodos, setAllTodos] = useState([]);

//   const addTodo = async (taskInput) => {
//     const newTodo = {
//       // id: nanoid(),
//       task: taskInput,
//       status: false,
//       due_date: dayjs().format("D-M-YY"),
//     };
//     try {
//       const option = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newTodo),
//       };
//       const response = await fetch(BASE_URL, option);
//       const data = await response.json();
//       // console.log(data);
//       setAllTodos((prev) => [data.todo, ...prev]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchAllTodos = async () => {
//     try {
//       const response = await fetch(BASE_URL, {
//         method: "GET",
//       });
//       const todoData = await response.json();
//       // console.log(todoData);
//       const newTodoLists = todoData.todos.map((todo) => {
//         const newTodo = { ...todo, due_date: todo.date };
//         delete todo.date;
//         return newTodo;
//       });
//       setAllTodos(newTodoLists);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const editTodo = async (todoId, newTodoObj) => {
//     // console.log(newTodoObj);
//     // console.log(todoId, newTodoObj);
//     // const newTodoLists = allTodos.map((todo) => {
//     //   if (todo.id !== todoId) return todo;
//     //   else return { ...todo, ...newTodoObj };
//     // });
//     // console.log(newTodoLists);

//     // Format not compatible with objects for sending HTTP request (not array but it has to be object with required task and status keys according to API doc)
//     // const newTodoLists = allTodos.reduce((acc, todo) => {
//     //   if (todo.id !== todoId) acc.push(todo);
//     //   else acc.push({ ...todo, ...newTodoObj });
//     //   return acc;
//     // }, []);
//     // setAllTodos(newTodoLists);
//     try {
//       const foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
//       if (foundIndex !== -1) {
//         const requestObj = { ...allTodos[foundIndex], ...newTodoObj };
//         const option = {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestObj),
//         };
//         const response = await fetch(`${BASE_URL}/${todoId}`, option);
//         const data = await response.json();
//         // console.log(data);
//         const newTodoLists = [...allTodos];
//         newTodoLists[foundIndex] = data.todo;
//         setAllTodos(newTodoLists);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteTodo = async (todoId) => {
//     // return console.log(todoId);
//     // const index = allTodos.findIndex((item) => item.id === todoId);
//     try {
//       const response = await fetch(`${BASE_URL}/${todoId}`, {
//         method: "DELETE",
//       });
//       setAllTodos((prev) => prev.filter((item) => item.id !== todoId));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return { allTodos, addTodo, fetchAllTodos, editTodo, deleteTodo };
// }

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function useTodo() {
  const sharedObj = useContext(TodoContext);
  return sharedObj;
}

export default useTodo;
