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
Ruta: src/components/atomic/alert
```

## Ejemplo de Componentes Atómicos:

- Componente: espe-alerts.js

```bash
Ruta: src/components/atomic/alerts/espe-alerts.js
```  
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

```bash
Ruta: src/components/atomic/buttons/cart-counter.js
```  

- Descripción: Muestra un contador de productos en el carrito.

- Este componente permite al usuario incrementar o decrementar la cantidad de un artículo en su carrito de compras.

### Implementación:

```html 
<cart-counter></cart-counter>
```
### `Métodos`

- increment(): Aumenta el contador.

- decrement(): Disminuye el contador (no permite valores negativos).

  ![Captura de ejecución](img/incremento.png)

## Componente: `fav-button.js`

```bash
Ruta: src/components/atomic/buttons/fav-button.js
```

- Este componente es un botón de favorito que permite al usuario marcar un producto como favorito.
- Al hacer clic en este botón, se cambia su estado de activo a inactivo, utilizando la propiedad `active`.
  
 ```html 
<fav-button></fav-button>
```
### Métodos
- toggleActive(): Cambia el estado del botón entre activo e inactivo.

  ![Captura de ejecución](img/favorito.png)


## Componente: ` log-button.js`

```bash
Ruta: src/components/atomic/buttons/fav-button.js
```

# 2. Componentes Moleculares `(moleculars)`:

```bash 
Ruta: src/components/moleculars/
```

-  Un botón genérico utilizado para iniciar sesión o realizar otras acciones.
-  Este botón es personalizable mediante el contenido del slot.
  
 ```html 
<log-button>Iniciar sesión</log-button>
```
  ![Captura de ejecución](img/sesion.png)

## Ejemplo de Componentes Moleculares:

### Componente: `product-card.js`

```bash 
Ruta: src/components/moleculars/product-card.js
```
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
Ruta: src/components/complex/
```

## Ejemplo de Componentes Complejos:

### Componente: `espe-footer.js` 

```bash 
Ruta: src/components/complex/espe-footer.js
```

- Descripción: Este componente es el pie de página de la aplicación.

- El pie de página contiene información de derechos de autor y otros detalles importantes.

### Implementación

```html  
<espe-footer></espe-footer>
```
> Estilo: Fondo rojo y texto blanco centrado en la parte inferior de la pantalla.

  ![Captura de ejecución](img/footer.png)

### Componente: `espe-navbar.js`

```bash 
Ruta: src/components/complex/espe-navbar.js
```

- Descripción: Barra de navegación con enlaces a las secciones principales y la opción de iniciar sesión o registrarse.

- Este componente se coloca generalmente en la parte superior de la aplicación para facilitar la navegación entre secciones.
  
### Implementación

```html  
<espe-navbar></espe-navbar>
```
  ![Captura de ejecución](img/nav.png)

# 4. Componentes Complejos  `(layout)`:

```bash 
Ruta:src/components/layout/espe-layout.js
```
## Ejemplo de Componentes de Layout:

### Componente: `espe-layout.js`

- Este componente es el contenedor principal de la aplicación, que organiza y agrupa otros componentes como el header y el footer. Es útil para mantener la estructura general de la página.
  
- Utiliza este componente para envolver el contenido de la página y agregarle la estructura general (header, footer, etc.).
  
### Implementación
```html  
<espe-layout>
  <!-- Contenido de la página -->
</espe-layout>
```
Este componente no tiene propiedades configurables. Se utiliza para contener y organizar otros componentes, como el pie de página o la barra de navegación, proporcionando la estructura base de la página. 

# Conclusiones

-  La organización de los componentes en carpetas como atomic, moleculars, complex y layout facilita la navegación y mantenimiento del código, lo que ayuda a tener  desarrollo más eficiente y escalable. Esta estructuración modular hace que sea fácil encontrar, modificar y reutilizar los componentes en diferentes partes de la aplicación.

- La estrategia de construir componentes reutilizables, como botones, alertas, formularios y tarjetas de productos, aumenta la flexibilidad y la consistencia en la aplicación. Los desarrolladores pueden enfocarse en nuevas funcionalidades sin tener que reescribir el mismo código,
