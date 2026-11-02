# Serverless Demo (Sin Docker)

Proyecto backend desarrollado con **Node.js** y **Express** para la clase de Serverless. Este proyecto está preparado para ejecutarse de forma nativa en el entorno local o desplegarse en plataformas serverless (como Google Cloud Run, Cloud Functions, AWS Lambda).

---

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

---

## 🚀 Comandos para Ejecutar

### 1. Navegar al directorio del proyecto
```bash
cd project-without-docker
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor
```bash
npm start
```
*(Alternativa directa: `node server.js`)*

Por defecto, la API estará disponible en:
```
http://localhost:8080
```

---

## ⚙️ Variables de Entorno

Puedes personalizar el puerto configurando la variable de entorno `PORT`:

- **Linux / macOS:**
  ```bash
  PORT=3000 npm start
  ```
- **Windows (PowerShell):**
  ```powershell
  $env:PORT="3000"; npm start
  ```
- **Windows (CMD):**
  ```cmd
  set PORT=3000 && npm start
  ```

---

## 📦 Estructura del Modelo de Datos (Product / Item)

Los objetos devueltos por la API siguen el siguiente esquema:

| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `id` | `number` | Identificador único del recurso | `1` |
| `title` | `string` | Título o nombre | `"Introducción a Cloud Run & Serverless"` |
| `category` | `string` | Categoría temática | `"Cloud Computing"` |
| `status` | `string` | Estado (`'active'`, `'draft'`, `'archived'`) | `"active"` |
| `price` | `number` | Precio en USD | `29.99` |
| `tags` | `string[]` | Etiquetas asociadas | `["gcp", "cloud-run", "serverless"]` |
| `createdAt`| `string` | Marca temporal en formato ISO 8601 | `"2026-01-15T10:00:00Z"` |

---

## 🧪 Endpoints de la API REST

### 1. Health Check y Guía de Endpoints
- **Método:** `GET`
- **Ruta:** `/`
- **Respuesta de ejemplo:**
  ```json
  {
    "status": "success",
    "message": "Hola Hackathon! API Serverless funcionando.",
    "timestamp": "2026-11-01T20:15:00.000Z",
    "endpoints": [
      { "method": "GET", "path": "/", "description": "Health check y bienvenida" },
      { "method": "GET", "path": "/api/products", "description": "Listar todos los productos" },
      { "method": "GET", "path": "/api/products/:id", "description": "Obtener un producto por su ID" }
    ]
  }
  ```

### 2. Listar productos (con soporte de filtros opcionales)
- **Método:** `GET`
- **Ruta:** `/api/products`
- **Filtros por Query String (opcionales):**
  - `?category=Cloud Computing`
  - `?status=active`
- **Prueba con cURL:**
  ```bash
  curl http://localhost:8080/api/products
  ```
- **Respuesta de ejemplo:**
  ```json
  {
    "status": "success",
    "count": 4,
    "data": [
      {
        "id": 1,
        "title": "Introducción a Cloud Run & Serverless",
        "category": "Cloud Computing",
        "status": "active",
        "price": 29.99,
        "tags": ["gcp", "cloud-run", "serverless"],
        "createdAt": "2026-01-15T10:00:00Z"
      },
      {
        "id": 2,
        "title": "Arquitectura de Microservicios con Node.js",
        "category": "Backend Development",
        "status": "active",
        "price": 49.99,
        "tags": ["nodejs", "express", "api-rest"],
        "createdAt": "2026-02-01T14:30:00Z"
      }
    ]
  }
  ```

### 3. Obtener un producto por ID
- **Método:** `GET`
- **Ruta:** `/api/products/:id`
- **Prueba con cURL:**
  ```bash
  curl http://localhost:8080/api/products/1
  ```
- **Respuesta de ejemplo (200 OK):**
  ```json
  {
    "status": "success",
    "data": {
      "id": 1,
      "title": "Introducción a Cloud Run & Serverless",
      "category": "Cloud Computing",
      "status": "active",
      "price": 29.99,
      "tags": ["gcp", "cloud-run", "serverless"],
      "createdAt": "2026-01-15T10:00:00Z"
    }
  }
  ```
- **Respuesta si no existe (404 Not Found):**
  ```json
  {
    "status": "error",
    "message": "Producto con ID 999 no encontrado"
  }
  ```

---

## 📁 Estructura del Directorio

```plaintext
project-without-docker/
├── .gitignore           # Archivos ignorados por Git
├── package.json         # Configuración y dependencias
├── package-lock.json    # Dependencias bloqueadas
├── server.js            # Servidor Express con endpoints REST y datos dummy
└── README.md            # Documentación de la API
```
