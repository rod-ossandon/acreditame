# Acreditame

Landing page corporativa desarrollada con **React + Inertia.js + Laravel**, orientada a presentar información de servicios de acreditación de forma clara y moderna.

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React + Inertia.js |
| Backend | Laravel (PHP) |
| Base de datos | MySQL |
| Estilos | CSS3 |

## Características

- Landing page responsive con secciones de información
- Arquitectura SPA con Inertia.js (sin API REST separada)
- Rutas y lógica de servidor manejadas por Laravel
- Componentes React reutilizables

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/rod-ossandon/acreditame.git
cd acreditame

# Instalar dependencias PHP
composer install

# Instalar dependencias JS
npm install

# Configurar entorno
cp .env.example .env
php artisan key:generate

# Migrar base de datos
php artisan migrate

# Compilar assets
npm run dev
```

## Uso

```bash
# Servidor de desarrollo
php artisan serve

# En otra terminal
npm run dev
```

Abrir [http://localhost:8000](http://localhost:8000)

## Autor

**Rodrigo Ossandón** — [linkedin.com/in/reomalatesta](https://linkedin.com/in/reomalatesta)
