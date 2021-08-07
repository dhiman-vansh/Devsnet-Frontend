// import React from 'react'
import { useState } from 'react';
import './index.css'



function Card(props) {
    let [image,setimage] = useState(props.img)
    let [nm,setnm] = useState(props.name)
    let [strin,setstrin] = useState("If you eat this,then you will have " + props.cal + " calories")
    function change() {
        console.log("clicked" + props.name )
        setimage("https://cdn2.vectorstock.com/i/1000x1000/17/46/done-vector-26031746.jpg")
        setnm(null);
        setstrin("Done you ate this "+ props.name)
    }
    
    let flag = 0;
    return(
            <div className="card" onClick= {change}>
            <img src= {image} alt= "snacks" />
            <h2>{nm}</h2>
            <h3>{strin}</h3>
        </div>
    )
}

export default Card;