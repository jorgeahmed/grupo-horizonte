# Grupo Horizonte — Demo web

Sitio demo de portafolio para desarrollo inmobiliario, obras, ventas/maquinaria y bolsa de trabajo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`

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

- **Source:** GitHub Actions

El workflow `.github/workflows/deploy.yml` publica automáticamente en cada push a `main`.

### URL publicada

`https://TU_USUARIO.github.io/grupo-horizonte/`

## Estructura

```
src/
  components/   # UI reutilizable
  pages/        # Vistas por ruta
  data/         # Contenido demo
```

## Nota

Este proyecto es una **demostración** con datos ficticios. No representa una empresa real.
