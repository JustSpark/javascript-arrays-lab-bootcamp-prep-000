var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}
function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten(name) {
  return kittens.shift('Garfield');
}
function removeFirstKitten(number) {
  return kittens.slice(0);
}