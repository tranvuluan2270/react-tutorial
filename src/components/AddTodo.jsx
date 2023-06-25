const AddTodo = (props) => {
  const { todo, setTodo, handleClick } = props;
  return (
    <div>
      <label>Todo's Name: </label>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={() => handleClick()}>
        Submit
      </button>
    </div>
  );
};
export default AddTodo;
