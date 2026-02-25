# Pokédex Pro v2.0 🔴⚪

## 👤 Información del Proyecto
* **Trainer:** Cristian David Díaz Tovar
* **Materia:** Desarrollo de Software
* **Institución:** [Campuslands]
* **Objetivo:** Aplicación web de alto rendimiento para la visualización y análisis de los 151 Pokémon de la región de Kanto, utilizando la [PokeAPI](https://pokeapi.co/).

---

## 🚀 Requerimientos Técnicos Cumplidos

### 🎨 UI/UX & Diseño Responsivo
- **Glassmorphism:** Header con degradado dinámico y efecto de desenfoque de fondo (`backdrop-filter`).
- **Tipografía Dual:** Implementación de Google Fonts mediante `@import`:
  - `'Press Start 2P'` para un estilo retro en títulos y IDs.
  - `'Montserrat'` para descripciones y datos técnicos.
- **Mobile First & Adaptabilidad:** - Diseño optimizado para Desktop y Tablet con panel lateral de estadísticas.
  - **Breakpoint (< 600px):** Las tarjetas de la lista ocultan las imágenes automáticamente para priorizar la velocidad de lectura y el espacio en pantalla.

### ⚙️ Ingeniería de Software (JavaScript)
- **Carga Asíncrona Pro:** Uso estricto de `Promise.all()` para disparar 151 peticiones simultáneas, reduciendo el tiempo de carga inicial en un 80% comparado con bucles tradicionales.
- **Filtro Indexado:** Motor de búsqueda en tiempo real que procesa nombres e IDs mediante el evento `input`.
- **Sanitización y Conversión de Datos:**
  - Peso: De hectogramos a **Kilogramos (kg)**.
  - Altura: De decímetros a **Metros (m)**.
- **Interfaz Reactiva:** El panel de detalles actualiza el color del borde y las barras de progreso (Stats) dinámicamente según el tipo elemental del Pokémon seleccionado.

---

## 🛠️ Stack Tecnológico
* **HTML5:** Marcado semántico y estructura de componentes.
* **CSS3:** Variables globales, Flexbox, CSS Grid y animaciones de transición.
* **Vanilla JavaScript:** Manipulación eficiente del DOM y manejo de la Fetch API.

---

## 📂 Estructura de Archivos
```text
├── index.html      # Estructura principal y contenedores
├── style.css       # Reglas de diseño, fuentes y Media Queries
├── app.js          # Lógica de negocio y consumo de API
└── assets/         # Favicon y recursos locales
