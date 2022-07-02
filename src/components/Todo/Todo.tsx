import { Trash, Check } from "phosphor-react";

import styles from "./styles.module.css";

interface PropsTodo {
  description: string;
  completed: boolean;
  id: string;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function Todo({
  description,
  completed,
  id,
  updateTodo,
  deleteTodo,
}: PropsTodo) {
  const handleTodoActive = () => {
    updateTodo(id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div className={styles.container}>
      <button
        className={
          completed ? styles.completeButtonTodo : styles.incompleteButtonTodo
        }
        onClick={handleTodoActive}
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
      <button className={styles.deleteTodo} onClick={handleDeleteTodo}>
        <Trash />
      </button>
    </div>
  );
}
