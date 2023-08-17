//to calculate amount
function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;
    // user can select value from input box itself so, .value is gn.
    interestRateValue = document.getElementById("interest-rate").value;
    monthsToPayValue = document.getElementById("months-to-pay").value;

    // formula to calculate interest
    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    
    // to calculate how much money needs to be paid for a month
    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    // to display that amount with reference to inner html
    document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
