import React from 'react'
import "../Style.css"
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
import Footer from '../Footer'
import NavBar from '../NavBar'
function Page2NavBar(props) {
 
  return (
    <>
    <navbar className="second-navbar col-lg-bot-0 ">
        <h2>{props.course.title}</h2>
        <div className="rating-seller">
          <div className="best-seller"><span>Bestseller</span></div>
          <a href="#">
            <span className="stars-number"> {props.course.rating}</span>
            <i className="fa fa-star star-color" aria-hidden="true"></i>
            <span className="rating-number">({props.course.ratingCount} ratings)</span>
          </a>
          <div className="nav-student-numbers"><span>{props.course.enrollCount} students</span></div>
        </div>
      </navbar>
      
    </>
  )
}

export default Page2NavBar