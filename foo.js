console.log('it also works!');

function* foo () {
  yield 'foo';
  yield 'bar';
}

module.exports = { foo };
