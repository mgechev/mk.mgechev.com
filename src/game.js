(function () {

    function $(id) {
        return document.getElementById(id);
    }

    function setLife(lifeBar, life) {
        lifeBar.style.width = life + '%';
    }

    document.onkeydown = function (e) {
        if (e.keyCode === 32) {
            window.location.reload();
        }
        e.preventDefault();
        return false;
    };

    function startGame() {
        mk.start({
            arena: {
                container: document.getElementById('arena')
            },
            fighters: [
                { name: 'Subzero' },
                { name: 'Kano' }
            ],
            callbacks: {
                attack: function (f, o, l) {
                    if (o.getName() === 'kano') {
                        setLife($('player2Life'), o.getLife());
                    } else {
                        setLife($('player1Life'), o.getLife());
                    }
                },
                'game-end': function () {
                   $('gameEnd').style.visibility = 'visible'; 
                }
            },
            gameType: 'multiplayer'
        }).ready(function () {
            $('loading').style.visibility = 'hidden';
            $('arena').style.visibility = 'visible';
            $('utils').style.visibility = 'visible';
        });
    }

    startGame();

}());
