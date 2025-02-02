document.getElementById('yesBtn').addEventListener('click', function() {
    populateHearts(); // First populate hearts
    showSpecialImage(); // Then display the image
});

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}

function populateHearts() {
    const responses = document.getElementById('responses');
    responses.innerHTML = ''; // Clear previous hearts
    const count = 150; // Number of hearts
    const centerX = responses.offsetWidth / 2;
    const centerY = responses.offsetHeight / 2 - 100 + 50; // Add 50 pixels to move hearts down

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
