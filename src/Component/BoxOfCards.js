import { useEffect, useState } from "react";
import React from 'react'
import CardShape from './CardShape'
import "./Style.css"

function BoxOfCards(props) {

  async function getApiData(url) {
    let jsonData = await fetch(url);
    jsonData = await jsonData.json();
    return jsonData.courses;
  }

  let [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    getApiData("http://localhost:3001/courses").then((response) => {
      setCoursesData(response);
    });
  }, []);

  if (coursesData.length === 0) {
    return <p> loading.....</p>;
  }
  return (
    <div class="continer">
      <section>
        <h1>A broad selection of courses</h1>

        <p>
          Choose from 185,000 online video courseswith new additions published
          every month
        </p>

        <div class="box_types">
          <span class="type">Python</span>
          <span class="type">Excel</span>
          <span class="type">Web development</span>
          <span class="type">JavaScript</span>
          <span class="type">Data Science</span>
          <span class="type">AWS Certification</span>
          <span class="type">Drawing</span>
        </div>

        <div class="box">

          <h2 class="marginrl">Expand your career opportunities with Python</h2>

          <p class="marginrl">
            Take one of Udemy’s r+,q\\-wp;4d of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science, and
            machine learning. You’ll learn how to build everything from games to
            sites to apps. Choose from a range of courses that will appeal to
          </p>

          <button type="button" class="explore marginrl">Explore Python</button>

          <div id="cards-element" class="new-cards marginrl" >
            {coursesData.map((course) => {
              return <CardShape key={course.id} course={course}></CardShape>;
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
export default BoxOfCards

