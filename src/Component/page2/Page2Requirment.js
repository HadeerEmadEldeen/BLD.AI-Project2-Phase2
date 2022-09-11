import React from "react";

function Page2Requirment(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col col-8">
            <h2 className="requirment-header padleft">Requirements</h2>
            <div className="requirment-list">
              <ul>
                {props.course.requirements.map((it) => {
                  return <li>{it}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page2Requirment;