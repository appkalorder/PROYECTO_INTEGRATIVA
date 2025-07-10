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
