// step 1 > add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step 2 > get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-amount');
    // for input field use .value to the value inside the input field
    const newDepositAmountString = depositField.value;
    // make it number from string
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 7 > Clear the deposit field
    depositField.value = "";

    if (isNaN(newDepositAmount)) {
        alert('please input a valid Number')
        return;
    }

    // step 3 > get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    // for non-input (element other than input, textarea)use innerText to get the text
    const previousDepositTotalString = depositTotalElement.innerText;
    // make it number from string
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4 > add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 > get the balance total 
    const totalBalance = document.getElementById('total-balance');
    const previoustotalBalanceString = totalBalance.innerText;
    const previoustTotalBalance = parseFloat(previoustotalBalanceString)

    // step 6 > calculate current total balance
    const currentTotalBalance = previoustTotalBalance + newDepositAmount;
    // set the deposit total
    totalBalance.innerText = currentTotalBalance;


})