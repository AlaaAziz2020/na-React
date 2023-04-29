import React from 'react'
import sportimg from '../../Assets/sport-img.png'
import adidas from '../../Assets/adidas1.png'
import rate from '../../Assets/Star1.png'
import rate2 from '../../Assets/star2.png'
import color1 from '../../Assets/Group 354.png'
import color2 from '../../Assets/Group 356.png'
import img1 from '../../Assets/5.png'
import img2 from '../../Assets/p2.png'
import img3 from '../../Assets/p3.png'
import img4 from '../../Assets/p4.png'
import ad1 from '../../Assets/adidas1.png'




export default function Products() {
  return (
    <>
    <div className='products mt-4'>
    <div className='container'>
     <div className='row'>
         <div className='col-md-6'>
          <img src={sportimg}  className="w-100 sport"/>
         </div>
         <div className='col-md-6'>
            <img src={adidas}/>
                <h5 className='pt-3'>Adidas black t-shirt lorem ipsum dolor sit<br></br> amet, consectetuer adipiscing elit.</h5>
                <p>Men</p>
                <span >
                    <img src={rate}/>
                    <img src={rate}/>
                    <img src={rate}/>
                    <img src={rate}/>
                    <img src={rate2}/>

                    <span className='mx-3'>4.9 of 5</span>
                    <span className='mx-1' >22 Rates</span>
                </span>
                <div className='mt-3'>
                
                    <span className='px-3 price fw-bold'>9,999 LE</span>

                    <span className='mx-4'>9,999 LE</span>
                    <span className='off  p-1'>30% Off</span>
                </div>
                <hr></hr>
                <div className='mt-3'>
                
                <span className='px-3  fw-bold'>Size</span>

            </div>
            <div className='size-butons'>
              <button type="button" class="btn btn-link text-decoration-none ">Small</button>
              <button type="button" class="btn btn-link text-decoration-none mx-2">Medium</button>
              <button type="button" class="btn btn-link text-decoration-none  mx-2 bg-light active">Large</button>
              <button type="button" class="btn btn-link text-decoration-none  mx-2">X Large</button>
              <button type="button" class="btn btn-link text-decoration-none  mx-2">XX Large</button>

            </div>
            <hr></hr>
            <div className='mt-3'>
                
                <span className='px-3  fw-bold'>Color</span>

            </div>
            <div className='size-butons mt-3'>
              <img src={color1}  />
              <img src={color2} className="mx-4"/>


            </div>
            <hr></hr>
            
            </div>
     </div>
    </div>
     </div>
     <div className='similar-products'>
        <div className='container'>
          <div className='row'>
            <div class="Section_sectionHeader__j4iI4">
                <div>
                    <h2 class="Title_title__gV0J8 undefined">Similar Products</h2>
                    <p class="SubTitle_subTitle__oSY5o undefined">You may like these products also.</p>                          
                  
              
                </div>
                <div className='row similar'>
                <div className='col-lg-3'>
                      <img className='img1' src={img1} />
                      <h6 className='pt-2'>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing elit.</h6>
                    <div>
                      <span className=' price fw-bold'>9,999 LE</span>
                    </div>
                     <div className=''>  
                       <span className='col-lg-4'>9,999 LE</span>
                        <span className='col-lg-4 off  p-1 mx-5'>30% Off</span>
                        <span className='ad1 col-lg-4'><img src={ad1} /></span> 
                    </div>
                    <div className='p-2 text-center'>
                      <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate2}/>

                    <span className='mx-3'>4.9 of 5</span>

                    </div>       
                    <h6 className='pt-2'>Pickup From:Genena Mall</h6>
                                                  
              </div>
              <div className='col-lg-3'>
                      <img className='img1' src={img2} />

                      <h6 className='pt-2'>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing elit.</h6>
                    <div>
                      <span className=' price fw-bold'>9,999 LE</span>
                    </div>
                     <div className=''>  
                       <span className='col-lg-4'>9,999 LE</span>
                        <span className='col-lg-4 off  p-1 mx-5'>30% Off</span>
                        <span className='ad1 col-lg-4'><img src={ad1} /></span> 
                    </div>
                    <div className='p-2 text-center'>
                      <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate2}/>
                     
                    <span className='mx-3'>4.9 of 5</span>
                </div>
                    <h6 className='pt-2'><span className='text-left'>From:UK</span> <span className='text-center mx-3'>To:Egypt</span> <span className='text-center mx-3'>10 Days</span></h6>
              </div>
              <div className='col-lg-3'>
                      <img className='img1' src={img3} />

                      <h6 className='pt-2'>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing elit.</h6>
                    <div>
                      <span className=' price fw-bold'>9,999 LE</span>
                    </div>
                     <div className=''>  
                       <span className='col-lg-4'>9,999 LE</span>
                        <span className='col-lg-4 off  p-1 mx-5'>30% Off</span>
                        <span className='ad1 col-lg-4'><img src={ad1} /></span> 
                    </div>
                    <div className='p-2 text-center'>
                      <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate2}/>
                       <span className='mx-3'>4.9 of 5</span>

                    </div>
                    <h6 className='pt-2'><span className='text-left'>From:UK</span> <span className='text-center mx-3'>To:Egypt</span> <span className='text-center mx-3'>in:2 Days</span></h6>

                
                  
                    
                     

              </div>
              <div className='col-lg-3'>
                      <img className='img1' src={img4} />

                      <h6 className='pt-2'>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscing elit.</h6>
                    <div>
                      <span className=' price fw-bold'>9,999 LE</span>
                    </div>
                     <div className=''>  
                       <span className='col-lg-4'>9,999 LE</span>
                        <span className='col-lg-4 off  p-1 mx-5'>30% Off</span>
                        <span className='ad1 col-lg-4'><img src={ad1} /></span> 
                    </div>
                    <div className='p-2 text-center'>
                      <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate}/>
                       <img src={rate2}/>

                    <span className='mx-3'>4.9 of 5</span>

                    </div>
                    <h6 className='pt-2'>Pickup From:Genena Mall</h6>
                     
             </div>
                </div>
                
              
    </div>
    </div>
    </div>
    </div>
    
     </>
  )
}
