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



//sum of matrices

// let array = [[1, 2, 3], [4, 5, 6], [7, 8, ,4,9]]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     //i=0/1/2/3
//     for (let j = 0; j < array[i].length; j++) {
//         // j=0/1/2/3
//         sum = sum + array[i][j]//1+2+3+4+5+6+4+7+8+9
//     }
// }
// console.log(sum)



// // sum of diagonal

// function sumOfArray(arr){
// let sum=0
// for (let i=0;i<arr.length;i++){

// for (let j=0;j<arr[i].length;j++){
// if((i==0&&j==0)||(i==1&&j==1)||(i==arr.length-1&&j==arr.length-1)){

// sum=sum+arr[i][j]
// }
// }
// }
// console.log(sum)
// }

// sumOfArray([[1, 2, 3], [4, 5, 6], [7, 8,10]])


// Arrow pattern print


// function pattern(n){
// for (let i=1;i<=n;i++){
// let str=''
// for(let j=1;j<=i;j++){
//     str=str+'x'
// }
// console.log(str)
// }
// for(let k=1;k<=n-1;k++){
//     let str=''
//     for(let l=1;l<=n-k;l++){
//         str=str+'x'
//     }
//     console.log(str)
// }
// }

// pattern(5)

// 
// function pattern(n){//3
//     //
//     let totalrows=(n*2)-1//5
//     let count=1//2//3//2//1//0
// for(let i=1;i<=totalrows;i++){
//     // i=1=2=3=4
//  let str=''
// for(let j=1;j<=count;j++){
   
//     str=str+'xtr'
// }
// if(i<n){
//     count++
// }else{count--}
// console.log(str)

// }
// }

// pattern(5)




// 

// function pattern(n){
//     let space=n
//     for(let i=1;i<=n;i++){
//     let str=''
//     for (let j=1;j<=i;j++){
    
//     // str=str+'x'
//     str+='X'
    
//     }
   

//     for(let k=1;k<=space;k++){
//         str=str+'0'
//         }
//     space=space-2


//     console.log(str)
    
//     }
    
    
    
//     }
    
    
//     pattern(3)


// function pattern(n){
// let space1=n//3
// for(let i=1;i<=n-1;i++){
// let str=''
// for(let j=1;j<=i;j++){
//     str=str+'X'
//     //x
//     //xx
// }
// for(let k=1;k<=space1;k++){
//     str=str+' '
// }
// space1=space1-2
// for(let l=1;l<=i;l++){
//     str=str+'X'
// }
// console.log(str)

// }
// //second pattern
// let str2=''
// for(let m=1;m<=(n*2)-1;m++){
//     //m=1=2=3=4=5=6
//     str2=str2+'X'
// }
// // str2=xxxxx
// console.log(str2)
// let space2=1//3
// for(let o=1;o<=n-1;o++){
//     // o=1/2
//     let str3=''

// for(let p=1;p<=n-o;p++){
//     // p=2=3
// str3=str3+'X'

// }
// // str3=xx0Xx
// for(let q=1;q<=space2;q++){
//     str3=str3+' '
// }
// space2=space2+2
// for(let r=1;r<=n-o;r++){
//     str3=str3+'X'
    
//     }

//     console.log(str3)

// }


// }
// pattern(3)

// function pattern(n){
// for (let i=1;i<=n;i++){
// let str=''
//     for(let j=1;j<=i;j++){
// str=str+j
//     }
//     console.log(str)


// }

// }

// pattern(4)


function pattern(n){//3

for(let i=1;i<=n;i++){
    //i=1
let str=''
for(let j=1;j<=n-i;j++){
    // j=1
str=str+' '
}
for(let k=1;k<=i;k++){
    str=str+`${i} `
}
console.log(str)
//001 
    }
}
pattern(3)
