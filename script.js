// let str = "apple";
//       if (str[0] === a && str.lenght > 3) {
//         console.log("good string");
//       } else {
//         console.log("not good string");
//       }


// let color = "green";
// switch(color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("Slow Down");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//    default :
//     console.log("Borken light")
// }

// let day = prompt("Enter day no.");

// switch(day){
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }



// let nums = [[1,2],[3,4],[4,5]]
// console.log(nums);


// let array = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(array)


// for printing table
// let n = prompt("Enter Your Number :");
// n = parseInt(n);

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
// }

//for making game

const favourite_Serial = "Krishnaleela";

let guess_serial = prompt("Guess my favrouite serial :");

while((guess_serial != favourite_Serial) && (guess_serial != "quit")){

    guess_serial = prompt("Sorry Incorrect-Try Again");
}
if(guess_serial==favourite_Serial){
    console.log("Congrates! You guess right");
}

else{
    console.log("You quit")
}

//using nested loops for nested arrays

// let subject = [["Maths","Science","English"],["History","Geography","Politics"]];

// for(i=0;i<subject.length;i++){
//     console.log(`list ${i} ,${subject[i]}`);
//     for(j=0;j<=subject.length;j++){
//         console.log(subject[i][j]);
//     };
// }

// let heroes = [["A","B","C"],["D","E","F"]];

// for(list of heroes){
//     console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }



