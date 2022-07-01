import { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/DataContext";
import styles from "./HeaderMain.module.css";

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

interface ICountTodo {
  totalTodos: number;
  totalCompleted: number;
}

interface PropsTodo {
  todos: ITodo[];
}

export const HeaderMain = () => {
  const { todos } = useContext(DataContext);
  const [todosCount, setTodosCount] = useState(todos);
  const [totals, setTotals] = useState<ICountTodo>({
    totalTodos: 0,
    totalCompleted: 0,
  });
  // console.log("todos", todos);
  useEffect(() => {
    const totalTodo = todosCount.reduce(
      ({ totalTodos, totalCompleted }, todoUser) => {
        if (todoUser.completed) {
          totalCompleted++;
        }
        totalTodos++;
        return { totalTodos, totalCompleted };
      },
      { totalTodos: 0, totalCompleted: 0 }
    );

    setTotals(totalTodo);
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.todoCreate}>
        <p>Tarefas Criadas</p>
        <span>{totals.totalTodos}</span>
      </div>
      <div className={styles.todoComplete}>
        <p>Concluídas</p>
        <span>{totals.totalCompleted}</span>
      </div>
    </header>
  );
};
