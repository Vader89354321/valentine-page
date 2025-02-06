document.getElementById('yesBtn').addEventListener('click', function() {
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
            document.getElementById('noBtn').style.display = 'none';
            showSpecialImage();
            break;
    }
}

function showSpecialImage() {
    document.getElementById('specialImageContainer').style.display = 'block';
}
