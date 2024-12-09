import "../styles/variables.css";
import "../App.css";
import NutritionAnalysis from "../components/NutritionAnalysis";

export default function MainPage() {
  return (
    <div className="page">
      <input
        type="checkbox"
        id="themeSwitch"
        name="theme-switch"
        className="theme-switch__input"
      />
      <label htmlFor="themeSwitch" className="theme-switch__label">
        <span>Switch theme</span>
      </label>
      <main>
        <div className="wrapper">
          <NutritionAnalysis />
        </div>
      </main>
    </div>
  );
}
