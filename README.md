# Pokédex Pro v2.0 🔴⚪

[cite_start]Proyecto desarrollado para la materia de **Desarrollo de Software**, enfocado en el consumo de la **PokeAPI**, aplicación de **Clean Code** y diseño **UX/UI moderno**[cite: 3, 5].

## 👤 Trainer
* [cite_start]**Nombre:** Cristian David Díaz Tovar [cite: 2]

## 🎯 Objetivo
[cite_start]Construir una aplicación web funcional para visualizar, filtrar y analizar las estadísticas de los 151 Pokémon originales[cite: 4, 5].

---

## 🚀 Requerimientos Implementados

### 🎨 Frontend & UI
* [cite_start]**Diseño Responsivo:** Interfaz adaptada 100% para móviles y escritorio[cite: 9].
* [cite_start]**Tipografía:** Uso de `'Press Start 2P'` para títulos y `'Montserrat'` para el cuerpo de texto[cite: 10].
* [cite_start]**Identidad Visual:** Header con efecto **Glassmorphism** (degradado y desenfoque) y **Favicon** de Pokébola[cite: 11, 12].
* [cite_start]**Adaptabilidad Móvil:** En pantallas menores a **600px**, las tarjetas de la lista ocultan la imagen para optimizar el espacio, mostrando solo Nombre e ID[cite: 12].

### ⚙️ Lógica y Optimización
* [cite_start]**Carga Paralela:** Implementación de `Promise.all()` para cargar los 151 Pokémon simultáneamente, mejorando la velocidad de respuesta[cite: 15].
* [cite_start]**Buscador Real-Time:** Filtro dinámico por Nombre o ID sin recarga de página[cite: 16].
* [cite_start]**Panel Dinámico:** El borde y las barras de estadísticas cambian de color según el tipo principal del Pokémon (Fuego = Naranja, Agua = Azul, etc.)[cite: 17].
* [cite_start]**Manejo de Datos:** Conversión de unidades de la API (hectogramos a **kg** y decímetros a **metros**)[cite: 18].
* [cite_start]**Lazy Loading:** Optimización de carga de imágenes para mejorar el rendimiento[cite: 23].

---

## 🛠️ Tecnologías Utilizadas
* [cite_start]**HTML5:** Estructura semántica[cite: 20].
* [cite_start]**CSS3:** Variables CSS, Flexbox/Grid y Media Queries[cite: 20].
* [cite_start]**JavaScript (Vanilla):** Consumo de API asíncrona y manipulación del DOM[cite: 21].

---

## 📊 Criterios de Evaluación Cumplidos
| Criterio | Descripción | Peso |
| :--- | :--- | :--- |
| **Funcionalidad** | [cite_start]Buscador y selección sin errores en consola[cite: 23]. | 40% |
| **Diseño (UI)** | [cite_start]Fuentes, degradados y estilos dinámicos aplicados[cite: 23]. | 30% |
| **Optimización** | [cite_start]Uso de `Promise.all()` y lazy loading[cite: 23]. | 20% |
| **Responsive** | [cite_start]Adaptación móvil (ocultar imágenes en cards)[cite: 23]. | 10% |

---

> [cite_start]"El código limpio no es el que funciona, sino el que otro desarrollador puede entender y mejorar sin dolor"[cite: 27].
