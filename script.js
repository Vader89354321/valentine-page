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

function populateHearts() {
    const responses = document.getElementById('responses');
    responses.innerHTML = ''; // Clear previous hearts
    let count = 100; // Number of hearts
    for (let i = 0; i < count; i++) {
        let heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.className = 'heart';
        // Random position within the responses div
        heart.style.top = Math.random() * (responses.clientHeight - 20) + 'px'; // Minus 20 to ensure it's fully visible
        heart.style.left = Math.random() * (responses.clientWidth - 20) + 'px';
        responses.appendChild(heart);
    }
}

