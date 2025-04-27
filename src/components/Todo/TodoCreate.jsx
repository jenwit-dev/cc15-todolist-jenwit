import styles from "./TodoCreate.module.scss";

// function CreateTodo() {
//   return <div>CreateTodo</div>;
// }

// export default CreateTodo;

function TodoCreate() {
  return (
    <div className={styles.todo__create}>
      <span className={styles.todo__create__button}>
        <div className={styles.todo__create__button__plus}>+</div>
      </span>
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>
  );
}

export default TodoCreate;
