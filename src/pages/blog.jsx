/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/b1.jpg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'
import b5 from '../assets/images/blog/b5.jpg'
import b7 from '../assets/images/blog/b7.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white"></h1>
            <p className='text-white fs-3'>where can you find us ?</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'></h1>
          <p className='mb-4'></p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Bole Dembel City Center, 3rd Floor</h5>
                
                <p className="card-text">Located in the vibrant neighborhood of Bole, our first branch is where it all started.
                 This branch showcases the latest fashion trends and offers a wide range of stylish clothing and accessories. 
                Experience personalized service and discover your perfect look at our Bole Branch.</p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Piyasa Eliana Mall, 4th Floor</h5>
                      <p className="card-text">Our Piyasa Branch, the second addition to the Yordi Fashion family, is nestled in the heart of Addis Ababa. 
                      This branch is known for its chic and contemporary fashion choices, carefully curated to cater to diverse style preferences. 
                      Step into Piyasa Branch and let us help you elevate your fashion game.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Jemo Hani Plaza, 1st Floor</h5>
                      <p className="card-text">Our Jemo Branch, the fourth addition to our growing family, is a fashion haven for all trendsetters. 
                      This branch showcases an eclectic mix of fashion-forward choices, from casual essentials to statement pieces. 
                      Visit our Jemo Branch and find your fashion inspiration today.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Jackros Dave Tower, 1st Floor</h5>
                      <p className="card-text">Welcome to our Jackros Branch, the third jewel in our boutique collection.
                       Located in a bustling area, this branch offers a fusion of modern and classic fashion pieces.
                       Discover timeless elegance and unique designs that resonate with your personal style at our Jackros Branch.</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b5} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Adama, Mebrat, Dada Mall, 1st Floor</h5>
                      <p className="card-text">We're thrilled to introduce our Adama Branch, the first branch of Yordi Fashion outside of Addis Ababa.
                       Located in the vibrant city of Adama, this branch brings our signature style and dedication to fashion to a new audience. 
                      Experience the essence of Yordi Fashion at our Adama Branch.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog