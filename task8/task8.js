// a
document.write("Counting: ");
for(var i= 1; i<=15; i++) {
    if(i === 15) {
        document.write(i);
    }
    else {
        document.write(i + ", ");
    }
}

// b
document.write("<br>Reverse Counting: ");
for(var i= 10; i>=1; i--) {
    if(i === 1) {
        document.write(i);
    }
    else {
        document.write(i + ", ");
    }
}

// even series
var limit = 20;
document.write("<br> Even: ");
for(var i= 0; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 === 0) {
            document.write(i + ", ");
        }
    }
    else {
        document.write(i);
    }
}

// Odd
var limit = 19;
document.write("<br> Odd: ");
for(var i= 0; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 !== 0) {
            document.write(i + ", ");
        }
    }
    else {
        document.write(i);
    }
}

// Series
var limit = 20;
document.write("<br> Series: ");
for(var i= 2; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 === 0) {
            document.write(i + "k, ");
        }
    }
    else {
        document.write(i + "k");
    }
}
