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
          <p>Protein:</p>
          <p>Fat:</p>
          <p>Carbs:</p>
        </td>
        <td className="col-6">
          <p>
            {calculateUnitPerServing(recipe.totalNutrients.PROCNT.quantity, recipe.yield)}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
          <p>
            {calculateUnitPerServing(recipe.totalNutrients.FAT.quantity, recipe.yield)}{" "}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p>
            {calculateUnitPerServing(recipe.totalNutrients.CHOCDF.quantity, recipe.yield)}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
        </td>
        <td className="col-5">
          {calculateUnitPerServing(recipe.totalNutrients.ENERC_KCAL.quantity, recipe.yield)}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit}
        </td>
        <td className="col-7">
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
            <th className="top-left-corner">Image</th>
            <th>Title</th>
            <th>Nutrients per Serving</th>
            <th></th>
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
