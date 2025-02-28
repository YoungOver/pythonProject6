const coinImg = document.getElementById('coin');
const signalBtn = document.getElementById('signal');

signalBtn.addEventListener('click', () => {
    signalBtn.disabled = true;
    coinImg.classList.add('spin');
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'euro' : 'dollar';
        coinImg.src = `assets/coin-${result}.png`;
        coinImg.classList.remove('spin');
        signalBtn.textContent = 'Сигнал получен';
    }, 2000); // Анимация 2 секунды
});