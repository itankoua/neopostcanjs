/**
 * Created by itankoua on 16/10/15.
 */
"use strict";



var model2 = {
    name: "Ivan3",
    lastname: "TNKOUA3"
}

var currentlang = translate("french");


var frag = can.view("/booking/src/js/modules/login/login.ejs",
    {model: currentlang});


$("#out").html(frag);