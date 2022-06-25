import React from "react"
import "./index.css"

const ItemAnimal = ({ image, title, isSelected, onTap }) => (
  <div className="item_animal_container">
    <div
      onClick={onTap}
      className={`item_animal_image${isSelected ? "_selected" : ""}`}
    >
      {image}
    </div>
    <text className="item_animal_name">{title}</text>
  </div>
)

export default ItemAnimal
