import React from 'react'

function Hero() {
  return (
    <main className='hero container'>
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Consectetur, ipsa veritatis exercitationem fugiat odio perspiciatis deserunt quaerat animi.</p>

            <div className="hero-btn">
              <button className='primary-btn'>Shop Now</button>
              <button className='secondary-btn'>Category</button>
            </div>

            <div className="shopping">
              <p>Also avaliable on</p>
              <div className="icons">
                <img src="../../images/amazon.png" alt="amzn-logo" />
                <img src="../../images/flipkart.png" alt="flpkrt-logo" />
              </div>
            </div>  
        </div>
        <div className="hero-imh">
          <img src="../../images/shoe_image.png" alt="hero-img" />
        </div>
    </main>
  )
}

export default Hero