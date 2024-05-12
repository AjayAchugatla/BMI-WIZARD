const uw = "Your BMI suggests that you may be classified as underweight. This could indicate a lower than optimal level of body fat, which may lead to health risks such as weakened immune function and nutrient deficiencies. It's important to ensure you're getting enough nourishment and consider consulting with a healthcare professional to address any concerns. <br> Our website has some recommendations tailored to help you achieve a healthier weight. Whether you're looking for simple changes or a more structured approach, we offer personalized suggestions to support your journey. Before we proceed, could you please select your preferred difficulty level: Easy, Medium, or Hard?"

const n = "Your BMI falls within the normal range for your height. This suggests that your body weight is generally appropriate, but maintaining healthy habits such as a balanced diet and regular exercise is still essential for overall well-being. <br> Our website has some tips to help you maintain your healthy weight and lifestyle. Whether you're seeking to enhance your current habits or explore new strategies for wellness, we provide guidance suited to your preferences. Before we proceed, could you please select your preferred difficulty level: Easy, Medium, or Hard?"

const o = "You are categorized as overweight based on your BMI. This may indicate an increased risk of health issues such as heart disease, high blood pressure, and type 2 diabetes. It's crucial to focus on adopting healthier lifestyle choices, including dietary improvements and increasing physical activity, to manage your weight and reduce associated risks. <br> Our website has some techniques designed to assist you in managing your weight effectively. Whether you're aiming for gradual progress or a more intensive approach, we offer strategies tailored to your needs and goals. Before we proceed, could you please select your preferred difficulty level: Easy, Medium, or Hard?"

const ob = "Your BMI indicates obesity. This means that your weight may significantly increase your risk of serious health conditions like cardiovascular disease, stroke, and certain cancers. It's vital to prioritize lifestyle changes such as healthier eating habits, regular exercise, and possibly seeking support from healthcare professionals to address obesity and its associated health risks. <br> Our website has some plans to support you in addressing obesity and improving your overall health. Whether you're seeking comprehensive lifestyle changes or targeted strategies, we provide resources to assist you on your path to wellness. Before we proceed, could you please select your preferred difficulty level: Easy, Medium, or Hard?"

const eo = "Your BMI suggests extreme obesity. This classification indicates a very high level of excess body fat, which can significantly increase the risk of severe health complications, including heart disease, stroke, type 2 diabetes, and certain cancers. Urgent intervention and support from healthcare professionals are crucial to address extreme obesity and reduce associated health risks. <br> Our website has some specialized plans specifically tailored to address extreme obesity and its associated health risks. Whether you're looking for intensive support or gradual lifestyle modifications, we offer personalized guidance to help you achieve lasting improvements in your well-being. Before we proceed, could you please select your preferred difficulty level: Easy, Medium, or Hard?"


document.querySelector(".checkbtn").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("block");
    document.querySelector("section").classList.toggle("block");
    document.querySelector("main").classList.toggle("none");
    document.querySelector(".main").classList.toggle("none");
})

document.querySelector(".input").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("black");
    // document.querySelector("main").classList.toggle("black");
    // document.querySelector(".main").classList.toggle("black");
    document.querySelector("body").classList.toggle("black");
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
            document.querySelector(".val").style.color = "rgb(63, 148, 228)";
            document.querySelector(".cond p").innerHTML = uw;
        }
        else if (res >= 18.5 && res < 25) {
            document.querySelector(".val").style.color = "green";
            document.querySelector(".cond p").innerHTML = n;
        }
        else if (res >= 25 && res < 30) {
            document.querySelector(".val").style.color = "yellow";
            document.querySelector(".cond p").innerHTML = o;
        }
        else if (res >= 30 && res < 35) {
            document.querySelector(".val").style.color = "orange";
            document.querySelector(".cond p").innerHTML = ob;
        }

        else {
            document.querySelector(".val").style.color = "red";
            document.querySelector(".cond p").innerHTML = eo;
        }
    }
})

document.querySelector(".Btn").addEventListener("click",()=>{
    document.querySelector("main").style.display = "flex";
    document.querySelector(".main").classList.add("none");
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});


const hid = document.querySelectorAll(".hidden");
hid.forEach((el)=>observer.observe(el));

