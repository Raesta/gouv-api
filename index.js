var GeoAPI = require('gouv-geo-api');
var MedicAPI = require('gouv-medic-api');
var NationalAddressAPI = require('gouv-national-address-api');
var OpenfiscaAPI = require('gouv-openfisca-api');
var version = '1.2.2';

function Gouv() {
  this.version = version;
  this.geo = new GeoAPI();
  this.medic = new MedicAPI();
  this.nationalAddress = new NationalAddressAPI();
  this.openfisca = new OpenfiscaAPI();
}

module.exports = Gouv;
