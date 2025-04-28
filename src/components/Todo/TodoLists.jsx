import { FaTrashAlt, FaPen, FaRegCircle } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";

import TodoForm from "./TodoForm";
import styles from "./TodoLists.module.scss";

function TodoLists() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = () => {
    return setIsOpenForm(!isOpenForm);
  };

  return (
    <ul className={styles.todo__lists}>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" />
      ) : (
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
            <span className={styles.todo__action__edit} onClick={handleClick}>
              <FaPen />
            </span>
            <span className={styles.todo__action__delete}>
              <FaTrashAlt />
            </span>
          </div>
        </li>
      )}
    </ul>
  );
}

export default TodoLists;
