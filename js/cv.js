let email = document.getElementById("email");

email.addEventListener('mouseover', (mostrarMail));

function bigImg(x) {
  imagenGrande = x.style.width = "170px";
}

function normalImg(x) {
  x.style.width = "150px";
}

function mostrarMail() {
  document.getElementById("e-mail").style.display = "block";
};

function ocultarMail() {
  document.getElementById("e-mail").style.display = "none";
};

function mostrarTelefono() {
  document.getElementById("celular").style.display = "block";
}  

function ocultarTelefono() {
  document.getElementById("celular").style.display = "none";
};

function mostrarUbicacion() {
  document.getElementById("ciudad").style.display = "block";
}

function ocultarUbicacion() {
  document.getElementById("ciudad").style.display = "none";
}

