export async function fetchNutrition({
  apiId,
  apiKey,
  ingredients,
  setError,
  setLoading,
  setStateLoader,
}) {
  if (!ingredients || ingredients.trim() === "") {
    setError("Please provide ingredients and their quantities.");
    setLoading(false);
    setStateLoader(false);
    return;
  }

  setStateLoader(true);

  const searchQuery = {
    ingr: ingredients
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter((item) => item),
  };

  const URL = `https://api.edamam.com/api/nutrition-details?app_id=${apiId}&app_key=${apiKey}`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchQuery),
    });

    if (!response.ok) {
      setError(`HTTP error! Status: ${response.status}`);
      setLoading(false);
      setStateLoader(false);
      return;
    }

    const data = await response.json();

    if (!data) {
      setError("Invalid data received. Please check the ingredients.");
      setLoading(false);
      setStateLoader(false);
      return;
    }

    console.log(data);
    return data;
  } catch (error) {
    setError(error.message || "Something went wrong. Please try again.");
    setStateLoader(false);
    setLoading(false);
    return null;
  }
}
