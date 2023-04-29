import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import contact from '../../Assets/phone1.png'
import order from '../../Assets/cart1.png'
import store from '../../Assets/location1.png'


export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
     <div className="container">
        
    <Link className="navbar-brand  " to="/"><img src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  class= "navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <h6 className="nav-link " to="/"><i class="fa fa-arrow"></i>Valentine’s Day Offers! Buy Two Get One Free  <Link className='shop mx-2' to="/">  Shop Now </Link></h6>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/" ><img src={contact} className='px-2' />Contact Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/" ><img src={order} className='px-2' />Track Order</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/" ><img src={store} className='px-2' />Find A Store</Link>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
    </>
  )
}
