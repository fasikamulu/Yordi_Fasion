/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import blog5 from '../assets/images/blog/blog-5.jpg'
import blog6 from '../assets/images/blog/blog-6.jpg'
import a6 from '../assets/images/about/a6.jpg'
import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'


import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
            <h1 class="sliding-text">want to know about us ?</h1>
              <p className='text-white fs-3'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <p className="card-text mb-3">Yordi Fashion is your ultimate style destination.
           We curate trendy and timeless fashion pieces to help you express your unique personality. 
           With a passion for quality and customer satisfaction, we're here to make you feel confident and fabulous. 
           Join us as we celebrate individuality and create a wardrobe that tells your story. Welcome to Yordi Fashion!</p>
          
        </div>
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>what ours customers said about us </h1>
            <p className='mb-4'></p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Selomon M. Kassa</h5>
                    <p className="card-text mb-3">Yordi Fashion is my ultimate style secret. 
                    As a TV show host, I constantly need to look my best, and Yordi Fashion never fails to deliver.
                     Their collection of trendy and sophisticated outfits always keeps me ahead of the fashion curve. 
                     With their impeccable quality and attention to detail, I feel confident and camera-ready every time I step on set.
                     Thank you, Yordi Fashion, for helping me shine!</p>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Girum Ermias</h5>
                    <p className="card-text mb-3">Yordi Fashion has become my fashion sanctuary. 
                    As an artist and model, I'm always seeking unique and edgy styles that reflect my personality. 
                    Yordi Fashion's collection never disappoints. From bold prints to avant-garde designs, they embrace the unconventional and push fashion boundaries.
                     Their commitment to creativity and quality craftsmanship is truly inspiring. 
                    I'm proud to be a loyal customer of Yordi Fashion.</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Etsegenet Seyoum</h5>
                    <p className="card-text mb-3">Yordi Fashion has been my fashion companion on runways across the globe. 
                    Their collection of high-end fashion pieces perfectly complements my career as an international model. 
                    The attention to detail and exquisite craftsmanship make each garment a work of art. 
                    Yordi Fashion's ability to capture elegance and sophistication in every design sets them apart.
                     Thank you for making me feel like a runway queen!</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Liya Kebede</h5>
                    <p className="card-text mb-3">Yordi Fashion has become my fashion go-to for late-night glamour. 
                    As a show host, I need outfits that are stylish, comfortable, and make a statement. 
                    Yordi Fashion delivers on all fronts. Their collection offers a perfect blend of chic and contemporary designs that perfectly match my on-screen persona. 
                    With their help, I feel confident and ready to entertain my audience. Thank you, Yordi Fashion!</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog6} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Eshetu Melese</h5>
                    <p className="card-text mb-3">Yordi Fashion is my laughter-inducing fashion destination. 
                    As a comedian and host, I love to bring my unique sense of humor to my style.
                     Yordi Fashion's collection of playful and vibrant outfits allows me to do just that. 
                     From quirky prints to bold colors, their fashion choices perfectly reflect my comedic personality.
                    Yordi Fashion, you always make me look and feel like the life of the party!</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog5} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Mohammed Mifta</h5>
                    <p className="card-text mb-3">Yordi Fashion is my runway to success. 
                    As a model, I understand the importance of style and presentation.
                     Yordi Fashion's collection of timeless and versatile pieces helps me create unforgettable looks both on and off the catwalk. 
                     Their attention to detail and commitment to quality make every outfit feel like a second skin. 
                    Thank you, Yordi Fashion, for being a true partner in my modeling journey.</p>
       
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default about