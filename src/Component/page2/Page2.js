import React from "react";
import Page2NavBar from "./Page2NavBar";
import Page2Header from "./Page2Header";
import Page2CourseCard from "./Page2CourseCard";
import Page2NavBar2 from "./Page2NavBar2";
import Page2LearnList from "./Page2LearnList";
import Page2CourseContent from "./Page2CourseContent";
import Page2Requirment from "./Page2Requirment";
import Page2Description from "./Page2Description";
import Page2Instractor from "./Page2Instractor";
import Page2StudentFeadback from "./Page2StudentFeadback";
import Page2Review from "./Page2Review";
import { useContext } from "react";
import CoursesContext from "../CoursesContext";
import { useParams } from "react-router-dom";
import Home from "../Home";
function Page2(props) {
  {
    let courses = useContext(CoursesContext);
    let {id} = useParams();
    let flag = 0;
    let selectedCourse;
    courses.map((course) => {
      if (course.link === "/course/"+id+"/"){
        flag = 1;
        selectedCourse = course; 
      }
    });
    if(flag == 1){
        console.log("hadeer");
        return (
            <>
              <Page2NavBar key={selectedCourse.id} course={selectedCourse}></Page2NavBar>
              <Page2Header key={selectedCourse.id} course={selectedCourse}></Page2Header>
              <Page2CourseCard key={selectedCourse.id} course={selectedCourse}></Page2CourseCard>
              <Page2NavBar2 key={selectedCourse.id} course={selectedCourse}></Page2NavBar2>
              <Page2LearnList key={selectedCourse.id} course={selectedCourse}></Page2LearnList>
              <Page2CourseContent key={selectedCourse.id} course={selectedCourse}></Page2CourseContent>
              <Page2Requirment key={selectedCourse.id} course={selectedCourse}></Page2Requirment>
              <Page2Description key={selectedCourse.id} course={selectedCourse}></Page2Description>
              <Page2Instractor key={selectedCourse.id} course={selectedCourse}></Page2Instractor>
              <Page2StudentFeadback key={selectedCourse.id} course={selectedCourse}></Page2StudentFeadback>
              <Page2Review key={selectedCourse.id} course={selectedCourse}></Page2Review>
              
            </>
          );
    }
    return <Home></Home>;
    
  }
}

export default Page2;
