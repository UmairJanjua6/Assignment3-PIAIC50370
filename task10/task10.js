// Sort an array from smallest to largest value
var A = [20,53,78,4,91,12];
var temp;
for(var i= 0; i <A.length; i++) {
    for(var j= i; j < A.length; j++) {
        if(A[i] > A[j]) {
                temp  =A[i];
				A[i]=A[j];
                A[j]=temp;
            }
        
    }
}


document.write(A);


// Using sort algorithm
// A.sort(function(a, b) {
//     return a-b }
// );

// document.write(A);