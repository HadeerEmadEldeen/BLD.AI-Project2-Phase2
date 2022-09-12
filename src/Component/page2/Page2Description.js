import React from "react";

function Page2Description(props) {
  return (
    <section>
     
            <h2 className="requirment-header">Description</h2>
            <div className="description-details">
              {props.course.description.map((it) => {
                return <p>{it}</p>;
              })}
            </div>
            <div>
              <h2 className="requirment-header">Who this course is for:</h2>
              <ul className="target-person">
                {props.course.whoFor.map((it) => {
                  return <li>{it}</li>;
                })}
              </ul>
          
      </div>
    </section>
  );
}

export default Page2Description;
