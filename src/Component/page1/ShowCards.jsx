import React from "react";
import "../Style.css";
import CardShape from "./CardShape";
import { useContext } from "react";
import CoursesContext from "../CoursesContext";
import { useSearchParams } from "react-router-dom";
const ShowCards = () => {
  let { courses } = useContext(CoursesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  let resultCourses = courses;
  if (searchParams.get("searchvalue")) {
    let filter = searchParams.get("searchvalue");
    filter.toLowerCase();
    resultCourses = courses.filter((c) =>
      c.title.toLowerCase().includes(filter)
    );
  }
  return (
    <div className="new-cards marginrl">
      {resultCourses.map((course) => {
        return <CardShape key={course.id} course={course}></CardShape>;
      })}
    </div>
  );
};

export default ShowCards;
