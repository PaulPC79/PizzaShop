/**
 * Created by Paul on 1/8/2015.
 */
var FooBar = (function () {
    function FooBar() {
        this.fullName = "Paul Halliday";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map