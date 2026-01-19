import Navbar from './components/Navbar.js'
import paneer from './images/paneer-masala-card.jpg'
import card3 from './images/card-img-3.jpg'
import card2 from './images/card-img-2.jpg'
import card4 from './images/card-img-4.jpg'
import card5 from './images/card-img-5.jpg'
import card6 from './images/card-img-6.jpg'
import card7 from './images/card-img-7.jpg'
import card8 from './images/card-img-8.jpg'
import card9 from './images/card-img-9.jpg'
import card10 from './images/card-img-10.jpg'
import card11 from './images/card-img-11.jpg'
import card12 from './images/card-img-12.jpg'
import card13 from './images/card-img-13.jpg'
import card14 from './images/card-img-14.jpg'
import card15 from './images/card-img-15.jpg'
import card16 from './images/card-img-16.jpg'
import './Recipies.css'
import {Link,NavLink} from 'react-router-dom';
function Recipies() {


    return <>
    <Navbar />
<div className="container my-5">
  <div className="row">
    {/* Card 1 */}
     
    <div className="col-md-6 col-lg-4 mb-4">
       <Link to="/recipie-detail" className="btn w-100">
      <div className="card h-100 ">

        <img src={paneer} className="card-img-top" alt="Paneer Butter Masala" />
       
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ">Paneer Butter Masala</h5>
          <p className="card-text text-muted">Creamy tomato-based curry with soft paneer cubes.</p>
          
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-success">Easy</span>
            <span>⏱ 30 mins</span>
            <span>⭐ 4.5</span>
          </div>
          <div className="mt-auto">
            <Link to="/recipie-detail" className="btn w-100">View Recipe</Link>
          </div> */}
     </div>
     </div></Link> 
    </div>

    {/* Card 2 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card3} className="card-img-top" alt="Veg Biryani" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Chicken Pizza</h5>
          <p className="card-text text-muted">Tender chicken, rich sauce, and melted cheese on a crispy crust.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-warning ">Medium</span>
            <span>⏱ 45 mins</span>
            <span>⭐ 4.7</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>

   

    

    {/* Card 3 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card6} className="card-img-top" alt="Chicken Roll" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Chicken Nuggets</h5>
          <p className="card-text text-muted">Golden-fried bites served with creamy mayo.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-danger">Hard</span>
            <span>⏱ 40 mins</span>
            <span>⭐ 4.3</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>
    {/* Card 4 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card15} className="card-img-top" alt="Veg Biryani" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Grilled Chicken with Veggies</h5>
          <p className="card-text text-muted">Grilled chicken breast served with roasted vegetables and a balsamic drizzle.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-warning ">Medium</span>
            <span>⏱ 45 mins</span>
            <span>⭐ 4.7</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>

    

     {/* Card 4 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card10} className="card-img-top" alt="Veg Biryani" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Spicy Grilled Chicken</h5>
          <p className="card-text text-muted">Spicy grilled chicken with buttery potatoes and fresh garden salad.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-warning ">Medium</span>
            <span>⏱ 45 mins</span>
            <span>⭐ 4.7</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>

 {/* Card 4 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card13} className="card-img-top" alt="Veg Biryani" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Grilled Sausage Delight </h5>
          <p className="card-text text-muted">Juicy sausage with roasted peppers, mushrooms, and tomatoes.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-warning ">Medium</span>
            <span>⏱ 45 mins</span>
            <span>⭐ 4.7</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={card16} className="card-img-top" alt="Veg Biryani" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Grilled Pepper Steak </h5>
          <p className="card-text text-muted"> Tender steak medallion served with golden grilled potatoes.</p>
          {/* <div className="d-flex justify-content-between mb-2">
            <span className="badge text-warning ">Medium</span>
            <span>⏱ 45 mins</span>
            <span>⭐ 4.7</span>
          </div>
          <div className="mt-auto">
            <a href="/" className="btn  w-100">View Recipe</a>
          </div> */}
        </div>
      </div>
    </div>

    
  </div>
</div>



{/* cards */}


    </>
}

export default Recipies;