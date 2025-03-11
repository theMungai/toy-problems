const inputElement = document.querySelector(".student-marks");
const submit = document.querySelector(".submit-marks");
const displayGrade = document.querySelector(".display-grade");

function gradeGenerator(){
    let marks = inputElement.value

    if(marks > 79 && marks <= 100){
        displayGrade.textContent = `Your grade is : A`
    }

    else if(marks >= 60 && marks < 79){
        displayGrade.textContent = `Your grade is : B`
    }

    else if(marks >= 50 && marks < 60){
        displayGrade.textContent = `Your grade is : C`
    }

    else if(marks >= 40 && marks < 50){
        displayGrade.textContent = `Your grade is : D`
    }

    else if(marks === ""){
        displayGrade.textContent = ""
    }

    else if(marks >= 0 && marks < 40){
        displayGrade.textContent = `Your grade is : E `
    }

    else {
        displayGrade.textContent = `Invalid input`
        displayGrade.style.color = "rgba(197, 24, 24, 0.712)";
        displayGrade.style.fontSize = "0.9rem"
        inputElement.style.borderColor = "rgba(197, 24, 24, 0.712)"
    }

    inputElement.value = ""

}
// Input eventListener
inputElement.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        gradeGenerator()
    }
})

submit.addEventListener("click", () => {
    gradeGenerator()
})

