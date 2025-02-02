document.getElementById('yesBtn').addEventListener('click', function() {
    populateHearts();
});

let noClickCount = 0;
function alwaysYes() {
    noClickCount++;
    switch (noClickCount) {
        case 1:
            alert('Are you sure?');  // First prompt if "No" is clicked
            break;
        case 2:
            alert('Are you really sure?');  // Second prompt
            break;
        case 3:
            alert('Last chance to say yes!');  // Third prompt
            break;
        default:
            alert("Okay, you said 'Yes'!"); // Informing user it defaults to yes
            populateHearts();  // Defaulting to "Yes" after the third "No"
            document.getElementById('noBtn').style.display = 'none'; // Hides the No button
            break;
    }
}

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block'; // Ensures the image container is displayed
}

function populateHearts() {
    const responses = document.getElementById('responses');
    responses.innerHTML = ''; // Clear previous hearts

    const count = 150; // Number of hearts
    const centerX = responses.offsetWidth / 2;
    const centerY = responses.offsetHeight / 2 - 50; // Adjust vertically to fit better around the image
    const size = 20; // Adjust the size factor for the heart shape

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
