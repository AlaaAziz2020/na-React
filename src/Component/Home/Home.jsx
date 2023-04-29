import React from 'react'
import Products from '../Products/Products'
import adidas from '../../Assets/adidas1.png'
import contact from '../../Assets/contact.png'
import wishlist from '../../Assets/Path 771.png'
import login from '../../Assets/login.png'



export default function Home() {
  return (
    <>
  <div class="container ">
                <div class="row  mt-4">
                    <div class="col-lg-4 ">
                        <div class="single-demo-page mt-30">
                        <div class="mt-3 inputs">
                            <i class="fa fa-search search1 px-2 "></i>
                            <input type="text" class="form-control " placeholder="     Search Tasks..." />
                         </div>
                        </div>
                    </div>
                    <div class="col-lg-4 ad ">
                        <div class="single-demo-page mt-30">
                            <a href="helendo/index-2.html">                            
                                <img src={adidas} />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-2">
                        <div class="single-demo-page ">
                            <span href="helendo/index-3.html ">
                              <img src={contact}   />
                              <span className='mx-3'>Cart</span>
                             </span>
                             <span href="helendo/index-3.html ">
                               <img src={wishlist}   />
                              <span className='mx-3'>Wishlist</span>
                             </span>
                             <span href="helendo/index-3.html ">
                                <img src={login} />
                              <span className="mx-3">Login</span>
                             </span>
                        </div>
                    </div>
                 
                  
                </div>
            </div> 
            <div className='types mt-3 pt-2 pb-2 bg-dark'>
              <div className='container'>
                <div className='row'>
                    <div className='col-lg text-white'>
                        <span>Men</span>
                    </div>
                    <div className='col-lg text-white'>
                        <span>Women</span>
                    </div>
                    <div className='col-lg text-white'>
                        <span>Unisex</span>
                    </div>
                    <div className='col-lg text-white'>
                        <span>Kids</span>
                    </div>
                    <div className='col-lg text-white'>
                        <span>Best Sellers</span>
                    </div>
                    <div className='col-lg text-white'>
                        <span className=''>New Arrivals</span>
                    </div>
                    <span className='col-lg offer'>
                        <span>Offers</span>
                    </span>
                </div>
              </div>
            </div>
            <div className='lists pt-4 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 pb-4'>
                            <span className='text-dark fw-bold'>
                                <a >Men</a> /
                                  <a>Clothing</a> / 
                                  <a>Top</a> / 
                                  <a>Adidas</a> / 
                                  <span>Adidas Black T-Shirt</span> 

                                 </span>
                        </div>
                    </div>
                </div>
            </div>
            <Products/>

   </>
  )
}
