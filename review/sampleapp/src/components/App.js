import React, { useState, useEffect } from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

const TodoTitle = ({ title, as }) => {
  if(as === "h1") return <h1>{title}</h1>;
  if(as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>
}

const TodoItem = ({ todo }) => {
  return (
    <li>
      { todo.content}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  );
}

const TodoList = ({ todoList }) => {
  return(
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    }
    fetchData();
  }, []);

  console.log("TODOリスト：", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト：", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log("完了TODOリスト：", completedList);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <textarea />
      <button>+ TODO追加</button>
      <TodoTitle title="未完了リスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      <TodoTitle title="完了リスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
