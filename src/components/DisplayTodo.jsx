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
          <li id={item.id} key={item.id} onClick={() => deleteTodo(item.id)}>
            {item.name}
          </li>
        );
      })}
    </div>
  );
};
export default DisplayTodo;
