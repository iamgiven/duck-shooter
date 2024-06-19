const target = document.getElementById('target');
let targetPosition = 2; // 1 for top lane, 2 for middle lane, 3 for bottom lane

document.getElementById('move-up').addEventListener('click', () => {
    if (targetPosition > 1) {
        targetPosition--;
        moveTarget();
    }
});

document.getElementById('move-down').addEventListener('click', () => {
    if (targetPosition < 3) {
        targetPosition++;
        moveTarget();
    }
});

function moveTarget() {
    switch (targetPosition) {
        case 1:
            target.style.top = '320px';
            break;
        case 2:
            target.style.top = '360px';
            break;
        case 3:
            target.style.top = '400px';
            break;
    }
}
