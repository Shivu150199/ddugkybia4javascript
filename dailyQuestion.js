// question -
// print a reverse pyramid
// ****
//  ***
//  ** 
//  *



// function reversePyramid(n){
// for (let i=1;i<=n;i++){






// }



// }

// reversePyramid(3)

// ***
// ***
// ***

// function printPattern(n){

// for(let i=1;i<=n;i++){
// //   i=1=2=3=4=5
// let str=''

// for(let j=1;j<=(n-i+1);j++){
//     // j=2=3=4=5
//     str=str+'*'//'****'
// }
// console.log(str)

// }

// }

// printPattern(4)
// ****
// ****
// ****
// ****


// function reverse(n){
// for(let i=1;i<=n;i++){
//     // i=1
// let str=''
// for(let j=1;j<i;j++){
//  str=str+'0'   
// }

// for(let k=1;k<=10-i+1;k++){
//     str=str+'X-'
// }



// console.log(str)

// }

// }
// reverse(4)


// function hollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = ''
//         for (let j = 1; j <= n; j++) {
//             if (i == 1 || i == n || j == 1 || j == n) {
//                 str = str + 'X'
//             } else {
//                 str = str + ' '
//             }
//         }
//         console.log(str)

//     }
// }
// hollowSquare(10)





let array = [[1, 2, 3], [4, 5, 6], [7, 8, ,4,9]]
let sum = 0
for (let i = 0; i < array.length; i++) {
    //i=0/1/2/3
    for (let j = 0; j < array[i].length; j++) {
        // j=0/1/2/3
        sum = sum + array[i][j]//1+2+3+4+5+6+4+7+8+9
    }
}
console.log(sum)





function sumOfArray(arr){
let sum=0
for (let i=0;i<arr.length;i++){

for (let j=0;j<arr[i].length;j++){
if((i==0&&j==0)||(i==1&&j==1)||(i==arr.length-1&&j==arr.length-1)){

sum=sum+arr[i][j]
}
}
}
console.log(sum)
}

sumOfArray([[1, 2, 3], [4, 5, 6], [7, 8,10]])