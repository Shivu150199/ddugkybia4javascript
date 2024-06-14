
// let movie={
//     img:'https://th.bing.com/th/id/OIP.33e90okQHgvJG4ehIndSzQHaLC?rs=1&pid=ImgDetMain+',
//     'my title':'RRR',
//     ott:'prime video',
//     price:[123,100,250,155],
   
//     currecny:{
//         us:'dollar',
//         india:{
//             paperNote:[10,50,100,500,2000],
//             coins:[1,2,5,10,20,50,100]
//         }
//     },

//     description:'its a nice movie',
//     rating:[4.5,3.5,3,5,2,5,1],
 
// }


// console.log(movie.currecny.india.coins.length)
// console.log(movie['currecny']['india']['paperNote'].length)

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


// function getAverage(arr){
// let sum=0
// for(let i=0;i<arr.length;i++){
// sum=sum+arr[i]

// }

// let avr=sum/arr.length
// return avr

// }

// let priceArray=movie.price
// let priceAvr=getAverage(priceArray)
// console.log(priceAvr)
// let ratingArray=movie.rating
// let ratingAvr=getAverage(ratingArray)
// console.log(ratingAvr)



// Bracket Notaion
// console.log(movie.title)
// console.log(movie['title'])

// console.log(movie['ott'])
// console.log(movie.currecny.us)
// console.log(movie['currecny']['us'])
// console.log(movie['my title'])



// let obj={
//     name:'madhuSoodan',
//     let:'hello',
//     for:'world'
// }
// console.log(obj.let)

// const for='let'

// In operator in object 
// for in loop 
// cloning and copy of object
// methods in objects



// var let const


// let adiObject={
//     name:'aditya',
//     age:22,
//     gender:'male'
// }

// in operator
// key in object

// console.log('age' in adiObject)
// console.log('section' in adiObject)


// key in object

// for in loop



// let movie={
//     img:'https://th.bing.com/th/id/OIP.33e90okQHgvJG4ehIndSzQHaLC?rs=1&pid=ImgDetMain+',
//     'my title':'RRR',
//     ott:'prime video',
//     price:[123,100,250,155],
   
//     currecny:{
//         us:'dollar',
//         india:{
//             paperNote:[10,50,100,500,2000],
//             coins:[1,2,5,10,20,50,100]
//         }
//     },

//     description:'its a nice movie',
//     rating:[4.5,3.5,3,5,2,5,1],
 
// }


// movie.ott


// for (let i in movie){
// console.log('this is my key',i)

// console.log('this is value ',movie[i])

// }

// let adiObject={
//     name:'aditya',
//     age:17,
//     gender:'male'
// }

// for (let i in adiObject){
//     // console.log('key',i)
//     if(i=='age'){
//         if(adiObject[i]>18){ 
//             console.log('eligible')
//         }else{
//             console.log('not eligible')
//         }
//     }
// }


// let pizza={
// type:'Vegeterian',
// title:'4 Veg Medium Pizzas at 299 Each',
// price:'1196',
// desc:'Veggie party for four! Get 4 delicious Veg Medium Pizzas at 299 each and get the party started',
// img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/8/b71bcc64-d335-483a-aecc-9d43817c2f20_101cb6b6-7be8-45cd-bd6c-c13b071545c7.png',
// }
// pizza['type']
// for( let key in pizza){
//     // console.log(i)
//     console.log(pizza[key])
// }


// let array=['bhagwan','bablu','madhusudan']

// // array[2]//bablu
// for(let i=0;i<array.length;i++){
//     console.log(i)
//     console.log(array[i])
// }

// let obj={
//     a:1,
//     b:2,
//     sum:function(){
// console.log('sum function is called')
// return 'lokendra'
//     }
// }
// obj.c=3
// console.log(obj)

// // a function which is written in object called method
// console.log(obj.sum())
// // obj.sum


let obj={
    step:0,
    increaseStep:function(){
       obj.step++
       console.log(obj.step)
    }

}


obj.increaseStep()
obj.increaseStep()
obj.increaseStep()
obj.increaseStep()
obj.increaseStep()
obj.increaseStep()











