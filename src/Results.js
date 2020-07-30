import React from "react";

const Results = (props) => {
  let recipes = props.data.map((item) => {
    let recipe = item.recipe;
    return (
      <tr className="table-item" key={recipe.label}>
        <td className="recipe-image">
          <img src={recipe.image} alt={recipe.label} />
        </td>
        <td>{recipe.label}</td>
        <td>
          <p className="inline">
            Protein:{" "}
            {calculateUnitPerServing(
              recipe.totalNutrients.PROCNT.quantity,
              recipe.yield
            )}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
          <p className="inline">
            Fat:{" "}
            {calculateUnitPerServing(
              recipe.totalNutrients.FAT.quantity,
              recipe.yield
            )}{" "}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p className="inline">
            Carbs:{" "}
            {calculateUnitPerServing(
              recipe.totalNutrients.CHOCDF.quantity,
              recipe.yield
            )}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
        </td>
        <td className="inline">
          {calculateUnitPerServing(
            recipe.totalNutrients.ENERC_KCAL.quantity,
            recipe.yield
          )}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit}
        </td>
        <td>
          {calculateUnitPerServing(recipe.totalWeight, recipe.yield)}{" "}
          {recipe.totalNutrients.PROCNT.unit}
        </td>
      </tr>
    );
  });

  function calculateUnitPerServing(weight, numServings) {
    return Math.round(parseFloat(weight) / parseInt(numServings));
  }

  return (
    <div className="results-center-box">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th className="top-left-corner">Recipe</th>
            <th className="recipe-name"></th>
            <th>Nutrients per Serving</th>
            <th>Calories per Serving</th>
            <th className="top-right-corner">Weight per Serving</th>
          </tr>
        </thead>
        <tbody>{recipes}</tbody>
      </table>
    </div>
  );
};

export default Results;
