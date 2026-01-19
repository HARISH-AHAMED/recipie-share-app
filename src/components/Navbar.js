import {Link,NavLink} from 'react-router-dom';
function Navbar() {
    return <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="/"><span className="brand-letter"> R</span>ecipies</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto gap-4">
        <NavLink  to="/"  className={({ isActive }) =>    isActive ? 'nav-link home-link active' : 'nav-link home-link' }> Home</NavLink>           
        <NavLink  to="/recipies"  className={({ isActive }) =>    isActive ? 'nav-link recipie-link active' : 'nav-link recipie-link' }> Recipies</NavLink> 
        <NavLink  to="/add-recipie"  className={({ isActive }) =>    isActive ? 'nav-link add-link active' : 'nav-link add-link' }> Add Recipie</NavLink>        
      </div>
    </div>
  </div>
</nav>
    </>
}

export default Navbar;