const salaryInput = document.querySelector(".salary-input");
const calculateNetBtn = document.querySelector(".calculate-net-salary");
const messageContainer = document.querySelector(".salary-message");

function calculateNet(gross){
    // ============= PAYE ================
    function calculatePaye(){
        const taxBand1 = 24000;
        const taxBand2 = 32333;

        const rate1 = 0.10;
        const rate2 = 0.25;
        const rate3 = 0.30;

        const personalRelief = 2400;
        let tax = 0;

        if(gross <= taxBand1){
            tax = gross * rate1
        }
        else if(gross <= taxBand2){
            tax = taxBand1 * rate1 + (gross -taxBand1) * rate2
        }

        else{
            tax = taxBand1 * rate1 + (taxBand2 - taxBand1) * rate2 + (gross -taxBand2) * rate3
        }

        tax = tax - personalRelief;

        return tax
    }
    

    let houseLevy = 0.03 * gross;
    let NSSF = 0.12 * gross;
    let SHA = 0.0275 * gross;
    let paye = calculatePaye()
    
    let totalDeductions = houseLevy + NSSF + SHA + paye;
    let netSalary = gross - totalDeductions;

    messageContainer.innerHTML = `
        <p> Your Housing Levy contribution is : KSh.${houseLevy.toFixed(2)}</p>
        <p>Your NSSF contribution is : KSh.${NSSF.toFixed(2)}</p>
        <p>Your SHA contribution is : KSh.${SHA.toFixed(2)}</p>
        <p>Your Monthly PAYE is : KSh.${paye.toFixed(2)}</p>

        <p>Your Net Salary is KSh.${netSalary.toFixed(2)}</p>
    ` 
    salaryInput.value = ""
}

calculateNetBtn.addEventListener("click", () => {
    calculateNet(salaryInput.value)
})

salaryInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        calculateNet(salaryInput.value)
    }
})