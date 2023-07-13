const DisplayTodo = (props) => {
  const deleteTodo = (id) => {
    props.handleDelete(id);
  };
  const todoList = props.todoList;
  return (
    <div>
      <h3>---- List Todo ----</h3>
      {todoList.map((item, index) => {
        return (
          <div className="list-todo">
            <li id={item.id} key={item.id}>
              {item.name}
            </li>
            <button onClick={() => deleteTodo(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};
export default DisplayTodo;
