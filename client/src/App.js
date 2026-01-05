import { useEffect, useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/api/v1/foods") // frontend proxy forwards to backend
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurant Foods</h1>
      {foods.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {foods.map(food => (
            <li key={food._id}>
              <strong>{food.title}</strong> - {food.time} min
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
