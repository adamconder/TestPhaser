(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

(function () {
    console.log('hello from game!');

    var height = window.innerHeight;
    var width = window.innerWidth;
    var game = configure();

    var vita = {
        speed: 5,
        isMoving: false
    };

    function configure() {
        var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
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
        vita.sprite.scale.x = 3;
        vita.sprite.scale.y = 3;
        vita.sprite.animations.add('run', [18, 19, 20, 21, 22, 23, 24], 1, true);
        vita.sprite.animations.add('walk', [5, 6], 1, true);
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
                vita.sprite.scale.setTo(-3, 3);
            } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                vita.sprite.x += vita.speed;
                vita.sprite.scale.setTo(3, 3);
            } else {
                vita.isMoving = false;
                vita.sprite.animations.stop('run');
            }
        }

        updateVita();
    }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvZ2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFXO0FBQ1IsWUFBUSxHQUFSLENBQVksa0JBQVo7O0FBRUEsUUFBSSxTQUFTLE9BQU8sV0FBcEI7QUFDQSxRQUFJLFFBQVEsT0FBTyxVQUFuQjtBQUNBLFFBQUksT0FBTyxXQUFYOztBQUVBLFFBQUksT0FBTztBQUNQLGVBQU8sQ0FEQTtBQUVQLGtCQUFXO0FBRkosS0FBWDs7QUFLQSxhQUFTLFNBQVQsR0FBcUI7QUFDakIsWUFBSSxPQUFPLElBQUksT0FBTyxJQUFYLENBQ1AsS0FETyxFQUVQLE1BRk8sRUFHUCxPQUFPLElBSEEsRUFJUCxNQUpPLEVBS1AsRUFBRSxTQUFTLE9BQVgsRUFBb0IsUUFBUSxNQUE1QixFQUFvQyxRQUFRLE1BQTVDLEVBTE8sQ0FBWDtBQU9BLGVBQU8sSUFBUDtBQUNIOztBQUVELGFBQVMsT0FBVCxHQUFtQjtBQUNmO0FBQ0EsYUFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixNQUF0QixFQUE4QixzQkFBOUIsRUFBc0QsRUFBdEQsRUFBMEQsRUFBMUQ7QUFDSDs7QUFFRCxhQUFTLE1BQVQsR0FBa0I7QUFDZDtBQUNBOztBQUVBO0FBQ0g7O0FBRUQsYUFBUyxRQUFULEdBQW9CO0FBQ2hCLGFBQUssTUFBTCxHQUFjLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsS0FBSyxLQUFMLENBQVcsT0FBM0IsRUFBb0MsS0FBSyxLQUFMLENBQVcsT0FBL0MsRUFBd0QsTUFBeEQsQ0FBZDtBQUNBLGFBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEIsR0FBOUI7QUFDQSxhQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEdBQXNCLENBQXRCO0FBQ0EsYUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixDQUFsQixHQUFzQixDQUF0QjtBQUNBLGFBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIsR0FBdkIsQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLENBQWxDLEVBQWdFLENBQWhFLEVBQW1FLElBQW5FO0FBQ0EsYUFBSyxNQUFMLENBQVksVUFBWixDQUF1QixHQUF2QixDQUEyQixNQUEzQixFQUFtQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQW5DLEVBQTBDLENBQTFDLEVBQTZDLElBQTdDO0FBQ0EsYUFBSyxNQUFMLENBQVksVUFBWixDQUF1QixJQUF2QixDQUE0QixLQUE1QixFQUFtQyxFQUFuQyxFQUF1QyxJQUF2QztBQUNBLGFBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBO0FBQ0E7QUFDSDs7QUFFRCxhQUFTLE1BQVQsR0FBa0I7O0FBRWQsaUJBQVMsVUFBVCxHQUFzQjtBQUNsQixpQkFBSyxNQUFMLENBQVksVUFBWixDQUF1QixJQUF2QixDQUE0QixLQUE1QixFQUFtQyxFQUFuQyxFQUF1QyxJQUF2QztBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsSUFBaEI7O0FBRUEsZ0JBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQixDQUEyQixPQUFPLFFBQVAsQ0FBZ0IsSUFBM0MsQ0FBSixFQUFzRDtBQUNsRCxxQkFBSyxNQUFMLENBQVksQ0FBWixJQUFpQixLQUFLLEtBQXRCO0FBQ0EscUJBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsS0FBbEIsQ0FBd0IsQ0FBQyxDQUF6QixFQUE0QixDQUE1QjtBQUNILGFBSEQsTUFJSyxJQUFJLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBMkIsT0FBTyxRQUFQLENBQWdCLEtBQTNDLENBQUosRUFBdUQ7QUFDeEQscUJBQUssTUFBTCxDQUFZLENBQVosSUFBaUIsS0FBSyxLQUF0QjtBQUNBLHFCQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCO0FBQ0gsYUFISSxNQUdFO0FBQ0gscUJBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNBLHFCQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCLElBQXZCLENBQTRCLEtBQTVCO0FBQ0g7QUFDSjs7QUFFRDtBQUVIO0FBRUosQ0F2RUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gZnJvbSBnYW1lIScpO1xuXG4gICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgZ2FtZSA9IGNvbmZpZ3VyZSgpO1xuXG4gICAgdmFyIHZpdGEgPSB7XG4gICAgICAgIHNwZWVkOiA1LFxuICAgICAgICBpc01vdmluZyA6IGZhbHNlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZSgpIHtcbiAgICAgICAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIFBoYXNlci5BVVRPLFxuICAgICAgICAgICAgJ2dhbWUnLFxuICAgICAgICAgICAgeyBwcmVsb2FkOiBwcmVsb2FkLCBjcmVhdGU6IGNyZWF0ZSwgdXBkYXRlOiB1cGRhdGUgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZ2FtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgICAgICAvLyBnYW1lLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnaW1hZ2VzL3BoYXNlci5wbmcnKTtcbiAgICAgICAgZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd2aXRhJywgJ2ltYWdlcy9kaW5vL3ZpdGEucG5nJywgMjQsIDI0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIC8vIHZhciBsb2dvID0gZ2FtZS5hZGQuc3ByaXRlKGdhbWUud29ybGQuY2VudGVyWCwgZ2FtZS53b3JsZC5jZW50ZXJZLCAnbG9nbycpO1xuICAgICAgICAvLyBsb2dvLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICAgICAgYWRkRGlub3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREaW5vcygpIHtcbiAgICAgICAgdml0YS5zcHJpdGUgPSBnYW1lLmFkZC5zcHJpdGUoZ2FtZS53b3JsZC5jZW50ZXJYLCBnYW1lLndvcmxkLmNlbnRlclksICd2aXRhJyk7XG4gICAgICAgIHZpdGEuc3ByaXRlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHZpdGEuc3ByaXRlLnNjYWxlLnggPSAzXG4gICAgICAgIHZpdGEuc3ByaXRlLnNjYWxlLnkgPSAzXG4gICAgICAgIHZpdGEuc3ByaXRlLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjRdLCAxLCB0cnVlKTtcbiAgICAgICAgdml0YS5zcHJpdGUuYW5pbWF0aW9ucy5hZGQoJ3dhbGsnLCBbNSw2XSwgMSwgdHJ1ZSk7XG4gICAgICAgIHZpdGEuc3ByaXRlLmFuaW1hdGlvbnMucGxheSgncnVuJywgMTAsIHRydWUpO1xuICAgICAgICB2aXRhLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gdml0YS5hbmltYXRpb25zLnBsYXkoJ3dhbGsnLCAyLCB0cnVlKTtcbiAgICAgICAgLy8gZ2FtZS5hZGQudHdlZW4odml0YSkudG8oeyB4OiBnYW1lLndpZHRoIH0sIDEwMDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVml0YSgpIHtcbiAgICAgICAgICAgIHZpdGEuc3ByaXRlLmFuaW1hdGlvbnMucGxheSgncnVuJywgMTAsIHRydWUpO1xuICAgICAgICAgICAgdml0YS5pc01vdmluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChnYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuTEVGVCkpIHtcbiAgICAgICAgICAgICAgICB2aXRhLnNwcml0ZS54IC09IHZpdGEuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdml0YS5zcHJpdGUuc2NhbGUuc2V0VG8oLTMsIDMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChnYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUklHSFQpKSB7XG4gICAgICAgICAgICAgICAgdml0YS5zcHJpdGUueCArPSB2aXRhLnNwZWVkO1xuICAgICAgICAgICAgICAgIHZpdGEuc3ByaXRlLnNjYWxlLnNldFRvKDMsIDMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpdGEuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2aXRhLnNwcml0ZS5hbmltYXRpb25zLnN0b3AoJ3J1bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVml0YSgpO1xuXG4gICAgfVxuXG59KSgpOyJdfQ==
