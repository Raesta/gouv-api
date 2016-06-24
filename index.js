var NationalAddressAPI = require('gouv-national-address-api');
var version = '1.0.0';

function Gouv() {
  this.version = version;
  this.nationalAddress = new NationalAddressAPI();
}

module.exports = Gouv;
