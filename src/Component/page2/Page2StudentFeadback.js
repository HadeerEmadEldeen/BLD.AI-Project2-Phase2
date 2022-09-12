import React from "react";

function Page2StudentFeadback(props) {
  return (
    <section>
     
            <div>
              <h2>Student feedback</h2>

              <div className="feadback-flow ">
                <div className="feedback-summary">
                  <span className="feadback-img">4.4</span>
                  <div className="feedback-star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                  </div>
                  <p>Course Rating</p>
                </div>


                <div className="feadback-rating">
                {props.course.studentFeedback.map((it) => {
                    return(
                    <progress value={it} max="100" >{it} </progress>
                    );
                  })}
    
                </div>

                  
                <div className="feadback-rating-flow2">
                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                    <a href="#">46%</a>
                  </div>

                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                    <a href="#">36%</a>
                  </div>

                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                    <a href="#">13%</a>
                  </div>

                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                    <a href="#">3%</a>
                  </div>
                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-half-full checked"></span>
                    <span className="fas fa-star-half-alt checked"></span>
                    <a href="#">2%</a>
                  </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page2StudentFeadback;
