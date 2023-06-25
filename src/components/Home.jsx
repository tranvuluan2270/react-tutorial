import { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    { id: "todo1", name: "Watching Youtube" },
    { id: "todo2", name: "Using Facebook" },
    { id: "todo3", name: "Reading Books" },
  ]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleClick = () => {
    if (!todo) {
      alert("Todo's name can't be emty");
      return;
    }
    let todoId = randomIntFromInterval(4, 99999);
    let todoItem = {
      id: `todo${todoId}`,
      name: todo,
    };
    setTodoList([...todoList, todoItem]);
    setTodo("");
  };
  const handleDelete = (id) => {
    let currentTodoList = [...todoList];
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setTodoList(currentTodoList);
  };
  return (
    <div>
      <div>
        <AddTodo todo={todo} setTodo={setTodo} handleClick={handleClick} />

        <DisplayTodo todoList={todoList} handleDelete={handleDelete} />
      </div>
      <br />
    </div>
  );
};

export default Home;
