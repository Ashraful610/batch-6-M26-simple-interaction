const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function() {
    const emailValue = email.value;
    const passwordValue = password.value;
    if(emailValue === 'islam@gmail.com' && passwordValue === 'aaaaaa'){
        console.log('email and password is correct' , emailValue , passwordValue);
        window.location.href = 'bank.html'
    }
    else if(emailValue !== 'islam@gmail.com' && passwordValue !== 'aaaaaa'){
        console.log('email and password is incorrect' , emailValue , passwordValue);
    }        
    else if (emailValue !== 'islam@gmail.com'){
        console.log('email is incorrect ' , emailValue);
    }
    else{
        console.log('password is incorrect ' , passwordValue);
    }
})