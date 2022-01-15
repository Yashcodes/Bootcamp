let counter = 0;
increment = () =>{
    counter = counter+1;
    document.getElementById("counter").innerHTML = counter;
    // console.log(counter);
}

decrement = () =>{
    counter = counter-1;
    document.getElementById("counter").innerHTML = counter;
    // console.log(counter);
}

reset = () =>{
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    // console.log(counter);
}