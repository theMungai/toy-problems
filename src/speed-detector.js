const speedInput = document.querySelector(".speed-input");
const speedButton = document.querySelector(".speed-button") 
const displayPoints = document.querySelector(".display-points");

function speedDetector(speed){
    const speedLimit = 70;
    const maxDemeritPoints = 12

    if(speed === ""){
        displayPoints.textContent = ""
    }

    else if(speed < speedLimit){
        displayPoints.textContent = "Ok"
    }
    
    else{
        const demeritPoints = Math.floor((speed -speedLimit) / 5);

        if(demeritPoints > maxDemeritPoints){
            displayPoints.textContent = "License suspended"
            displayPoints.style.color = "rgba(197, 24, 24, 0.712)"
        }
        else{
            displayPoints.textContent = `Points : ${demeritPoints}`
        }
    }
}

speedButton.addEventListener("click", () => {
    speedDetector(speedInput.value)
})

speedInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        speedDetector(speedInput.value)
    }
})