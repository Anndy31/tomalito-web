# Tomalito — sitio web

Sitio estático de uniformes escolares, confección y bordados, construido con Astro y Tailwind CSS.

## Trabajar en el proyecto

- Instalar las dependencias: `npm ci`.
- Abrir el servidor local: `npm run dev`.
- Generar la web para publicar: `npm run build`.
- Revisar la versión compilada: `npm run preview`.

## Dónde editar cada contenido

- Colegios, nombres y fotografías: `src/data/uniforms.js`.
- Próximos uniformes: `src/data/upcomingUniforms.js`.
- WhatsApp y redes: `src/data/site.js`.
- Teléfonos y ubicación: `src/pages/contacto.astro`.
- Historia y valores: `src/pages/nosotros.astro`.
- Servicios y carrusel: `src/pages/servicios.astro`.
- Secciones del inicio: `src/components/home/`.
- Menú, pie y botón flotante: `src/components/layout/`.
- Galería ampliable: `src/components/catalog/SchoolGallery.astro`.
- Estilos: `src/styles/global.css` y `tailwind.config.mjs`.

## Fotografías de los colegios

Cada colegio conserva su carpeta en `public/images/uniforms/`.
Consulta la llamada a `imageSlots(...)` en sus datos para conocer el nombre exacto.
Coloca las fotos con nombres `1.jpg` hasta `6.jpg`.
Solo se muestran los archivos existentes; la primera imagen disponible es la portada.
Conserva los identificadores actuales para no romper las rutas ni las carpetas.
En el inicio se muestra una foto de cada uno de los tres primeros colegios.

## Carpetas generadas

- `node_modules/`: dependencias; se reconstruye con `npm ci`.
- `.astro/`: tipos y datos generados por Astro.
- `dist/`: resultado de la compilación; contiene los archivos que se publican.

Estas carpetas están excluidas en `.gitignore`.

## Publicar en GitHub Pages

1. Crea un repositorio llamado `tomalito-web` en tu cuenta de GitHub, con la rama `main`.
2. Sube el contenido del proyecto a la raíz del repositorio, no dentro de otra carpeta. Incluye `src/`, `public/`, `.github/workflows/deploy.yml`, `.gitignore`, `package.json`, `package-lock.json`, `astro.config.mjs`, `tailwind.config.mjs` y este README.
3. No subas `node_modules/`, `dist/` ni `.astro/`.
4. En GitHub abre **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
5. Abre **Actions → Publicar Tomalito en GitHub Pages → Run workflow** y selecciona `main`. Si la primera ejecución falló antes de activar Pages, vuelve a ejecutarla.
6. Cuando termine, encontrarás la dirección publicada en **Settings → Pages**. Será normalmente `https://TU-USUARIO.github.io/tomalito-web/`.

No necesitas escribir tu nombre de usuario en el código. El flujo obtiene de GitHub el dominio y la subcarpeta, y genera las rutas, metadatos y sitemap correspondientes. También admite un nombre de repositorio diferente. Las futuras actualizaciones de la rama `main` se publicarán automáticamente.

Si subes archivos desde el navegador, asegúrate de incluir la carpeta oculta `.github`. Puedes crear el archivo desde **Add file → Create new file**, escribir `.github/workflows/deploy.yml` como nombre y copiar su contenido. No subas un ZIP esperando que GitHub lo descomprima.

## Compilación local

`npm run dev` y `npm run build` usan la raíz local por defecto. La publicación automática establece `PAGES_SITE` y `PAGES_BASE` con los valores reales; no publiques una compilación local sin configurar esos valores.

Para simular GitHub Pages en PowerShell:

```powershell
$env:PAGES_SITE = 'https://TU-USUARIO.github.io'
$env:PAGES_BASE = '/tomalito-web'
npm run build
npm run preview
```

Abre la dirección local que muestre la vista previa, añadiendo `/tomalito-web/`.

## Contenido pendiente

Completa las descripciones provisionales de las instituciones antes de compartir el catálogo. La imagen para compartir en redes utiliza la portada existente. El archivo `robots.txt` se genera desde `src/pages/robots.txt.ts` con la dirección correcta del sitemap.
