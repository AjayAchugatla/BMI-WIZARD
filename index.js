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

let gen = "";
document.querySelector("#male").addEventListener("click",(e)=>{
    gen = (e.target.id);    
})

document.querySelector("#female").addEventListener("click",(e)=>{
    gen = (e.target.id);    
})



document.querySelector(".cta").addEventListener("click",(e)=>{
    // e.preventDefault();

    if(gen==="")
    alert("Select gender");
    let w=0,fts=0,ins=0,cms=0,age=0,val=0;
    age = document.querySelector("#age").value;

    if(c1%2===0){
        val = document.querySelector("#kgs").value;
    }
    else{
        val = document.querySelector("#lbs").value;
        val = Math.round(val * 0.4535);
    }
    if(c2%2===0){
        cms = (document.querySelector("#cms").value);
        cms = cms /100;
    }
    else{
        fts = (document.querySelector("#fts").value);
        ins = (document.querySelector("#ins").value);
        cms = Math.round((fts*30.48) + (ins*2.54));
        cms = cms/100;
    }

    if(age==="" || isNaN(cms) || isNaN(val) || cms==0 || val ==0){
        alert("Enter all values properly");
    }
    else{
        let res = (val)/(cms*cms);
        console.log(Math.floor(res));
    }
    
})


