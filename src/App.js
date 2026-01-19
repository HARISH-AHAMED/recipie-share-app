import './App.css'
import Home from './Home.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Recipies  from './Recipies.js';
import RecipeDetail from './RecipieDetail.js';
import AddRecipe from './AddRecipe.js';
function App() {
  return <>
        <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipies" element={<Recipies />} />
    <Route path="/recipie-detail" element={<RecipeDetail />} />
    <Route path="/add-recipie" element={<AddRecipe />} />
  </Routes>
  </BrowserRouter>
        </>
}

export default App;
