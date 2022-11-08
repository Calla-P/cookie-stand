'use strict'
console.log('Hello World')

let timeOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
let tableBody = document.getElementById('table')

function randBetween(mincust, maxcust) {
    return mincust + Math.random() * (maxcust - mincust);
}

function Location(name, mincust, maxcust, avgcookie, cookieEachHour, totalCookies){
    this.name = name 
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookie = avgcookie;
    this.cookieEachHour = cookieEachHour;
    this.totalCookies = totalCookies;
}

let location1 = new Location('Seattle', 23, 65, 6.3, [], 0);
let location2 = new Location('Tokyo', 3, 25, 1.2, [], 0);
let location3 = new Location('Dubai', 11, 38, 3.7, [], 0);
let location4 = new Location('Paris', 20, 38, 3, [], 0);
let location5 = new Location('Lima', 2, 16, 4.6, [], 0);


// for  (let i = 0; i < timeOpen.length; i++) {
//     let hourlyTotal = location1.cookieEachHour[i] + location2.cookieEachHour[i] + location3.cookieEachHour[i] + location4.cookieEachHour[i] + location5.cookieEachHour[i];
//     location6.cookieEachHour[i]  = hourlyTotal;
// }

Location.prototype.cookieSales = function() {
    for (let i = 0; i < timeOpen.length; i++) {
        let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust));
        this.cookieEachHour.push(cookiePerHour);
        this.totalCookies += cookiePerHour;
    }
}

location1.cookieSales();
location2.cookieSales();
location3.cookieSales();
location4.cookieSales();
location5.cookieSales();

function rowHeader(){
    const tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent= '';
    tableRow.appendChild(tableHeader);
    for (let i = 0; i < timeOpen.length; i++) {
        let timeCell = document.createElement('th')
        timeCell.textContent=timeOpen[i]
        tableRow.appendChild(timeCell)
    }
    // I want to add the Totals column
    let totalsHeader = document.createElement('th');
    totalsHeader.innerText = 'Totals';
    tableRow.appendChild(totalsHeader);

    tableBody.appendChild(tableRow);
}

// put it on the page!
Location.prototype.render = function(){
    let cityRow = document.createElement('tr');
    let locationCell = document.createElement('td');
    locationCell.textContent=this.name;
    cityRow.appendChild(locationCell);
    // The for loop will iterate over each hour's sold in that hour!
    // And go through the steps of DOM manipulation
    for (let i = 0; i < timeOpen.length; i++) {
        let newContent = document.createElement('td');
        newContent.textContent = this.cookieEachHour[i];
        cityRow.appendChild(newContent);
    }
    // TODO: add the location's totalCookies in last cell

    tableBody.appendChild(cityRow);
}

rowHeader();

// let locations = [location1, location2, location3, location4, location5];

location1.render();
location2.render();
location3.render();
location4.render();
location5.render();

