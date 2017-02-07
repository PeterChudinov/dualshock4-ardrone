var Cylon     = require('cylon');
var arDrone   = require('ar-drone');
var drone     = arDrone.createClient();
var droneUdp  = arDrone.createUdpControl();

var x = 0.0;

var takePicture = function(callback) {
  drone.getPngStream().once('data', function(data) {
      var fileName = 'pano_' + self._counter++ + '.png';
      fs.writeFile(fileName, data, function(err) {
          if (err) console.log(err);
          console.log(fileName + ' Saved');
      });
  });
};

Cylon.robot({
  connections: {
    joystick: { adaptor: 'joystick' }
  },

  devices: {
    controller: { driver: 'dualshock-4' }
  },

  work: function(my) {

    my.controller.on("x", function(pos) {
      drone.task(takePicture);
    })

    my.controller.on("left_y:move", function(pos) {
      droneUdp.pcmd({
        front: pos
      });
    });

    my.controller.on("right_x:move", function(pos) {
      droneUdp.pcmd({
        clockwise: pos
      });
    });

    my.controller.on("left_x:move", function(pos) {
      droneUdp.pcmd({
        right: pos
      });
    });

    my.controller.on("right_y:move", function(pos) {
      droneUdp.pcmd({
        down: pos
      });
    });
  }
}).start();