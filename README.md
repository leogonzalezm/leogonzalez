# Sitio Web Profesional Personal – Leo González

Este proyecto es un sitio web profesional personal desarrollado con **React** y **Vite**.

## Características principales

- Foto de perfil personalizada como favicon y en la portada
- Descripción profesional y presentación
- Enlaces a LinkedIn, GitHub, portafolio, WhatsApp y correo electrónico, todos con íconos
- Botón para compartir la URL del sitio
- Diseño moderno, responsivo y visualmente atractivo
- Sistema de tema claro/oscuro con switcher y persistencia
- Fuentes fluidas y responsivas
- Botones/enlaces estilizados con glassmorphism, gradiente y animaciones

## Instalación y uso local

1. Clona el repositorio:
   ```sh
   git clone https://github.com/leogonzalezm/leogonzalez.git
   cd leogonzalez
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```sh
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Despliegue en producción

1. Genera la versión optimizada:
   ```sh
   npm run build
   ```
2. Sube el contenido de la carpeta `dist` a tu hosting (Vercel, Netlify, cPanel, etc.)

## Personalización

- Cambia la foto de perfil en `src/assets/foto-perfil.png`
- Edita los enlaces y la descripción en `src/App.jsx`
- Modifica estilos en `src/App.css`

## Licencia

Este proyecto es de uso personal. Puedes adaptarlo para tu propio portafolio o presentación profesional.
