// Remove all duplicate items from an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var uniqueArr1 = [];
var found = false;

for(var outer= 0; outer < arr1.length; outer++) {
    for(var inner= 0; inner < uniqueArr1.length; inner++) {
            if(arr1[outer] === uniqueArr1[inner]) {
                found = true;
            }  
    }
    if(found == false) {
        uniqueArr1.push(arr1[outer]);
        }
    found = false;
}
document.write("Sample Array : " + arr1);
document.write("<br>Output Array : " + uniqueArr1);