import { useContext, useState } from "react";

import { DataContext } from "../../data/DataContext";
import { Todo } from "../Todo/Todo";

import styles from "./styles.module.css";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

interface PropsTodo {
  todos: ITodo[];
}

export const TodoList = () => {
  const { todos } = useContext(DataContext);

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
