//you'd use an interface if you'd like to do an interface.
//need an equal sign if you use a type. You don't need one with an interface.
class Grault {
    private garply: string

    constructor(quuz: Quux, waldo: number[]){
        this.garply = quuz.quuz + " " + quuz.corge + " " + waldo
    }
    public getGarply() {
        return this.garply
    }
}

interface Quux {
    quuz: string
    corge: number
}

//metasyntactic variable names
function foo(bar: Quux){
    return "Hello, " + bar.quuz + " " + bar.corge ;
}
let baz = {quuz: "abc", corge: 123};
let fred: Grault = new Grault (baz, [1,2,3])

// console.log(foo("car"));
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply()