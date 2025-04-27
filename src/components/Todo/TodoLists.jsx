import styles from "./TodoLists.module.scss";
import { FaTrashAlt, FaPen, FaRegCircle } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <div
          className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}
        >
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${styles.todo__task__done}`}>
          TodoItem 1
        </p>
        <span className={styles.todo__date}>25 Apr</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaPen />
          </span>
          <span className={styles.todo__delete}>
            <FaTrashAlt />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;
