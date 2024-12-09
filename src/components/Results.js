import "../styles/results.css";

export default function Results({ data }) {
  if (!data) {
    return <div>No data available.</div>;
  }

  const { calories, totalNutrientsKCal, totalNutrients } = data || {};

  const { CHOCDF_KCAL, FAT_KCAL, PROCNT_KCAL } = totalNutrientsKCal || {};

  if (!calories || !totalNutrientsKCal || !totalNutrients) {
    return (
      <div>Nutrition information is incomplete. Please check the input.</div>
    );
  }

  return (
    <div className="results-container">
      <div>
        <h2>Nutrition Results</h2>
      </div>
      <div>
        <h2>Total Calories: {calories}</h2>
        <ul>
          <li>
            <strong>{FAT_KCAL?.label || "Fat"}:</strong>{" "}
            {FAT_KCAL?.quantity || "N/A"} {FAT_KCAL?.unit || ""}
          </li>
          <li>
            <strong>{PROCNT_KCAL?.label || "Protein"}:</strong>{" "}
            {PROCNT_KCAL?.quantity || "N/A"} {PROCNT_KCAL?.unit || ""}
          </li>
          <li>
            <strong>{CHOCDF_KCAL?.label || "Carbohydrates"}:</strong>{" "}
            {CHOCDF_KCAL?.quantity || "N/A"} {CHOCDF_KCAL?.unit || ""}
          </li>
        </ul>
        <h3>Total Nutrients:</h3>
        <ul>
          {Object.entries(totalNutrients).map(([key, value]) => (
            <li key={key}>
              <strong>{value?.label || key}:</strong> {value?.quantity || "N/A"}{" "}
              {value?.unit || ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
