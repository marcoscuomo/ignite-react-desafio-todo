import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { TodoContext, useTodo } from "../data/DataContext";

import styles from "./AddTodo.module.css";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

const AddTodo = () => {
  const { todos, setTodos } = useTodo();

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  const handleNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  function addTodo(todo: string) {
    let idTodo = todos!.length;
    idTodo++;
    const newTodo = {
      id: idTodo,
      description: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <form className={styles.container} onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTodo}
      />
      <button type="submit">
        Criar <PlusCircle size={19} />
      </button>
    </form>
  );
};

export { AddTodo };
