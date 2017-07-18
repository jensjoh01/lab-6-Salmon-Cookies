'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*
Location 1: 1st and Pike
*/

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customers: [],
  hourlySales: [],
  cookieTotal: 0,

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    pike.randomNumber();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.ceil(this.customers[i] * this.avgSale);
<<<<<<< HEAD
<<<<<<< HEAD
      this.cookieTotal += this.hourlySales[i];
=======
>>>>>>> a59a58cb63c7a962e6c719cde2b1cf7f1f3250e6
=======
      this.cookieTotal += this.hourlySales[i];

>>>>>>> af9fb7115adbced07dc26445124b32388772b2c3
    }
  },

  render: function(){
    pike.sales();
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      pikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookieTotal + ' cookies';
    pikeUL.appendChild(liEl);
  },
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
pike.sales();
>>>>>>> a59a58cb63c7a962e6c719cde2b1cf7f1f3250e6
=======

pike.sales();

>>>>>>> af9fb7115adbced07dc26445124b32388772b2c3
pike.render();

// Location #2 SeaTac Airport

var airport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var airportUL = document.getElementById('airport');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      airportUL.appendChild(liEl);
    }
  },

  total: function(){
    var airportUL = document.getElementById('airport');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    airportUL.appendChild(liEl);
    return cookieTotal;
  }
};

airport.randomNumber();
airport.sales();
airport.render();
airport.total();

// Location #3 Seattle Center

var center = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var centerUL = document.getElementById('center');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      centerUL.appendChild(liEl);
    }
  },

  total: function(){
    var centerUL = document.getElementById('center');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    centerUL.appendChild(liEl);
    return cookieTotal;
  }
};

center.randomNumber();
center.sales();
center.render();
center.total();

// Location #4 Capitol Hill

var hill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var hillUL = document.getElementById('hill');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      hillUL.appendChild(liEl);
    }
  },

  total: function(){
    var hillUL = document.getElementById('hill');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    hillUL.appendChild(liEl);
    return cookieTotal;
  }
};

hill.randomNumber();
hill.sales();
hill.render();
hill.total();

// Location #5 Alki

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = (Math.floor(this.customers[i] * this.avgSale));
    }
  },

  render: function(){
    var alkiUL = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      alkiUL.appendChild(liEl);
    }
  },

  total: function(){
    var alkiUL = document.getElementById('alki');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    alkiUL.appendChild(liEl);
    return cookieTotal;
  }
};

alki.randomNumber();
alki.sales();
alki.render();
alki.total();
