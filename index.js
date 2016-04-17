'use strict';
var vatrates = require("vatrates");
var backUpCountries = {
    "AD": 0,
    "AT": 20,
    "BE": 21,
    "BG": 20,
    "HR": 25,
    "CY": 19,
    "CZ": 21,
    "DK": 25,
    "EE": 20,
    "FI": 24,
    "FR": 20,
    "DE": 19,
    "GR": 23,
    "HU": 27,
    "IS": 0,
    "IE": 23,
    "IT": 22,
    "LV": 21,
    "LI": 0,
    "LT": 21,
    "LU": 17,
    "MT": 18,
    "MC": 0,
    "NL": 21,
    "NO": 0,
    "PL": 23,
    "PT": 23,
    "RO": 24,
    "SM": 0,
    "SK": 20,
    "SI": 22,
    "ES": 21,
    "SE": 25,
    "CH": 0,
    "GB": 20
};

module.exports.getSEPACountryCodes = function(){
    return Object.keys(backUpCountries);
};

module.exports.getVAT = function(country){
    var updatedTax = vatrates[country]?vatrates[country].rates.standard : backUpCountries[country]
    if (!updatedTax) updatedTax = 0;
    return updatedTax;
};
