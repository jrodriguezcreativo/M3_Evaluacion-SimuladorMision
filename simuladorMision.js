// ---
// Detectar entorno (Node.js o navegador) y definir función de entrada
// ---
let obtenerEntrada;

if (typeof window === "undefined") {
  // Node.js
  const promptSync = require("prompt-sync")({ sigint: true });
  obtenerEntrada = (mensaje) => promptSync(mensaje);
} else {
  // Navegador
  obtenerEntrada = (mensaje) => window.prompt(mensaje);
}

// ---
// Fase 1: configuración de misión
// ---

// Variables iniciales
let nombreNave = "capsule1";
let estadoMision = true;

// Recursos generados aleatoriamente (0 a 100)
let recursos = {
  agua: Math.floor(Math.random() * 101),
  comida: Math.floor(Math.random() * 101),
  energia: Math.floor(Math.random() * 101)
};

// Objeto principal de la nave
let nave = {
  nombre: nombreNave,
  modelo: "Serie-A1",
  tripulacion: [],
  estado: estadoMision,

  // Mostrar estado de la misión
  mostrarEstado: function () {
    console.log(`Nave: ${this.nombre} (${this.modelo})`);
    console.log(`Estado: ${this.estado ? "Activa" : "Inactiva"}`);
  },

  // Reportar recursos disponibles
  reportarRecursos: function () {
    console.log(
      `Recursos -> Agua: ${recursos.agua}, Comida: ${recursos.comida}, Energía: ${recursos.energia}`
    );
  }
};

// ---
// Fase 2: registro de tripulantes
// ---

// Agregar un tripulante
function agregarTripulante(nombre, rol) {
  let saludInicial = Math.floor(Math.random() * 101);
  let tripulante = {
    nombre: nombre,
    rol: rol,
    salud: saludInicial
  };
  nave.tripulacion.push(tripulante);
}

// Mostrar tripulación
function mostrarTripulacion() {
  console.log("=== Tripulación de la nave ===");
  nave.tripulacion.forEach((t, i) => {
    console.log(`${i + 1}. ${t.nombre} - ${t.rol} - Salud: ${t.salud}`);
  });
}

// Agregar 5 tripulantes iniciales
agregarTripulante("Bulma", "Piloto");
agregarTripulante("Yamcha", "Ingeniero");
agregarTripulante("Krilin", "Mecánico");
agregarTripulante("Gohan", "Explorador");
agregarTripulante("Piccolo", "Comandante");

// Mostrar tripulación inicial
mostrarTripulacion();

// ---
// Fase 3: simulación de eventos
// ---

function explorar() {
  console.log("La nave está explorando un nuevo planeta...");

  recursos.agua -= 10;
  recursos.comida -= 5;
  recursos.energia -= 15;

  if (recursos.agua < 0) recursos.agua = 0;
  if (recursos.comida < 0) recursos.comida = 0;
  if (recursos.energia < 0) recursos.energia = 0;

  nave.tripulacion.forEach(t => {
    let perdida = Math.floor(Math.random() * 20);
    t.salud -= perdida;
    if (t.salud < 0) t.salud = 0;
  });

  console.log("Exploración completada. Recursos y salud actualizados.");
}

function comer() {
  console.log("Los tripulantes están comiendo...");

  if (recursos.comida >= 10) {
    recursos.comida -= 10;
    nave.tripulacion.forEach(t => {
      t.salud += 10;
      if (t.salud > 100) t.salud = 100;
    });
    console.log("La tripulación ha recuperado salud. Comida consumida.");
  } else {
    console.log("No hay suficiente comida para la tripulación.");
  }
}

function descansar() {
  console.log("La tripulación está descansando...");

  recursos.energia -= 5;
  if (recursos.energia < 0) recursos.energia = 0;

  nave.tripulacion.forEach(t => {
    t.salud += 5;
    if (t.salud > 100) t.salud = 100;
  });

  console.log("La tripulación ha recuperado algo de salud. Energía consumida.");
}

// ---
// Fase 4: reportes y lógica avanzada
// ---

function promedioSalud() {
  let total = 0;
  nave.tripulacion.forEach(t => (total += t.salud));
  let promedio = total / nave.tripulacion.length;
  console.log(`Promedio de salud de la tripulación: ${promedio.toFixed(2)}`);
}

function contarSaludBaja() {
  let cantidad = nave.tripulacion.filter(t => t.salud < 50).length;
  console.log(`Tripulantes con salud menor a 50: ${cantidad}`);
}

function reporteCompleto() {
  console.log("=== Reporte completo ===");
  nave.mostrarEstado();
  nave.reportarRecursos();
  mostrarTripulacion();
  promedioSalud();
  contarSaludBaja();
}

// ---
// Fase 5: bucle principal de la misión
// ---

function iniciarSimulador() {
  console.log("Simulación iniciada. Usa los prompts para interactuar con la misión.");

  let opcion;

  while (estadoMision) {
    opcion = obtenerEntrada(
      "=== MENÚ DE MISIÓN ===\n" +
        "1. Explorar\n" +
        "2. Comer\n" +
        "3. Descansar\n" +
        "4. Reportar estado\n" +
        "5. Finalizar misión\n" +
        "Elige una opción (1-5):"
    );

    // Detectar cancelación
    if (opcion === null) {
      console.log("Simulación cancelada. Volviendo al inicio.");
      return; // salir de iniciarSimulador()
    }

    opcion = Number(opcion);

    // Detectar entradas no numéricas
    if (isNaN(opcion)) {
      console.log("Entrada inválida. Intenta nuevamente.");
      continue;
    }

    switch (opcion) {
      case 1:
        explorar();
        break;
      case 2:
        comer();
        break;
      case 3:
        descansar();
        break;
      case 4:
        reporteCompleto();
        break;
      case 5:
        console.log("Finalizando misión...");
        estadoMision = false;
        break;
      default:
        console.log("Opción no válida, intenta de nuevo.");
        break;
    }
  }
}

// Ejecutar automáticamente en Node.js
if (typeof window === "undefined") {
  iniciarSimulador();
}
