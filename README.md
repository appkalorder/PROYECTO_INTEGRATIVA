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

### Componente: `espe-loggin.js`

```bash 
Ruta: src/components/complex/espe-loggin.js
```

- Descripción: Este componente muestra un modal para el inicio de sesión. Incluye campos para ingresar correo y contraseña, con la opción de abrir el formulario de registro si el usuario no tiene cuenta. El modal se puede cerrar y manejar eventos de éxito de inicio de sesión.

- Se utiliza para permitir que los usuarios inicien sesión en la aplicación.
  
### Implementación

```html
<espe-loggin></espe-loggin>
```


### Componente: `espe-register.js`

```bash 
Ruta: src/components/complex/espe-register.js
```

- Descripción: Este componente muestra un modal para el registro de nuevos usuarios. Incluye campos para ingresar nombre, correo, contraseña y repetir la contraseña, con validaciones y la opción de abrir el formulario de inicio de sesión si el usuario ya tiene cuenta.

- Se utiliza para permitir que los usuarios se registren en la aplicación.
  
### Implementación

```html
<espe-register></espe-register>
```
