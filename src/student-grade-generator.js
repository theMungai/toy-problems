const input = document.querySelector(".student-marks");
const submit = document.querySelector(".submit-marks");
const displayGrade = document.querySelector(".display-grade");

function gradeGenerator(){
    let marks = input.value

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
        displayGrade.style.color = "red";
        displayGrade.style.fontSize = "0.9rem"
        input.style.borderColor = "red"
    }

    input.value = ""
}

submit.addEventListener("click", () => {
    gradeGenerator()
})

// Input eventListener
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        gradeGenerator()
    }
})