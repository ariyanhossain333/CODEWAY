let string="";
 const buttons=document.querySelectorAll(".button")
 Array.from(buttons).forEach((button)=>
 {
   button.addEventListener("click", (e)=>{ 
   
   
if(e.target.innerHTML=="=")
{
    string =eval(string);
    // string = ""
 document.querySelector("input").value = string
}
else if(e.target.innerHTML =="C"){
    string = " Thanks for watching 😊"
    document.querySelector("input").value = string
}
else if(e.target.innerHTML =="M+"){
    string = ""
     
    document.querySelector("input").value = string
}

   
else{
    console.log(e)
    string= string+ e.target.innerHTML;
     document.querySelector(".input").value=string
}
   })


 })