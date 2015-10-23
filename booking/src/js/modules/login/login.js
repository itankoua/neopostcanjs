/**
 * Created by itankoua on 16/10/15.
 */
"use strict";

var lang = "french";

var data = new can.Map({
    model: translate(lang),
    changeLanguage : function() {
        if(lang === "french") {
             lang = "english";
        } else {
             lang = "french";
        }
        this.attr('model',translate(lang));
    }
});

var frag = can.view("/booking/src/js/modules/login/login.ejs",data);

$("#out").html(frag);