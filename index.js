//fizz % 3 = 0 buzz % 5 = 0 fizzbuzz % 3 && 5
var output = [];
var count = 1;

function fizzbuzz(){
    output.push(count);
    if (count % 3 == 0 && count % 5 == 0){
        console.log("FizzBuzz");
    }
       else if (count % 3 == 0){
        console.log("fizz");
       }
       else if (count % 5 == 0){
        console.log("buzz");
    }
       else {
        console.log(output);
    }
    console.log(output);
    count++;
    }
