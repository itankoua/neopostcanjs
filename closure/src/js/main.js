/*var x = 10;
function MaFonction(nombre) {
    var val = 1;
    function Ajouter() {
        nombre--;
        console.log(nombre);
        //console.log(val);
        return nombre + val;
    }
    return Ajouter;
}

var a = MaFonction(x);
a();
a();
a();
*/

var aFn = {
    x : 3,
    fn : function () {
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
