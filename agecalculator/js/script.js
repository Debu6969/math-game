function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById("birthdate").value;
    if (!birthDateInput) return;

    const birthDateParts = birthDateInput.split("-");
    const birthYear = parseInt(birthDateParts[0]);
    const birthMonth = parseInt(birthDateParts[1]) - 1;
    const birthDay = parseInt(birthDateParts[2]);
    const birthdate = new Date(birthYear, birthMonth, birthDay);

    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.44);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const result = document.getElementById("result");
    result.innerHTML = `
    <div class="result-item">
        <h3>AGE:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
    </div>
    <div class="result-item">
        <h3>Weeks passed:</h3>
        <p>${ageInWeeks}</p>
    </div>
    <div class="result-item">
        <h3>Days passed:</h3>
        <p>${ageInDays}</p>
    </div>
    <div class="result-item">
        <h3>Hours passed:</h3>
        <p>${ageInHours}</p>
    </div>
    <div class="result-item">
        <h3>Minutes passed:</h3>
        <p>${ageInMinutes}</p>
    </div>
    <div class="result-item">
        <h3>Seconds passed:</h3>
        <p>${ageInSeconds}</p>
    </div>
    `;
}

const agecalculatorForm = document.getElementById("agecalculator");
if (agecalculatorForm) {
    agecalculatorForm.addEventListener("submit", function(event) {
        event.preventDefault();
        calculateAge();
    });
}