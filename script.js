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
            populateHearts();  // After the third "No", it still populates hearts
            break;
    }
}

function populateHearts() {
    for (let i = 0; i < 100; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(heart);
    }
}
