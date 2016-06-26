var NationalAddressAPI = require('gouv-national-address-api');
var GeoAPI = require('gouv-geo-api');
var version = '1.1.0';

function Gouv() {
  this.version = version;
  this.nationalAddress = new NationalAddressAPI();
  this.Geo = new GeoAPI();
}

module.exports = Gouv;
