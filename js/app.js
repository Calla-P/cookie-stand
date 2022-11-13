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
    Location.all.push(this);
}
Location.all = [];
let location1 = new Location('Seattle', 23, 65, 6.3, [], 0);
let location2 = new Location('Tokyo', 3, 25, 1.2, [], 0);
let location3 = new Location('Dubai', 11, 38, 3.7, [], 0);
let location4 = new Location('Paris', 20, 38, 3, [], 0);
let location5 = new Location('Lima', 2, 16, 4.6, [], 0);

Location.prototype.cookieSales = function() {
    for (let i = 0; i < timeOpen.length; i++) {
        let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust));
        this.cookieEachHour.push(cookiePerHour);
        this.totalCookies += cookiePerHour;
    }
}

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
    totalsHeader.innerText = 'Daily Location Total';
    tableRow.appendChild(totalsHeader);

    tableBody.appendChild(tableRow);

    let totalsFooter = document.createElement('th');
    totalsFooter.innerText = 'Total';
    // tableFooter.appendChild(totalsFooter);

    tableBody.appendChild(tableRow);
}

function rowFooter(){
    // let tablefoot = document.createElement('tfoot');
    let tableFooter = document.createElement('th');
    let footContent = document.createElement('tr');
    tableFooter.textContent= 'Totals';
    footContent.appendChild(tableFooter);
    let grandTotal = 0;
    for (let i = 0; i < timeOpen.length;i++){
        let totalHourly = 0;
        for (let j = 0; j< Location.all.length; j++){
            totalHourly+=Location.all[j].cookieEachHour[i];
            grandTotal+=Location.all[j].cookieEachHour[i];

        }
        let insideFoot = document.createElement('th');
        insideFoot.textContent = totalHourly;
        footContent.appendChild(insideFoot);
    }
     let totalsFooter = document.createElement('th');
        totalsFooter.textContent = grandTotal;
        footContent.appendChild(totalsFooter);

    tableBody.appendChild(footContent);

}

// put it on the page!
Location.prototype.render = function(){
    this.cookieSales()
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
    let totalCell = document.createElement('td');
    totalCell.textContent=this.totalCookies;
    cityRow.appendChild(totalCell);
    tableBody.appendChild(cityRow);
}


function locationTable(){
    for (let i=0; i < Location.all.length; i++){
        Location.all[i].render();
    }
}

function totalTable(){
    rowHeader();
    locationTable();
    rowFooter();
    
}

let storeDataForm = document.getElementById('storeDataForm');
storeDataForm.addEventListener("submit", addStore);


function addStore(event){
    event.preventDefault();
    let city = event.target.city.value;
    let minimum = event.target.minimum.value;
    let maximum = event.target.maximum.value;
    let average = event.target.average.value;
    console.log('city is',city, 'minimum is', minimum, 'maximum is', maximum, 'average is', average);
    let newLocation = new Location(city, minimum, maximum, average,[], 0);
    
    tableBody.innerHTML='';
    totalTable();
    
    
    event.target.city.value = null;
    event.target.minimum.value = null;
    event.target.maximum.value = null;
    event.target.average.value = null;
}



totalTable();