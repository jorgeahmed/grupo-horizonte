# Grupo Horizonte — Demo web

Sitio demo de portafolio para desarrollo inmobiliario, obras, ventas/maquinaria y bolsa de trabajo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/grupo-horizonte/` (el proyecto usa base `/grupo-horizonte/`)

Formulario de cotización: `http://localhost:5173/grupo-horizonte/cotizar`

## Publicar en GitHub Pages

### 1. Crear repositorio en GitHub

El repositorio debe llamarse **`grupo-horizonte`** (o cambia `base` en `vite.config.js` al nombre de tu repo).

### 2. Subir código

```bash
git add .
git commit -m "Sitio demo Grupo Horizonte"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/grupo-horizonte.git
git push -u origin main
```

### 3. Activar GitHub Pages

En el repo → **Settings** → **Pages**:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages` → carpeta `/ (root)`

El workflow sube el **build compilado** a la rama `gh-pages` en cada push a `main`.

> Si la página se ve en blanco, casi siempre es porque Pages está sirviendo la rama `main` (código fuente) en lugar de `gh-pages` (build).

### URL publicada

`https://jorgeahmed.github.io/grupo-horizonte/`

## Google Analytics (tráfico)

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/) (GA4).
2. Copia el **ID de medición** (formato `G-XXXXXXXXXX`).
3. En GitHub → repo **grupo-horizonte** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - Nombre: `VITE_GA_MEASUREMENT_ID`
   - Valor: tu ID `G-...`
4. Haz un push a `main` (o re-ejecuta el workflow **Deploy to GitHub Pages**) para que el build incluya Analytics.

**Local:** copia `.env.example` a `.env` y pega tu ID:

```bash
cp .env.example .env
# Edita VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
npm run dev
```

La app registra automáticamente cada cambio de página (SPA) y el envío del formulario de cotización (`generate_lead`).

## Estructura

```
src/
  components/   # UI reutilizable
  pages/        # Vistas por ruta
  data/         # Contenido demo
```

## Nota

Este proyecto es una **demostración** con datos ficticios. No representa una empresa real.
