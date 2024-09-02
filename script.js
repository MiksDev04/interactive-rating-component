const submit = document.querySelector('.button');
const thankYouSect = document.querySelector('dialog');
const rateNum = document.querySelector('.rate-num');
const inputs = document.querySelectorAll('.num-container input');

submit.addEventListener('click', function() {
    
    thankYouSect.showModal();
    thankYouSect.style.display = 'flex';
    let count = 0;
    let val = 0;
    inputs.forEach( function(input) {
        if (input.checked) {
            count++;
            val = input.value;
        } else {
            rateNum.textContent = '0';
        }
    })
    if(count > 0) {
        rateNum.textContent = val;
    }
})

thankYouSect.addEventListener('click', function() {
    thankYouSect.close();
    thankYouSect.style.display = 'none';
})