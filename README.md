# Proyecto: Sistema de Autenticación y Navegación ESPE

Este proyecto es una aplicación web desarrollada con **LitElement** que simula un sistema de autenticación y navegación para la ESPE. Incluye componentes reutilizables como barra de navegación, formularios de inicio de sesión y registro, y campos de entrada personalizados.

## Características principales

- **Barra de navegación** con logo, enlaces y buscador.
- **Diálogos modales** para iniciar sesión y registrarse, con validación de campos.
- **Componentes personalizados** para inputs y botones, con estilos modernos.
- **Gestión de usuario** simulada y comunicación entre componentes usando eventos personalizados.

## Estructura

- `components/complex/`: Componentes principales como navbar, login y register.
- `components/moleculars/`: Componentes importantes para construcción de paginas.
- `components/atomic/`: Componentes reutilizables como inputs y botones.
- `components/layout/`: Componentes de plantilla para las paginas.
- `models/`: Modelos de datos como el usuario.

## Uso

1. Clona el repositorio.
2. Instala dependencias si es necesario.
3. Abre el proyecto en tu entorno de desarrollo y ejecuta un servidor local.
4. Interactúa con la barra de navegación para iniciar sesión o registrarte.

---

### Componente: `product-modal.js`

```bash 
Ruta: src/components/moleculars/product-modal.js
```

- Este componente representa un modal que se abre para mostrar los detalles de un producto. Permite seleccionar el color, talla, y ver la descripción del producto. Además, incluye un botón para agregar el producto al carrito de compras y un botón de favorito.
- Se utiliza para mostrar un modal detallado con la información de un producto. El modal incluye una imagen, opciones de tamaño y color, una descripción detallada del producto y un botón para agregarlo al carrito.
  
 ### Implementación
  
```html 
<product-modal></product-modal>

```
### Propiedades 

> isOpen: Define si el modal está abierto o cerrado.

> image: La imagen del producto que se muestra en el modal.

> title: El nombre del producto.

> isFav: Indica si el producto está marcado como favorito.

> discount: El descuento aplicado al producto.

> price: El precio del producto.

> colors: Lista de colores disponibles para el producto.

> selectedColor: El color seleccionado actualmente.

> sizes: Lista de tallas disponibles.

> selectedSize: La talla seleccionada actualmente.

> description: Descripción detallada del producto.

## Funciones clave 

- changeColor(color): Cambia el color y la imagen del producto cuando se selecciona un color diferente.

- openModal(): Abre el modal.

- closeModal(): Cierra el modal.

- handleContentClick(e): Previene que un clic en el contenido del modal cierre el modal.

### Estilos 

El modal tiene una capa de fondo semitransparente (overlay) que oscurece el contenido de la página.

El contenido del modal se muestra con un borde redondeado y tiene una transición suave para la apertura y cierre.

El modal incluye áreas de selección de talla y color, que se presentan como botones interactivos.


Este proyecto es una base para prácticas de integración de componentes web y autenticación
