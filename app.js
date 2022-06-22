'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

let getTableElement = document.getElementById('cookieData');

let newForm = document.getElementById('addCity');

newForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = event.target.cityName.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgCookies = parseInt(event.target.avgCookies.value);

  let generatedStore = new CookieShop(name, minCust, maxCust, avgCookies);
  // generatedStore.calcCookiesPerHour();
  generatedStore.renderData();
});







// constructor function passing parameters for name, min, max, and avg cookies sold.  inside we have objects initialized in instances of class "this." - how we access constructor function keyword that refers to object " remember book analogy"

function CookieShop(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesPerHour = [];
  this.cookieTotal = 0;
  this.calcCookiesPerHour();
  CookieShop.all.push(this);
}
CookieShop.all = [];

// prototypes inherits features from constructor... gives sets of instruction to be used in constructor

CookieShop.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.ceil(this.randomNumberGenerator() * this.average);
    this.cookiesPerHour.push(hourlyCookies);
    this.cookieTotal += hourlyCookies;

  }

};

CookieShop.prototype.renderData = function () {
  let tableEl = document.getElementById('cookieData');
  let rowEl = document.createElement('tr');

  // add the store name to the row
  let nameCell = document.createElement('td');
  //will gave a id to a td
  // nameCell.id = 'new';
  nameCell.textContent = this.name;
  rowEl.appendChild(nameCell);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let cellEl = document.createElement('td');
    cellEl.textContent = this.cookiesPerHour[i];
    rowEl.appendChild(cellEl);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = this.cookieTotal;
  rowEl.appendChild(totalCell);

  tableEl.appendChild(rowEl);

  // console.log(hourlyCookies);
};

CookieShop.prototype.randomNumberGenerator = function () {
  return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
};
CookieShop.prototype.renderStoreRow = function () {
  let storeRow = document.createElement('tr');
  getTableElement.appendChild(storeRow);
  let storeName = document.createElement('td');
  //1.where 2.what 3.which thing
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);

  for (let i = 0; i < hours.length; i++) {
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesPerHour[i];
    storeRow.appendChild(tableDataElement);
  }
  let totalsRow = document.createElement('td');
  totalsRow.textContent = this.cookieTotal;
  storeRow.appendChild(totalsRow);
};

let seattle = new CookieShop('Seattle', 23, 65, 6.3);
let tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
let dubai = new CookieShop('Dubai', 11, 38, 3.7);
let paris = new CookieShop('Paris', 20, 38, 2.3);
let lima = new CookieShop('Lima', 2, 16, 4.6);


// render table

function renderHeaderRow() {
  let tableHeaderRow = document.createElement('tr');
  let grandTotal = document.createElement('tr');
  tableHeaderRow.appendChild(grandTotal);
  for (let i = 0; i < hours.length; i++) {
    let tableHeader = document.createElement('td');
    tableHeader.textContent = hours[i];
    tableHeaderRow.appendChild(tableHeader);
  }

  getTableElement.appendChild(tableHeaderRow);
  let newgrandTotal = document.createElement('td');
  newgrandTotal.textContent = 'Grand Total';
  tableHeaderRow.appendChild(newgrandTotal);


}
function renderFooterRow() {
  let tableFooterRow = document.createElement('tr');
  let hourlyTotal = document.createElement('td');
  tableFooterRow.appendChild(hourlyTotal);
  // for each hour 
  //for each location
  //add allnumbers
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < CookieShop.all.length; j++) {
      sum += CookieShop.all[j].cookiesPerHour[i];
    }
    let tableFooter = document.createElement('td');
    tableFooter.textContent = sum;
    tableFooterRow.appendChild(tableFooter);
    let totalData= document.createElement('td');
    totalData.appendChild(tableFooterRow);
    

  }
  getTableElement.appendChild(tableFooterRow);
}


renderHeaderRow();
seattle.renderStoreRow();
tokyo.renderStoreRow();
dubai.renderStoreRow();
paris.renderStoreRow();
lima.renderStoreRow();

renderFooterRow();


// // creating an h2 and assigning to cityName
// let cityName = document.createElement('h2');
// //adding text to the name of Seattle object to page
// cityName.textContent = seattle.name;
// // targeting existing div id "cookies" and assigning to firsctCity variable
// let allCitiesDiv = document.getElementById('allCities');
// // adding h2 element into div
// allCitiesDiv.appendChild(cityName);
// // creating an empty unordered list
// let seattleHoursElement = document.createElement('ul');
// // filling empty ul with cookies per hour
// for (let i = 0; i < seattle.cookiesPerHourArr.length; i++){
//   let listItemEl = document.createElement('li');
//   listItemEl.textContent = hours[i] +':  ' + seattle.cookiesPerHourArr[i];
//   seattleHoursElement.appendChild(listItemEl);
// }
// let totalEl = document.createElement('li');
// totalEl.textContent = ' total: ' + seattle.grandTotal;
// seattleHoursElement.appendChild(totalEl);
// allCitiesDiv.appendChild(seattleHoursElement);

// // textElementHours.textContent = seattle.cookiesPerHourArr;

// // let tokyoH2 = document.createElement('h2');
// // //adding text to the name of Seattle object to page
// // tokyoH2.textContent = 'tokyo text';
// // allCitiesDiv.appendChild(tokyoH2);



// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   cookiesPerHourArr: [],
//   average: 1.2,
//   grandTotal: 0,

//   generateCustomersBetween: function () {
//     return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
//       // console.log(this.generateCustomersBetween);
//       this.cookiesPerHourArr.push(hourlyCookies);
//       this.grandTotal += hourlyCookies;
//     }
//   }
// };
// tokyo.calcCookiesPerHour();
// let tokyoCustomers = tokyo.generateCustomersBetween();
// let tokyoAverageCookies = tokyoCustomers * 6.3;
// console.log(customers);
// console.log(tokyo.cookiesPerHourArr);
// console.log(tokyoAverageCookies);
// console.log(tokyo.grandTotal);

// let tokyoCityName = document.createElement('h2');
// // //adding text to the name of Seattle object to page
// tokyoCityName.textContent = tokyo.name;
// // // targeting existing div id "cookies" and assigning to firsctCity variable
// let tokyoDiv = document.getElementById('allCities');
// // // adding h2 element into div
// tokyoDiv.appendChild(tokyoCityName);
// // // creating an empty unordered list
// let tokyoHoursElement = document.createElement('ul');
// // filling empty ul with cookies per hour
// for (let i = 0; i < tokyo.cookiesPerHourArr.length; i++){
//   let listItemEl = document.createElement('li');
//   listItemEl.textContent = hours[i] +':  ' + tokyo.cookiesPerHourArr[i];
//   tokyoHoursElement.appendChild(listItemEl);
// }
// let tokyoTotalEl = document.createElement('li');
// tokyoTotalEl.textContent = ' total: ' + tokyo.grandTotal;
// tokyoHoursElement.appendChild(tokyoTotalEl);
// tokyoDiv.appendChild(tokyoHoursElement);

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   cookiesPerHourArr: [],
//   average: 3.7,
//   grandTotal: 0,
//   generateCustomersBetween: function () {
//     return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
//       // console.log(this.generateCustomersBetween);
//       this.cookiesPerHourArr.push(hourlyCookies);
//       this.grandTotal += hourlyCookies;
//     }
//   }
// };
// dubai.calcCookiesPerHour();
// let dubaiCustomers = dubai.generateCustomersBetween();
// let dubaiAverageCookies = dubaiCustomers * 6.3;
// console.log(customers);
// console.log(dubai.cookiesPerHourArr);
// console.log(dubaiAverageCookies);
// console.log(dubai.grandTotal);

// let dubaiCityName = document.createElement('h2');
// // //adding text to the name of Seattle object to page
// dubaiCityName.textContent = dubai.name;
// // // targeting existing div id "cookies" and assigning to firsctCity variable
// let dubaiDiv = document.getElementById('allCities');
// // // adding h2 element into div
// dubaiDiv.appendChild(dubaiCityName);
// // // creating an empty unordered list
// let dubaiHoursElement = document.createElement('ul');
// // filling empty ul with cookies per hour
// for (let i = 0; i < dubai.cookiesPerHourArr.length; i++){
//   let listItemEl = document.createElement('li');
//   listItemEl.textContent = hours[i] +':  ' + dubai.cookiesPerHourArr[i];
//   dubaiHoursElement.appendChild(listItemEl);
// }
// let dubaiTotalEl = document.createElement('li');
// dubaiTotalEl.textContent = ' total: ' + dubai.grandTotal;
// dubaiHoursElement.appendChild(dubaiTotalEl);
// dubaiDiv.appendChild(dubaiHoursElement);

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   cookiesPerHourArr: [],
//   average: 2.3,
//   grandTotal: 0,
//   generateCustomersBetween: function () {
//     return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
//       // console.log(this.generateCustomersBetween);
//       this.cookiesPerHourArr.push(hourlyCookies);
//       this.grandTotal += hourlyCookies;
//     }
//   }
// };
// paris.calcCookiesPerHour();
// let parisCustomers = paris.generateCustomersBetween();
// let parisAverageCookies = parisCustomers * 6.3;
// console.log(customers);
// console.log(paris.cookiesPerHourArr);
// console.log(parisAverageCookies);
// console.log(paris.grandTotal);

// let parisCityName = document.createElement('h2');
// // //adding text to the name of Seattle object to page
// parisCityName.textContent = paris.name;
// // // targeting existing div id "cookies" and assigning to firsctCity variable
// let parisDiv = document.getElementById('allCities');
// // // adding h2 element into div
// parisDiv.appendChild(parisCityName);
// // // creating an empty unordered list
// let parisHoursElement = document.createElement('ul');
// // filling empty ul with cookies per hour
// for (let i = 0; i < paris.cookiesPerHourArr.length; i++){
//   let listItemEl = document.createElement('li');
//   listItemEl.textContent = hours[i] +':  ' + paris.cookiesPerHourArr[i];
//   parisHoursElement.appendChild(listItemEl);
// }
// let parisTotalEl = document.createElement('li');
// parisTotalEl.textContent = ' total: ' + paris.grandTotal;
// parisHoursElement.appendChild(parisTotalEl);
// parisDiv.appendChild(parisHoursElement);

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   cookiesPerHourArr: [],
//   average: 4.6,
//   grandTotal: 0,
//   generateCustomersBetween: function () {
//     return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
//       // console.log(this.generateCustomersBetween);
//       this.cookiesPerHourArr.push(hourlyCookies);
//       this.grandTotal += hourlyCookies;
//     }
//   }
// };
// lima.calcCookiesPerHour();
// let limaCustomers = lima.generateCustomersBetween();
// let limaAverageCookies = limaCustomers * 6.3;
// console.log(customers);
// console.log(lima.cookiesPerHourArr);
// console.log(limaAverageCookies);
// console.log(lima.grandTotal);

// let limaCityName = document.createElement('h2');
// // //adding text to the name of Seattle object to page
// limaCityName.textContent = lima.name;
// // // targeting existing div id "cookies" and assigning to firsctCity variable
// let limaDiv = document.getElementById('allCities');
// // // adding h2 element into div
// limaDiv.appendChild(limaCityName);
// // // creating an empty unordered list
// let limaHoursElement = document.createElement('ul');
// // filling empty ul with cookies per hour
// for (let i = 0; i < lima.cookiesPerHourArr.length; i++){
//   let listItemEl = document.createElement('li');
//   listItemEl.textContent = hours[i] +':  ' + lima.cookiesPerHourArr[i];
//   limaHoursElement.appendChild(listItemEl);
// }
// let limaTotalEl = document.createElement('li');
// limaTotalEl.textContent = ' total: ' + lima.grandTotal;
// limaHoursElement.appendChild(limaTotalEl);
// limaDiv.appendChild(limaHoursElement);