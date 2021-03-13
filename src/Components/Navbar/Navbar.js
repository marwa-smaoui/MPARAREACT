import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag, faUserAlt, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import Blog from '../Blogs/Blog'



const Navbar = ({handelChange}) => {
  const count = useSelector((state) => state.ShopReducer.count);
  const products = useSelector((state) => state.Reducer.products);
  const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

   
      
    return (
        <div>
  <nav className="navbar fixed-top  navbar-expand-lg">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="navbar-brand">
       
      <Link to='/'><img src="../../Logo.png" alt="logo" className="logo" /></Link>
    </ul>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-items active"> SOINS ET BEAUTÉ
          <div className="dropdowns">
              <a href="#" > Visage</a>
              <a href="#" > Corps</a>
              <a href="#" > Cheveux</a>
          </div>
      </li>
      <li class="nav-items active"> MAMAN ET BÉBÉ
        <div class="dropdowns">
            <a href="#" > Puericulture </a>
            <a href="#" > Soins bébé</a>
            <a href="#" > Maman </a>
        </div>
         </li>
         <li class="nav-items active"> <Link to='/products'>PRODUITS</Link></li>
         <li class="nav-items active" ><Link to='/blog'>BLOGS</Link></li>
    
     
      <li className=" nav-items form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
         type="search" 
         placeholder="Rechercher"
         onChange={handelChange}
        //  value={search}
         />
         
      </li>
    
      <li className='icons nav-items'><FontAwesomeIcon icon={faSearch} /></li>
     <li className=" icons nav-items "><Link to='/'><FontAwesomeIcon icon={faUserAlt} onClick={handleShow}/></Link></li>
     <ul className='nav-items'>
     <Link to="/panier"><li className="icons"><FontAwesomeIcon icon={faShoppingBag} /></li></Link>
      <span className="item_count">{count}</span>
      </ul>
  
  </ul>
    
    </div>
  </nav>
  <Contact show={show} handleClose={handleClose}/>
        </div>
    )
}

export default Navbar
