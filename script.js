document.getElementById('yesBtn').addEventListener('click', function() {
    showSpecialImage();
    populateHeartOfHearts(); // Call the function to show hearts
});

document.getElementById('noBtn').addEventListener('click', alwaysYes);

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

// Function to create a heart shape on the right side
function populateHeartOfHearts() {
    console.log("Generating heart shape..."); // Debugging

    const container = document.getElementById('heartContainer');
    container.innerHTML = ''; // Clear previous hearts

    const count = 75; // Reduced number of hearts
    const size = 40; // Adjusted for better positioning
    const centerX = window.innerWidth - 250; // Ensure it's within the viewport
    const centerY = window.innerHeight / 2; // Center vertically

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
            heart.style.transition = 'opacity 0.5s ease-in';
            container.appendChild(heart);

            console.log(`Heart ${i} positioned at: (${heart.style.left}, ${heart.style.top})`); // Debugging

            setTimeout(() => {
                heart.style.opacity = '1';
            }, 50);
        }, i * 80);
    }
}

