var NationalAddressAPI = require('gouv-national-address-api');
var GeoAPI = require('gouv-geo-api');
var OpenfiscaAPI = require('gouv-openfisca-api');
var version = '1.2.1';

function Gouv() {
  this.version = version;
  this.nationalAddress = new NationalAddressAPI();
  this.geo = new GeoAPI();
  this.openfisca = new OpenfiscaAPI();
}

module.exports = Gouv;
