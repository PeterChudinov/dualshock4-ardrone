## dualshock4-ardrone
A quick snippet that lets you fly your Parrot arDrone 2.0 using a Dualshock 4 controller. It also can work with other controllers, but you will have to use [cylon-joystick docs](https://github.com/hybridgroup/cylon-joystick) for those manipulations.

## Why?
I hate the way Parrot made their phone app, and I got inspired by Watch Dogs 2. And I was bored and totally had nothing to do.

## Oh, I hate the controlls too! How do I use my DS4 to fly my drone?
It's all good, I gotchu.

### Fast (unsafe):
1. Clone this repo
2. Plug your DS4 into your computer
3. Run `node drone.js`
4. ???????
5. PROFIT

### Slow and 100% legit:
1. Clone this repo. Or just get `drone.js`
2. Plug your DS4 into your computer
3. `npm install ar-drone` and `npm install cylon-joystick`
4. Run `node drone.js`
5. Try not to crash into your granny's precious oil lamp

## Wait, how do I set up my DS4?

You can do it using a USB cable or through Bluetooth, ea-sy!

### Via USB
Just plug it in, it's going to show up at devices list if you run `cylon-joystick-explorer`. If you have a pimped out custom controller, don't forget to get the `description` from there too.
If the controller still refuses to work, go to the `drone.js` and do this:

```javascript
  devices: {
    controller: { driver: 'dualshock-3', description: '%THAT NAME FROM THE DESCRIPTION%' }
  }
```

### Via Bluetooth (fancy?)
On your controller hold(!) the Playstation button and Share button at the same time. Hold these buttons until the light bar starts rapidly flashing. Then go into your bluetooth menu and add it like any other device.
Then just do the same thing as with the USB.

Hold the Playstation button and Share button for a few seconds to exit the Bluetooth mode, if you want to get back to playing your PS4.

## Want to contribute?
Hit me up, or open an issue. If you're brave and confident enough, do a pull request.

## Legal stuff
Software supplied as is, I am not responsible for you crashing your drone. Your mom will buy you a new one for Christmas anyway.
