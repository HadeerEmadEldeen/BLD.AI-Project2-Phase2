import React from 'react'

function Page2Review(props) {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col col-8">
                    <h2 className="review-header">Reviews</h2>
                    <form className="reviews-search-form" role="search">
                        <input  className="reviews-search-input" type="search" placeholder="Search reviews" aria-label="Search"/>
                        <button className="review-search-btn" type="submit"><i className="fa-solid fa-magnifying-glass review-search-icon"></i></button>
                        
                        <select className=" rating-selector select-wrapper" name="ratings" id="rating">
                            <i className="fa-solid fa-angle-down test"></i>
                            <option value="all ratings">All ratings</option>
                            <option value="5 stars">5 stars </option>
                            <option value="4 stars">4 stars</option>
                            <option value="3 stars">3 stars</option>
                            <option value="2 stars">2 stars</option>
                            <option value="1 stars">1 stars</option>
                            <i className="fa-solid fa-angle-down test"></i>
                          </select>
                        
                      </form>
                      <div className="review-carts">
                      <div className="review-cart">
                        <div className="">
                          <p className="review-cir">MM</p>
                          </div>

                          <div>
                        <div className="review-header-data">
                        <h4>Mouayad M.</h4>
                        <i className="fa fa-star star-color" aria-hidden="true"></i>
                        <i className="fa fa-star star-color" aria-hidden="true"></i>
                        <i className="fa fa-star star-color" aria-hidden="true"></i>
                        <i className="fa fa-star star-color" aria-hidden="false"></i>
                        <i className="fa fa-star star-color" aria-hidden="false"></i>
                        <span>a week ago</span>
                        </div>
                     

                        <p className="review-content">Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                          Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                          Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                          Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                  Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                  Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                  Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                  Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                  Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                        </p>
                        
                        <div className="helpful">
                          <p className="review-feedback">Was this review helpful?</p>
                          <button><i className="fa-regular fa-thumbs-up"></i></button>
                          <button><i className="fa-regular fa-thumbs-up fa-rotate-180"></i></button>
                          <a href=""> Report</a>
                       </div>
                      </div>
                    </div>
                      

                    <div className="review-cart">
                      <div className="">
                        <p className="review-cir">MM</p>
                        </div>

                        <div>
                      <div className="review-header-data">
                      <h4>Mouayad M.</h4>
                      <i className="fa fa-star star-color" aria-hidden="true"></i>
                      <i className="fa fa-star star-color" aria-hidden="true"></i>
                      <i className="fa fa-star star-color" aria-hidden="true"></i>
                      <i className="fa fa-star star-color" aria-hidden="false"></i>
                      <i className="fa fa-star star-color" aria-hidden="false"></i>
                      <span>a week ago</span>
                      </div>
                   

                      <p className="review-content">Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                        Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                        Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                        Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                                Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                      </p>
                      
                      <div className="helpful">
                        <p className="review-feedback">Was this review helpful?</p>
                        <button><i className="fa-regular fa-thumbs-up"></i></button>
                        <button><i className="fa-regular fa-thumbs-up fa-rotate-180"></i></button>
                        <a href=""> Report</a>
                     </div>
                    </div>
                  </div>


                  <div className="review-cart">
                    <div className="">
                      <p className="review-cir">MM</p>
                      </div>

                      <div>
                    <div className="review-header-data">
                    <h4>Mouayad M.</h4>
                    <i className="fa fa-star star-color" aria-hidden="true"></i>
                    <i className="fa fa-star star-color" aria-hidden="true"></i>
                    <i className="fa fa-star star-color" aria-hidden="true"></i>
                    <i className="fa fa-star star-color" aria-hidden="false"></i>
                    <i className="fa fa-star star-color" aria-hidden="false"></i>
                    <span>a week ago</span>
                    </div>
                 

                    <p className="review-content">Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                      Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                      Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                      Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                              Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                              Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                              Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                              Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                              Awesome teacher! I'm enjoying the presented course material and learning a lot. Thank you Jose !!!!!
                    </p>
                    
                    <div className="helpful">
                      <p className="review-feedback">Was this review helpful?</p>
                      <button><i className="fa-regular fa-thumbs-up"></i></button>
                      <button><i className="fa-regular fa-thumbs-up fa-rotate-180"></i></button>
                      <a href=""> Report</a>
                   </div>
                  </div>
                </div>


                        </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Page2Review