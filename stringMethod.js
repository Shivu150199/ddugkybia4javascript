





// let a='shubham'
// let section='bia4'

// let result="hello my name is "+a+" and i am from " + section
// // console.log(result)

// let result2=`hello my name is ${a} and i am from ${section}`
// // template literals
// console.log(result)
// console.log(result2)
// console.log(a)
// ''
// ""
// ``


// let name='aneesh'
// let role='developer'

// console.log(`my name is ${name} and my role is ${role}`)


// let obj={
// name:'bhagwan sir',
// place:'bhopal',
// email:'bg@gmail.com'

// }
// console.log('hello my name is '+obj.name+" and i am from "+ obj.place + " my email id is "+ obj.email)

// console.log(`hello my name is ${obj.name} and i am from ${obj.place} my email id is ${obj.email}`)


// let name=' Shivam singh gautam '
// let length=name.length
// console.log(length)

// let a='bia4'
// console.log(a.length)
// // a.length//4

// let name='harshlata'
// let length=name.length
// console.log(length)

// let name='lokendra'

// name[1]//o
// name[0]//l
// name[5]//d

// let array=['shubam','bablu','aditya']
// // console.log(array[0][2])
// console.log(array[1].at(array[1].length-1))//bablu


// at method


// const name='Shobharam sir'
// console.log(name[3],name.at(0))

// let name='ranjeet'
// console.log(name[-4])
// // name[-1]//
// console.log(name.at(-4))


// string.toLowerCase()
// string.toUpperCase()

// shivamsinghgautam397@gmail.com
// let mail="ShIvamsinghGautam397@gmail.com"

// console.log(mail.toLowerCase())
// console.log(mail.toUpperCase())

// let a ='hello'
// console.log(a.toUpperCase())


//take a input from prompt and whatever value user is providing convert that value in lowercase

// let emailId=prompt('please! provide you email id')

// let emailId='shaskjdGG@gmail.com'

// console.log(emailId.toLowerCase()) 


// indexOf()


// let detail='shubham is laughing'
// let index=detail.indexOf('l')
// console.log(index)
// console.log(detail.at(11))


// let str='my name is shivam singh'
// //  toUpperCase
// let result=str.toUpperCase()
// console.log(result)

// let str='Hello My Name IS Shivam Singh'

// let resutl=str.toLowerCase()

// console.log(resutl)



// let str='iamfromfatehpur'
// // console.log(str.indexOf('f'))
// console.log(str.indexOf('from'))
// console.log(str.indexOf('am'))

//Slice method

// str.slice(strtingIndex,lastIndex)

// let result=str.slice(0,5)
// // 2 3 4
// // a f
// console.log(result)

// let name='etesh Bhaydya'

// let spaceIndex=name.indexOf(' ')
// console.log(spaceIndex)

// let subString=name.slice(0,spaceIndex)

// console.log(subString)
// let startingIndex=name.indexOf('B')
// let lastIndex=name.length
// console.log(startingIndex)
// console.log(lastIndex)
// let result=name.slice(startingIndex,lastIndex)
// console.log(result)


// let str='shivamsinghgautam397@gmail.com'

// let lastIndex=str.indexOf('@')

// let subString=str.slice(0,lastIndex)
// console.log(subString)

// let address='Asother-fatehpur'

// let initialIndex=address.indexOf('f')

// console.log(initialIndex)
// let result=address.slice(initialIndex,address.length)
// console.log(result)


// let arr=[12,23,33,43]
// console.log(arr)
// arr[1]=63

// console.log(arr)


// let firstName='Bablu'
// let lastName='Dablu'

// let fullName=firstName+' '+lastName
// console.log(fullName)
//concat
// console.log(name)
// name[2]='l'
// console.log(name)

// let result=firstName.concat(' ',lastName,'bia4')

// console.log(result)



// let fName='shivam'
// let middleName='singh'
// let lastName='Gautam'
// let result=fName+" "+middleName+" "+lastName
// console.log(result)

// let result2=fName.concat(' ',middleName," ",lastName)
// console.log(result2)

// let gmail=prompt('write you mail id')

// let strBefore=gmail.slice(0,gmail.indexOf('@'))//bablusir



// let halfStr=strBefore.slice(0,strBefore.length/2)//babl


// let domain=gmail.slice(gmail.indexOf('@')+1,gmail.length)//gmail.com

// let result=halfStr.concat('...@',domain)
// console.log(result)



// create a random 6 digit number password generator 




//split method

// let str='shivam-singh-gautam'
// let str2='shivam@gmail.com'

// // split method break a string into a array from specific character or point

// // let result=str.split('-')
// // console.log(result)
// let result=str2.split('gmail')
// console.log(result);

//join

// let array=['a','b','c']
// let result=array.join('@')
// console.log(result)

// let array2=['shivam','singh']

// let a=array2.join('-')
// console.log(a)
// practice practice morepractice



// let password=''

// for(let i=0;i<6;i++){
//     let num=Math.random()*10

//     let roundedNum=Math.floor(num)
//     console.log(roundedNum)
//     password=password+roundedNum
// }

// console.log(password)

// let array=[12312,1123,123,123,123,123,12,3123,12,312,3]

// let password=3
// let passwordMatch=false
// for(let i=0;i<array.length;i++){
//     if(password==array[i]){
//     passwordMatch=true
//         break;
//     }
// }

// if(passwordMatch){
//     console.log('correct')
// }else{
//     console.log('incorrect')
// }


// let userDetail=[
//     {
//         username:'bablu sir',
//         emailId:'bablu@gmail.com',
//         password:
//     }
// ]
// let password=[]
// for(let i=1000;i<=9999;i++){
//     // console.log(i)
//     password.push(i)
// }
// console.log(password)

// let randomIndex=Math.floor(Math.random()*password.length)
// console.log(password[randomIndex])



// //replace
// let str='i am learning html and css'

// let result=str.replace('css','javascvript')
// console.log(result)
// console.log(str.replace('html','React js'))


// let str2='my name are shivam';
// console.log(str2.replace('are','is'))

//includes
// console.log(str2.includes('z'))

// let name='shobharam'

// console.log(name.includes('lakshman'))

// let section='bia4'

// let result=section.includes('bia')


// let listOfName=['suraj kumar','yogesh nagar','shobharam waskel','lokendra kumar','rajkumar']


// for(let i=0;i<listOfName.length;i++){
// if(listOfName[i].includes('raj')){
//     console.log(listOfName[i])
// }

// }



// trim
// let name='      shivam        '
// // trim
// // trimStart
// // trimEnd
// console.log(name.trimEnd())


// replaceAll

// let address='India MP bhopal'

// let result=address.replaceAll(' ',"-")
// console.log(result)
// let str='i love apple and apple my favorite fruit and apple is the reason of discovering of gravity'

// str.replaceAll('apple','orange')

// //startsWith
// //endsWith


// let movie='avenger end game'
// console.log(movie.startsWith('mv'))
// console.log(movie.endsWith('game'))


// let netflix = ['Bahubali', 'Spider Man', 'the pusrsuit of happiness', 'The boy who harness the winds']

// let input = prompt('write a movie name').trim().toLowerCase()//boy
// // RRR=rrr
// // spider=spider
// //  the=the
// // bahubali

// let findMovie = false   
// for (let i = 0; i < netflix.length; i++) {
//     //i==0//1//2//3//4
//     if (netflix[i].toLowerCase().startsWith(input)) {
//         findMovie = true
//     }

// }

// if (findMovie==true) {
//     console.log('movie found')
// } else {
//     console.log('not found')
// }
// let input=prompt('search a key word').toLowerCase()


// let articles = [
//     'Javascript is a flexible multi-paradigm programming language largely used in the web-development space for both front-end and back-end applications. Whereas HTML and CSS describe the elements on a webpage, code written in JavaScript makes them interactive. A framework such as NodeJS allows back-end code to be written in JavaScript. The tutorials below provide tips and tricks on how to get started with Javascript.',
//     `Use this article as a reference sheet for JavaScript arrays.
// Use this article as a reference sheet for JavaScript arrays.

// Arrays — lists of numbers, strings, booleans, or any other data type.
// Array access — each item in the array can be accessed by its numeric index.`,
//     `Introduction
// React is a user interface framework developed by Facebook. It has a quickly growing developer adoption rate and was ranked as the most loved web framework in the 2019 Stack Overflow developer survey. This article will walk you through setting up your first React app and assumes you are familiar with text editors and command line navigation.

// Note: We recommend using create-react-app to focus on learning React. You will be able to take what you learn here and apply it to React frameworks like Next.js.`
// ]
// //3
// // 2

// for(let i=0;i<articles.length;i++){
// // i=0//1//2//3
// if(articles[i].toLowerCase().includes(input)){
//     console.log(articles[i])
// }
// }


// let name='a'

// 'a'>'b'
// 97>98
// console.log('abc'>'Abc')
// 90>64
// 97==97
// 97>65
// lexicographical order


// 65>97


// console.log('shi'>'sh')
// 0>105
// 105>0
// console.log(first)

// console.log("35">"235")

// 51>50

// 49<50
// 1<=1


// let array=[4,3,23,1,1]//array of string
// // 1 ,2 ,123,234
// //increasing and decreasing
// // sort()
// let result=array.sort((a,b)=>{
// // a=4
// // b=3
// if(a>b){
// return 32
// }

// if(a<b){
// return -1
// }
// if(a==b){
// return 0

// }

// })

// // we have to pass  acomparison function

// console.log(result)

// when we need b before a 
// return postive 

// when we need a before b  return negative

// let number=[1,23,5,23,67,112,4]
// a=23
// b=5
// let sortedNumber=number.sort((a,b)=>{
// if(a>b){
// return 1
// }
// if(a<b){
// return -1
// }
// if(a==b){

// }

// })

// console.log(sortedNumber);



// let strArray=['zjh','asdy','asdfx']//increasing

// let result=strArray.sort((a,b)=>{
//     return b-a
// })

// console.log(result)



// let numArray=[12,23,12,43,23,23,5,9]
// a=23
// b=23
//increasing
// 23-12=11
// let result=numArray.sort((a,b)=>{
//   return b-a

// })

// console.log(result)

// charCodeAt()

// let name='suraj kumar suryanshi'
// // 0
// let a=name.charCodeAt(0)//index
// console.log(a)

// let str=['bablu bamaniya']

// let s=str[0]
// // how to get ascci value present at index 6
// let a=s.charCodeAt(6)
// console.log(a)

// now we want character from ascii value

// let av=97
// console.log(String.fromCharCode())

// let result=String.fromCharCode(67)
// console.log(result)

// let str2='a'

// console.log('a')
// let value=new String('a')
// console.log(value)


// Write a JavaScript function to check whether an 'input' is a string or not.

// function checkString(input){
//     // input=[123,'shivam']
// for(let i=0;i<input.length;i++){
//     if(typeof input[i]=='string'){
//         console.log(`${input[i]} is a string`)
//     }else{
//         console.log(`${input[i]} is not a string`)
//     }
// }

// }

// checkString([123,'shivam','sun',5,'moon'])



// console.log(typeof true)

// Write a JavaScript function to check whether a string is blank or not.


// function checkBlank(input){

// if(input.length==0){
//     console.log('blanck')
// }else{
//     console.log('not blanck')
// }

// }
// checkBlank('')

// console.log(123.length)


// Write a JavaScript function to split a string and convert it into an array of words

// shivam
// ['s','h','i','v','a','m']



// function splitString(input){

//     let result=input.split('')
// let b=result.join('_')

// console.log(b)
// }

// splitString('suraj kumar')


// let a=['b','c']

// function join(sign){

// }
// join('-',)



// find number from a string


// charAt()
// let a=str[2]
// console.log(a)
// console.log(a.charCodeAt())


// console.log('9'.charCodeAt())

// let str='suraj786suryav87345anshi'
// let result=''
// for(let i=0;i<str.length;i++){
//     let value=str[i]
//     // console.log(value.charCodeAt())
//     if(value.charCodeAt()>=48&&value.charCodeAt()<=57){
//         // console.log(value)
//         result=result+value
//     }

// }

// console.log(result)


// 
// Write a JavaScript function to delete leading and trailing spaces from a string.


// function stripSpace(input){
//     // console.log(input)
// return input.trim()
// }

// let a=stripSpace('  javascript  ')//'javascript'
// console.log(a)



// Write a JavaScript function to repeat a string for a specified time.


// function repeatString(str,number){
// let result=''
// for(let i=1;i<=number;i++){
//     result=result+str
// }

// console.log(result)
// return result
// }

// let a=repeatString('hello',2)//hellohellohello
// console.log(a)


// Write a JavaScript function to capitalize the first letter of a string.

// shivam//Shivam
// shivam singh gautam//Shivam Singh Gautam


// function capitalizeString(str){
//  let splitedArray=str.split(' ')//after splitting  this is going to change string into array
// //  console.log(splitedArray)
// for(let i=0;i<splitedArray.length;i++){
//     //iterate on each value
// let valuefromArray=splitedArray[i]//get access of value
// // console.log(value)
// let firstLetter=valuefromArray.charAt(0).toUpperCase()//access first letter and change it to  uppercase

// let leftLetter=valuefromArray.slice(1)//get left value from string


// let fullword=firstLetter+leftLetter//adding first and last string

// splitedArray[i]=fullword//push new value in array at same index


// }
// let joinString=splitedArray.join(' ')//join array by space 
// return joinString//return string with new value
//     }
// let a=capitalizeString('baBlu sir')//Html Css Javascript
// console.log(a)



// let sentence='My name is shivam'//myNameIsShivam

// let splitSentence=sentence.split(' ')
// console.log(splitSentence)

// let firstword=splitSentence[0]
// console.log(firstword)
// let flOfFw=firstword.charAt(0)//m
// let firstTOUpperCase=flOfFw.toLowerCase()//M
// console.log(firstTOUpperCase)
// let leftLetterOfFirstWOrd=firstword.slice(1)//y

// let firstFullWOrd=firstTOUpperCase+leftLetterOfFirstWOrd//My

// splitSentence[0]=firstFullWOrd
// console.log(splitSentence)

// for(let i=1;i<splitSentence.length;i++){

// splitSentence[i]=splitSentence[i].charAt(0).toUpperCase()+splitSentence[i].slice(1)
// // console.log(fl)
// }

// console.log('result',splitSentence.join(''))


// camelcase
//pascal case

//snake case
//kawabcase

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'dog'));
// Output :
// "The quick brown fox jumps over the lazy"


// let str="The quick brown fox jumps over the lazy dog"
// let serach='the'


// function remove_first_occurrence(snetences,valueToRemove){

// let result=snetences.replace(valueToRemove,'')
// return result    
// }
// let result=remove_first_occurrence('my name is shivam','my')

// console.log(result)



// function camelcase(str){



//     let splitSentence=str.split(' ')


//     let firstword=splitSentence[0]
//     console.log(firstword)
//     let flOfFw=firstword.charAt(0)//m
//     let firstTOUpperCase=flOfFw.toLowerCase()//M
//     console.log(firstTOUpperCase)
//     let leftLetterOfFirstWOrd=firstword.slice(1)//y

//     let firstFullWOrd=firstTOUpperCase+leftLetterOfFirstWOrd//My

//     splitSentence[0]=firstFullWOrd
//     console.log(splitSentence)

//     for(let i=1;i<splitSentence.length;i++){

//     splitSentence[i]=splitSentence[i].charAt(0).toUpperCase()+splitSentence[i].slice(1)
//     // console.log(fl)
//     }

//     console.log('result',splitSentence.join(''))



// }



// str.toLowerCase().replaceAll(' ','-')




// Write a JavaScript function to test whether a string ends with a specified string.



// function checkEnd(str,check){


// return str.endsWith(check)

// }


// console.log(checkEnd('madhu sudan das','da'))



// // let name='madhu sudan das'

// // name.endsWith('das')

// Write a JavaScript function to test whether a string starts with a specified string.


// Write a JavaScript function to test whether the character at the given (character) index is lower case.


// function checkLowerCase(str,index){



//     return str.charAt(index)===str.charAt(index).toLowerCase()//h=h//D=d
// }

// let result=checkLowerCase('shDfjalsdjkf;as',2)


// console.log(result)



// Write a JavaScript function to create a case-insensitive search

// // 'shivam'=='SHIVAM'




// let name='lokendra jatav'


// 'Jatav'


// const name='shivam'
// const name='loki'


// let name='bablu yogesh Madhu SuDAN'

// let search='suDan'



// let name ='akash'
// name.charAt(1)//k




// let name2='etesh'

// name2.startsWith('a')//true//false
// name2.endsWith('h')//true


// let name1='akash'
// let name2='prakash'
// let name3='bhagwan'

// // []-
// let nameArray=['akash','prakash','bhagwan',346,{name:'yogesh'},function hello(){

// },name1,name2,name3]
// console.log(nameArray)
// // nameArray[4]//prakash//{name:'yogesh'}
// nameArray[0]='etesh'

// nameArray[3]=50


// array methods

// push
// pop
// shift
// unshift



//push

// let array=[23,45,2,6,89,2]
// console.log(array)
// array.push(44)
// console.log(array)

// let animal=['dog','fox','dear','elephant']
// animal.push('lion')
// animal.push('tiger')
// console.log(animal)

// let evenNumber=[2,4,6,8]
// evenNumber.pop()
// // evenNumber.pop()
// // evenNumber.pop()
// // evenNumber.pop()
// console.log(evenNumber)
// 


// let batch=['tse3','tse4','bia4','bia3']
// console.log(batch)
// batch.pop()
// console.log(batch)
// batch.pop()
// console.log(batch)



//shift

// let num=[1,2,3,4,5]
// num.shift()
// console.log(num)
// let alphabet=['a','b','c']
// // alphabet.shift()//b,c
// // alphabet.shift()//c
// // console.log(alphabet)
// alphabet.unshift('z')
// alphabet.unshift('w')
// console.log(alphabet)


// push pop shift unshift





// evenNumber[0]=0
// evenNumber[1]=2
// evenNumber[2]=4
// evenNumber[3]=6
// evenNumber[4]=8

// evenNumber.push(0)
// evenNumber.push(2)





// let evenNumber=[]
// for(let i=0;i<=100;i=i+2){
// // i=0//2//4/6
//     evenNumber.push(i)
// }

// console.log(evenNumber)


// let oddNum=[]

// // 1,3,5,7,9,11

// for(let i=1;i<=1000;i=i+2){
//     oddNum.push(i)
// }


// console.log(oddNum)





// count of total even number between 500 to 1500


// let evenNum=[]

// for(let i=500;i<=1500;i=i+2){
// evenNum.push(i)

// }

// console.log(evenNum.length)

// create a function which take two values as parameter and return the count of total 


// function evenNumCount(intialValue, lastValue) {

//     let evenNum = []

//     for (let i = intialValue; i <= lastValue; i++) {
//         // i=501%2==0
//         if (i % 2 == 0) {
//             evenNum.push(i)
//         }

//     }

//     console.log(evenNum)

// }
// evenNumCount(501, 1000)



// 0 1 1 2 3 5 8 13 21 34

// let fbSeries=[]
// let a=0;
// let b=1;
// let fbArray=[a,b]
// for(let i=2;i<20;i++){
// let c=a+b//1//2//3
// a=b//1//1//2
// b=c//1//2//3
// fbArray.push(c)
// }

// console.log(fbArray)


// function fbSeries(n){
//     let a=0;
//     let b=1;
//     let fbArray=[a,b]
//     for(let i=2;i<n;i++){
//     let c=a+b//1//2//3
//     a=b//1//1//2
//     b=c//1//2//3
//     fbArray.push(c)
//     }
    
//     console.log(fbArray)
// }

// fbSeries(20)


// slice 
// splice 
// concat
// indexOf
// lastIndexOf


// let age=[23,24,25,26,27,28]
// // age.unshift(44)
// let result=age.slice(0,5)
// console.log(result)

// slice 

// let name='shivam singh'
// console.log(name.slice(1,6))



// let course=['web devlopment','app development','business analyst','data scientist']
// console.log(course.slice(0,4))


// slice(SI,LI)


// 1  5

// 1
// 2
// 3
// 4

// 


//splice//

// splice(startingIndex,count,elements)


// let array=[23,5,31,4,123,65,12,7]
// console.log(array.splice(2,0,'deepak',55))

// console.log(array)


// let num=[2,4,6,8,10]
// num.splice(0,0,'bablu')
// console.log(num)

// let fruit=['apple','banana','grapes']



// use splice method






