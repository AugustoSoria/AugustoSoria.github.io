// Fuente única del perfil profesional. Los textos bilingües usan { es, en }.

const EDUCACIONIT = 'https://perfil.educacionit.com/perfil/augusto-ezequiel-soria-505108/certificado/'

export const ui = {
  profileTitle: { es: 'Perfil profesional', en: 'Professional summary' },
  experienceTitle: { es: 'Experiencia', en: 'Experience' },
  skillsTitle: { es: 'Habilidades técnicas', en: 'Technical skills' },
  educationTitle: { es: 'Educación', en: 'Education' },
  certificationsTitle: { es: 'Certificaciones', en: 'Certifications' },
  inProgressTitle: { es: 'Todavía aprendiendo', en: 'Still learning' },
  languagesTitle: { es: 'Idiomas', en: 'Languages' },
  all: { es: 'Todas', en: 'All' },
  credential: { es: 'Ver credencial', en: 'See credential' },
  credentialId: { es: 'ID', en: 'ID' },
  present: { es: 'Actualidad', en: 'Present' },
}

export const profile = {
  name: 'Augusto Soria',
  title: 'Full-Stack Developer | Front-End | Back-End',
  location: {
    es: 'Argentina · Disponible para relocalizarme en CABA, Buenos Aires',
    en: 'Argentina · Open to relocating to CABA, Buenos Aires',
  },
  email: 'augustosoria@hotmail.es',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/augusto-soria-a8b7251b7/' },
    { label: 'GitHub', url: 'https://github.com/AugustoSoria' },
  ],
  summary: {
    es: [
      'Desarrollador de software con más de 4 años de experiencia en desarrollo web y mobile, trabajando tanto en frontend como en backend. Stack principal: Angular, TypeScript, Node.js, Express, Java y Spring Boot.',
      'Experiencia en diseño de APIs RESTful, modelado de bases de datos relacionales y NoSQL, y metodologías ágiles. Dominio de Next.js, React, React Query y Zustand, con conocimientos en Google Cloud Platform, AWS, React Native y GraphQL.',
      'Perfil orientado a la resolución de problemas, el aprendizaje continuo y el trabajo tanto colaborativo como autónomo. Actualmente desarrollando agentes de IA con RAG, integración con mensajería y procesamiento de texto y voz con LLMs, además de profundizar en Machine Learning y diseño de sistemas.',
    ],
    en: [
      'Software developer with over 4 years of experience in web and mobile development, working on both frontend and backend. Main stack: Angular, TypeScript, Node.js, Express, Java and Spring Boot.',
      'Experienced in RESTful API design, relational and NoSQL data modeling, and agile methodologies. Proficient with Next.js, React, React Query and Zustand, with knowledge of Google Cloud Platform, AWS, React Native and GraphQL.',
      'Problem-solving oriented, committed to continuous learning, and comfortable working both in teams and autonomously. Currently building AI agents with RAG, messaging integrations and text and voice processing with LLMs, while going deeper into Machine Learning and system design.',
    ],
  },
}

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Planifi-k / kipBip',
    start: '2024-09',
    end: null,
    mode: { es: 'Jornada completa · Remoto', en: 'Full-time · Remote' },
    // Un mismo empleo con varios proyectos, del más reciente al más antiguo
    projects: [
      {
        name: { es: 'Agente IA de soporte (RAG)', en: 'AI support agent (RAG)' },
        intro: {
          es: 'Asistente de IA que responde consultas de soporte técnico a partir de la documentación de ROADNET y RNA.',
          en: 'AI assistant that answers technical support questions from the ROADNET and RNA documentation.',
        },
        bullets: {
          es: [
            'Diseño e implementación de un sistema RAG de punta a punta: ingesta de documentación, chunking, embeddings e índices vectoriales (FAISS) por fuente, con caché para no reprocesar.',
            'Servicio de IA en Python/FastAPI integrado con un LLM (GPT-OSS): reescritura de consultas según el contexto de la conversación, respuestas con fuentes citadas y soporte multilenguaje (ES/PT/EN).',
            'Evaluación de la búsqueda con un set de preguntas de referencia: la sección correcta aparece entre los 5 primeros resultados en 11 de 12.',
            'Observabilidad y control de costos del LLM: registro de uso, tokens y feedback de usuarios para medir la calidad de las respuestas.',
            'Interfaz de chat en Angular y deploy en AWS (EC2, Nginx, systemd) con actualización automatizada.',
          ],
          en: [
            'Designed and built an end-to-end RAG system: documentation ingestion, chunking, embeddings and per-source vector indexes (FAISS), with caching to avoid reprocessing.',
            'Python/FastAPI AI service integrated with an LLM (GPT-OSS): conversation-aware query rewriting, answers with cited sources and multilingual support (ES/PT/EN).',
            'Retrieval evaluation with a reference question set: the correct section ranks in the top 5 results for 11 of 12 questions.',
            'LLM observability and cost control: usage, token and user feedback logging to measure answer quality.',
            'Angular chat interface and deployment on AWS (EC2, Nginx, systemd) with automated updates.',
          ],
        },
        tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Hugging Face', 'RAG', 'Angular', 'AWS EC2', 'Nginx', 'SDD'],
      },
      {
        name: { es: 'pkConnector, plataforma de integración (iPaaS)', en: 'pkConnector, integration platform (iPaaS)' },
        intro: {
          es: 'Plataforma de integración que extrae, transforma y carga datos entre sistemas empresariales (SAP, ROADNET y RNA).',
          en: 'Integration platform that extracts, transforms and loads data between enterprise systems (SAP, ROADNET and RNA).',
        },
        bullets: {
          es: [
            'Integración y normalización de datos entre sistemas empresariales: amplié el motor de transformación para mapear estructuras anidadas y normalizar formatos de origen.',
            'Enriquecimiento de datos con fuentes de referencia cacheadas (lookups con claves compuestas), configurable por el usuario sin código.',
            'Procesamiento asíncrono con colas (RabbitMQ, Redis) para la ingesta de archivos de terceros.',
            'Desarrollo end-to-end (Angular + Node.js) de la configuración de integraciones: wizard de mapeo, vista previa de payloads y editor de modelos canónicos, con mejoras de performance.',
            'Seguridad de la aplicación: autenticación con JWT, control de acceso por roles (RBAC), flujos de activación y recuperación de cuenta.',
            'Migraciones de datos de clientes entre plataformas (ROADNET → RNA).',
            'Calidad: tests unitarios y de integración (Jest, Vitest) en cada funcionalidad.',
            'Desarrollo asistido por IA: reglas y skills de Claude Code para el equipo, con Spec-Driven Development (SDD).',
          ],
          en: [
            'Data integration and normalization between enterprise systems: extended the transformation engine to map nested structures and normalize source formats.',
            'Data enrichment from cached reference sources (lookups with composite keys), configurable by users without code.',
            'Asynchronous queue-based processing (RabbitMQ, Redis) for third-party file ingestion.',
            'End-to-end development (Angular + Node.js) of the integration setup: mapping wizard, payload preview and canonical model editor, with performance improvements.',
            'Application security: JWT authentication, role-based access control (RBAC), account activation and recovery flows.',
            'Customer data migrations between platforms (ROADNET → RNA).',
            'Quality: unit and integration tests (Jest, Vitest) for every feature.',
            'AI-assisted development: Claude Code rules and skills for the team, following Spec-Driven Development (SDD).',
          ],
        },
        tech: ['Angular', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker', 'Jest', 'Vitest', 'Claude Code', 'SDD'],
      },
      {
        name: { es: 'Tracking y optimización de rutas', en: 'Tracking and route optimization' },
        intro: {
          es: 'Plataforma web y mobile de tracking de vehículos y optimización de rutas.',
          en: 'Web and mobile platform for vehicle tracking and route optimization.',
        },
        bullets: {
          es: [
            'Planificación y optimización de rutas a partir de órdenes y restricciones definidas por el usuario, integrando APIs de terceros.',
            'Visualización geoespacial de datos en mapas interactivos.',
            'Notificaciones multicanal ante eventos del sistema (SMS, WhatsApp y email con Twilio y NodeMailer).',
            'Migración y sincronización de datos de la app mobile de Firebase a SQL Server.',
            'Modernización de código legacy: actualización de Angular 17 a 21 y refactor de componentes para reducir tiempos de carga y consumo de recursos, siguiendo el diseño en Figma.',
            'Diseño y documentación de modelos de datos y servicios.',
          ],
          en: [
            'Route planning and optimization based on orders and user-defined constraints, integrating third-party APIs.',
            'Geospatial data visualization on interactive maps.',
            'Multichannel notifications on system events (SMS, WhatsApp and email with Twilio and NodeMailer).',
            'Mobile app data migration and synchronization from Firebase to SQL Server.',
            'Legacy modernization: Angular upgrade from 17 to 21 and component refactoring to reduce load times and resource usage, following the Figma design.',
            'Data model and service design and documentation.',
          ],
        },
        tech: ['Angular', 'TypeScript', 'RxJS', 'SASS', 'Node.js', 'REST APIs', 'SQL Server', 'Firebase', 'Twilio', 'NodeMailer', 'Figma', 'SDD'],
      },
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Plus+Ups!',
    start: '2022-09',
    end: '2024-06',
    mode: { es: 'Jornada completa · Remoto', en: 'Full-time · Remote' },
    intro: {
      es: 'Desarrollo de aplicaciones web y mobile a medida para clientes empresariales, en un equipo ágil (Scrum).',
      en: 'Custom web and mobile application development for business clients, in an agile team (Scrum).',
    },
    bullets: {
      es: [
        'Desarrollo full-stack de aplicaciones empresariales: backend con Java y Spring Boot (Spring Security, Spring Data, Hibernate) y frontend con Angular, TypeScript y RxJS.',
        'Diseño de modelos de datos relacionales (MySQL, PostgreSQL): entidades paramétricas y transaccionales, sus relaciones y migraciones de esquema versionadas con Liquibase.',
        'Generación de reportes y exportación de datos de negocio: PDF con JasperReports y Excel con Apache POI.',
        'Desarrollo mobile multiplataforma (iOS y Android) con NativeScript, incluido procesamiento de imágenes con OpenCV.',
        'Mantenimiento de sistemas en producción: resolución de bugs legacy y reducción de deuda técnica, mejorando la estabilidad.',
        'Documentación de la arquitectura y los patrones del sistema.',
        'Aprendizaje de nuevas tecnologías según las necesidades de cada proyecto: Python para OpenCV y Kotlin para Android.',
      ],
      en: [
        'Full-stack development of business applications: Java and Spring Boot backend (Spring Security, Spring Data, Hibernate) and Angular, TypeScript and RxJS frontend.',
        'Relational data model design (MySQL, PostgreSQL): parametric and transactional entities, their relationships and versioned schema migrations with Liquibase.',
        'Business reporting and data export: PDF with JasperReports and Excel with Apache POI.',
        'Cross-platform mobile development (iOS and Android) with NativeScript, including image processing with OpenCV.',
        'Production system maintenance: fixing legacy bugs and reducing technical debt to improve stability.',
        'System architecture and pattern documentation.',
        'Picking up new technologies as each project required: Python for OpenCV and Kotlin for Android.',
      ],
    },
    tech: ['Java', 'Spring Boot', 'Hibernate', 'Liquibase', 'JHipster', 'MySQL', 'PostgreSQL', 'Angular', 'TypeScript', 'RxJS', 'NativeScript', 'OpenCV', 'Scrum'],
  },
]

export const skills = [
  { group: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'React', 'Next.js', 'React Query', 'Zustand', 'HTML5', 'CSS3', 'SASS', 'Angular Material', 'Bootstrap', 'SSR', 'TailwindCSS', 'Responsive Design', 'React Native', 'NativeScript'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'JWT', { es: 'Microservicios', en: 'Microservices' }, 'Mongoose', 'Prisma', 'RabbitMQ', 'Python', 'FastAPI', 'GraphQL', 'Kotlin'] },
  { group: { es: 'Bases de datos', en: 'Databases' }, items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Firebase', 'Liquibase'] },
  { group: 'DevOps / Cloud', items: ['Docker', 'Docker Compose', 'Google Cloud Platform', 'AWS EC2', 'Nginx', 'CI/CD', 'Linux', 'Git', 'GitHub'] },
  { group: 'Testing', items: ['Jest', 'Vitest', 'Jasmine', 'Karma', 'Mocha', 'Chai'] },
  { group: { es: 'IA y datos', en: 'AI & data' }, items: ['Claude Code', 'Codex', 'Cursor', 'Windsurf', 'RAG', 'Memory', 'LangChain', 'FAISS', 'Hugging Face', 'Tool calling', 'Machine Learning', 'NumPy'] },
  { group: { es: 'Metodologías', en: 'Methodologies' }, items: ['Scrum', 'Agile', 'SDD'] },
]

export const education = [
  {
    institution: 'EducacionIT',
    title: 'Javascript Fullstack Developer',
    start: '2021-02',
    end: '2021-11',
    detail: { es: 'HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, Angular.', en: 'HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, Angular.' },
  },
  {
    institution: 'Potrero Digital',
    title: 'Front-End Development',
    start: '2020-07',
    end: '2020-11',
    detail: { es: 'HTML5, CSS3, Bootstrap y diseño responsive.', en: 'HTML5, CSS3, Bootstrap and responsive design.' },
  },
  {
    institution: 'Esc. Cap. Daniel Manzotti',
    title: { es: 'Técnico Electrónico, orientación Telecomunicaciones', en: 'Electronics Technician, Telecommunications' },
    start: '2012',
    end: '2017',
    detail: { es: 'Formación técnica en lógica, sistemas y programación de microcontroladores.', en: 'Technical training in logic, systems and microcontroller programming.' },
  },
]

export const certCategories = [
  { id: 'ai', label: { es: 'IA / ML', en: 'AI / ML' } },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'data', label: { es: 'Bases de datos', en: 'Databases' } },
  { id: 'cloud', label: { es: 'Cloud y mobile', en: 'Cloud & mobile' } },
  { id: 'other', label: { es: 'Otros', en: 'Other' } },
]

const eit = (name, date, id, category) => ({
  name, issuer: 'EducacionIT', date, category, id: `505108/${id}`, url: EDUCACIONIT + id,
})

// Ordenadas de la más reciente a la más antigua. En las de EducacionIT, nombre y fecha son
// los del certificado (fecha de emisión, no la de fin del curso).
export const certifications = [
  { name: { es: 'Diseño de sistemas a gran escala y arquitectura de software', en: 'Large-scale system design and software architecture' }, issuer: 'Udemy', date: '2026-10', category: 'backend', id: 'UC-9100d16b-9961-41fc-884c-92a5d6d133d3', url: 'https://www.udemy.com/certificate/UC-9100d16b-9961-41fc-884c-92a5d6d133d3/' },
  eit({ es: 'Python con IA: Desarrollo de Agentes y Aplicaciones Inteligentes', en: 'Python with AI: Agent and Intelligent Application Development' }, '2026-10', 85689, 'ai'),
  { name: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI · Coursera', date: '2026-06', category: 'ai', id: '0R2WTISL4DPH', url: 'https://www.coursera.org/account/accomplishments/verify/0R2WTISL4DPH' },
  { name: 'Supervised Machine Learning: Regression and Classification', issuer: 'DeepLearning.AI · Coursera', date: '2026-05', category: 'ai', id: 'PJ7W4LX21427', url: 'https://www.coursera.org/account/accomplishments/verify/PJ7W4LX21427' },
  eit({ es: 'Introducción a Python', en: 'Introduction to Python' }, '2025-09', 76860, 'backend'),
  eit('Google Cloud Platform Fundamentals', '2024-02', 62832, 'cloud'),
  eit({ es: 'Android Avanzado en Kotlin', en: 'Advanced Android with Kotlin' }, '2023-06', 62063, 'cloud'),
  eit('Java Spring', '2023-06', 62201, 'backend'),
  eit('Java Standard 11 Web Programming', '2023-02', 61933, 'backend'),
  { name: 'Back End Development and APIs', issuer: 'freeCodeCamp', date: '2022-04', category: 'backend', url: 'https://www.freecodecamp.org/certification/fccf30b95d0-a474-47ee-b199-5c17a1107aa7/back-end-development-and-apis' },
  eit({ es: 'Introducción a Bases de Datos y SQL', en: 'Introduction to Databases and SQL' }, '2022-02', 55957, 'data'),
  eit({ es: 'Mongo DB Avanzado', en: 'Advanced Mongo DB' }, '2021-12', 52949, 'data'),
  eit({ es: 'React.JS Avanzado', en: 'Advanced React.JS' }, '2021-12', 50454, 'frontend'),
  eit('Angular 11', '2021-12', 49642, 'frontend'),
  eit({ es: 'Presupuesto Web', en: 'Web Budgeting' }, '2021-12', 55964, 'other'),
  eit({ es: 'Git: Desarrollo Colaborativo', en: 'Git: Collaborative Development' }, '2021-12', 54450, 'other'),
  eit({ es: 'Introducción al Paradigma de Objetos', en: 'Introduction to Object-Oriented Programming' }, '2021-12', 54424, 'other'),
  eit({ es: 'Maquetación Web: HTML 5 y CSS3', en: 'Web Layout: HTML 5 and CSS3' }, '2021-12', 53408, 'frontend'),
  eit({ es: 'HTML5: Fundamentos Web', en: 'HTML5: Web Fundamentals' }, '2021-12', 52277, 'frontend'),
  eit({ es: 'Arquitectura avanzada en Node js', en: 'Advanced Node js Architecture' }, '2021-12', 50443, 'backend'),
  eit('React.JS', '2021-12', 54318, 'frontend'),
  eit({ es: 'Scrum Fundamentos', en: 'Scrum Fundamentals' }, '2021-12', 55756, 'other'),
  eit({ es: 'Node.js y Mongo DB', en: 'Node.js and Mongo DB' }, '2021-09', 49655, 'backend'),
  eit({ es: 'Mongo DB Fundamentos', en: 'Mongo DB Fundamentals' }, '2021-09', 50998, 'data'),
  eit('Javascript AWP', '2021-09', 52126, 'frontend'),
  eit({ es: 'Javascript Desarrollador Avanzado', en: 'Advanced Javascript Developer' }, '2021-08', 52136, 'frontend'),
  eit({ es: 'Javascript desde cero', en: 'Javascript from scratch' }, '2021-08', 45988, 'frontend'),
]

// Se muestran en este orden
export const inProgress = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI · Coursera',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
  {
    name: { es: 'Introducción a la Ciberseguridad', en: 'Introduction to Cybersecurity' },
    issuer: 'EducacionIT',
    url: 'https://www.educacionit.com/curso-de-introduccion-a-la-ciberseguridad',
  },
]

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'Conversacional · lectura técnica', en: 'Conversational · technical reading' } },
]
