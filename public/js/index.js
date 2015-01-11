/**
 * Created by Paul on 1/8/2015.
 */
(function () {
  "use strict";

  // TODO: Stop using alert
  // alert("The code is running!");


  /**
   * Submits an order
   * @param parameters
   */
  function submitOrder(parameters) {
    var validate=parameters.validate;
    var size=parameters.size;
    var crust=parameters.crust;
    var toppings=parameters.toppings;
    alert("not implemented");
  }

  $(document).ready( function() {
    $("#orderForm").on("submit", function() {
      submitOrder({validate:false,size:"large",crust:"thin",toppings:["pepperoni","sausage"]});
      return false;
    });
  });

  var dog = new Animal();
  dog.name = "Lucky";
  dog.legCount = 3;
  dog.feed("Lamb Shank");

  // HTML
  var toInsert = "<div>\n  <ul>\n    <li>Item1</li>\n    <li>Item2</li>\n    <li>Item3</li>\n    <li>Item4</li>\n    <li>Item5</li>\n  </ul>\n</div>";

  // Javascript
  var toExecute = "var x=0;\nx++;\nx=5";

  // RegExp
  var ex = "[0-9A-Za-z ]*";

}());
