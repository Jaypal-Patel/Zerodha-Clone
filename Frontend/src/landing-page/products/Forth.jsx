import React from 'react';
import "./products.css";

function Forth() {
  return (
    <div className='container text-center mt-5'>
      <div className='row'>
        <h6 className='my-5 fs-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h6>
        <div className='my-5'>
          <h2 className='mb-4'>The Zerodha Universe</h2>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
      </div>
      <div className='logoImg row mb-5 px-5'>
        <div className='col-4'>
          <img src='./media/image/productLogo1.png' alt='Logo1'/>
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
        <div className='col-4'>
          <img src='./media/image/ProductLogo2.png' alt='Logo2' />
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
        <div className='col-4'>
          <img src='./media/image/productLogo3.svg' alt='Logo3' />
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
      </div>
      <div className='logoImg row px-5'>
        <div className='col-4'>
          <img src='./media/image/productLogo4.png' alt='Logo4' />
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
        <div className='col-4'>
          <img src='./media/image/productLogo5.svg' alt='Logo5' />
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
        <div className='col-4'>
          <img src='./media/image/productLogo6.png' alt='Logo6' />
          <p><a href='#'>Thematic investment platform</a></p>
        </div>
      </div>
      <button className='my-5 text-white fs-5' style={{backgroundColor: "#387ED1"}}>Sign up now</button>
    </div>
  );
}

export default Forth;