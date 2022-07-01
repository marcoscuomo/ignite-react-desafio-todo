import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { DataContext } from "../data/DataContext";

import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const { todos, setTodos } = useContext(DataContext);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  const handleNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  function addTodo(todo: string) {
    let currentTodo = todos;
    let idTodo = todos.length;
    idTodo++;

    currentTodo.push({
      id: idTodo,
      description: todo,
      completed: false,
    });
    setTodos(currentTodo);
    console.log("todos ==> ", todos);
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
