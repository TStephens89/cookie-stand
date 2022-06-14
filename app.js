'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
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
let textElement = document.getElementById('Total');
let textElementHours = document.getElementById('Hours');
textElementHours.textContent = seattle.cookiesPerHourArr;
textElement.textContent = seattle.grandTotal;


// let tokyo = {
//   min: 3,
//   max: 24,
//   cookiesPerHourArr: [],
//   average: 1.2,
//   grandTotal: 0,
  
//   // total: totalCookies(this.customers, this.cookies),
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
// let tokyoAverageCookies = customers * 6.3;
// console.log(customers);
// console.log(averageCookies);
// console.log(tokyo.cookiesPerHourArr);
// console.log(tokyo.grandTotal);




