//informcaion de los usuairios
const subirFoto = document.getElementById("subirFoto");
const fotoPerfil = document.getElementById("fotoPerfil");

subirFoto.addEventListener("change", function () {

    alert("imagen seleccionada");

    const archivo = this.files[0];

    if (archivo) {

        const lector = new FileReader();

        lector.onload = function (e) {

            fotoPerfil.src = e.target.result;

        };

        lector.readAsDataURL(archivo);
    }

});
//informcaion de los usuairios
