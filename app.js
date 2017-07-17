'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }
  },

  sales: function(){
    for(var i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i];
      pikeUL.appendChild(liEl);
    }
  },

  total: function(){
    var pikeUL = document.getElementById('pike');
    var cookieTotal = 0;
    for(var i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal;
    pikeUL.appendChild(liEl);
    return cookieTotal;
  }
};

pike.randomNumber();
pike.sales();
pike.render();
pike.total();

var airport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
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

      liEl.textContent = hours[i] + ': ' + this.hourlySales[i];
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
    liEl.textContent = 'Total: ' + cookieTotal;
    airportUL.appendChild(liEl);
    return cookieTotal;
  }
};

airport.randomNumber();
airport.sales();
airport.render();
airport.total();
