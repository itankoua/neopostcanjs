/**
 * Created by itankoua on 16/10/15.
 */
'use script';

var todos = new can.List([
    { name : "first", completed : false, description :"this is the first todo "},
    { name : "second", completed : false, description :"this is the second todo "},
    { name : "third", completed : false, description :"this is the third todo "}
]);


var model = can.Model.extend({

});

var frag = can.view("/booking/src/js/modules/model/model.ejs", {
    todos : todos
});


$("#out").html(frag);