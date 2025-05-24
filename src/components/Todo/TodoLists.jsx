import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";
import useTodo from "../../hooks/useTodo";

function TodoLists() {
  // const { allTodos } = useContext(TodoContext);
  const { allTodos } = useTodo();

  return (
    <ul className={styles.todo__lists}>
      {allTodos.map(({ id, task, status, due_date }) => (
        <TodoItem key={id} task={task} done={status} date={due_date} id={id} />
      ))}
    </ul>
  );
}

export default TodoLists;
