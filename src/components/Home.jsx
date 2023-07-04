import { useState } from "react";
import logo from "../logo.svg";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
import AddNewProduct from "./AddNewProduct";

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
    <div className="App">
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="App-content">
        <div className="content-left">
          <fieldset className="todo">
            <AddTodo todo={todo} setTodo={setTodo} handleClick={handleClick} />
            <DisplayTodo todoList={todoList} handleDelete={handleDelete} />
          </fieldset>
        </div>
        <div className="content-right">
          <fieldset className="product">
            <AddNewProduct />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Home;
