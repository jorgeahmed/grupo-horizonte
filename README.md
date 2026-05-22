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

## Google Tag Manager y Analytics

| Herramienta | ID |
|-------------|-----|
| **Google Tag Manager** | `GTM-WZRPRS29` (en `index.html`) |
| **Google Analytics 4** | `G-Q4SKSB1M70` |

### En GTM (recomendado)
1. Entra a [tagmanager.google.com](https://tagmanager.google.com/) → contenedor **GTM-WZRPRS29**.
2. Crea una etiqueta **Google Analytics: GA4 Configuration** con ID `G-Q4SKSB1M70`.
3. Crea un activador **History Change** o usa el evento personalizado `page_view` del `dataLayer` (la SPA ya lo envía).
4. Publica el contenedor.

### Eventos que envía la web al `dataLayer`
- `page_view` — cada cambio de ruta (inicio, obras, ventas, CRM, ERP…)
- `generate_lead` — envío del formulario de cotizar

### GitHub Actions (opcional)
Secret `VITE_GA_MEASUREMENT_ID` = `G-Q4SKSB1M70` si quieres sobreescribir el ID en build.

**Probar:** [Google Tag Assistant](https://tagassistant.google.com/) o vista **Vista previa** en GTM con la URL  
`https://jorgeahmed.github.io/grupo-horizonte/`

## Estructura

```
src/
  components/   # UI reutilizable
  pages/        # Vistas por ruta
  data/         # Contenido demo
```

## Nota

Este proyecto es una **demostración** con datos ficticios. No representa una empresa real.
