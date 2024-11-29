import React from 'react';

function Third({
  imageURL, 
  ProductName, 
  ProductDesription, 
  tryDemo, 
}) {

  return (
    <div className="container px-5">
      <div className="row px-5">
        <div className="col-5 ps-5 mt-5">
          <h2 className='mt-5'>{ProductName}</h2>
          <p className="my-4">{ProductDesription}</p>
          <p><a href={tryDemo}>Try demo →</a></p>
        </div>
        <div className="col-7 pe-5">
          <img src={imageURL} alt="first" style={{width: "90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Third;