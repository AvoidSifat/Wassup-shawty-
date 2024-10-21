
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const bunnyKiss = document.getElementById('bunny-kiss');

let yesBtnSize = 20; // Initial size in px

noBtn.addEventListener('click', () => {
    yesBtnSize += 5; // Increase size by 5px every time "No" is clicked
    yesBtn.style.fontSize = `${yesBtnSize}px`;
    yesBtn.style.transform = `scale(${yesBtnSize / 20})`; // Increase button scale
});

yesBtn.addEventListener('click', () => {
    bunnyKiss.classList.add('show'); // Show bunny
});
