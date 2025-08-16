# M3_Evaluacion-SimuladorMision

## Descripción
Programa en JavaScript que simula una misión espacial interactiva por consola.  
Permite configurar una nave, registrar tripulantes, gestionar recursos y tomar decisiones durante la misión. El flujo del programa se realiza con `console.log()` y `prompt()`.

## Objetivos
- Practicar el uso de variables, estructuras condicionales y bucles.
- Implementar funciones para modularizar el código.
- Utilizar objetos y arreglos para administrar información.
- Manejar datos dinámicamente durante la simulación.

## Requisitos de la evaluación
- Configuración inicial de la misión (nave, recursos, estado).
- Registro y gestión de tripulantes.
- Simulación de eventos con reducción o aumento de recursos/salud.
- Reportes: promedio de salud, cantidad de tripulantes con salud baja y estado de recursos.
- Control de condiciones límite (recursos ≥ 0, salud ≤ 100).

## Tecnologías utilizadas
- **HTML5** (para entorno de prueba en navegador)
- **JavaScript** (ejecución en Node.js o navegador)

## Estructura del proyecto
```
M3_Evaluacion-SimuladorMision
|-- favicon.ico
|-- index.html
|-- readme.md
|-- simuladorMision.js
```

## Instrucciones de uso

### Opción 1 – Ejecutar en Node.js
1. Abrir una terminal.
2. Ubicarse en la carpeta del proyecto.
3. Instalar prompt-sync: `npm install prompt-sync`
4. Ejecutar:
   ```bash
   node simuladorMision.js
   ```

### Opción 2 – Ejecutar en navegador
1. Abrir el archivo index.html en un navegador web.
2. Abrir las herramientas de desarrollador (F12).
3. Ir a la pestaña "Consola".
4. Hacer clic en el botón **Iniciar simulación**.

---

**Autor:** Jorge Rodríguez
