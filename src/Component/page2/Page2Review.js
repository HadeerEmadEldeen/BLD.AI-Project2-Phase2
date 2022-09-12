import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
function Page2Review(props) {
 
   const [searchParams, setSearchParams] = useSearchParams("");
    const [review,setReview]=useState("");
    const [reviewstars,setReviewstars]=useState("");
    function reviewsearch(event){
        event.preventDefault();
        setSearchParams({
          review:review,
          reviewstars:reviewstars
        });
      }
      let allreviews=props.course.reviews;
    if(searchParams.get("review")){
      let filter=searchParams.get("review")
      filter.toLowerCase();
      allreviews= allreviews.filter((c) => c.content.toLowerCase().includes(filter));
    }
    if( (searchParams.get("reviewstars")) && (searchParams.get("reviewstars")!=="all rating")){
      let filter=searchParams.get("reviewstars")
      filter.toLowerCase();
      allreviews= allreviews.filter((c) => c.rate.toLowerCase().includes(filter));
    }

   return (
    <section>
        
                    <h2 className="review-header">Reviews</h2>
                    <form className="reviews-search-form" role="search" onSubmit={reviewsearch}>
                        <input  className="reviews-search-input" type="search" placeholder="Search reviews" aria-label="Search" value={review} onChange={(e) => setReview(e.target.value)} />
                        <button className="review-search-btn" type="submit"><i className="fa-solid fa-magnifying-glass review-search-icon"></i></button>
                        
                        <select onChange={(e) => setReviewstars(e.target.value)}  className=" rating-selector select-wrapper" name="ratings" id="rating">
                            <i className="fa-solid fa-angle-down test"></i>
                            <option value="all ratings">All ratings</option>
                            <option value="5">5 stars </option>
                            <option value="4">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="2">2 stars</option>
                            <option value="1">1 stars</option>
                            <i className="fa-solid fa-angle-down test"></i>
                          </select>
                        
                      </form>


                      <div className="review-carts">
                        {allreviews.map((it)=>{
                          return(
                            <div className="review-cart">
                            <div className="">
                              <p className="review-cir">{it.nickname}</p>
                              </div>
    
                              <div>
                            <div className="review-header-data">
                            <h4>{it.name}</h4>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="true"></i>
                            <i className="fa fa-star star-color" aria-hidden="false"></i>
                            <i className="fa fa-star star-color" aria-hidden="false"></i>
                            <span>a week ago</span>
                            </div>
                         
    
                            <p className="review-content">{it.content}
                            </p>
                            
                            <div className="helpful">
                              <p className="review-feedback">Was this review helpful?</p>
                              <button><i className="fa-regular fa-thumbs-up"></i></button>
                              <button><i className="fa-regular fa-thumbs-up fa-rotate-180"></i></button>
                              <a href=""> Report</a>
                           </div>
                          </div>
                        </div>
                          );
                        })}
                      
                  
        </div>
      </section>
   )
 
}

export default Page2Review