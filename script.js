// Get elements
const billingToggle = document.getElementById("billingToggle");
const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");


// Billing toggle event
billingToggle.addEventListener("change", function () {

    if (billingToggle.checked) {

        // Yearly pricing
        prices.forEach(function (price) {
            price.textContent = price.dataset.yearly;
        });

        periods.forEach(function (period) {
            period.textContent = "/month";
        });

        monthlyLabel.classList.remove("active-label");
        yearlyLabel.classList.add("active-label");

    } else {

        // Monthly pricing
        prices.forEach(function (price) {
            price.textContent = price.dataset.monthly;
        });

        periods.forEach(function (period) {
            period.textContent = "/month";
        });

        yearlyLabel.classList.remove("active-label");
        monthlyLabel.classList.add("active-label");
    }
});
