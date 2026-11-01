# Serverless Demo (Sin Docker)

Proyecto backend desarrollado con **Node.js** y **Express** para la clase de Serverless. Este proyecto está preparado para ejecutarse de forma nativa en el entorno local o desplegarse en plataformas serverless (como Google Cloud Functions, AWS Lambda o servicios de aplicaciones en la nube).

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
Instala los paquetes necesarios definidos en `package.json` (`express`):
```bash
npm install
```

### 3. Iniciar el servidor
Ejecuta la aplicación:
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

## 🧪 Pruebas / Endpoints

Una vez iniciado el servidor, puedes probar el endpoint principal:

- **Ruta:** `GET /`
- **Respuesta esperada:**
  ```json
  {
    "message": "Hola Hackathon! API Serverless funcionando."
  }
  ```

### Probar con curl:
```bash
curl http://localhost:8080/
```

### Probar en el navegador:
Abre [http://localhost:8080/](http://localhost:8080/) en tu navegador preferido.

---

## 📁 Estructura del Proyecto

```plaintext
project-without-docker/
├── .gitignore           # Archivos ignorados por Git (node_modules, logs, etc.)
├── node_modules/        # Dependencias instaladas
├── package.json         # Configuración y dependencias del proyecto
├── package-lock.json    # Árbol de dependencias bloqueado
├── server.js            # Servidor Express y lógica de endpoints
└── README.md            # Documentación del proyecto
```

