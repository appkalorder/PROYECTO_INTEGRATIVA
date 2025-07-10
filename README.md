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

# 2. Componentes Moleculares `(moleculars)`:

```bash 
Ruta: src/components/moleculars/
```

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
  
