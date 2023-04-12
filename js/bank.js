const depositMoney = document.getElementById('deposit-money');
const depositField = document.getElementById('deposit-field');
const depositButton = document.getElementById('deposit-btn');
const withdrawMoney = document.getElementById('withdraw-money');
const withdrawField = document.getElementById('withdraw-field');
const withdrawButton = document.getElementById('withdraw-btn');
const totalBalance = document.getElementById('total-balance');


depositButton.addEventListener('click', function(){
    depositMoney.innerText = parseInt(depositField.value) + parseInt(depositMoney.innerText)
    totalBalance.innerText = parseInt(totalBalance.innerText) + parseInt(depositField.value)
    depositField.value = ''
})
withdrawButton.addEventListener('click',function(){
    if(parseInt(withdrawField.value)> parseInt(totalBalance.innerText)){
        alert('Sorry , you have no enough funds')
    }
    else{
        withdrawMoney.innerText = parseInt(withdrawField.value) + parseInt(withdrawMoney.innerText)
        totalBalance.innerText = parseInt(totalBalance.innerText) - parseInt(withdrawField.value)
        withdrawField.value = ''
    }
    // console.log();
})