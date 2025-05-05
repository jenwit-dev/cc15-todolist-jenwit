import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists(props) {
  return (
    <ul className={styles.todo__lists}>
      {props.data.map(({ id, task, status, due_date }) => (
        <TodoItem key={id} task={task} done={status} date={due_date} />
      ))}
    </ul>
  );
}

export default TodoLists;
