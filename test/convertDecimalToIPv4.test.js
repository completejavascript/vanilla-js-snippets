const assert = require('assert');
const convertDecimalToIPv4 = require('../src/convertDecimalToIPv4');

describe('convertDecimalToIPv4', function() {
  it('should return empty string ("") when the input is not valid', function() {
    assert.strictEqual(convertDecimalToIPv4(-1000), "");
    assert.strictEqual(convertDecimalToIPv4(4294967296), "");
    assert.strictEqual(convertDecimalToIPv4("123456"), "");
    assert.strictEqual(convertDecimalToIPv4(null), "");
    assert.strictEqual(convertDecimalToIPv4(NaN), "");
    assert.strictEqual(convertDecimalToIPv4(undefined), "");
    assert.strictEqual(convertDecimalToIPv4(function() {}), "");
    assert.strictEqual(convertDecimalToIPv4([123456]), "");
    assert.strictEqual(convertDecimalToIPv4({ x: 123456}), "");
    assert.strictEqual(convertDecimalToIPv4(12345.78), "");
  });

  it('should return IPv4 when the input is a valid Decimal', function() {
    assert.strictEqual(convertDecimalToIPv4(3221226219), "192.0.2.235");
    assert.strictEqual(convertDecimalToIPv4(3221226239), "192.0.2.255");
    assert.strictEqual(convertDecimalToIPv4(4278190827), "255.0.2.235");
    assert.strictEqual(convertDecimalToIPv4(3237937899), "192.255.2.235");
    assert.strictEqual(convertDecimalToIPv4(0), "0.0.0.0");
    assert.strictEqual(convertDecimalToIPv4(2130706433), "127.0.0.1");
    assert.strictEqual(convertDecimalToIPv4(3232235777), "192.168.1.1");
    assert.strictEqual(convertDecimalToIPv4(4294967295), "255.255.255.255");
  })
});