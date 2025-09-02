import {useState} from "react";
import React from "react";

function Practice(){
    const[text,setText]=useState("");
function handleChange(e){
setText(e.target.value);
}

return (
<div>
<input onChange={handleChange} placeholder="Your name"/>
<h2>{text}</h2>
</div>
)
}

export default Practice;