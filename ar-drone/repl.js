var arDrone = require('ar-drone');
var drone  = arDrone.createClient();
drone.createRepl();

drone.takeoff();
drone
  .after(3000, function() {
    this.up(0.2);
  })
  .after(3000, function() {
    this.animate('flipBehind', 1500);
  })
  .after(10000, function() {
    this.stop();
    this.land();
  });