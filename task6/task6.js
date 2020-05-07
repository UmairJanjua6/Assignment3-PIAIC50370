var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
aCities.pop();
    o.shift();
for(var index= 0; index < aCities.length; index++) {
    document.write((index + 1) + o[index] + " choice is " + aCities[index]);
    document.write("<br>");
}