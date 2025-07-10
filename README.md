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

## carpeta alerts

```bash
Ruta: src/components/atomic/alert
```
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
