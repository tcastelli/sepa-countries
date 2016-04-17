Usage

````javascript
var sepa = require("sepa-countries");

sepa.getSEPACountryCodes();
//Returns an array with all the countries supporting SEPA direct debits ["ES","DE","PT",....]


sepa.getVAT("ES");
//Returns the current standard VAT rate for the SEPA countries
````

Last update 17/04/2016


