interface Quux {
    quuz: string
    corge: number
}

//metasyntactic variable names
function foo(bar: Quux){
    return "Hello, " + bar;
}
let baz = {quuz: "abc", corge: 123};

// console.log(foo("car"));
console.log(foo(baz));