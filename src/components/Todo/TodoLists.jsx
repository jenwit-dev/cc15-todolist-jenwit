import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoLists;
