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

### Componente: `espe-aside.js`

```bash 
Ruta: src/components/complex/espe-aside.js
```

- Descripción:Este componente representa una barra lateral (aside) que muestra cupones con imágenes y detalles. La barra es estrecha por defecto y se expande cuando el usuario pasa el cursor sobre ella. Muestra información de descuentos o promociones en forma de cupones.

-  Se utiliza para mostrar información adicional, como cupones o anuncios, en una barra lateral fija.
  
### Implementación

```html
<espe-aside></espe-aside>
``` 
