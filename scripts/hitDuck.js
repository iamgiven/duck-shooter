let duckDivUp = document.querySelectorAll('#ducks-up .duck');
let duckDivMid = document.querySelectorAll('#ducks-mid .duck');
let duckDivDown = document.querySelectorAll('#ducks-down .duck');
const target = document.getElementById("target");

// Count the score  
let score = 0;
function addScore() {
    const scoreArea = document.getElementById("score");
    score = score + 15;
    scoreArea.innerHTML = score;
    localStorage.setItem("score", score);
}

// Quack sound
function playCuac() {
    const cuac = document.getElementById("sounDuck");
    cuac.currentTime = 0;
    cuac.play();
}

// Gunshot sound
function playGunshot() {
    const gunshot = document.getElementById("soundShoot");
    gunshot.currentTime = 0;
    gunshot.play();
}

// Find center of elements to match positions        
function findCenter(element) {
    const rect = element.getBoundingClientRect();
    const centerX = Math.round(rect.left + rect.width / 2);
    const centerY = Math.round(rect.top + rect.height / 2);
    return { centerX, centerY };
}

// SHOOT the duck
export function hitDuck() {
    playGunshot();

    function checkDucks(duckDiv, imgSrc) {
        for (let i = 0; i < duckDiv.length; i++) {
            const duck = duckDiv[i];
            const duckImg = duck.getElementsByTagName('img')[0];
            const duckCenter = findCenter(duck);
            const targetCenter = findCenter(target);
            const pointAX = targetCenter.centerX - 20;
            const pointBX = targetCenter.centerX + 20;
            const pointAY = targetCenter.centerY - 20;
            const pointBY = targetCenter.centerY + 20;

            if (duckCenter.centerX > pointAX && duckCenter.centerX < pointBX &&
                duckCenter.centerY > pointAY && duckCenter.centerY < pointBY) {

                // Sum the score
                if (duckImg.src !== imgSrc) {
                    addScore();
                    // Make duck quack 
                    playCuac();
                }

                // Change the color of the shooted duck
                duckImg.src = imgSrc;
            }
        }
    }

    checkDucks(duckDivUp, "./assets/red-duck.png");
    checkDucks(duckDivMid, "./assets/red-duck-reverse.png");
    checkDucks(duckDivDown, "./assets/red-duck.png");
}

// Resurrect shooted ducks
function resurrectDuck() {
    const duckDivUp = document.querySelectorAll('.ducks-up .duck');
    const duckDivMid = document.querySelectorAll('.ducks-mid .duck');
    const duckDivDown = document.querySelectorAll('.ducks-down .duck');

    function resetDucks(duckDiv, imgSrc) {
        for (let i = 0; i < duckDiv.length; i++) {
            const duck = duckDiv[i];
            const duckImg = duck.querySelector('img');
            const duckCenter = findCenter(duck);
            const targetCenter = findCenter(target);
            const pointC = targetCenter.centerX + 30;

            if (duckCenter.centerX > pointC) {
                duckImg.src = imgSrc;
                duckImg.style.transform = 'scaleX(1)'; // Ensure duck faces right
            }
        }
    }

    resetDucks(duckDivUp, "./assets/yellow-duck.png");
    resetDucks(duckDivMid, "./assets/yellow-duck-reverse.png"); // Ensure it faces right
    resetDucks(duckDivDown, "./assets/yellow-duck.png");


}


function repeatResurrection() {
    setInterval(resurrectDuck, 1500);
}

repeatResurrection();
