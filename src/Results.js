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
        <td>{recipe.yield}</td>
        <td>
          {convertToInteger(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit}
        </td>
        <td>
          <p>Protein:</p>
          <p>Fat:</p>
          <p>Carbs:</p>
        </td>
        <td className="col-6">
          <p>
            {convertToInteger(recipe.totalNutrients.PROCNT.quantity)}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
          <p>
            {convertToInteger(recipe.totalNutrients.FAT.quantity)}{" "}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p>
            {convertToInteger(recipe.totalNutrients.CHOCDF.quantity)}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
        </td>
        <td className="col-7">
          {calculateUnitPerServing(recipe.totalWeight, recipe.yield)}{" "}
          {recipe.totalNutrients.PROCNT.unit}
        </td>
      </tr>
    );
  });

  function convertToInteger(string) {
    return Math.round(parseFloat(string));
  }

  function calculateUnitPerServing(totalWeight, numServings) {
    return Math.round(parseFloat(totalWeight) / parseInt(numServings));
  }

  return (
    <div className="results-center-box">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th className="top-left-corner">Image</th>
            <th>Title</th>
            <th>Servings</th>
            <th>Energy</th>
            <th>Nutrients</th>
            <th></th>
            <th className="top-right-corner">Weight per Serving</th>
          </tr>
        </thead>
        <tbody>{recipes}</tbody>
      </table>
    </div>
  );
};

export default Results;
