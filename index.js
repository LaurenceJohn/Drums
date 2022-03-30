// first method

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

// using anonymous function

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// });

var numberOfDrums = document.querySelectorAll(".drum").length

for (var counter = 0; counter < numberOfDrums; counter++){
    document.querySelectorAll(".drum")[counter].addEventListener("click", function(){
        // alert("I got clicked!");
        // this.classList.toggle("color-white");
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio ("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio ("./sounds/tom-3.mp3");
            tom3.play();
            break;
       
        case "d":
            var tom4 = new Audio ("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio ("./sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio ("./sounds/crash.mp3");
            crash.play();
            break;
       
         case "l":
            var kick = new Audio ("./sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

// Higher Order Functions

// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function subtract(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1 * num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// var answer = calculator(3,2,add);
// console.log(answer);

// var houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;

//     this.clean  = function(){
//         alert("Cleaning in progress...");
//     }
// }

// var houseKeeper2 = new HouseKeeper(13, "Julia", ["living room", "bedroom", "kitchen"]);
// console.log(houseKeeper2);

// Constructor Function Example

// function BellBoy(name, age, hasWorkPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;

        // this.movesuitCase = function(){
        //     alert("May I take your suitcase?");
        //     pickUpSuitcase();
        //     moveBy();
        // }
// }

// Initialise Object
// var bellBoy1 = new BellBoy("Timmy", 19, true, [French, English]);