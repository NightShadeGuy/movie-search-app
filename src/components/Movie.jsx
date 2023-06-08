import React, { useState } from "react"

export default function Movie(props) {
 //<p>{props.cast}</p>

 const lightCon = {
    backgroundColor: props.formData.darkMode ? "white" : "",
    boxShadow:  props.formData.darkMode ? " 1px 2px 10px rgba(0, 0, 0, 0.2)" : "",

 }
   
    return(
         <div className="movies--container" id={props.id} style={lightCon}>
            <div className="movie">
                <div className="movie--wrapper">
                  <img src={props.img} className="image"/>
                </div>
                <h2 className="movie--title" style={{color: props.formData.darkMode ? "black" : ""}}>{props.title}</h2>
                <p className="rank" style={{color: props.formData.darkMode ? "black" : ""}}>Rank {props.rank} <strong>•</strong> {props.yr}</p>
            </div>
        </div> 
    )
}