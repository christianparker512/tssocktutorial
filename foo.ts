'use script';
//metasyntactic variable names
function foo(bar: "car"|"bus"){
    return "Hello, " + bar;
}
let baz = "ABC";

console.log(foo("car"));
console.log(foo("bus"));