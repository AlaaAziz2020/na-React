import React from 'react'
import { Link } from 'react-router-dom'
import footerimg from '../../Assets/footerimg.png'
import subscribe from '../../Assets/sub.png'
import facebook from '../../Assets/Group 1432.png'
import twitter from '../../Assets/Group 1434.png'
import linkedin from '../../Assets/Group 1435.png'
import instagram from '../../Assets/Group 1433.png'
import rect from '../../Assets/Rectangle 586.png'
import visa from '../../Assets/Group 1437.png'
import card from '../../Assets/Group 1438.png'
import nas from '../../Assets/Group 1439.png'


export default function Footer() {
  return (
    <div>
      <footer className="footer mt-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={footerimg}  className="mb-4 img-fluid" />
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />
             diam nonummy nibh euismod tincidunt ut laoreet dolore magna<br />
              aliquam erat volutpat.</p><br />
              <p className='text-white '> Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla-<br />
               mcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br />
               Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse<br /> molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum<br />
                dolor sit amet, consectetuer adipiscing elit, sed dia m nonummy nib-<br />
                h euismod tincidunt ut laoreet</p>
            <p className='text-white'>dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,<br />
               quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut </p>
            
            </div>
            </div>
            <div className="col-md-4">
                <div className="subscribe">
                    <h3 className='text-white'>Subscribe to our newsletter</h3>
                    <form className="Subscribe_subscribe">
                        <input name="email" type="email" required="" placeholder="Enter Your Mail" className="Subscribe_input" value="" />
                        <button className="Subscribe_send">Subscribe
                         <img className="ms-1 img-fluid" src={subscribe}  /></button>
                        </form>
                    </div>
                <div className="row">
                            <div className="col">
                        <ul className='text-whit text-decoration-none list-unstyled pt-3'>
                           <li className='text-white text-decoration-none'>
                                <Link className='text text-decoration-none mt-3' to="/">About Us</Link>
                            </li>
                           <li><Link className='text text-decoration-none pt-3' to="/">Contact Us</Link></li>
                           <li>
                            <Link className='text text-decoration-none mt-3' to="/">Track Order</Link></li><li>
                                <Link className='text text-decoration-none mt-3' to="/sell-with-us">Terms & Conditions</Link></li>
                            <li>
                                <Link className='text text-decoration-none mt-3' to="/">Privacy Policy</Link></li>
                                <li>
                                <Link className='text text-decoration-none mt-3' to="/">Sell With Us</Link></li>
                                <li>
                                <Link className='text text-decoration-none mt-3' to="/">Shipping And Returns</Link></li>

                                </ul>
                                </div>
                                <div class="col">
                                  <ul className='text-white list-unstyled'>
                                    <li>          
                                     <div className="icon mt-3">
                                       <img src={facebook} className="me-1 img-fluid" />
                                       <span className='text-white'>/YESHTERY</span> 
                                     </div>
                                     <div className="icon mt-3">
                                       <img src={linkedin} className="me-1 img-fluid" />
                                       <span className='text-white'>/YESHTERY</span> 
                                     </div>
                                     <div className="icon mt-3 ">
                                       <img src={instagram} className="me-1 img-fluid" />
                                       <span className='text-white'>/YESHTERY</span> 
                                     </div>
                                     <div className="icon mt-3 ">
                                       <img src={twitter} className="me-1 img-fluid" />
                                       <span className='text-white'>/YESHTERY</span> 
                                     </div>
                                  
   </li>

</ul>
</div>
</div>

</div>
<hr className='text-white'></hr>
<div className='container'>

<div className="Copyright">
    <div className='row'>
        <div className='col-lg-4 text-white'>
           <p class="mb-2">© 2023 yeshtery, all rights reserved.</p>
 <div></div>
        </div>
        <div className='col-lg-4 cards'>
          <span className='px-1'> <img src={rect} /></span>
          <span className='px-1'><img src={visa} /></span>
          <span className='px-1'><img src={card} /></span>

        </div>
        <div className='col-lg-4 px-5'>
          <p class="mb-2 text-white">Powered By <span><img src={nas} /></span></p>
        </div>
        </div>
    </div>
</div>
</div>
</div>

</footer>

</div>

  )
}
