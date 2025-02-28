const multiplierDiv = document.getElementById('multiplier');
const signalBtn = document.getElementById('signal');
const jetImg = document.getElementById('jet');

signalBtn.addEventListener('click', () => {
    signalBtn.disabled = true;
    jetImg.classList.add('flying');
    let x = 0;
    const interval = setInterval(() => {
        x += Math.random() * 0.5;
        multiplierDiv.textContent = `x${x.toFixed(2)}`;
        if (x >= Math.random() * 99 + 1) {
            clearInterval(interval);
            multiplierDiv.textContent = `x${x.toFixed(2)}`;
            signalBtn.textContent = 'Сигнал получен';
            jetImg.classList.remove('flying');
        }
    }, 100);
});