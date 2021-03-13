import React from 'react'
import './footer.css'
import { Button } from 'react-bootstrap'
const Footer = () => {
    return (
        <div style={{marginTop:'15px'}}>
            <footer>
  <div class="footer-wrap">
    <div class="second_class">
      <div class="container second_class_bdr">
      <div class="row">
        <div class="col-md-4 col-sm-6">
        <h4 style={{marginTop:'40px',marginBottom:'20px',fontSize:'1em'}}> ABONNER-VOUS À NOTRE NEWSLETTER</h4>
          <div class="col-md-3 ">
        <form class="newsletter">
           
           <input type="text" placeholder="Taper votre Email" style={{width:'300px'}}/> 
         <Button variant='info' style={{marginTop:'20px', marginLeft:'90px'}}>S'ABONNER  </Button>
        </form>
        
        </div>

        <div class="standard_social_links">
        <div style={{marginLeft:'90px', marginTop:'50px'}}>
          <li class="round-btn btn-facebook"><i class="fab fa-facebook" ></i>
          </li>

          <li class="round-btn btn-twitter"><i class="fab fa-twitter"></i>

          </li>
          <li class="round-btn btn-instagram"><i class="fab fa-instagram"></i>

          </li>
   
        </div>
      </div>  
        
         
        </div>
        <div class="col-md-3 col-sm-6">
          <h3>INFORMATIONS</h3>
          <ul class="footer-links">
            <li><i class="fa fa-question-circle"></i> <span className='info'>Qui sommes nous</span>
            </li>
            <li><i class="fa fa-cog"></i> <span className='info'>Conditions générales</span></li>
        
            <li><i class="fa fa-mobile" style={{marginRight:'5px'}}></i><span className='info'>Contacer nous</span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <h3 style={{paddingLeft:'20px'}}><span className='info'>SERVICES</span></h3>
          <ul class="footer-category">
            <li><i class="fab fa-product-hunt"></i><span className='info'>Nouveaux produits</span>
            </li>
            <li><i class="fa fa-bullhorn"></i><span className='info'>Promotions</span>
            </li>
            <li><i class="fa fa-gift"></i><span className='info'>Marques</span>
            </li>
            <li><i class="fa fa-eye"></i><span className='info'>Blogs</span>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6">
          <h3 style={{paddingLeft:'0px'}}>ADRESSE</h3>
          <ul class="footer-links" >
            <div id="map-container-google-1" className="z-depth-1-half map-container" style={{boxShadow:'10px 20px 10px #123453', marginLeft:'-50px'}}>                
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104888.47575618919!2d10.66305777170632!3d34.76151547864985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cda1486c695%3A0x22dfe0a62c50ce6f!2sSfax!5e0!3m2!1sen!2stn!4v1596623095711!5m2!1sen!2stn" width="100%" height="300px" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> </div>
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    
    <div class="row">
      
      <div class="container-fluid" style={{marginTop:'-50px'}}>
      <div class="copyright"><i class="fas fa-copyright"></i> Copyright 2021 | All Rights Reserved by MPARA.</div>
      </div>
      
    </div>
  </div>
  
  </footer>
        </div>
    )
}

export default Footer
