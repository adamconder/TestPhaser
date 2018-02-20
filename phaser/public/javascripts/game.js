(function() {
    console.log('hello from game!');

    var height = window.innerHeight;
    var width = window.innerWidth;
    var game = configure();

    function configure() {
        var game = new Phaser.Game(
            width,
            height,
            Phaser.AUTO,
            'game',
            { preload: preload, create: create, update: update }
        );
        return game;
    }

    function preload() {
        game.load.image('logo', 'images/phaser.png');
    }

    function create() {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

    function update() {
        console.log('updating')
    }

})();