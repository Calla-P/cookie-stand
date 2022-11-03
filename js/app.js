'use strict'

console.log('Hello World')

let seattle = {
    mincust: 23,
    maxcust: 65,
    avgcookie: 6.3,

}

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


function randBetween(mincust, maxcust) {
    return mincust + Math.random() * (maxcust - mincust);
  }