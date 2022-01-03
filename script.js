function loading() {

    let coord = [
        [218, 403],
        [330, 305],
        [752, 237],
        [573, 280],
        [711, 169],
        [620, 53]
    ];

    let hooks = document.querySelectorAll('.hook')

    for (let i = 0; i < hooks.length; i++) {
        hooks[i].style.left = coord[i][0] + 'px';
        hooks[i].style.top = coord[i][1] + 'px';
    };

    let climber = document.querySelector('.climber');
    climber.style.left = coord[0][0] + 'px';
    climber.style.top = coord[0][1] + 'px';



}
window.onload = loading;