const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware para parsing de JSON
app.use(express.json());

/**
 * Estructura del Modelo de Datos (Product / Item):
 * ------------------------------------------------
 * {
 *   id: number,            // Identificador único
 *   title: string,         // Nombre o título del producto
 *   category: string,      // Categoría
 *   status: string,        // Estado ('active' | 'draft' | 'archived')
 *   price: number,         // Precio en USD
 *   tags: string[],        // Etiquetas asociadas
 *   createdAt: string      // Fecha de creación en formato ISO 8601
 * }
 */
const dummyProducts = [
  {
    id: 1,
    title: 'Introducción a Cloud Run & Serverless',
    category: 'Cloud Computing',
    status: 'active',
    price: 29.99,
    tags: ['gcp', 'cloud-run', 'serverless'],
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 2,
    title: 'Arquitectura de Microservicios con Node.js',
    category: 'Backend Development',
    status: 'active',
    price: 49.99,
    tags: ['nodejs', 'express', 'api-rest'],
    createdAt: '2026-02-01T14:30:00Z'
  },
  {
    id: 3,
    title: 'Despliegue Continuo con Cloud Build',
    category: 'DevOps & CI/CD',
    status: 'active',
    price: 39.99,
    tags: ['ci-cd', 'cloud-build', 'automation'],
    createdAt: '2026-02-20T09:15:00Z'
  },
  {
    id: 4,
    title: 'Bases de Datos Serverless en la Nube',
    category: 'Databases',
    status: 'draft',
    price: 34.99,
    tags: ['firestore', 'sql', 'serverless'],
    createdAt: '2026-03-05T18:45:00Z'
  }
];

// Endpoint raíz de bienvenida / health check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hola Hackathon! API Serverless funcionando.',
    timestamp: new Date().toISOString(),
    endpoints: [
      { method: 'GET', path: '/', description: 'Health check y bienvenida' },
      { method: 'GET', path: '/api/products', description: 'Listar todos los productos (soporta filtros ?category=...&status=...)' },
      { method: 'GET', path: '/api/products/:id', description: 'Obtener un producto por su ID' }
    ]
  });
});

// Endpoint REST: Listar productos con filtros opcionales por query string
app.get('/api/products', (req, res) => {
  const { category, status } = req.query;
  let results = dummyProducts;

  if (category) {
    results = results.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  if (status) {
    results = results.filter(item => item.status.toLowerCase() === status.toLowerCase());
  }

  res.json({
    status: 'success',
    count: results.length,
    data: results
  });
});

// Endpoint REST: Obtener producto por ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = dummyProducts.find(item => item.id === id);

  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: `Producto con ID ${id} no encontrado`
    });
  }

  res.json({
    status: 'success',
    data: product
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
