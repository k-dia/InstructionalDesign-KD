function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dijxxkTiyG":
        Script1();
        break;
      case "5qymTIdFcmW":
        Script2();
        break;
      case "5XMk0h9lviu":
        Script3();
        break;
      case "68qNpTYzOZx":
        Script4();
        break;
      case "5yla0aaWAmK":
        Script5();
        break;
      case "5wc1SR8iVNg":
        Script6();
        break;
      case "6q3LfYNptpD":
        Script7();
        break;
      case "6P9K4vO1WPy":
        Script8();
        break;
      case "5w64i6VG0ky":
        Script9();
        break;
      case "6347S1vd9aU":
        Script10();
        break;
      case "5oy35UA9S4c":
        Script11();
        break;
      case "5mJQcIZmA69":
        Script12();
        break;
      case "65kNcOsq9Ye":
        Script13();
        break;
      case "6bDhWfsNSkV":
        Script14();
        break;
      case "5hp67EK2uvM":
        Script15();
        break;
      case "6jyL0RbDo5f":
        Script16();
        break;
      case "68r41OhiSit":
        Script17();
        break;
      case "6QY1IHk9TfV":
        Script18();
        break;
      case "6cSlBZMtj7L":
        Script19();
        break;
      case "6jDqyzDUA6P":
        Script20();
        break;
      case "67hBPdo4aeK":
        Script21();
        break;
      case "6Soa6X2WPkv":
        Script22();
        break;
      case "6fxqBU1lywl":
        Script23();
        break;
      case "6ngPSwNubiw":
        Script24();
        break;
      case "5hrIyldHgqy":
        Script25();
        break;
      case "5m6Mn6g1azo":
        Script26();
        break;
      case "6jec4AabqLg":
        Script27();
        break;
      case "5cA8Kecxm6c":
        Script28();
        break;
      case "6185Pz7qR3Z":
        Script29();
        break;
      case "6A9Q3kHqeIu":
        Script30();
        break;
      case "6D33vRO7vb2":
        Script31();
        break;
      case "6Fu5a3D9AiO":
        Script32();
        break;
      case "6M9rBMawaKv":
        Script33();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5gZHlBUGch5');
const duration = 750;
const easing = 'ease-out';
const id = '5fFe8QYKCdq';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6760GiokHm9');
const duration = 750;
const easing = 'ease-out';
const id = '6KEsTkZWm0Z';
const pulseAmount = 0.07;
const delay = 1750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6gnldj6WI5U');
const duration = 750;
const easing = 'ease-out';
const id = '6PfFfiu4wv4';
const pulseAmount = 0.07;
const delay = 6500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6XeobqNicTd');
const duration = 2000;
const easing = 'ease-out';
const id = '5z1LQxLjvYW';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 2500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6XeobqNicTd');
const duration = 2000;
const easing = 'ease-out';
const id = '5j4YINKeo7P';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('68b92IYqbXt');
const duration = 2000;
const easing = 'ease-out';
const id = '6TuPWjshLcO';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('66JewxQvnal');
const duration = 2000;
const easing = 'ease-out';
const id = '5jAzhab4lc1';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6kCQCuw2oZ1');
const duration = 2000;
const easing = 'ease-out';
const id = '6kqOrjLEQOW';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6Sfg6v5gw8z');
const duration = 2000;
const easing = 'ease-out';
const id = '6CQaPIPuK6s';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5dMDJ9Nglix');
const duration = 2000;
const easing = 'ease-out';
const id = '6oEvq2uFENQ';
const shakeAmount = 5;
const delay = 2700;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6E5F6lLIJFt');
const duration = 750;
const easing = 'ease-out';
const id = '6KEsTkZWm0Z';
const pulseAmount = 0.07;
const delay = 1750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6rDLkGP8FaL');
const duration = 750;
const easing = 'ease-out';
const id = '6Ux0T0OO1kH';
const pulseAmount = 0.07;
const delay = 8250;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6nKwH01gQsf');
const duration = 750;
const easing = 'ease-out';
const id = '5nXz0tr5LnN';
const pulseAmount = 0.07;
const delay = 2500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6Yzb7tOLVkG');
const duration = 750;
const easing = 'ease-out';
const id = '6oBI0b9otrQ';
const pulseAmount = 0.07;
const delay = 2500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6BwlNas6YJb');
const duration = 9000;
const easing = 'ease-out';
const id = '6Ovj7lLd44T';
const shakeAmount = 2;
const delay = 3000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5zsAN6dRD8y');
const duration = 7000;
const easing = 'ease-out';
const id = '5bMh6ZSs5Ua';
const shakeAmount = 2;
const delay = 3250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('5u46aLgfuTf');
const duration = 7000;
const easing = 'ease-out';
const id = '6NnbRCECALJ';
const shakeAmount = 2;
const delay = 3250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('5bwc6Fl7M3e');
const duration = 7000;
const easing = 'ease-out';
const id = '5Ufv5TbzXJO';
const shakeAmount = 2;
const delay = 3750;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6j4fwWv8Df7');
const duration = 7000;
const easing = 'ease-out';
const id = '5nIPb4MwMnj';
const shakeAmount = 2;
const delay = 3750;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6fdgH4zgAIA');
const duration = 6000;
const easing = 'ease-out';
const id = '5qvsB7tuZCE';
const shakeAmount = 2;
const delay = 3750;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('5Uw73JYGn1M');
const duration = 6000;
const easing = 'ease-out';
const id = '6fhqrAQLzMT';
const shakeAmount = 2;
const delay = 3750;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  player.once(() => {
const target = object('5w3M2w3sFLZ');
const duration = 5000;
const easing = 'ease-out';
const id = '6O4sDnnK6Sg';
const shakeAmount = 2;
const delay = 4000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5tc7yRbGh8n');
const duration = 5000;
const easing = 'ease-out';
const id = '5Yzg0mXbXNz';
const shakeAmount = 2;
const delay = 4000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('6F7sAZtAFP0');
const duration = 5000;
const easing = 'ease-out';
const id = '5y04nimeGOD';
const shakeAmount = 2;
const delay = 4000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6gJP35ckbpT');
const duration = 5000;
const easing = 'ease-out';
const id = '6iBfroRhURv';
const shakeAmount = 2;
const delay = 4000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  player.once(() => {
const target = object('64qNIY7Xiax');
const duration = 5000;
const easing = 'ease-out';
const id = '69q8RG3Vw3r';
const shakeAmount = 2;
const delay = 4000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6nKwH01gQsf');
const duration = 7000;
const easing = 'ease-out';
const id = '6fAN93Jyj3a';
const shakeAmount = 2;
const delay = 3000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('5aaf9PBHL9e');
const duration = 250;
const easing = 'ease-out';
const id = '6jF8IomGLDn';
const pulseAmount = 0.03;
const delay = 750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('5jdQ68RZRCF');
const duration = 250;
const easing = 'ease-out';
const id = '6k8kcRiBdPb';
const pulseAmount = 0.03;
const delay = 2250;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  player.once(() => {
const target = object('5jdQ68RZRCF');
const duration = 750;
const easing = 'ease-out';
const id = '6c66zHNonrR';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 3250;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  player.once(() => {
const target = object('5jdQ68RZRCF');
const duration = 750;
const easing = 'ease-out';
const id = '6pwTOdH3ylb';
const shrinkAmount = 0.3;
const delay = 3500;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  player.once(() => {
const target = object('642DcNMvFYI');
const duration = 5000;
const easing = 'ease-out';
const id = '65QNTVXU5XR';
const pulseAmount = 0.1;
const delay = 5250;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  const target = object('6XeDfOtNWYI');
const duration = 1000;
const easing = 'ease-out';
const id = '5l8yKxvmLuK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
