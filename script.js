"use strict";
{
// declare and initialize variables
const name = "Mitch Cuckovich";

const age = 25;

const birthday = "January 24";

let detroitGC = true;


// array with 4 items
var lifeEvents= [
"I was born in Troy, Michigan.",
"I went to Hope College",
"I went to Junior Olympic when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
"I'm a graduate of the front-end bootcamp."
]


// if/else statement
if (detroitGC === true){
    console.log ("My name is " + name + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + ".")
} 
    else{
    console.log = ("My name is " + name + " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " + age + " years old and my birthday is on " + birthday + ".")

    }

// loop starting at 0  
var i;
for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}



// Declare and initialize a variable named counter to the value of 0

let counter= 0;
// Write a while loop that loops while true.

while (true){
    counter ++;
    var randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber ===5){
        console.log( '5 === 5. It took' + counter + 'iterations to randomly generate the number 5.');
        break
    }
    
    else{
        console.log(randomNumber + '!== 5')
    }
}
}