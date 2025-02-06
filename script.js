// Ensure script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    document.getElementById('yesBtn').addEventListener('click', function() {
        showSpecialImage();
        populateHeartOfHearts(); // Show the heart shape on the right
    });

    document.getElementById('noBtn').addEventListener('click', alwaysYes);
});

let noClickCount = 0;

function alwaysYes() {
    noClickCount++;
    switch (noClickCount) {
        case 1:
            alert('Are you sure?');
            break;
        case 2:
            alert('Are you really sure?');
            break;
        case 3:
            alert('Last chance to say yes!');
            break;
        default:
            alert("Okay, you said 'Yes'!");
            document.getElementById('noBtn').style.display = 'none';
            showSpecialImage();
            populateHeartOfHearts(); // Trigger heart effect
            break;
    }
}

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}

// Function to create a **heart shape with centered text**
function populateHeartOfHearts() {
    console.log("Generating heart shape with centered text...");

    const container = document.getElementById('heartContainer');
    if (!container) {
        console.error("ERROR: #heartContainer does not exist!");
        return;
    }

    container.innerHTML = ''; // Clear previous hearts

    const count = 150; // Fewer hearts for a compact shape
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.03; // Scaled based on screen size
    const centerX = window.innerWidth - 120; // Adjusted positioning
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const angle = Math.PI * i / (count / 2);
            const x = size * (16 * Math.pow(Math.sin(angle), 3));
            const y = -size * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

            // Create heart container
            let heartContainer = document.createElement('div');
            heartContainer.className = 'heart';
            heartContainer.style.position = 'absolute';
            heartContainer.style.left = `${centerX + x}px`;
            heartContainer.style.top = `${centerY + y}px`;
            heartContainer.style.opacity = '0';
            heartContainer.style.transition = 'opacity 0.3s ease-in';
            heartContainer.style.transform = `scale(${size / 30})`;

            // Create emoji heart
            let emojiHeart = document.createElement('div');
            emojiHeart.className = 'emoji-heart';
            emojiHeart.textContent = '❤️';

            // Create text for the center of each heart
            let heartText = document.createElement('div');
            heartText.className = 'heart-text';
            heartText.textContent = 'I love you, Alexie!';

            // Append both elements inside the heart container
            heartContainer.appendChild(emojiHeart);
            heartContainer.appendChild(heartText);

            container.appendChild(heartContainer);
            console.log(`Added heart at ${heartContainer.style.left}, ${heartContainer.style.top}`);

            setTimeout(() => {
                heartContainer.style.opacity = '1';
            }, 30);
        }, i * 20);
    }
}

// Ensure function is globally accessible
window.populateHeartOfHearts = populateHeartOfHearts;
