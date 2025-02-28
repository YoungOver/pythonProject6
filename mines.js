const trapsSelect = document.getElementById('traps');
const continueBtn = document.getElementById('continue');
const gameDiv = document.getElementById('game');
const fieldDiv = document.getElementById('field');
const signalBtn = document.getElementById('signal');

let trapsCount = 1;

continueBtn.addEventListener('click', () => {
    trapsCount = parseInt(trapsSelect.value);
    document.getElementById('selection').classList.add('hidden');
    gameDiv.classList.remove('hidden');
    renderField();
});

signalBtn.addEventListener('click', () => {
    signalBtn.disabled = true;
    signalBtn.textContent = 'Генерация...';
    setTimeout(() => {
        generateStars();
        signalBtn.textContent = 'Сигнал получен';
    }, 2000); // Задержка 2 секунды
});

function renderField() {
    fieldDiv.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = '⬜';
        fieldDiv.appendChild(cell);
    }
}

function generateStars() {
    const starsCount = Math.floor(Math.random() * (10 - trapsCount)) + 3;
    const cells = Array.from(fieldDiv.children);
    const starPositions = [];
    while (starPositions.length < starsCount) {
        const pos = Math.floor(Math.random() * 25);
        if (!starPositions.includes(pos)) starPositions.push(pos);
    }
    starPositions.forEach(pos => {
        cells[pos].textContent = '⭐';
        cells[pos].classList.add('star');
    });
}