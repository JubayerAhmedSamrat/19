//callback
function  simple(a,b,callback){
    const c = a + b;
    const d = a - b;

    const result = callback(c, d);
    return result;
}

function sum(first, second){
    const summation = first + second;
    return summation;
}

const result = simple(20, 30, function(a, b){
    return a - b;

});
const result2 = simple(30, 10, function(a, b){
    return a * b;
});

console.log(result2);