let input = document.querySelector(".form-control");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
   if(input.value==="on" || input.value==="ON"){
    alert('request Success please check your rasPI');
   }else if(input.value==="off" || input.value==="OFF"){
      alert("your're trying to off led");
   }else{
      alert("please type correct cmd line for further process");
   }
});