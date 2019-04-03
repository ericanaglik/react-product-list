import React from 'react'

const Product = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <p>${props.price}</p>
        </div>
    )
}


export default Product

// <Product title={} desc={} price={} />