import { useCallback, useState } from "react";
import SearchQuery from "./Search";
import { fetchNutrition } from "../API/FetchNutrition";
import Loader from "./Loader";
import Results from "./Results";

export default function NutritionAnalisis() {
  const [ingredients, setIngredients] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stateLoader, setStateLoader] = useState(false);
  const [results, setStateRusults] = useState(false);
  const [data, setData] = useState({});

  const apiKey = "2afe8f632600fffa7765b6332a2fbae1";
  const apiId = "211a7233";

  const handlefetchNutrition = useCallback(async () => {
    if (!ingredients.trim()) {
      setError("Please provide ingredients and their quantities.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const cachedData = localStorage.getItem(ingredients.trim());
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setStateRusults(true);
        setLoading(false);
        return;
      }

      const data = await fetchNutrition({
        apiId,
        apiKey,
        ingredients,
        setError,
        setLoading,
        setStateLoader,
      });

      if (data) {
        localStorage.setItem(ingredients.trim(), JSON.stringify(data));
        setData(data);
        setStateRusults(true);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
      setStateLoader(false);
    }
  }, [ingredients]);

  return (
    <div className="page">
      <SearchQuery
        ingredients={ingredients}
        setIngredients={setIngredients}
        loading={loading}
        fetchNutrition={handlefetchNutrition}
        error={error}
      />
      {stateLoader && <Loader />}
      {results && <Results data={data} />}
    </div>
  );
}
