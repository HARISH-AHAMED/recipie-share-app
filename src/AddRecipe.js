import { useState } from 'react';
import Navbar from './components/Navbar';
import './AddRecipe.css';
import banner from './images/banner.jpg'

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    difficulty: 'Easy',
    time: '',
    rating: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Recipe:', recipe);
    alert('Recipe added successfully!');
  };

  return (
    <>
      <Navbar />
        <div className="add-recipe-wrapper container mt-5 mb-5">
    <div className="recipe-header text-center text-white py-5">
      <h2 className="display-5">Add a New Recipe</h2>
    </div>

    <form onSubmit={handleSubmit} className="recipe-form shadow p-4 rounded">
      <div className="mb-3">
            <label className="form-label">Recipe Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter recipe name"
              required
              value={recipe.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Describe your recipe..."
              required
              value={recipe.description}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Difficulty</label>
              <select
                name="difficulty"
                className="form-select"
                value={recipe.difficulty}
                onChange={handleChange}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Cooking Time (mins)</label>
              <input
                type="number"
                name="time"
                className="form-control"
                placeholder="E.g. 30"
                required
                value={recipe.time}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                className="form-control"
                placeholder="E.g. 4.5"
                required
                value={recipe.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Recipe Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn w-100">
            Add Recipe
          </button>
    </form>
  </div>





      

        
    </>
  );
}

export default AddRecipe;
