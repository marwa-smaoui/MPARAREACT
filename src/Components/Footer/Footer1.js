import React from 'react'
import './footer.css'
const Footer1 = () => {
    return (
       
            <div className="d-flex justify-content-between" style={{backgroundColor:'darkcyan',height:'160px',marginTop:'30px'}}>
    <div className="col-lg-2  col-md-3 col-sm-12" style={{marginTop:'40px'}} >
      <img className='img' src="../../images/livraison.png"/>
       <div >
        <p className='p'>LIVRAISON RAPIDE</p>
      </div>
    </div>
    <div className="col-lg-2 col-md-3 col-sm-12" style={{marginTop:'40px'}}>
      <img  className='img'src="../../images/carte-bancaire.png"/>
      <div >
        <p className='p'> Paiement sécurisé </p>
      </div>
      
    </div>
    <div className="col-lg-2  col-md-3 col-sm-12" style={{marginTop:'40px'}} >
      <img className='img'src="../../images/fidelite.png"/>
      <div >
        <p className='p'>Programme de fidelité</p>
      </div>
     
    </div>
    <div className="col-lg-2 col-md-3 col-sm-12 "style={{marginTop:'40px'}} >
      <img className='img' src="../../images/certifier.png"/>
      <div >
        <p className='p'>Marque certifiée </p>
      </div>
     
    </div>
    <div className="col-lg-2 col-md-2 col-sm-12 " style={{marginTop:'40px'}}>
      <img className='img' src="../../images/contact.png"/>
      <div >
        <p className='p'>Services clients </p>
      </div>
     
    </div>
  </div>
   
        
    )
}

export default Footer1
