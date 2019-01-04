const assert = require('assert');
const convertIPv4ToDecimal = require('../src/convertIPv4ToDecimal');

describe('convertIPv4ToDecimal', function() {
  it('should return -1 when the input is not valid', function() {
    assert.strictEqual(convertIPv4ToDecimal("19202235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("abcdefgh"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0.2"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0.2.235.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal(".192.0.2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0.2.235."), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0,2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0..2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192-0-2-235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("-192.0.2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("192.0.-2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal("300.0.2.235"), -1);
    assert.strictEqual(convertIPv4ToDecimal(300.235), -1);
    assert.strictEqual(convertIPv4ToDecimal(0), -1);
    assert.strictEqual(convertIPv4ToDecimal(null), -1);
    assert.strictEqual(convertIPv4ToDecimal(undefined), -1);
    assert.strictEqual(convertIPv4ToDecimal(NaN), -1);
    assert.strictEqual(convertIPv4ToDecimal([192, 0, 2, 235]), -1);
    assert.strictEqual(convertIPv4ToDecimal({x: 192, y: 0, z: 2, t: 235}), -1);
    assert.strictEqual(convertIPv4ToDecimal(function() {}), -1);
  });

  it('should return a Decimal when the input is a valid IP', function() {
    assert.strictEqual(convertIPv4ToDecimal("192.0.2.235"), 3221226219);
    assert.strictEqual(convertIPv4ToDecimal("192.0.2.255"), 3221226239);
    assert.strictEqual(convertIPv4ToDecimal("255.0.2.235"), 4278190827);
    assert.strictEqual(convertIPv4ToDecimal("192.255.2.235"), 3237937899);
    assert.strictEqual(convertIPv4ToDecimal("0.0.0.0"), 0);
    assert.strictEqual(convertIPv4ToDecimal("127.0.0.1"), 2130706433);
    assert.strictEqual(convertIPv4ToDecimal("192.168.1.1"), 3232235777);
    assert.strictEqual(convertIPv4ToDecimal("255.255.255.255"), 4294967295);
  });
});