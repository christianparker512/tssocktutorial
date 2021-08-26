//metasyntactic variable names
function foo(bar) {
    return "Hello, " + bar;
}
var baz = { quuz: "abc", corge: 123 };
// console.log(foo("car"));
console.log(foo(baz));
