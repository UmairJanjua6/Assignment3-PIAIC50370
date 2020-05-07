var eduQualifications = ["SSC", "HSSC", "BCS", "BS", "BCOM", "MS", "M. Pill", "PhD"];

document.write("<h2>Qualifications</h2>");
for(var index= 0; index < eduQualifications.length; index++) {
    document.write( (index + 1) + ") " + eduQualifications[index] + "<br>");
}