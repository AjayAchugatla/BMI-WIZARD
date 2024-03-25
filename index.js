document.querySelector(".checkbtn").addEventListener("click",()=>{
    document.querySelector("nav ul").classList.toggle("block");
    document.querySelector("main").classList.toggle("none");
})

document.querySelector(".input").addEventListener("click",()=>{
    document.querySelector("nav").classList.toggle("black");
})

document.querySelector(".input").addEventListener("click",()=>{
    document.querySelector("main").classList.toggle("black");
})

var c1=0,c2=0;
document.querySelectorAll(".units")[0].addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector("#lbs").classList.toggle("none");
    document.querySelector("#kgs").classList.toggle("none");
    let state = document.querySelectorAll(".units")[0];
    if(c1%2===0){
        state.innerText = "Swicth to kgs";
    }
    else{
        state.innerText = "Swicth to lbs";
    }
    c1++;
})
document.querySelectorAll(".units")[1].addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector("#cms").classList.toggle("none");
    document.querySelector("#fts").classList.toggle("none");
    document.querySelector("#ins").classList.toggle("none");
    let state = document.querySelectorAll(".units")[1];
    if(c2%2===0){
        state.innerText = "Swicth to cms";
    }
    else{
        state.innerText = "Swicth to fts";
    }
    c2++;
})
document.querySelector(".cta").addEventListener("click",(e)=>{
    e.preventDefault();
    let w,fts,ins,cms;
    if(c1%2===0){
        let val = document.querySelector("#kgs").value;
        w = parseInt(val);
    }
    else{
        let  = document.querySelector("#lbs").value;
    }
    if(c2%2===0){
        cms = parseInt(document.querySelector("#cms").value);
    }
    else{
        fts = parseInt(document.querySelector("#fts").value);
        ins = parseInt(document.querySelector("#ins").value);
    }

    // console.log(isNaN(cms));
})

