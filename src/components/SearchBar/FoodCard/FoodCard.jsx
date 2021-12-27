// import React from "react";
import "./FoodCard.css";
import React, { useState, useEffect } from "react";

export default function FoodCard(props) {
  const [foodCollect, setfoodCollect] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${props.itemName}&app_id=f95851d7&app_key=3f5d1c83514fa759f22bcd81172185b3`
    )
      .then((res) => res.json())
      .then((data) => setfoodCollect(data.hits));
    console.log("useEffect Running");
  }, [props.itemName]);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {foodCollect.map((f) => (
            <div className="col-4 g-2">
              <div className="card h-100">
                <img
                  src={f.recipe.image}
                  className="card-img-top border-5"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{f.recipe.label}</h5>
                  <div className="card-header text-bold">Health Labels</div>
                  <ul className="list-group list-group-flush">
                    {f.recipe.healthLabels.slice(0, 3).map((health) => (
                      <li className="list-group-item">{health}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
