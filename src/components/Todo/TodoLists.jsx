import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists({ data, deleteTodo, toggleTodo }) {
  return (
    <ul className={styles.todo__lists}>
      {data.map(({ id, task, status, due_date }) => (
        <TodoItem
          key={id}
          task={task}
          done={status}
          date={due_date}
          id={id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
