import React from 'react';
import Navbar from './components/Navbar.js';
import './RecipieDetail.css';
import paneer from './images/paneer-masala-card.jpg'

function RecipeDetail() {
  return <>
    <Navbar />
    <div className="recipe-detail-page container py-5">
      
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src={paneer} alt="Paneer Butter Masala" className="img-fluid rounded  recipe-img" />
        </div>
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-5 fw-bold">Paneer Butter Masala</h1>
          <p className="lead text-muted">A rich, creamy North Indian curry with tomatoes, butter, and soft paneer cubes.</p>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-3">
            <span className="badge bg-success p-2"><i className="bi bi-clock"></i> 30 mins</span>
            <span className="badge bg-warning text-dark p-2">Medium</span>
            <span className="badge bg-info text-dark p-2">Serves 2</span>
            <span className="badge bg-primary p-2">⭐ 4.5</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="mb-3">🧂 Ingredients</h4>
          <ul className="list-group shadow-sm">
            <li className="list-group-item">200g Paneer (cubed)</li>
            <li className="list-group-item">2 Tomatoes (pureed)</li>
            <li className="list-group-item">1 Onion (chopped)</li>
            <li className="list-group-item">2 tbsp Butter</li>
            <li className="list-group-item">Spices: turmeric, garam masala, chili powder</li>
            <li className="list-group-item">2 tbsp Cream</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4 className="mb-3">👨‍🍳 Instructions</h4>
          <ol className="list-group list-group-numbered shadow-sm">
            <li className="list-group-item">Sauté onions in butter until golden.</li>
            <li className="list-group-item">Add tomato puree and spices. Cook till thick.</li>
            <li className="list-group-item">Add paneer and cook for 10 mins.</li>
            <li className="list-group-item">Stir in cream and simmer for 2 mins.</li>
            <li className="list-group-item">Serve hot with naan or rice.</li>
          </ol>
        </div>
      </div>
    </div>
</>
}

export default RecipeDetail;
