document.getElementById('yesBtn').addEventListener('click', function() {
    populateHearts();
    showSpecialImage();
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
            populateHearts();
            document.getElementById('noBtn').style.display = 'none';
            showSpecialImage();
            break;
    }
}

function populateHearts() {
    const responses = document.getElementById('responses');
    responses.innerHTML = '';
    const count = 75; // Half the original count since we're doing two sides
    const size = 100;
    const centerY = responses.offsetHeight / 2 - 100;

    function createHeart(xOffset, delayMultiplier) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const angle = Math.PI * i / (count / 2);
                const x = size * (16 * Math.pow(Math.sin(angle), 3));
                const y = -size * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
                
                let heart = document.createElement('span');
                heart.textContent = '❤️';
                heart.className = 'heart';
                heart.style.position = 'absolute';
                heart.style.left = `${xOffset + x}px`;
                heart.style.top = `${centerY + y}px`;
                heart.style.opacity = '0';
                heart.style.transition = 'opacity 0.5s ease-in';
                responses.appendChild(heart);

                setTimeout(() => {
                    heart.style.opacity = '1';
                }, 50);
            }, i * 100 * delayMultiplier);
        }
    }

    const centerX = responses.offsetWidth / 2;
    createHeart(centerX - 150, 1); // Left side
    createHeart(centerX + 150, 2); // Right side
}

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}
