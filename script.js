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

// Function to create a **smaller scalable** heart shape on the right side
function populateHeartOfHearts() {
    console.log("Generating smaller heart shape...");

    const container = document.getElementById('heartContainer');
    if (!container) {
        console.error("ERROR: #heartContainer does not exist!");
        return;
    }

    container.innerHTML = ''; // Clear previous hearts

    const count = 40; // Fewer hearts for a compact shape
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.03; // Scaled based on screen size
    const centerX = window.innerWidth - 120; // Adjusted positioning
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const angle = Math.PI * i / (count / 2);
            const x = size * (16 * Math.pow(Math.sin(angle), 3));
            const y = -size * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

            let heart = document.createElement('span');
            heart.textContent = '❤️';
            heart.className = 'heart';
            heart.style.position = 'absolute';
            heart.style.left = `${centerX + x}px`;
            heart.style.top = `${centerY + y}px`;
            heart.style.opacity = '0';
            heart.style.transition = 'opacity 0.3s ease-in';
            heart.style.transform = `scale(${size / 30})`; // 🔥 Scaled properly

            container.appendChild(heart);
            console.log(`Added heart at ${heart.style.left}, ${heart.style.top}`);

            setTimeout(() => {
                heart.style.opacity = '1';
            }, 30);
        }, i * 20);
    }
}

// Ensure function is globally accessible
window.populateHeartOfHearts = populateHeartOfHearts;
