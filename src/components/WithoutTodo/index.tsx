import styles from "./styles.module.css";
import Clipboard from "../../assets/Clipboard.svg";

export const WithoutTodo = () => {
  return (
    <div className={styles.content}>
      <img src={Clipboard} alt="" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
