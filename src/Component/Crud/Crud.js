import React, { useState } from "react";



const Crud=()=>{


const[input,setInput]=useState();


function onchange(e){
    const val=e.target.value;
     setInput(val);


}
function add(){
    const temp=document.getElementById("div3")
    const para = document.createElement("li");
    // para.setAttribute("id",'{' + input + '}');
    para.setAttribute("id",  input );

    para.textContent =input;
    temp.appendChild(para);

}

function remove(){


}





    return <>

<div className="div1">

<div className="div2">
<h1 className="h1">ToDo-List</h1>
{/* <form> */}
<label for="fname">Write Here:</label>
  <input type="text" onChange={onchange}/>
    <button  onClick={add}>
    Submit
    </button>
{/* // </form> */}

</div>
<div className="div3" id="div3">

</div>

</div>


    </>

}

export default Crud; 