var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userChoice = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?", "cookie");

var found = false;
for(var index= 0; index < A.length; index++) {
    if(A[index] === userChoice) {
        alert(userChoice + " is available for purchase");
        found = true;
    }
}

if(found == false) {
    alert("Sorry! " + userChoice + " is not available now");
}

