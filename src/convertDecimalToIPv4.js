/**
 * Convert Decimal to IPv4
 * @param {Number} decimal - a Number represents a Decimal
 * @returns an IPv4 as String if the input is valid. 
 * Otherwise, it returns an empty string ("").
 */
function convertDecimalToIPv4(decimal) {
  if (typeof decimal !== "number" || 
      Number.isInteger(decimal) === false ||
      decimal < 0 || 
      decimal > 4294967295
  ) {
    return "";
  }

  const p1 = decimal >>> 24;
  const p2 = (decimal & 0x00ff0000) >>> 16;
  const p3 = (decimal & 0x0000ff00) >>> 8;
  const p4 = (decimal & 0x000000ff);

  if (p1 > 255 || p2 > 255 || p3 > 255 || p4 > 255) {
     return "";
  }

  return `${p1}.${p2}.${p3}.${p4}`;
}

module.exports = convertDecimalToIPv4;