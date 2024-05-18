import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div >

<div className="container " style={{marginTop:"8em", marginBottom:"8em"}} >
      <Slider {...settings}>
       
          <div className="testimonial-item"  >
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              I stumbled upon this website while researching for a project, 
              and I must say, it's an absolute gem! The user interface is
               incredibly intuitive, making navigation a breeze. The content
                is not only informative but also presented in a visually appealing manner.
                 As a marketing professional, I appreciate the attention to detail and the
                  seamless integration of multimedia elements. Kudos to the team behind this fantastic platform!"
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid "
                src="img/testimonial-1.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">Sarah Johnson</h5>
                <small> Marketing Executive</small>
              </div>
            </div>
          </div>

          <div className="testimonial-item ">
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              I've been exploring various websites to improve my coding skills, and I'm thrilled I found this one! The tutorials are comprehensive yet easy to follow, perfect for both beginners and experienced developers alike. The interactive coding exercises are a game-changer, providing hands-on experience that accelerates learning. This website has quickly become my go-to resource for honing my coding prowess.
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid "
                src="img/testimonial-1.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">David Thompson</h5>
                <small>Software Developer</small>
              </div>
            </div>
          </div>

          <div className="testimonial-item ">
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              As a graphic designer, finding inspiration is key to my creative process. This platform has become my go-to resource for discovering new trends, sharing ideas, and connecting with like-minded professionals. It has truly elevated my design game!
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid "
                src="img/testimonial-3.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">John Doe</h5>
                <small>Software Engineer</small>
              </div>
            </div>
          </div>

          <div className="testimonial-item ">
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              I've been using this platform for a while now and I must say it's been an incredible experience. The user interface is intuitive, the features are robust, and the support team is always prompt in addressing any concerns. Highly recommended!
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid"
                src="img/testimonial-4.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">Jahn Smith</h5>
                <small>Graphic Designer</small>
              </div>
            </div>
          </div>
        
          <div className="testimonial-item ">
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              I've been using this platform for a while now and I must say it's been an incredible experience. The user interface is intuitive, the features are robust, and the support team is always prompt in addressing any concerns. Highly recommended!
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid"
                src="img/testimonial-4.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">Jahn Smith</h5>
                <small>Graphic Designer</small>
              </div>
            </div>
          </div>

          <div className="testimonial-item ">
            <i className="fa fa-quote-left fa-2x text-info mb-3" />
            <p>
              I've been using this platform for a while now and I must say it's been an incredible experience. The user interface is intuitive, the features are robust, and the support team is always prompt in addressing any concerns. Highly recommended!
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid"
                src="img/testimonial-4.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">Jahn Smith</h5>
                <small>Graphic Designer</small>
              </div>
            </div>
          </div>

      </Slider>
      </div>
      </div>  
  
  )
}


