import React from 'react'
import { useState } from 'react';

const ProductForm = (props) => {
    const [product, setProduct] = useState("");

    const formHandler = (e) => {
        setProduct(e.target.data)
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <label>Title</label>
                <input></input>
            </form>
        </div>
    )
}

export default ProductForm;