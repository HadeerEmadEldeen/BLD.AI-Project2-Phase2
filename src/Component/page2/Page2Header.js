import React from 'react'

function Page2Header(props) {
  return (
    <>
        <div className="details-continer">
          <div className="container">
            <div className="row padleft">
              <div className="col col-8 dsplay-media">


                <div className="details-menu">
                  <a href="#">Development </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#">Programming Languages </a>
                  <span>&nbsp;&gt;&nbsp;</span>
                  <a href="#"> {props.course.category}</a>
                </div>
                
              <div className="cart-img header-media">
                <img src={props.course.image} alt="" />
              </div>


                <h1 className="details-header">
                {props.course.title}
                </h1>

                <div className="details-header2">
                {props.course.Introduction}
                </div>

                <div className="rating-seller">
                  <div className="best-seller"><span>Bestseller</span></div>
                  <a href="#">
                    <span className="stars-number">{props.course.rating}</span>
                    <i className="fa fa-star star-color" aria-hidden="true"></i>
                    <span className="rating-number">({props.course.ratingCount} ratings)</span>
                  </a>
                  <div className="nav-student-numbers">
                    <span>{props.course.enrollCount} students</span>
                  </div>
                </div>

                <div className="details-author">
                  <span>Created by</span>
                  <a href="#"><span>{props.course.author}</span></a>
                </div>

                <div className="details-more">
                  <div className="last-up">
                    <i className="fa-duotone fa-bell-exclamation"></i>
                    <span className="last-updated">Last updated {props.course.lastUpdate}</span>

                    <i className="fa-solid fa-globe"></i>
                    <span>English</span>
                  </div>

                  <div>
                    <i className="fa-regular fa-closed-captioning"></i>
                    <span>English [Auto], Indonesian [Auto] ,</span>
                    <button className="more-btn">
                      <span>5 more</span>
                    </button>
                    <p>
                      [Auto], Polish [Auto], Portuguese [Auto], Romanian [Auto],
                      Spanish [Auto]
                    </p>
                  </div>
                </div>
              <div className="cart-price-data header-media">
                <span className="cart-price">E£{props.course.price}</span>
              </div>
              <button className="add-to-cart header-media">Add to cart</button>
              <div className="money-back header-media">
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <span className='header-media money-back'>Full lifetime access</span>
              <div className="share-gift-coupon header-media header-media-link">
                <button><a href="">share</a></button>
                <button><a href="">Gift this course</a></button>
                <button><a href="">Apply coupon</a></button>
              </div>
            </div>
            </div>
          </div>
        </div>
     
    </>
  )
}

export default Page2Header