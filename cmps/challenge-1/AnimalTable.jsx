import { animalService } from "../../services/challenge-1/animal.service.js";
import { AnimalEntry } from "./AnimalEntry.jsx";
const { useState, useEffect } = React;

export function AnimalTable() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    loadAnimals();
  }, []);

  async function loadAnimals() {
    try {
      const loadedAnimals = await animalService.getAnimals();
      console.log(loadedAnimals);
      setAnimals(loadedAnimals);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className="animal-table">
      <table>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Count</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <AnimalEntry
              key={animal.id}
              type={animal.type}
              count={animal.count}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
