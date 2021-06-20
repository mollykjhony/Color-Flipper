const colors = ['red', 'blue', 'white', 'whitesmoke', 'yellow', 'pink', 'orange']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumbar = getRandomNumbar();
    document.body.style.backgroundColor = colors[randomNumbar];
    color.textContent = colors[randomNumbar];
})


function getRandomNumbar() {
    return Math.floor(Math.random() * colors.length);
}