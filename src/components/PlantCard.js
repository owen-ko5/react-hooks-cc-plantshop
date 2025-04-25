import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  
  const [inStock, setInStock] = useState(true);

  function handleToggleButton(){
    setInStock((inStock) => !inStock)
  }

  function handleDelete(id){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(r => {
    if (r.ok) {
        onDelete(plant)
        console.log('Plant Deleted:', plant)
    } else {
      console.error('Failed to delete plant')
    }
    })
    .catch((error) => console.error(error))
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggleButton}>In Stock</button>
      ) : (
        <button onClick={handleToggleButton}>Out of Stock</button>
      )}
      <button style={{color: "red"}} onClick={() => handleDelete(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;