gouv-api
======

[![NPM](https://nodei.co/npm/gouv-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gouv-api/)

[![npm version](https://badge.fury.io/js/gouv-api.svg)](https://badge.fury.io/js/gouv-api)

A Node module to connect all wrapper for the [api.gouv.fr](https://api.gouv.fr/).
---

### Installation
```javascript
$ npm install gouv-api
```
or
```javascript
$ npm install git://github.com/Raesta/gouv-api.git
```

### Example
```javascript
var GouvAPI = require('gouv-api');

var Gouv = new GouvAPI();

console.log(Gouv.version);

// gouv-geo-api
Gouv.geo.getTowns({codePostal: 94000}, function(error, result) {
  console.log(error, result);
});

// gouv-medic-api
Gouv.medic.getByName('doliprane', function(error, results) {
  console.log(error, results);
});

// gouv-national-address-api
Gouv.nationalAddress.search({text: '1 avenue république'}, function(error, result) {
  console.log(error, result);
});

// gouv-openfisca-api
Gouv.openfisca.entities(null, function(error, result) {
  console.log(error, result);
});
```

### Supported API (Currently)
- [gouv-geo-api](https://github.com/Raesta/gouv-geo-api)
- [gouv-medic-api](https://github.com/Raesta/gouv-medic-api)
- [gouv-national-address-api](https://github.com/Raesta/gouv-national-address-api)
- [gouv-openfisca-api](https://github.com/Raesta/gouv-openfisca-api)
