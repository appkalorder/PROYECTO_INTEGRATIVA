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
Este proyecto es una base para prácticas de integración de componentes web y autenticación
---
# 1 Componentes Atómicos `(atomic)`:

```bash
Ruta: src/components/atomic/{nombre_componente}.js
```

## Ejemplo de Componentes Atómicos:

- Componente: espe-alerts.js

### Descripción:

- Este componente es un sistema de alertas visuales que muestra mensajes de éxito o error en la pantalla.

Uso: Puedes utilizar este componente para mostrar mensajes informativos al usuario. El tipo de mensaje (success, error) y el texto son configurables a través de las propiedades.

> Implementación:

```html
<espe-alerts id="alert"></espe-alerts>
```

```js
const alert = document.getElementById('alert');
alert.showAlert('success', '¡Compra realizada con éxito!');
```
## Propiedades:

- type: Tipo de alerta (success, error).

- message: El mensaje que se muestra.

- isVisible: Determina si la alerta es visible o no.


## Componente: `cart-counter.js`

- Descripción: Muestra un contador de productos en el carrito.

- Este componente permite al usuario incrementar o decrementar la cantidad de un artículo en su carrito de compras.

### Implementación:

```html 
<cart-counter></cart-counter>
```
### `Métodos`

- increment(): Aumenta el contador.

- decrement(): Disminuye el contador (no permite valores negativos).


# 2. Componentes Moleculares `(moleculars)`:

```bash 
Ruta: src/components/moleculars/{nombre_componente}.js
```
## Ejemplo de Componentes Moleculares:

### Componente: `product-card.js`

- Descripción: Muestra la tarjeta de un producto con su nombre, precio, descuento y una descripción breve.

- Este componente es útil para mostrar productos en una tienda en línea.
  
```html  
<product-card title="Nike Air Zoom Pegasus 41" price="80.90" discount="20" extended>
  Las Nike Air Zoom Pegasus están diseñadas para una carrera superior...
</product-card>
```
### Propiedades:

- `title`: Título del producto.

- `price`: Precio del producto.

- `discount`: Descuento aplicado.

- `extended`: Si se activa, muestra una descripción más extensa del producto.

# 3. Componentes Complejos  `(complex)`:

```bash 
Ruta: src/components/complex/{nombre_componente}.js
```

## Ejemplo de Componentes Complejos:

> Componente: espe-footer.js

- Descripción: Este componente es el pie de página de la aplicación.

- El pie de página contiene información de derechos de autor y otros detalles importantes.

### Implementación:
```html  
<espe-footer></espe-footer>
```
> Estilo: Fondo rojo y texto blanco centrado en la parte inferior de la pantalla.






