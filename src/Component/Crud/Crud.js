import React, { useEffect, useState } from "react";
import Che  from "./Check"







const getLocalItem=()=>{

    const localList=localStorage.getItem('list');

    if(localList){
        return JSON.parse(localStorage.getItem('list'));
    }else {
        return [];
    }
}





const Crud=()=>{

const[input,setInput]=useState(getLocalItem());
const[item,setItem] =useState(getLocalItem());
// const[input,setInput]=useState(getLocalItem());
// const[item,setItem] =useState([]);


function onchange(e){
    const val=e.target.value;
     setInput(val);
// setItem([val]);

}
// function liter(){
//     alert("hello");
// }
function removee(task){
    const tempremove=document.getElementById(input);
    tempremove.remove();
     console.log("snja");
     console.log(input);


}
function add(){
    const temp=document.getElementById("div3")
    
    const para = document.createElement("h1");
    const but = document.createElement("button");
    para.setAttribute("id",input );
   
    but.setAttribute("id",input+1 );
    
//   Che();
// temp.style.display="inline";
// temp.style.justifyContent= "space-between"
    para.textContent =input;
    // para.style.width = "500px";
    // para.style.backgroundColor = "red";
    but.textContent ="Remove";
    
    temp.append(para);
    const temp2=document.getElementById(input);
    
    console.log(temp2);
    para.append(but);
    
   
    const ttt=document.getElementById(input+1);
   
   
    ttt.addEventListener("click",function(){
        removee(input);
    });

   
    // but.onClick= function() {console.log("ii")};
    console.log(ttt);
    setItem([...item,input]);

}


useEffect(()=>{
   localStorage.setItem("list",JSON.stringify(item));
},[item])




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

    {/* <button  onClick={remove}>
    Submitremover
    </button> */}
{/* // </form> */}

</div>
<div className="div3" id="div3">
<div className="div4" id="div4">

</div>

</div>

</div>


    </>

}

export default Crud; 