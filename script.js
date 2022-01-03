function loading() {

    let coord = [
        [218, 403],
        [330, 305],
        [573, 280],
        [752, 237],
        [711, 169],
        [620, 65],

    ];

    let hooks = document.querySelectorAll('.hook')

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
                currentPosition++;
                climber.style.left = coord[currentPosition][0] + 'px';
                climber.style.top = coord[currentPosition][1] + 'px';
            }
        } else if (event.code === 'KeyZ') {
            if (currentPosition > 0) {
                currentPosition--;
                climber.style.left = coord[currentPosition][0] + 'px';
                climber.style.top = coord[currentPosition][1] + 'px';
            }
        }

        let flag = document.querySelector('.flag');
        if (currentPosition == coord.length - 1) {
            flag.style.visibility = 'visible'
        }
    });



};
loading();