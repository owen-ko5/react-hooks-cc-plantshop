import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => setPlants(data));
  }, []);

  function handleAddPlant(newPlant){
    setPlants(prev => [...prev, newPlant])
  }

  function handleDeletePlant(deletedPlant){
    setPlants(prev => prev.filter((plant) => plant.id !== deletedPlant.id))
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants} onDelete={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;