document.getElementById('btn-withdraw').addEventListener('click', function () {
    // input field 
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //clear input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please input a valid Number')
        return;
    }

    // withdraw box 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //total balance  box
    const totalBalance = document.getElementById('total-balance');
    const previoustotalBalanceString = totalBalance.innerText;
    const previoustTotalBalance = parseFloat(previoustotalBalanceString)



    if (newWithdrawAmount > previoustTotalBalance) {
        alert('Tur sashurer kache eto taka nai. maf kor fokirni')
        return;
    }

    //total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;


    //total remaining balance 
    const currentTotalBalance = previoustTotalBalance - newWithdrawAmount;
    totalBalance.innerText = currentTotalBalance;


})