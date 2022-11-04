'use strict'
console.log('Hello World')

let timeOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function randBetween(mincust, maxcust) {
    return mincust + Math.random() * (maxcust - mincust);
}



let seattle = {
    name: 'Seattle',
    mincust: 23,
    maxcust: 65,
    avgcookie: 6.3,
    cookieEachHour: [],
    totalCookies: 0,
    cookieSales: function () {
        for (let i = 0; i < timeOpen.length; i++) {
            let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
            this.cookieEachHour.push(cookiePerHour)
            this.totalCookies+=cookiePerHour
        }
        console.log(this.cookieEachHour);
        console.log(this.totalCookies);

        let parentElement = document.getElementById('locations');
        console.log(parentElement);
        let cityName = document.createElement('h2');
        cityName.innerText = this.name;
        parentElement.appendChild(cityName);

        let ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        for (let i = 0; i < timeOpen.length; i++) {
            let newLi = document.createElement('li');
            newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
            ulElement.appendChild(newLi)

        }

        let newLi = document.createElement('li');
            newLi.innerText = `Total: ${this.totalCookies}`
            ulElement.appendChild(newLi)


        //render an li with hour open and the number of cookies sold each hour. cookEachHour


    }

}
seattle.cookieSales();


let tokyo = {
    name: 'Tokyo',
    mincust: 3,
    maxcust: 24,
    avgcookie: 1.2,
    cookieEachHour: [],
    totalCookies: 0,
    cookieSales: function () {
        for (let i = 0; i < timeOpen.length; i++) {
            let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
            this.cookieEachHour.push(cookiePerHour)
            this.totalCookies+=cookiePerHour
        }
        console.log(this.cookieEachHour);

        let parentElement = document.getElementById('locations');
        let cityName = document.createElement('h2')
        cityName.innerText = this.name
        parentElement.appendChild(cityName)

        let ulElement = document.createElement('ul')
        parentElement.appendChild(ulElement)

        for (let i = 0; i < timeOpen.length; i++) {
            let newLi = document.createElement('li');
            newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
            ulElement.appendChild(newLi)

        }
        let newLi = document.createElement('li');
            newLi.innerText = `Total: ${this.totalCookies}`
            ulElement.appendChild(newLi)



        

    }

}
tokyo.cookieSales();



let dubia = {
    name: 'Dubia',
    mincust: 11,
    maxcust: 38,
    avgcookie: 3.7,
    cookieEachHour: [],
    totalCookies: 0,
    cookieSales: function () {
        for (let i = 0; i < timeOpen.length; i++) {
            let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
            this.cookieEachHour.push(cookiePerHour)
            this.totalCookies+=cookiePerHour
        }
        console.log(this.cookieEachHour);

        let parentElement = document.getElementById('locations');
        let cityName = document.createElement('h2')
        cityName.innerText = this.name
        parentElement.appendChild(cityName)

        let ulElement = document.createElement('ul')
        parentElement.appendChild(ulElement)

        for (let i = 0; i < timeOpen.length; i++) {
            let newLi = document.createElement('li');
            newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
            ulElement.appendChild(newLi)

        }
        let newLi = document.createElement('li');
            newLi.innerText = `Total: ${this.totalCookies}`
            ulElement.appendChild(newLi)



        

    }

}
dubia.cookieSales();


let paris = {
    name: 'Paris',
    mincust: 20,
    maxcust: 38,
    avgcookie: 2.3,
    cookieEachHour: [],
    totalCookies: 0,
    cookieSales: function () {
        for (let i = 0; i < timeOpen.length; i++) {
            let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
            this.cookieEachHour.push(cookiePerHour)
            this.totalCookies+=cookiePerHour
        }
        console.log(this.cookieEachHour);

        let parentElement = document.getElementById('locations');
        let cityName = document.createElement('h2')
        cityName.innerText = this.name
        parentElement.appendChild(cityName)

        let ulElement = document.createElement('ul')
        parentElement.appendChild(ulElement)

        for (let i = 0; i < timeOpen.length; i++) {
            let newLi = document.createElement('li');
            newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
            ulElement.appendChild(newLi)

        }
        let newLi = document.createElement('li');
            newLi.innerText = `Total: ${this.totalCookies}`
            ulElement.appendChild(newLi)



        

    }

}
paris.cookieSales();



let lima = {
    name: 'Lima',
    mincust: 2,
    maxcust: 16,
    avgcookie: 4.6,
    cookieEachHour: [],
    totalCookies: 0,
    cookieSales: function () {
        for (let i = 0; i < timeOpen.length; i++) {
            let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust, this.maxcust))
            this.cookieEachHour.push(cookiePerHour)
            this.totalCookies+=cookiePerHour
        }
        console.log(this.cookieEachHour);

        let parentElement = document.getElementById('locations');
        let cityName = document.createElement('h2')
        cityName.innerText = this.name
        parentElement.appendChild(cityName)

        let ulElement = document.createElement('ul')
        parentElement.appendChild(ulElement)

        for (let i = 0; i < timeOpen.length; i++) {
            let newLi = document.createElement('li');
            newLi.innerText = `${timeOpen[i]}: ${this.cookieEachHour[i]}`
            ulElement.appendChild(newLi)

        }
        let newLi = document.createElement('li');
            newLi.innerText = `Total: ${this.totalCookies}`
            ulElement.appendChild(newLi)



        

    }

}
lima.cookieSales();




