//Set initial count
let count = 0;
//Variables
const valueElement = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            valueElement.style.color = 'green';
        }
        if(count < 0){
            valueElement.style.color = 'red';
        }
        if(count === 0){
            valueElement.style.color = '#222';
        }
        valueElement.textContent = count;
    });
})