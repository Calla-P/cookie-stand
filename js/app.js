'use strict'
console.log('Hello World')

let timeOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
let tableBody = document.getElementById('table')

function randBetween(mincust, maxcust) {
    return mincust + Math.random() * (maxcust - mincust);
}

function Location(name,mincust, maxcust, avgcookie, cookieEachHour, totalCookies){
    this.name = name 
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookie = avgcookie;
    this.cookieEachHour = cookieEachHour;
    this.totalCookies = totalCookies;
}

let location1 = new Location('Seattle', 23,65, 6.3, [], 0)
let location2 = new Location('Tokyo', 3, 25, 1.2, [], 0)
let location3 = new Location('Dubia', 11,38, 3.7, [], 0)
let location4 = new Location('Paris', 20,38, 3, [], 0)
let location5 = new Location('Lima', 2, 16, 4.6, [], 0)


// for  (let i = 0; i < timeOpen.length; i++) {
  
//     let hourlyTotal = location1.cookieEachHour[i] + location2.cookieEachHour[i] + location3.cookieEachHour[i] + location4.cookieEachHour[i] + location5.cookieEachHour[i];
//     location6.cookieEachHour[i]  = hourlyTotal;

// }

Location.prototype.cookieSales = function() {
    for (let i = 0; i < timeOpen.length; i++) {
        let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
        this.cookieEachHour.push(cookiePerHour)
        this.totalCookies+=cookiePerHour
    }
}
   location1.cookieSales()
   location2.cookieSales()
   location3.cookieSales()
   location4.cookieSales()
   location5.cookieSales()

function rowHeader(){
    const tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent= '';
    tableRow.appendChild(tableHeader);
    tableBody.appendChild(tableRow);

    for (let i = 0; i < timeOpen.length; i++) {
    
        let timeCell = document.createElement('td')
        timeCell.textContent=timeOpen[i]
        tableRow.appendChild(timeCell)
    
    }
}
   
Location.prototype.render = function(){
    let cityRow = document.createElement('tr')
    tableBody.appendChild(cityRow)

    let locationCell = document.createElement('td')
    locationCell.textContent=this.name
    cityRow.appendChild(locationCell)

    for (let i = 0; i < timeOpen.length; i++) {
        //create td element 2, text content(lab 6 ) 
             let newContent = document.createElement('td');
               newContent.textContent = this.cookieEachHour[i]
                     
    }

    
    // let timeTop = document.createElement('td')
    // timeTop.textContent= ''
    // tableBody.appendChild(timeTop)


}
rowHeader();
location1.render();
location2.render();
location3.render();
location4.render();
location5.render();


// let seattle = {
//     name: 'Seattle',
//     mincust: 23,
//     maxcust: 65,
//     avgcookie: 6.3,
//     cookieEachHour: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < timeOpen.length; i++) {
//             let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
//             this.cookieEachHour.push(cookiePerHour)
//             this.totalCookies+=cookiePerHour
//         }
//         console.log(this.cookieEachHour);
//         console.log(this.totalCookies);

//         let parentElement = document.getElementById('locations');
//         console.log(parentElement);
//         let cityName = document.createElement('h2');
//         cityName.innerText = this.name;
//         parentElement.appendChild(cityName);

//         let ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement);

//         for (let i = 0; i < timeOpen.length; i++) {
//             let newLi = document.createElement('td');
//             newLi.innerText =  ${this.cookieEachHour[i]}`
//             

//         }

//         let newLi = document.createElement('li');
//             newLi.innerText = `Total: ${this.totalCookies}`
//             ulElement.appendChild(newLi)


//         //render an li with hour open and the number of cookies sold each hour. cookEachHour

//     }

// }
// seattle.cookieSales();

// let tokyo = {
//     name: 'Tokyo',
//     mincust: 3,
//     maxcust: 24,
//     avgcookie: 1.2,
//     cookieEachHour: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < timeOpen.length; i++) {
//             let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
//             this.cookieEachHour.push(cookiePerHour)
//             this.totalCookies+=cookiePerHour
//         }
//         console.log(this.cookieEachHour);

//         let parentElement = document.getElementById('locations');
//         let cityName = document.createElement('h2')
//         cityName.innerText = this.name
//         parentElement.appendChild(cityName)

//         let ulElement = document.createElement('ul')
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < timeOpen.length; i++) {
//             let newLi = document.createElement('li');
//             newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
//             ulElement.appendChild(newLi)

//         }
//         let newLi = document.createElement('li');
//             newLi.innerText = `Total: ${this.totalCookies}`
//             ulElement.appendChild(newLi)


//     }

// }
// tokyo.cookieSales();

// let dubia = {
//     name: 'Dubia',
//     mincust: 11,
//     maxcust: 38,
//     avgcookie: 3.7,
//     cookieEachHour: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < timeOpen.length; i++) {
//             let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
//             this.cookieEachHour.push(cookiePerHour)
//             this.totalCookies+=cookiePerHour
//         }
//         console.log(this.cookieEachHour);

//         let parentElement = document.getElementById('locations');
//         let cityName = document.createElement('h2')
//         cityName.innerText = this.name
//         parentElement.appendChild(cityName)

//         let ulElement = document.createElement('ul')
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < timeOpen.length; i++) {
//             let newLi = document.createElement('li');
//             newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
//             ulElement.appendChild(newLi)

//         }
//         let newLi = document.createElement('li');
//             newLi.innerText = `Total: ${this.totalCookies}`
//             ulElement.appendChild(newLi)



        

//     }

// }
// dubia.cookieSales();

// let paris = {
//     name: 'Paris',
//     mincust: 20,
//     maxcust: 38,
//     avgcookie: 2.3,
//     cookieEachHour: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < timeOpen.length; i++) {
//             let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
//             this.cookieEachHour.push(cookiePerHour)
//             this.totalCookies+=cookiePerHour
//         }
//         console.log(this.cookieEachHour);

//         let parentElement = document.getElementById('locations');
//         let cityName = document.createElement('h2')
//         cityName.innerText = this.name
//         parentElement.appendChild(cityName)

//         let ulElement = document.createElement('ul')
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < timeOpen.length; i++) {
//             let newLi = document.createElement('li');
//             newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
//             ulElement.appendChild(newLi)

//         }
//         let newLi = document.createElement('li');
//             newLi.innerText = `Total: ${this.totalCookies}`
//             ulElement.appendChild(newLi)

//     }

// }
// paris.cookieSales();

// let lima = {
//     name: 'Lima',
//     mincust: 2,
//     maxcust: 16,
//     avgcookie: 4.6,
//     cookieEachHour: [],
//     totalCookies: 0,
//     cookieSales: function () {
//         for (let i = 0; i < timeOpen.length; i++) {
//             let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
//             this.cookieEachHour.push(cookiePerHour)
//             this.totalCookies+=cookiePerHour
//         }
//         console.log(this.cookieEachHour);

//         let parentElement = document.getElementById('locations');
//         let cityName = document.createElement('h2')
//         cityName.innerText = this.name
//         parentElement.appendChild(cityName)

//         let ulElement = document.createElement('ul')
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < timeOpen.length; i++) {
//             let newLi = document.createElement('li');
//             newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
//             ulElement.appendChild(newLi)

//         }
//         let newLi = document.createElement('li');
//             newLi.innerText = `Total: ${this.totalCookies}`
//             ulElement.appendChild(newLi)

        

//     }

// }
// lima.cookieSales();
