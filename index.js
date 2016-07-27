var NationalAddressAPI = require('gouv-national-address-api');
var GeoAPI = require('gouv-geo-api');
var OpenfiscaAPI = require('gouv-openfisca-api');
var version = '1.2.0';

function Gouv() {
  this.version = version;
  this.nationalAddress = new NationalAddressAPI();
  this.Geo = new GeoAPI();
  this.Openfisca = new OpenfiscaAPI();
}

module.exports = Gouv;
