/**
 * Convert IPv4 to Decimal
 * @param {String} ip - a String represents an IPv4
 * @returns a decimal if the input is valid. Otherwise, it returns -1.
 */
function convertIPv4toDecimal(ip) {
  // Simply validate input as IPv4
  const ipv4RegEx = /^(\d{1,3}\.){3}(\d{1,3})$/;
  const valid = ipv4RegEx.test(ip);
  if (!valid) {
    return -1;
  }

  let ipDecimal = 0;
  const octets = ip.split('.');

  for (let i = 0; i < 4; i++) {
    const octet = Number(octets[i]);

    // make sure each value is between 0 and 255
    if (octet > 255 || octet < 0) {
      return -1;
    }

    ipDecimal = ipDecimal * 256 + octet;
  }

  return ipDecimal;
}

module.exports = convertIPv4toDecimal;