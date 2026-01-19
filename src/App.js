import './App.css';
import Home from './Home';
import Recipies from './Recipies';
import RecipeDetail from './RecipieDetail';
import AddRecipe from './AddRecipe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/recipie-detail" element={<RecipeDetail />} />
      <Route path="/add-recipie" element={<AddRecipe />} />
    </Routes>
  );
}

export default App;
