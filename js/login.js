// -> step 1 -  add click event handler with the submit button 
document.getElementById('btn-login').addEventListener('click', function () {
    // -> step 2- get the email address inside the email input field 
    // *** Always remember to use .value to get text from an input field 
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // -> step 3 - get the password 
    // 3.a -  give a id 
    // 3.b - get the element
    // 3.c get the value from the element 
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    //-> step-4 verify email address and check valid user or not 
    if (email === 'maerdoa@haha.com' && password === 'password') {
        window.location.href = "bank.html"
    }
    else {
        alert('Age biye kore dekha! Shala biye korena abar sashurer Bank er Taka marte cay. Ja fokirni!')
    }
})