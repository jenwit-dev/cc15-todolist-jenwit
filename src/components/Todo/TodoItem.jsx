import { HiOutlineCheck } from "react-icons/hi";
import { useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = () => {
    return setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" setIsOpenForm={setIsOpenForm} />
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
    </>
  );
}

export default TodoItem;
