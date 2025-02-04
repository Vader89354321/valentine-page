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
    const count = 150;
    const centerX = responses.offsetWidth / 2;
    const centerY = responses.offsetHeight / 2 - 100;
    const size = 100;

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

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}
