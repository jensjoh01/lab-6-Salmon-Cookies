'use strict';

var addStoreForm = document.getElementById('add-store-form');
var salesTable = document.getElementById('salesTable');
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//+++++++++++++++++++++++++++++++++ Starting Store Information ++++++++++++++++++++++++++++++++++++++++++++++++

var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomers = [23, 3, 11, 20, 2];
var maxCustomers = [65, 24, 38, 38, 16];
var avgSalePerCustomer = [6.3, 1.2, 3.7, 2.3, 4.6];
var objectStoreNames = ['pike', 'airport', 'center', 'hill', 'alki'];

//++++++++++++++++++++++++++++++++++ Object Constructor ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function CookieStore(name, minCust, maxCust, avgSale){
  this.customersEachHour = [];
  this.cookieSalesEachHour = [];
  this.cookieSalesTotal = 0;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.render();
}

// Create random number of customers and push to customersEachHour array
CookieStore.prototype.createRandomNumberOfCustomers = function(){
  for(var i = 0; i < hours.length; i++){
    this.customersEachHour.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// calculate cookie sales each hour and push to cookieSalesEachHour array
CookieStore.prototype.populateCookieSalesEachHour = function(){
  this.createRandomNumberOfCustomers();
  for(var i = 0; i < hours.length; i++){
    this.cookieSalesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgSale));
    this.cookieSalesTotal += this.cookieSalesEachHour[i];
  }
};

// render method: creates the elements and populates them. Also calls the method that calculates the cookie hours
CookieStore.prototype.render = function (){
  this.populateCookieSalesEachHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  tdEl.className = 'loc';
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSalesEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookieSalesTotal;
  trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
};

CookieStore.all = [];//????????
//++++++++++++++++++++++++++++++++ Function Declarations +++++++++++++++++++++++++++++++++++++++++++++++

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

// createStores function takes the data from the arrays and builds a new store object constructor
var createStores = function(){
  salesTable.innerHTML = '';
  header(); // calls the header first so it appears on the top row
  for (var i = 0; i < storeNames.length; i++){
    objectStoreNames[i] = new CookieStore(storeNames[i], minCustomers[i], maxCustomers[i], avgSalePerCustomer[i]);
  }
  hourlyTotal();
};

// hourlyTotal function totals the hourly sales for all of the stores over each hour
var hourlyTotal = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  tdEl.className = 'footer';
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    var sumUpHourlySales = 0;
    tdEl = document.createElement('td');
    for(var j = 0; j < objectStoreNames.length; j++){
      sumUpHourlySales += objectStoreNames[j].cookieSalesEachHour[i];
      tdEl.textContent = sumUpHourlySales;
      tdEl.className = 'footer';
    }
    trEl.appendChild(tdEl);
  }
  salesTable.appendChild(trEl);
};

//++++++++++++++++++++++++++++++++++ Handler Function +++++++++++++++++++++++++++++++++++++++

function handleSubmit(event) {
  var nameSubmission = event.target.storeName.value;
  var minCustSubmission = parseInt(event.target.minCust.value);
  var maxCustSubmission = parseInt(event.target.maxCust.value);
  var avgSalesSubmission = parseInt(event.target.avgSales.value);

  if(!event.target.storeName.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgSales.value){
    return alert('Fields cannot be empty!');
  }

  event.preventDefault();

  var submitStore = function(){
    for (var i = 0; i < objectStoreNames.length; i++){
      if (nameSubmission === storeNames[i]){
        minCustomers[i] = minCustSubmission;
        maxCustomers[i] = maxCustSubmission;
        avgSalePerCustomer[i] = avgSalesSubmission;
        return;
      }
    }
    objectStoreNames.push(nameSubmission);
    storeNames.push(nameSubmission);
    minCustomers.push(minCustSubmission);
    maxCustomers.push(maxCustSubmission);
    avgSalePerCustomer.push(avgSalesSubmission);
  };

  submitStore();

  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgSales.value = null;

  createStores();
}
//+++++++++++++++++++++++++++++++++ Event Listeners ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

createStores();
addStoreForm.addEventListener('submit', handleSubmit);
