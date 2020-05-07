var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];

for(var i= 0; i < a.length; i++) {
    b.push(a[i]);
}

var c =[];
var flag = false;

for(var outer=0; outer < b.length; outer++) {
    for(var inner= 0; inner < c.length; inner++) {
        if(b[outer] === c[inner]) {
            flag = true;
        }
    }
    if(flag == false) {
        c.push(b[outer]);
    }
    flag = false;
}
document.write(c); 