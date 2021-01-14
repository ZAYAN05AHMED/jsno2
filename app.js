            // CHANGING CASE 




// Q 1. Write a program that takes user input. Convert and show the input
//  in capital letters.



// ANS
// var a =  prompt("Write your name please");
//  a = a.toUpperCase();
// alert(a);



// Q2. Write a program that takes user input. Convert and show the
// input in title case.



// ANS 
// var a = prompt("Write your name please");
// if(a === a.toLowerCase()){
//     alert("please write in upper case")
// }else{
//  a = a.toLowerCase();
//  alert(a)
// }





                    //    Strings: measuring length and extracting parts



// Q1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.



// ANS 
// var a = prompt("Enter phone model");
// document.write(a);
// var b = a.length;
// document.write(" <br /> "+b)



// Q2. Write a program to display the last character of a user input.



// ANS 
// var str = prompt("enter your city");
// var res = str.charAt(str.length-1);
// alert(res);




                                //    Strings: finding segments




// Q1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.



// ANS 
// var a = "Pakistani"
// var b = a.indexOf("n")
// alert(b)



// Q2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.



// ANS 
// var a = prompt("Enter your name");
// if(a.match(/[\@\.\,\!\?\\\$\#\^\&\*\(\)\[\]\|\~\`\"\<\,\;\'\=\+\_]/)===null){
//       alert("valid username")
// }else{
//     alert("invalid username")
// }


// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.



// ANS 

// var a = "the quick brown fox jumps over the lazy dog"
// var b = (a.match(/the/g)).length
// alert(b)



    //   OR 



// let str = "the quick brown fox jumps over the lazy dog",
//     split = str.split(" "),
//     obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }

// console.log(obj)




                //    Strings: finding a character at a location





// Q1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.



// ANS 
// var a = "Pakistani";
// var b = a.charAt(3)
// alert(b)



                        //  Strings: replacing characters




// Q1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.



// ANS 
// var a = "hyderabad";
// var b =a.replace("hyder","islam")
// alert(b)



// Q2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



// ANS 
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var b = message.replace(/and/g,"&")
// alert(b)






                        //  Rounding numbers






// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number




// ANS 
// var a = +prompt("enter a value in points");
// document.write("number is "+ a);
// var b = Math.round(a)
// document.write("<br />round of is " + b);
// var c = Math.ceil(a);
// document.write("<br /> ceil value is " +c);
// var d = Math.floor(a); 
// document.write("<br /> floor value is " +d)





// Q2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// ANS 
// var a = +prompt("enter a value in negative and in points");
// document.write("number is "+ a);
// var b = Math.round(a)
// document.write("<br />round of is " + b);
// var c = Math.ceil(a);
// document.write("<br /> ceil value is " +c);
// var d = Math.floor(a); 
// document.write("<br /> floor value is " +d)




                  
                                //   Generating random numbers





// Q1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.




// ANS 
// var a = Math.random()*6;
// a =a.toFixed(0);
// document.write(a)




// Q2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails




// ANS 
// var a = Math.random()*2;
// document.write(a)
// a = Math.ceil(a)
// document.write("<br />"+a)
// if( a == 1){
//     document.write( "<br />Heads")
// }else{
//     document.write("<br />Tails")
// }





// Q3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.



// ANS 
// var a = Math.random()*9
// a = Math.ceil(a)
// var b = prompt("enter secret number")
// if(a == b){
//     alert("CONGRATS")
// }else{
//     alert("SORRY")
// }
// document.write(a)




                    //   Converting strings to integers and decimals






// Q1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// ANS 
// var a = prompt("enter your weight");
// var b = parseInt(a)
// document.write(b+"kgs")





                        // Converting strings to numbers, numbers to strings




// Q1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())



// ANS 
// var a = "472";
// document.write("<br />"+a)
// var b = typeof(a)
// document.write("<br />"+b)
// var c = Number(a)
// document.write("<br />"+c)
// var d = typeof(c)
// document.write("<br />"+d)





// Q2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// ANS 
// var a = 35.36;
// document.write("<br />"+a)
// var b = typeof(a)
// document.write("<br />"+b)
// var c = a.toString()
// document.write("<br />"+c)
// var d = typeof(c)
// document.write("<br />"+d)
// var e = c.replace('.',"")
// document.write("<br />"+e)





                        //   Controlling the length of decimals






// Q1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666




// ANS 
// var percentage = 30 / 45 * 100;
// document.write("<br />"+percentage)
// var fix = percentage.toFixed(2);
// document.write("<br />"+fix)
