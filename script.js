/*let age = document.getElementById("age").value;
let voteable = (age < 18) ? "Too young":"Old enough";
document.getElementById("demo").innerHTML = voteable + " to vote.";
function myFunction() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " to vote";
  }

    let name = Null;
    let text = "missing";
    let result = name ?? text;
    document.getElementById("demo").innerHTML = "The name is " + result; 
    
    
    let name = "Usama";
    let text = "missing";
    let result = name ?? text;
    document.getElementById("demo").innerHTML = "The name is " + result; */



const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;
document.getElementById("demo").innerHTML = name;
 