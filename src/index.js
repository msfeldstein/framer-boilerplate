import icon from "./images/Icon.png";
import "./framer/framer";

const imageLayer = new Framer.Layer({
  x: 0,
  y: 0,
  width: 128,
  height: 128,
  image: icon,
});
imageLayer.center();

// Define a set of states with names (the original state is 'default')
imageLayer.states = {
  second: { y: 100, scale: 0.6, rotationZ: 100 },
  third: { y: 300, scale: 1.3 },
  fourth: { y: 200, scale: 0.9, rotationZ: 200 },
};

// Set the default animation options
imageLayer.animationOptions = {
  curve: "spring(500,12,0)",
};

// On a click, go to the next state
imageLayer.on(Framer.Events.Click, function () {
  imageLayer.stateCycle();
});
