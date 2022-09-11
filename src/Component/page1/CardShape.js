import React from "react";
import "../Style.css"

const CardShape = (props) => {
  return (
    <article className="card1">
    <a className="course"  href={props.course.link} >
    <img src={props.course.image} alt={props.course.title} />
      <h3>{props.course.title}</h3>
      <h4>{props.course.author}</h4>
      <div>
        <span className="checked">{props.course.rating} </span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star-half-full checked"></span>
        <span className="fas fa-star-half-alt checked"></span>
      </div>

      <h5>E£  {props.course.price}</h5>
    </a>
  </article>
  );
};


export default CardShape