# TIENDA REINA ARTURA

Este proyecto es un **ecommerce básico desarrollado como proyecto final del curso de React en Coderhouse**.

La aplicación permite visualizar distintos cuadros realizados por la artista uruguaya **Andrea Bernasconi**, ver el detalle de cada producto y poder realizar una compra o encargo.

El flujo de compra funciona de la siguiente manera: el usuario puede agregar productos al carrito, revisar los items seleccionados y luego completar un formulario de checkout con sus datos. Una vez confirmada la compra, se genera una **orden de compra** que se guarda en **Firebase Firestore**.

Cuando la orden se crea correctamente, la aplicación muestra al usuario el **número de orden**, para que pueda guardarlo como referencia.

El proyecto intenta simular el funcionamiento básico de una tienda online, utilizando manejo de estado para el carrito, navegación entre distintas secciones y almacenamiento de datos en una base de datos en la nube.

---

# Tecnologías utilizadas

- **Vite** – Entorno de desarrollo para crear y ejecutar la aplicación
- **React** – Librería utilizada para construir la interfaz
- **React Router DOM** – Permite la navegación entre las distintas páginas
- **Firebase Firestore** – Base de datos donde se almacenan los productos y las órdenes
- **EmailJS** – Envío automático de un correo cuando se genera una orden de compra
- **React Toastify** – Notificaciones visuales dentro de la aplicación
- **Bootstrap** – Utilizado para algunos estilos y componentes de interfaz
- **CSS** – Estilos personalizados del proyecto

---

# Funcionalidades

- Visualización de los cuadros disponibles
- Filtrado de productos por categoría
- Vista de detalle de cada cuadro
- Selección de cantidad de productos
- Agregar productos al carrito
- Eliminación individual de productos del carrito
- Vaciar el carrito completo
- Cálculo automático del total de la compra
- Formulario de checkout para completar los datos del comprador
- Generación de una orden de compra
- Almacenamiento de la orden en **Firebase Firestore**
- Actualización automática del stock de productos
- Modal de confirmación con número de orden al finalizar la compra
- Navegación entre páginas mediante **React Router**

---

# Instalación y ejecución del proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/lucasbernalb/ProyectoFinal-Bernal
```

2. Instalar las dependencias

```bash
npm install
```

3. Ejecutar el proyecto

```bash
npm run dev
```

La aplicación se abrirá automáticamente en el navegador en modo desarrollo.

---

# Dominio del proyecto

La aplicación se encuentra publicada en:

https://reina-artura-uy.netlify.app/

---

# Autor

Proyecto desarrollado por **Lucas Bernal** como entrega final del curso de **React en Coderhouse**.