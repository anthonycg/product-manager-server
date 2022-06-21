import { useState } from "react";
import axios from "axios";
import React from "react";
import ProductList from '../components/ProductList'
import ProductForm from "../components/ProductForm";

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [productList, setProductList] = useState([])

    return (
        <div>
            {/* <ProductForm product = {product} setProduct = {setProduct} /> */}
            <hr/>
            <ProductList product = {product} setProduct = {setProduct} />
        </div>
    )
}

export default Main;