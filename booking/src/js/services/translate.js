/**
 * Created by itankoua on 22/10/15.
 */

var language = {
    english : {
        name : "Name",
        password : "Password",
        firstName : "first Name"
    },
    french : {
        name : "Nom",
        password : "Mot de passe",
        firstName : "Prenom"
    }
}





function translate(keylang) {
    return language[keylang];
}

