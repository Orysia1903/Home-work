window.addEventListener('load', pageLoaded);

function pageLoaded() {
    var container = document.querySelector('.container'),
        counter = document.querySelector('.counter'),
        gameOver = document.querySelector('.game-over'),
        firstDuck = document.querySelector('.duck-first'),
        secondDuck = document.querySelector('.duck-second'),
        containerParams = container.getBoundingClientRect(),
        score = document.querySelector('.score');

    container.addEventListener('click', shootTheDuck);

    function shootTheDuck(e) {
        var firstDuck = e.target.parentElement;
        var secondDuck = e.target.parentElement;

        if (firstDuck.classList.contains('duck-first') || secondDuck.classList.contains('duck-second')) {
            counter.innerHTML = parseInt(counter.innerHTML) + 1
            duckMove(firstDuck, secondDuck);
        } else {
            gameOver.classList.add('game-over-visible');
            if (counter.innerHTML === '0') {
                score.innerHTML = `You haven't shot any duck`
            } else if (counter.innerHTML === '1') {
                score.innerHTML = `You've shot one duck`
            } else {
                score.innerHTML = `You've shot ${counter.innerHTML} ducks`
            }
            if (e.target.className === 'replay') {
                gameOver.classList.remove('game-over-visible');

            }
            counter.innerHTML = '0';
        }
    }

    function duckMove(firstDuck, secondDuck) {
        firstDuck.style.top = getRandonCoords(1, containerParams.height) + 'px';
        firstDuck.style.left = getRandonCoords(1, containerParams.width) + 'px';
        secondDuck.style.top = getRandonCoords(1, containerParams.height) + 'px';
        secondDuck.style.left = getRandonCoords(1, containerParams.width) + 'px';
    }

    function getRandonCoords(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    setInterval(duckMove, 1000, firstDuck, secondDuck);
}