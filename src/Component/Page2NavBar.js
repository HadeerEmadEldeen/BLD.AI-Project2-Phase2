import React from 'react'
import "./Style.css"
import Page2Header from './Page2Header'
import Page2CourseCard from './Page2CourseCard'
import Page2NavBar2 from './Page2NavBar2'
import Page2LearnList from './Page2LearnList'
import Page2CourseContent from './Page2CourseContent'
import Page2Requirment from './Page2Requirment'
import Page2Description from './Page2Description'
import Page2Instractor from './Page2Instractor'
import Page2StudentFeadback from './Page2StudentFeadback'
import Page2Review from './Page2Review'
import Footer from './Footer'
function Page2NavBar() {
  return (
    <>
     
    <navbar class="second-navbar">
        <h2>Learning Python for Data Analysis and Visualization</h2>
        <div class="rating-seller">
          <div class="best-seller"><span>Bestseller</span></div>
          <a href="#">
            <span class="stars-number"> 4.4</span>
            <i class="fa fa-star star-color" aria-hidden="true"></i>
            <span class="rating-number">(18,113 ratings)</span>
          </a>
          <div class="nav-student-numbers"><span>191470 students</span></div>
        </div>
      </navbar>

      <Page2Header></Page2Header>
      <Page2CourseCard></Page2CourseCard>
      <Page2NavBar2></Page2NavBar2>
      <Page2LearnList></Page2LearnList>
      <Page2CourseContent></Page2CourseContent>
      <Page2Requirment></Page2Requirment>
      <Page2Description></Page2Description>
      <Page2Instractor></Page2Instractor>
      <Page2StudentFeadback></Page2StudentFeadback>
      
      <Page2Review></Page2Review>
      <Footer></Footer>
      
        


    </>
  )
}

export default Page2NavBar