'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var salesData = [];
var salesTable = document.getElementById('salesData');

// object constructor for building each cookie store's sales data
function CookieStore(name, minCust, maxCust, avgSale){
  this.customersEachHour = [];
  this.cookieSalesEachHour = [];
  this.cookieSalesTotal = 0;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;

  // createRandomNumberOfCustomers method creates a random number between customer mins and max (inclusive) at each store and pushes it into an array
  this.createRandomNumberOfCustomers = function(){
    for(var i = 0; i < hours.length; i++){
      this.customersEachHour.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  // populatethis.cookieSalesEachHour method calculates cookie sales by multiplying the customers for each hour times the stores average cookie sales
  this.populateCookieSalesEachHour = function(){
    this.createRandomNumberOfCustomers();
    for(var i = 0; i < hours.length; i++){
      this.cookieSalesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgSale));
      this.cookieSalesTotal += this.cookieSalesEachHour[i];
    }
  };

  // render method: creates the elements and populates them. Also calls the method that calculates the cookie hours
  this.render = function() {
    this.populateCookieSalesEachHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookieSalesEachHour[i];
      trEl.appendChild(tdEl);
      salesTable.appendChild(trEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSalesTotal;
    trEl.appendChild(tdEl);
  };
  this.render();
  salesData.push(this);
}
// end of the constructor

// make the header with store hours and daily store totals
var header = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Names';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals:';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
};
// calls the header first so it appears on the top row
header();

// creating each new store object
// var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
// var airport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
// var center = new CookieStore('Seattle Center', 11, 38, 3.7);
// var hill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// var alki = new CookieStore('Alki', 2, 16, 4.6);

var storeObjectName = ['pike', 'airport', 'center', 'hill', 'alki'];
var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomers = [23, 3, 11, 20, 2];
var maxCustomers = [65, 24, 38, 38, 16];
var avgSalePerCustomer = [6.3, 1.2, 3.7, 2.3, 4.6];

for (var i = 0; i < storeObjectName.length; i++){
  storeObjectName[i] = new CookieStore(storeNames[i], minCustomers[i], maxCustomers[i], avgSalePerCustomer[i]);
}

var hourlyTotal = function() {
//make new row

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  for(var x = 0; x < hours.length; x++){
    var sumUpHourlySales = 0;
    //make data cell
    tdEl = document.createElement('td');
    for(var j = 0; j < storeObjectName.length; j++){
      //add this data to cell. then it will loop to the next hour, make new data cell and continue.
      sumUpHourlySales += storeObjectName[j].cookieSalesEachHour[x];
      tdEl.textContent = sumUpHourlySales;
    }
    trEl.appendChild(tdEl);
  }
  salesTable.appendChild(trEl);
};

hourlyTotal();
