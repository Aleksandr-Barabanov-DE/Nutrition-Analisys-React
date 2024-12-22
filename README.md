# Nutrition Analyzer - Food Insight Tool

**Nutrition Analyzer** is a web application that allows users to analyze the nutritional value of their meals. Users can input a list of ingredients with quantities to receive detailed information about calories, macronutrients, and micronutrients. This application helps users make informed dietary decisions and track their nutritional intake effectively.

## Technologies

- **React**: For building the user interface with components and state management.
- **useState and useEffect**: For managing state and handling side effects like API calls.
- **useCallback**: Optimizes API requests, ensuring they are not re-created on every render.
- **LocalStorage API**: For caching results to minimize redundant API calls and improve performance.
- **Edamam Nutrition Analysis API**: Fetches detailed nutritional data for a given list of ingredients.
- **CSS Modules**: Provides scoped and modular styles for components.

## Installation and Running

To run the project, follow these steps:

1. Clone the repository:

git clone https://github.com/yourusername/nutrition-analyzer.git

2. Navigate to the project directory:

   cd nutrition-analyzer

3. Install dependencies:

   npm install

4. Start the project:

   npm start

5. Go to [http://localhost:3000](http://localhost:3000) to view the app in action.

## Functionality

### Home Page

The Home Page greets users with a brief introduction and a form for entering ingredients and quantities. A **"Submit"** button triggers the analysis process.

### Results Section

The Results Section provides detailed nutritional insights, including:

- **Calories**: Total calorie count for the ingredients.
- **Macronutrients**: Breakdown of fats, carbohydrates, and proteins.
- **Micronutrients**: Information on vitamins and minerals.

Cached results are instantly displayed for repeated queries, improving performance and user experience.

---

## Components

- **MainPage**: The entry point of the app, where users input their list of ingredients.
- **NutritionAnalysis**: Responsible for fetching, validating, and submitting data to the Edamam API.
- **Results**: Displays a detailed breakdown of nutritional content and serving suggestions.
- **Loader**: Shows a loading animation while the application retrieves data.

---

## How It Works

- **useState**: Manages the state of the application, such as input ingredients, loading status, results, and errors.
- **useEffect**: Sends API requests when users submit their input or fetches cached results when applicable.
- **useCallback**: Optimizes performance by avoiding unnecessary re-renders and repeated API call definitions.
- **LocalStorage API**: Stores cached results for specific ingredient lists, allowing instant retrieval on subsequent searches.
- **fetch API**: Communicates with the Edamam Nutrition Analysis API to fetch nutritional data for the provided ingredients.

---

## Planned Improvements

1. **API Integration**: Expand to additional APIs for more comprehensive meal and diet tracking.
2. **Favorite Analyses**: Enable users to save and export nutritional analyses for future reference.

## Author

Aleksandr Barabanov

## Contacts

<div>
  <a href="https://www.linkedin.com/in/aleksandr-barabanov/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a> 
  <a href="mailto:barabanov.codes@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
  <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-notifcenter">
    <img src="https://img.shields.io/badge/indeed-003A9B?style=for-the-badge&logo=indeed&logoColor=white" alt="Indeed"/>
  </a>
  <a href="https://www.codewars.com/users/Aleksandr-Barabanov">
    <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey" alt="Codewars"/>
  </a>
</div>

© 2024 Nutrition Analyzer
