// Клавиатура
const keyboard = document.querySelectorAll(".keyboard");
function t11(event) {
    console.log(event.key);
    for(let item of keyboard) {
        item.classList.remove('active');
    }
    let key = event.key;
    if(key === ' ') key = 'space';
    if(key === 'Control') key = 'ctrl';
    if(key === 'Enter') key = 'enter';
    if(key === 'Alt') key = 'altleft';
    console.log(event);
    let button = document.querySelector(`.keyboard[data="${key}"]`);
    if (button) button.classList.add('active');
}
document.querySelector('.i-11').onkeydown = t11;
