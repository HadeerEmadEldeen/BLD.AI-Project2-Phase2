import React from "react";
import "../Style.css"
import CardShape from "./CardShape";
import { useContext } from "react";
import CoursesContext from "../CoursesContext";
const ShowCards = () => {
  let courses = useContext(CoursesContext);
  return (
    <div className='new-cards marginrl'>
      {courses.map((course) => {
        return <CardShape key={course.id} course={course}></CardShape>;
      })}
    </div>
  );

};

export default ShowCards