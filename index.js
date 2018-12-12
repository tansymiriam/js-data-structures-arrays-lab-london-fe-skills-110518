// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{ drivers.push('Ralph');
}
function destructivelyPrependDriver(name)
{ drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(name)
{drivers.pop()}

function destructivelyRemoveFirstDriver(name)
{drivers.shift()}

function appendDriver(name) {
const appendDriver = [...drivers, "Broom"];
return appendDriver
}

function prependDriver(name) {
const prependDriver = ["Arnold",...drivers];
return prependDriver
}
function removeLastDriver(name) {
<<<<<<< HEAD
  const lastDriver = drivers.slice(0, drivers.length - 1)
  return lastDriver
}
function removeFirstDriver(name) {
  const firstDriver = drivers.slice(1)
  return firstDriver
}
=======
  const lastDriver = drivers.slice()
  return lastDriver
}
>>>>>>> d2b19613b2b851ccb202e7e08e2522ecc47d66ee
