(function() {
    console.log('hello from game!');

    var height = window.innerHeight;
    var width = window.innerWidth;
    var game = configure();

    var vita;

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
        // game.load.image('logo', 'images/phaser.png');
        game.load.spritesheet('vita', 'images/dino/vita.png', 24, 24);
    }

    function create() {
        // var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        // logo.anchor.setTo(0.5, 0.5);

        addDinos();
    }

    function addDinos() {
        vita = game.add.sprite(game.world.centerX, game.world.centerY, 'vita');
        vita.anchor.setTo(0.5, 0.5);
        vita.animations.add('walk');
        vita.animations.play('walk', 50, true);
        game.add.tween(vita).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
    }

    function update() {

        if (vita.x >= 300) {
            vita.scale.x += 0.01;
            vita.scale.y += 0.01;
        }

    }

})();