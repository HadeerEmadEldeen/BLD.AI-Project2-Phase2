import { useEffect, useState } from "react";
import React from 'react'
import CardShape from './CardShape'
import "../Style.css"

function BoxOfCards(props) {

return(
    <div className="continer">
      <section className="Allsection">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courseswith new additions published
          every month
        </p>

        <div className="box_types">
          <span className="type">Python</span>
          <span className="type">Excel</span>
          <span className="type">Web development</span>
          <span className="type">JavaScript</span>
          <span className="type">Data Science</span>
          <span className="type">AWS Certification</span>
          <span className="type">Drawing</span>
        </div>

        
      </section>
    </div>
  );
}
export default BoxOfCards

