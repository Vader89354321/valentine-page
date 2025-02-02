document.getElementById('yesBtn').addEventListener('click', function() {
    showSpecialImage();
    populateHearts();
});

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}

function populateHearts() {
    const responses = document.getElementById('responses');
    responses.innerHTML = ''; // Clear previous hearts
    const count = 150; // Number of hearts
    const centerX = responses.offsetWidth / 2;
    const centerY = responses.offsetHeight / 2 - 100;
    const size = 40; // Adjust the size factor for a larger heart shape

    for (let i = 0; i < count; i++) {
        const angle = Math.PI * i / (count / 2);
        const x = size * (16 * Math.pow(Math.sin(angle), 3));
        const y = -size * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        let heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.className = 'heart';
        heart.style.position = 'absolute';
        heart.style.left = `${centerX + x}px`;
        heart.style.top = `${centerY + y}px`;
        responses.appendChild(heart);
    }
}
