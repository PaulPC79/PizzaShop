/**
 * Created by Paul on 1/8/2015.
 */
class FooBar {
    private fullName = "Paul Halliday"
    showMe() {
        console.log(this.fullName);
    }
}

var foo = new FooBar();
foo.showMe();