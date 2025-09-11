let max = prompt("Enter your max number :");

let generated_no = Math.floor(Math.random() * max) + 1

while(true){
    if(max == "quit"){
        console.log("You are Quitted");
        break;
    }

    if(generated_no == max){
        console.log("Congrates! YOU GUESS RIGHT NO.")
        break;
    } else if(generated_no > max){
        max = prompt("Hint! You  guess small try again!")
      } else {
        max = prompt("Hint! You  guess large try again!")
    }
}