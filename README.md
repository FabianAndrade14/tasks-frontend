# Tasks Frontend
Aplicación creada para la gestión de tareas, realizada con React + TypeScript, que acompañada de su API (Tasks-api) funciona como uno solo, consumiendo los datos de esta.

## Tecnologías utilizadas
- React 18 + TypeScript
- Vite
- React Router v6
- React Query v5
- Reack Hook Form + Yup: Para Formularios y validaciones
- Axios: Para Cliente HTTP
- CSS tradicional
- date-fns

## Instalación

### Prerequisitos
- Node.js 18 o superior
- npm 9 o superior
- Backend de Tasks ejecutándose en http://localhost:3000

### Pasos de instalación
1. Clonar el repositorio
```
git clone https://github.com/FabianAndrade14/tasks-frontend.git
cd tasks-frontend
```
2. Instalación de dependencias
```
npm install
```
3. Ejecutar en modo desarrollo
```
npm run dev
```
4. Abrir en el navegador
```
http://localhost:5173
```

## Arquitectura FBA
Para el frontend se hace uso de una arquitectura basada en características (Feature-Based Architecture) combinada con elementos de Atomic Design.
```
src/
├── features/          
│   └── tasks/        
├── components/        
├── hooks/             
├── pages/             
└── api/ 
```
### Capa de Presentación (UI)
```
src/
├── components/        
│   ├── Header.tsx
│   ├── Loader.tsx
│   └── Pagination.tsx
├── pages/            
│   ├── Home.tsx
│   ├── CreateTasks.tsx
│   ├── EditTask.tsx
│   ├── TaskBoard.tsx
│   └── TaskDetail.tsx
└── styles/            
    ├── board.css
    ├── card.css
    ├── form.css
    ├── globals.css
    └── headers.css
```

### Capa de Lógica
```
features/
└── tasks/             
    ├── components/   
    │   └── TaskCard.tsx
    ├── tasks.payloads.ls    
    ├── tasks.services.ls    
    ├── tasks.types.ls       
    └── useTasks.ls          
```

### Capa de Utilidades
```
hooks/
└── useToasts/            
```

## Decisiones técnicas relevantes

### Arquitectura
- Separación clara de responsabilidades como los servicios, hooks, componentes y páginas.
- Custom hooks para el manejo de estado remoto.
- Componentes modulares y reutilizables.

### Manejo de estado
- React Query para el manejo de datos del servidor.
- React Hook Form para el estado de formularios locales.
- Estado local con useState para UI state simple.

### Estilos
- CSS tradicional con enfoque en simplicidad.
- Inspiración en Trello, más que nada su paleta de colores y diseño de componentes.
- CSS modular por componente.
- Estilos responsivos.

### UX/UI
- Interfaz tipo Kanban para la visualización de tareas por estado.
- Formularios con validación.
- Feedback visual para acciones del usuario.
- Navegación fluida entre vistas.

