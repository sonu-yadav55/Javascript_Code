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

// const favourite_Serial = "Krishnaleela";

// let guess_serial = prompt("Guess my favrouite serial :");

// while((guess_serial != favourite_Serial) && (guess_serial != "quit")){

//     guess_serial = prompt("Sorry Incorrect-Try Again");
// }
// if(guess_serial==favourite_Serial){
//     console.log("Congrates! You guess right");
// }

// else{
//     console.log("You quit")
// }

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


//higher order function

function oddeven(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }

        return even;
    }
    else{
        console.log("Wrong request please try again!")
    }
    
}

let request = "odd"


// using foreach 
let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el)
};

arr.forEach(print);

let print1 = (el)=>{
    console.log(el)
}

//direct using foreach
arr.forEach(print1);

//using arrow function in foreach
arr.forEach(element => {
    console.log(element)
});

let student = [

    {
    name:"sonu",
    marks:95,
},
{
    name:"anushka",
    marks:94,
},

];

student.forEach((student) =>{
    console.log(student.name)
    console.log(student.marks)
    console.log(student)
});

let gpa = student.map((el) =>{
    return el.marks/10
});
console.log(gpa);
// now we used map function(used for doubling the value and create new array)

let num = [1,2,3,4,5];
let double = num.map((el) =>{
    return el*2;
});

console.log(double);

//now we use reduce function

let number = [1,2,3,4,5];
let finalsum = number.reduce((res,el) => (res+el));
console.log(finalsum);


//finding maximum value  from in array using reduce function

let arrvalue = [23,24,,35,56,67,63,34,78,66,98];

let maxnum = arrvalue.reduce((max,el) => {
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

console.log(maxnum);

//check number of array are multiple of ten or not

let numa = [10,20,30,40,50];

let ans = numa.every((el) => el%10==0);
console.log(ans);


//using spread function in javascript
let char = "Hii World Of Jacascript";
console.log(...char);

let even = [2,4,6,8,10]
let odd = [1,3,5,7,9]

// we merge both array in singlr array

console.log(...even, ...odd); 

//spread with object literal

let data = {
    email: "a@gmail.com",
    password: "12345"
}

let copydata = {...data,id:1}

console.log(copydata);

let arrs = [23,54,56,22,54,86]

arrdata = {...arrs}

console.log(arrdata);

//Destructuring method
//storing value of array into multiple variable

let names = ["Sonu","Shivsankar","Shayma","Krish","Radhe","Krishna"];
let [winner,runnerup,...others] = names;
console.log("Winner :",winner,"RunnerUp :",runnerup);

// Destructuring with object

let Student = {
    name:"Sonu",
    class:10,
    email:"s@gmail.com",
    password:"12345",
    city:"Mumbai",
}

let {name,email} = Student
console.log(name,email);