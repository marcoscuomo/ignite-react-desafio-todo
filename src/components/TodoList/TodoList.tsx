import { useContext, useState } from "react";

import { TodoContext } from "../../data/DataContext";
import { Todo } from "../Todo/Todo";

import styles from "./styles.module.css";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const updateTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    // const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
    console.log(`The id is => ${newTodos}`);
  };

  return (
    <div className={styles.container}>
      {todos!.map((todo) => (
        <Todo
          key={todo.id}
          description={todo.description}
          completed={todo.completed}
          id={todo.id}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
