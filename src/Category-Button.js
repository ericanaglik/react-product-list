import React from 'react'
import './Category-Button.css'

const CategoryButton = (props) => {
    return (
        <button
            onClick={() => props.onClick(props.label)   }
            className={`category-button ${props.selected ? 'selected' : ""}`}
            >{props.label}</button>
    )
}

export default CategoryButton