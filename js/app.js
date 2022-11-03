'use strict'
console.log('Hello World')

let timeOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function randBetween(mincust, maxcust) {
    return mincust + Math.random() * (maxcust - mincust);
  }



let seattle = {
    mincust: 23,
    maxcust: 65,
    avgcookie: 6.3,
    cookieEachHour:[],
    totalCookies:0,
cookieSales: function(){
    for (let i = 0; i< timeOpen.length; i++){
     let cookiePerHour = Math.floor(this.avgcookie * randBetween(this.mincust,this.maxcust))
     this.cookieEachHour.push(cookiePerHour)
    }
    console.log(this.cookieEachHour);
let 
    for (let i = 0; i< timeOpen.length; i++){
 let timeOpen = this.cookieEachHour;
 let newLi = document.createElement('li');
  newLi.innerText = ${timeOpen}; ${this.cookieEachHour}

    }


    //render an li with hour open and the number of cookies sold each hour. cookEachHour
    

}

}
seattle.cookieSales();


let tokyo = {
    mincust: 3,
    maxcust: 24,
    avgcookie: 1.2,


}

let dubia = {
    mincust: 11,
    maxcust: 38,
    avgcookie: 3.7,

}

let paris = {
    mincust: 20,
    maxcust: 38,
    avgcookie: 2.3,

}

let lima = {
    mincust: 2,
    maxcust: 16,
    avgcookie: 4.6,

}


