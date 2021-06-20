const colors = ['A', 'B', 'C', 'D', 'E', 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumbar()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumbar() {
    return Math.floor(Math.random() * colors.length);
}