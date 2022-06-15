'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  cookiesPerHourArr: [],
  average: 6.3,
  grandTotal: 0,
  
  // total: totalCookies(this.customers, this.cookies),
  generateCustomersBetween: function () {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
      // console.log(this.generateCustomersBetween);
      this.cookiesPerHourArr.push(hourlyCookies);
      this.grandTotal += hourlyCookies;
    }
  }
};
seattle.calcCookiesPerHour();
let customers = seattle.generateCustomersBetween();
let averageCookies = customers * 6.3;
console.log(customers);
console.log(averageCookies);
console.log(seattle.cookiesPerHourArr);
console.log(seattle.grandTotal);


// creating an h2 and assigning to cityName
let cityName = document.createElement('h2');
//adding text to the name of Seattle object to page
cityName.textContent = seattle.name;
// targeting existing div id "cookies" and assigning to firsctCity variable
let allCitiesDiv = document.getElementById('allCities');
// adding h2 element into div
allCitiesDiv.appendChild(cityName);
// creating an empty unordered list
let seattleHoursElement = document.createElement('ul');
// filling empty ul with cookies per hour
for (let i = 0; i < seattle.cookiesPerHourArr.length; i++){
  let listItemEl = document.createElement('li');
  listItemEl.textContent = hours[i] +':  ' + seattle.cookiesPerHourArr[i];
  seattleHoursElement.appendChild(listItemEl);
}
let totalEl = document.createElement('li');
totalEl.textContent = ' total: ' + seattle.grandTotal;
seattleHoursElement.appendChild(totalEl);
allCitiesDiv.appendChild(seattleHoursElement);

// textElementHours.textContent = seattle.cookiesPerHourArr;

// let tokyoH2 = document.createElement('h2');
// //adding text to the name of Seattle object to page
// tokyoH2.textContent = 'tokyo text';
// allCitiesDiv.appendChild(tokyoH2);



let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  cookiesPerHourArr: [],
  average: 1.2,
  grandTotal: 0,
  
  generateCustomersBetween: function () {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
      // console.log(this.generateCustomersBetween);
      this.cookiesPerHourArr.push(hourlyCookies);
      this.grandTotal += hourlyCookies;
    }
  }
};
tokyo.calcCookiesPerHour();
let tokyoCustomers = tokyo.generateCustomersBetween();
let tokyoAverageCookies = tokyoCustomers * 6.3;
console.log(customers);
console.log(tokyo.cookiesPerHourArr);
console.log(tokyoAverageCookies);
console.log(tokyo.grandTotal);

let tokyoCityName = document.createElement('h2');
// //adding text to the name of Seattle object to page
tokyoCityName.textContent = tokyo.name;
// // targeting existing div id "cookies" and assigning to firsctCity variable
let tokyoDiv = document.getElementById('allCities');
// // adding h2 element into div
tokyoDiv.appendChild(tokyoCityName);
// // creating an empty unordered list
let tokyoHoursElement = document.createElement('ul');
// filling empty ul with cookies per hour
for (let i = 0; i < tokyo.cookiesPerHourArr.length; i++){
  let listItemEl = document.createElement('li');
  listItemEl.textContent = hours[i] +':  ' + tokyo.cookiesPerHourArr[i];
  tokyoHoursElement.appendChild(listItemEl);
}
let tokyoTotalEl = document.createElement('li');
tokyoTotalEl.textContent = ' total: ' + tokyo.grandTotal;
tokyoHoursElement.appendChild(tokyoTotalEl);
tokyoDiv.appendChild(tokyoHoursElement);

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  cookiesPerHourArr: [],
  average: 3.7,
  grandTotal: 0,
  generateCustomersBetween: function () {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
      // console.log(this.generateCustomersBetween);
      this.cookiesPerHourArr.push(hourlyCookies);
      this.grandTotal += hourlyCookies;
    }
  }
};
dubai.calcCookiesPerHour();
let dubaiCustomers = dubai.generateCustomersBetween();
let dubaiAverageCookies = dubaiCustomers * 6.3;
console.log(customers);
console.log(dubai.cookiesPerHourArr);
console.log(dubaiAverageCookies);
console.log(dubai.grandTotal);

let dubaiCityName = document.createElement('h2');
// //adding text to the name of Seattle object to page
dubaiCityName.textContent = dubai.name;
// // targeting existing div id "cookies" and assigning to firsctCity variable
let dubaiDiv = document.getElementById('allCities');
// // adding h2 element into div
dubaiDiv.appendChild(dubaiCityName);
// // creating an empty unordered list
let dubaiHoursElement = document.createElement('ul');
// filling empty ul with cookies per hour
for (let i = 0; i < dubai.cookiesPerHourArr.length; i++){
  let listItemEl = document.createElement('li');
  listItemEl.textContent = hours[i] +':  ' + dubai.cookiesPerHourArr[i];
  dubaiHoursElement.appendChild(listItemEl);
}
let dubaiTotalEl = document.createElement('li');
dubaiTotalEl.textContent = ' total: ' + dubai.grandTotal;
dubaiHoursElement.appendChild(dubaiTotalEl);
dubaiDiv.appendChild(dubaiHoursElement);

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  cookiesPerHourArr: [],
  average: 2.3,
  grandTotal: 0,
  generateCustomersBetween: function () {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
      // console.log(this.generateCustomersBetween);
      this.cookiesPerHourArr.push(hourlyCookies);
      this.grandTotal += hourlyCookies;
    }
  }
};
paris.calcCookiesPerHour();
let parisCustomers = paris.generateCustomersBetween();
let parisAverageCookies = parisCustomers * 6.3;
console.log(customers);
console.log(paris.cookiesPerHourArr);
console.log(parisAverageCookies);
console.log(paris.grandTotal);

let parisCityName = document.createElement('h2');
// //adding text to the name of Seattle object to page
parisCityName.textContent = paris.name;
// // targeting existing div id "cookies" and assigning to firsctCity variable
let parisDiv = document.getElementById('allCities');
// // adding h2 element into div
parisDiv.appendChild(parisCityName);
// // creating an empty unordered list
let parisHoursElement = document.createElement('ul');
// filling empty ul with cookies per hour
for (let i = 0; i < paris.cookiesPerHourArr.length; i++){
  let listItemEl = document.createElement('li');
  listItemEl.textContent = hours[i] +':  ' + paris.cookiesPerHourArr[i];
  parisHoursElement.appendChild(listItemEl);
}
let parisTotalEl = document.createElement('li');
parisTotalEl.textContent = ' total: ' + paris.grandTotal;
parisHoursElement.appendChild(parisTotalEl);
parisDiv.appendChild(parisHoursElement);

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  cookiesPerHourArr: [],
  average: 4.6,
  grandTotal: 0,
  generateCustomersBetween: function () {
    return Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateCustomersBetween() * this.average);
      // console.log(this.generateCustomersBetween);
      this.cookiesPerHourArr.push(hourlyCookies);
      this.grandTotal += hourlyCookies;
    }
  }
};
lima.calcCookiesPerHour();
let limaCustomers = lima.generateCustomersBetween();
let limaAverageCookies = limaCustomers * 6.3;
console.log(customers);
console.log(lima.cookiesPerHourArr);
console.log(limaAverageCookies);
console.log(lima.grandTotal);

let limaCityName = document.createElement('h2');
// //adding text to the name of Seattle object to page
limaCityName.textContent = lima.name;
// // targeting existing div id "cookies" and assigning to firsctCity variable
let limaDiv = document.getElementById('allCities');
// // adding h2 element into div
limaDiv.appendChild(limaCityName);
// // creating an empty unordered list
let limaHoursElement = document.createElement('ul');
// filling empty ul with cookies per hour
for (let i = 0; i < lima.cookiesPerHourArr.length; i++){
  let listItemEl = document.createElement('li');
  listItemEl.textContent = hours[i] +':  ' + lima.cookiesPerHourArr[i];
  limaHoursElement.appendChild(listItemEl);
}
let limaTotalEl = document.createElement('li');
limaTotalEl.textContent = ' total: ' + lima.grandTotal;
limaHoursElement.appendChild(limaTotalEl);
limaDiv.appendChild(limaHoursElement);
