//you'd use an interface if you'd like to do an interface.
//need an equal sign if you use a type. You don't need one with an interface.
var Grault = /** @class */ (function () {
    function Grault(quuz, waldo) {
        this.garply = quuz.quuz + " " + quuz.corge + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
//metasyntactic variable names
function foo(bar) {
    return "Hello, " + bar.quuz + " " + bar.corge;
}
var baz = { quuz: "abc", corge: 123 };
var fred = new Grault(baz, [1, 2, 3]);
// console.log(foo("car"));
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply();
