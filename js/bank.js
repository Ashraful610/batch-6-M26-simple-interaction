const depositMoney = document.getElementById('deposit-money');
const withdrawMoney = document.getElementById('withdraw-money');
const totalBalance = document.getElementById('total-balance');
const depositField = document.getElementById('deposit-field');
const depositButton = document.getElementById('deposit-btn');
const withdrawField = document.getElementById('withdraw-field');
const withdrawButton = document.getElementById('withdraw-btn');


depositButton.addEventListener('click', function(){
    depositMoney.innerText = parseInt(depositField.value) + parseInt(depositMoney.innerText)
    totalBalance.innerText = parseInt(totalBalance.innerText) + parseInt(depositField.value)
    depositField.value = ''
})