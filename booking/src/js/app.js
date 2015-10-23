/**
 * Created by itankoua on 16/10/15.
 */
"use strict";


can.Component.extend({
    tag: "myTag",
    template: '<h1 can-click="updateSubject"> <content></content> {{ subject }} World  </h1>',
    scope: {
        subject: "Hello",
        updateSubject: function () {
            this.attr("subject", "Bye bye");
        }
    }
});

var model = can.Model.extend({
    findAll: 'GET /todos.json',
    findOne: 'GET /todos/{id}.json',
    create:  'POST /todos.json',
    update:  'PUT /todos/{id}.json',
    destroy: 'DELETE /todos/{id}.json'
},{});

var model2 = {
    name: "Ivan3",
    lastname: "TNKOUA3"
}


var fullModel = {
    one: model,
    two: model2
}
/*
var frag = can.view("file:///Users/itankoua/Documents/SPBASE/NEOPOST/neopostcanjs/booking/src/js/modules/home/home.ejs",
    {model: fullModel});


$("#out").html(frag);

    */