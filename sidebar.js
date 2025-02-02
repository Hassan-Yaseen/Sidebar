let btn1=document.querySelector(".togle-btn");
let btn2=document.querySelector(".cross-icon");
let sidebar=document.querySelector(".sidebar");
sidebar.classList.add("show");
btn1.addEventListener("click",()=>{
    if(sidebar.classList.contains("show")){
        sidebar.classList.remove("show");
        sidebar.classList.add("transition2");
    }
    else{
        sidebar.classList.remove("hide");
        sidebar.classList.remove("transition2");
        sidebar.classList.add("show");
        sidebar.classList.add("transition1");
    }
})
btn2.addEventListener("click",()=>{
    sidebar.classList.remove("show");
    sidebar.classList.remove("transition1");
    sidebar.classList.remove("transition2");
    sidebar.classList.add("hide");
})