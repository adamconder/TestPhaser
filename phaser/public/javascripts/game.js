(function() {
    console.log('hello from game!');

    var height = window.innerHeight;
    var width = window.innerWidth;
    var game = configure();

    var vita = {
        speed: 5,
        isMoving : false
    };

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
        vita.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'vita');
        vita.sprite.anchor.setTo(0.5, 0.5);
        vita.sprite.scale.x = 3
        vita.sprite.scale.y = 3
        vita.sprite.animations.add('run', [18, 19, 20, 21, 22, 23, 24], 1, true);
        vita.sprite.animations.add('walk', [5,6], 1, true);
        vita.sprite.animations.play('run', 10, true);
        vita.isMoving = true;
        // vita.animations.play('walk', 2, true);
        // game.add.tween(vita).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
    }

    function update() {

        function updateVita() {
            vita.sprite.animations.play('run', 10, true);
            vita.isMoving = true;

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                vita.sprite.x -= vita.speed;
                vita.sprite.scale.setTo(-3, 3)
            }
            else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                vita.sprite.x += vita.speed;
                vita.sprite.scale.setTo(3, 3)
            } else {
                vita.isMoving = false;
                vita.sprite.animations.stop('run');
            }
        }

        updateVita();

    }

})();