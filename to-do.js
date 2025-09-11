let todo=[];
let req = prompt("Please Enter your request");

while(true){
    if(req == "quit"){
        console.log("You quitted");
        break;
    }

    if(req == "list"){
        console.log("-----------");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    } else if(req == "add"){
        let task = prompt("Enter Your Task :");
        todo.push(task);
        console.log("Task added");
    } else if(req == "delete"){
        let idx = prompt("Please enter index no. of task which you want to delete :")
        todo.splice(idx, 1)
    } else{
        console.log("Please enter valid request")
    }
    req = prompt("Please enter your request :")
}