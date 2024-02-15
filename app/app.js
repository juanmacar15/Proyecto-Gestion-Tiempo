
//Variables documento

const btnCerrarSesion = document.querySelector('#btn-cerrar');

//Variable
let estado;

btnCerrarSesion.addEventListener('click', (e)=>{
    Swal.fire({
        text: "Estas seguro que quieres salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si deseo salir!"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = '../index.html';
        };
      });
});