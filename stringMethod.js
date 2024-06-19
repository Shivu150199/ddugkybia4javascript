





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


let movie='avenger end game'
console.log(movie.startsWith('mv'))
console.log(movie.endsWith('game'))


let netflix = ['Bahubali', 'Spider Man', 'the pusrsuit of happiness', 'The boy who harness the winds', 'broken', 'cast away']

let input = prompt('write a movie name').trim().toLowerCase()
console.log(input)
let findMovie = false   
for (let i = 0; i < netflix.length; i++) {
    if (netflix[i].toLowerCase().startsWith(input)) {
        findMovie = true
    }

}

if (findMovie) {
    console.log('movie found')
} else {
    console.log('not found')
}










