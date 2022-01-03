function loading() {

    let coord = [
        [218, 403],
        [370, 305],
        [573, 280],
        [752, 237],
        [711, 169],
        [620, 65],

    ];

    let hooks = document.querySelectorAll('.hook');
    let score = document.querySelector('.score');
    score.innerHTML = 'x - верх<br>z - вниз'
    let scoreCounter = 0;

    for (let i = 0; i < hooks.length; i++) {
        hooks[i].style.left = coord[i][0] + 'px';
        hooks[i].style.top = coord[i][1] + 'px';
    };

    let climber = document.querySelector('.climber');
    climber.style.left = coord[0][0] + 'px';
    climber.style.top = coord[0][1] + 'px';

    let currentPosition = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code === 'KeyX') {
            if (currentPosition < hooks.length) {
                ++currentPosition;
                scoreCounter += 100;
                score.innerHTML = `SCORE:<br>${scoreCounter}`
                climber.style.left = coord[currentPosition][0] + 'px';
                climber.style.top = coord[currentPosition][1] + 'px';
            }
        } else if (event.code === 'KeyZ') {
            if (currentPosition > 0) {
                --currentPosition;
                scoreCounter -= 100;
                score.innerHTML = `SCORE:<br>${scoreCounter}`
                climber.style.left = coord[currentPosition][0] + 'px';
                climber.style.top = coord[currentPosition][1] + 'px';
            }
        }

        let flag = document.querySelector('.flag');
        if (currentPosition == coord.length - 1) {
            flag.style.visibility = 'visible'
            flag.style.transitionDelay = '0.4s'
            setTimeout(gameEnd, 1000)
        }
    });

    function gameEnd() {
        window.location.href = 'gameEnd.html';
    }

};
window.onload = loading;