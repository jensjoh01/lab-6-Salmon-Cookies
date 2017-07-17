'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
};

var customers = [];
var randomNumber = function(){
  for(var i = 0; i < hours.length; i++){
    customers.push( Math.floor(Math.random() * (pike.maxCust - pike.minCust)) + pike.minCust);
  }
};
randomNumber();
console.log(customers);
