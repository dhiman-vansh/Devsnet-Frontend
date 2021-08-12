
import React, { useState } from "react"

export default function Count () {
    let [Count,setCount]=useState(0);
    function change() {
        console.log("before " + Count);
        setCount(Count=> Count+1);
        setCount(Count=> Count+1);
        setCount(Count=> Count+1);
        setCount(Count=> Count+1);
        setCount(Count=> Count+1);
        console.log("After " + Count);
    }
    return (
        <>
        <p>{Count}</p>
        <button onClick= {change}></button>
        </>
    )
}