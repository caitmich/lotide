const assert = require('chai').assert
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
const words = require('../map');
const func = require('../map');


describe("#map", () => {

  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], func), [ 'g', 'c', 't', 'm', 't' ]);
  });
});


assertArraysEqual((
  //first argument for assertarraysequal:
  map(words, func), [ 'g', 'c', 't', 'm', 't' ]),
  //second argument:
  [ 'g', 'c', 't', 'm', 't' ]);