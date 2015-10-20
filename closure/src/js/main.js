/*var x = 10;

function MaFonction(nombre) {
    var val = 1;

    return Ajouter() {
        nombre--;
        console.log(nombre);
        return nombre + val;
    }
}


var a = MaFonction(x);
x--;
a();
x = 50;
a();
x++;
a();

*/


var aFn = {
    x : 3,
    fn : function() {
        return {
            x : 2,
            getx : function () {
                return this.x;
            }
        }
    }
}

var x = aFn.fn().getx();

console.log(x, aFn.fn().getx());

