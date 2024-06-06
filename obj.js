
let movie={
    img:'https://th.bing.com/th/id/OIP.33e90okQHgvJG4ehIndSzQHaLC?rs=1&pid=ImgDetMain+',
    title:'RRR',
    ott:'prime video',
    price:[123,100,250,155],
   
    currecny:'rs',

    description:'its a nice movie',
    rating:[4.5,3.5,3,5,2,5,1],
    avrRating:''
}

// console.log(movie.rating)

// console.log(movie.price)
// // movie.price=100
// console.log(movie.price)


// let ratingArray=movie.rating
// console.log(ratingArray)
// let sum=0
// for(let i=0;i<ratingArray.length;i++){
//     sum=sum+ratingArray[i]
// }
// let avr=sum/ratingArray.length


// movie.avrRating=avr
// console.log(movie)


// let priceArray=movie.price
// console.log(priceArray)
// let priceSum=0
// for(let i=0;i<priceArray.length;i++){
//     priceSum=priceSum+priceArray[i]
// }
// let priceAvr=priceSum/priceArray.length
// console.log(priceAvr)
// movie.avrPrice=priceAvr
// console.log(movie)


function getAverage(arr){
let sum=0
for(let i=0;i<arr.length;i++){
sum=sum+arr[i]

}

let avr=sum/arr.length
return avr

}

let priceArray=movie.price
let priceAvr=getAverage(priceArray)
console.log(priceAvr)
let ratingArray=movie.rating
let ratingAvr=getAverage(ratingArray)
console.log(ratingAvr)