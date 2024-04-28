document.querySelector(".checkbtn").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("block");
    document.querySelector("main").classList.toggle("none");
    document.querySelector(".main").classList.toggle("none");
})

document.querySelector(".input").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("black");
    document.querySelector("main").classList.toggle("black");
})

var c1 = 0, c2 = 0;
document.querySelectorAll(".units")[0].addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#lbs").classList.toggle("none");
    document.querySelector("#kgs").classList.toggle("none");
    let state = document.querySelectorAll(".units")[0];
    if (c1 % 2 === 0) {
        state.innerText = "in kgs";
    }
    else {
        state.innerText = "in lbs";
    }
    c1++;
})

document.querySelectorAll(".units")[1].addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#cms").classList.toggle("none");
    document.querySelector("#fts").classList.toggle("none");
    document.querySelector("#ins").classList.toggle("none");
    let state = document.querySelectorAll(".units")[1];
    if (c2 % 2 === 0) {
        state.innerText = "in cms";
    }
    else {
        state.innerText = "in fts";
    }
    c2++;
})

let gen = "";
document.querySelector("#male").addEventListener("click", (e) => {
    gen = (e.target.id);
    document.querySelector(".cta").style.backgroundColor = "rgb(43, 133, 224)"
})

document.querySelector("#female").addEventListener("click", (e) => {
    gen = (e.target.id);
    document.querySelector(".cta").style.backgroundColor = "rgb(212, 74, 203)"
})

document.querySelector("#other").addEventListener("click", (e) => {
    gen = (e.target.id);
    document.querySelector(".cta").style.backgroundColor = "rgb(164, 24, 235)"
})


document.querySelector(".cta").addEventListener("click", (e) => {
    e.preventDefault();
    let  fts = 0, ins = 0, cms = 0, age = 0, val = 0;
    age = document.querySelector("#age").value;

    if (c1 % 2 === 0) {
        val = document.querySelector("#kgs").value;
    }
    else {
        val = document.querySelector("#lbs").value;
        val = Math.round(val * 0.4535);
    }
    if (c2 % 2 === 0) {
        cms = (document.querySelector("#cms").value);
        cms = cms / 100;
    }
    else {
        fts = (document.querySelector("#fts").value);
        ins = (document.querySelector("#ins").value);
        cms = Math.round((fts * 30.48) + (ins * 2.54));
        cms = cms / 100;
    }

    if (age === "" || isNaN(cms) || isNaN(val) || cms == 0 || val == 0) {
        e.preventDefault();
        alert("Enter all values properly");
    }
    else if (gen === ""){
        e.preventDefault();
        alert("Select gender");
    }
    else {
        document.querySelector("main").style.display = "none";
        document.querySelector(".main").classList.remove("none");
        document.querySelector(".main").style.display = "flex";
        let res = (val) / (cms * cms);
        document.querySelector(".val").innerText = Math.round(res);
        if (res < 18.5) {
            document.querySelector(".val").style.color = "yellow";
        }
        else if (res >= 18.5 && res < 25) {
            document.querySelector(".val").style.color = "green";
        }
        else if (res >= 25 && res <= 30) {
            document.querySelector(".val").style.color = "orange";
        }
        else {
            document.querySelector(".val").style.color = "red";
        }
    }

})

