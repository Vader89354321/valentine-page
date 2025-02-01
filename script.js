document.getElementById('yesBtn').addEventListener('click', function() {
    populateHearts();
});

function alwaysYes() {
    populateHearts();
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

setTimeout(function() {
    const responses = document.getElementById('responses');
    for (let i = 0; i < 50; i++) {
        let response = document.createElement('div');
        response.textContent = 'Yes!';
        responses.appendChild(response);
    }
}, 30000);
