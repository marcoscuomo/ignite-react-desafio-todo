import { useContext, useState } from "react";

import { TodoContext } from "../../data/DataContext";
import { Todo } from "../Todo/Todo";

import styles from "./styles.module.css";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      {todos!.map((todo) => (
        <Todo
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
