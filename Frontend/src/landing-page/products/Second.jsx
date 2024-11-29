import React from 'react';

function Second({
  imageURL, 
  ProductName, 
  ProductDesription, 
  tryDemo, 
  learnMore, 
  googlePlay, 
  appStore
}) {

  return (
    <div className="container m-5">
      <div className="row px-5">
        <div className="col-7 ps-5">
          <img src={imageURL} style={{width: "80%"}}/>
        </div>
        <div className="col-5 p-5 mt-5 pe-5">
          <h2>{ProductName}</h2>
          <p className='my-4' >{ProductDesription}</p>
          <div>
          <a href={tryDemo}>Try demo →</a>
          <a style={{marginLeft: "80px"}} href={learnMore}>Learn more  →</a>
          </div>
          <div className='mt-4'>
          <a href={googlePlay}><img src="./media/image/projectSecond.svg" alt='image1'/></a>
          <a style={{marginLeft: "30px"}} href={appStore}><img src="./media/image/projectThird.svg" alt='image2'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;