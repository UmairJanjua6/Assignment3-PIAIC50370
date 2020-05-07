var citiesNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<b>Cities list:</b><br>");
for(var index= 0; index < citiesNames.length; index++) {
    
    if(index < citiesNames.length - 1) {
        document.write(citiesNames[index] + " ,");
    }
    else {
        document.write(citiesNames[index]);
        document.write("<br><br>");
    }
}

document.write("<b>Selected Cities list:</b><br>");
var selectedCities = citiesNames.slice(2, 4);

document.write(selectedCities);