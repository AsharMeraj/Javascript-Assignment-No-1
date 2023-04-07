console.log("                       Task (One!)");
alert("Lets find which number is greater between two numbers");

let user1 = +prompt("Enter your first number: ");
let user2 = +prompt("Enter your second number: ");
if(user1 > user2){
    console.log("The greater number is: " + user1)
} else{
    console.log("The greater number is: " + user2)
}



console.log("                       Task (Two!)");
alert("Lets find out the sign of the given number");

let user = prompt("Enter your number: ");
if(user > 0){
    alert("The sign is +");
} else{
    alert("The sign is -");
}
console.log(user);




console.log("                       Task (Three!)");
alert("Now lets find out the bigger number between 5 numbers");

let input1 = prompt("Enter your first number: ");
let input2 = prompt("Enter your second number: ");
let input3 = prompt("Enter your third number: ");
let input4 = prompt("Enter your fourth number: ");
let input5 = prompt("Enter your fifth number: ");

let num = input1;

if(input2 > num){
    num = input2
}
if(input3 > num){
    num = input3
}
if(input4 > num){
    num = input4
}
if(input5 > num){
    num = input5
}
console.log("The greater number is: " + num);




console.log("                      Task (Four!)");
alert("lets name the number even or odd")

for(let i=0; i<=15; i++){
    if((i % 2) == 0){
        console.log(i + " even");
    }else{
        console.log(i + " odd");
    }
}





console.log("                      Task (Five!)")
alert("Now lets find the average marks")

let marks1 = +prompt("Enter your English marks: ");
let marks2 = +prompt("Enter your Chemistry marks: ");
let marks3 = +prompt("Enter your Physics marks: ");
let answer = (marks1 + marks2 + marks3)/3
if(answer <= 60){
    console.log("You got grade F!" + " The average is:" + answer)
}
else if(answer <= 70 || answer >= 60){
    console.log("You got grade D!" + " The average is:" + answer)
}
else if(answer <= 80 || answer >= 70){
    console.log("You got grade F!" + " The average is:" + answer)
}
else if(answer <= 90 || answer >= 800){
    console.log("You got grade F!" + " The average is:" + answer)
}
else if(answer <= 100 || answer >= 90){
    console.log("You got grade F!" + " The average is:" + answer)
}





console.log("                      Task (Six!)");
alert("Now lets make the fizz buzz game!");
for(let i=1; i<=100; i++){
    if((i % 3)==0 && (i % 5)==0){
        console.log("FizzBuzz!");
    } else if((i % 5)==0){
        console.log("Buzz!");
    } else if((i % 3)==0){
        console.log("Fizz!")
    } else{
        console.log(i);
    }
}


console.log("                      Task (Seven!)")
alert("Now lets make the star pattern");
let row = 5;
let pattern = "";

for(let i=1; i<=row; i++){
    for(let j=1; j<=i; j++){
        pattern += "*";
        // console.log(pattern);
    }
    pattern += "\n"
}

console.log(pattern);