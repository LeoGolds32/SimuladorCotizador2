const formNombre = document.getElementById("form-nombre");
const modal = document.getElementById("modal");
const contenidoPrincipal = document.getElementById("contenido-principal");
const bienvenida = document.getElementById("bienvenida");

formNombre.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  if (nombre && apellido) {
    bienvenida.textContent = `¡Hola, ${nombre} ${apellido}! Completa los datos para cotizar tu seguro.`;
    modal.style.display = "none";
    contenidoPrincipal.style.display = "block"; 
  } else {
    alert("Por favor, completa ambos campos.");
  }
});

document.getElementById("cotizador-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const cobertura = parseFloat(document.getElementById("cobertura").value);

  if (edad <= 0 || cobertura <= 0) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  let costoBase;
  switch (tipo) {
    case "auto":
      costoBase = cobertura * 0.05;
      break;
    case "vida":
      costoBase = cobertura * 0.03;
      break;
    case "salud":
      costoBase = cobertura * 0.04;
      break;
    default:
      costoBase = 0;
  }

  let ajusteEdad = 0;
  if (edad < 25) {
    ajusteEdad = costoBase * 0.20;
  } else if (edad > 60) {
    ajusteEdad = costoBase * 0.30;
  }

  const costoFinal = costoBase + ajusteEdad;
  const resultado = document.getElementById("resultado");
  resultado.textContent = `El costo total del seguro es: $${costoFinal.toFixed(2)}`;
});
