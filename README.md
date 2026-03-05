# TIENDA REINA ARTURA

Este proyecto es un ecommerce básico desarrollado como proyecto final del curso de React en Coderhouse. La aplicación permite visualizar distintos cuadros realizados por la artista uruguaya **Andrea Bernasconi**, ver el detalle de cada producto y realizar una compra o encargo.

El flujo de compra incluye un carrito, un checkout con formulario de datos del comprador y la generación de una orden de compra que se guarda en **Firebase Firestore**. Una vez creada la orden, el sistema devuelve al usuario su número de orden para poder registrarlo.

El proyecto está pensado como una simulación de tienda online simple, con manejo de estado global para el carrito, navegación entre rutas y persistencia de datos en una base de datos en la nube.

---

# Tecnologías Utilizadas

- **Vite** – Entorno de desarrollo rápido para aplicaciones de React
- **React** – Librería principal para la construcción de la interfaz
- **React Router DOM** – Manejo de rutas y navegación dentro de la aplicación
- **Firebase Firestore** – Base de datos donde se almacenan productos y órdenes
- **React Toastify** – Notificaciones visuales para acciones del usuario
- **Bootstrap** – Algunos estilos y componentes de UI

---

# Funcionalidades

- Visualización de productos disponibles
- Filtrado de productos por categoría
- Vista de detalle de cada cuadro
- Selección de cantidad de productos
- Agregar productos al carrito
- Eliminación individual de productos del carrito
- Vaciar carrito completo
- Cálculo automático del total de la compra
- Formulario de checkout con validación de datos
- Generación de orden de compra
- Almacenamiento de la orden en **Firebase Firestore**
- Actualización automática del stock de productos
- Modal de confirmación con número de orden luego de finalizar la compra
- Navegación entre secciones mediante **React Router**

---

# Instalación y ejecución del proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/tu-repositorio/reina-artura.git
```

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar el proyecto

```bash
npm run dev
```

La aplicación se abrirá en el navegador en modo desarrollo.

---

# Dominio del proyecto

La aplicación está publicada en:

https://reina-artura-uy.netlify.app/