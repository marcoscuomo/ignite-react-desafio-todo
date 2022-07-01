import { Trash, Check } from "phosphor-react";

import styles from "./styles.module.css";

interface PropsTodo {
  description: string;
  completed: boolean;
}

export function Todo({ description, completed }: PropsTodo) {
  return (
    <div className={styles.container}>
      <button
        className={
          completed ? styles.completeButtonTodo : styles.incompleteButtonTodo
        }
      >
        <Check />
      </button>
      <p
        className={
          completed
            ? styles.completeDescriptionTodo
            : styles.incompleteDescriptionTodo
        }
      >
        {description}
      </p>
      <button className={styles.deleteTodo}>
        <Trash />
      </button>
    </div>
  );
}
