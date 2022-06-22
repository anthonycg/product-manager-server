import React from "react";
import { useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const ProductForm = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...ProductList, res.data]);
      })
      .catch(err=> {
        console.log(err)
      })
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <p>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)}/>
        <label>Price</label>
        <input type="text" onChange={(e) => setPrice(e.target.value)}/>
        <label>Description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)}/>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
