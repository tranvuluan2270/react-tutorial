import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    let obj = { name, price, size, color };

    let productList = localStorage.getItem("productList");
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(obj);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([obj]));
    }
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  const handleShowHide = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      {isShow === true && (
        <fieldset>
          <legend>Add A New Product</legend>
          <div className="input-product">
            <label>Name:</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Price:</label>
            <input
              value={price}
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Size:</label>
            <input
              value={size}
              type="text"
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Color:</label>
            <input
              value={color}
              type="text"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => handleClick()}>+Add New</button>
          </div>
        </fieldset>
      )}

      {isShow === true ? (
        <div
          onClick={() => {
            handleShowHide();
          }}
        >
          Hide this form
        </div>
      ) : (
        <div
          onClick={() => {
            handleShowHide();
          }}
        >
          Show this form
        </div>
      )}
      <div>
        List Products:
        <div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
};
export default AddNewProduct;
