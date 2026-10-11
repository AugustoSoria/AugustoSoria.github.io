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
      'Desarrollador de software con más de 4 años de experiencia en desarrollo web y mobile, trabajando tanto en frontend como en backend. Stack principal: Angular, TypeScript, Node.js, Express, Java, Spring Boot y Docker.',
      'Experiencia en diseño de APIs RESTful, modelado de bases de datos relacionales y NoSQL, y metodologías ágiles (Scrum). Dominio de Next.js, React, React Query y Zustand, con conocimientos en Google Cloud Platform, React Native y GraphQL.',
      'Perfil orientado a la resolución de problemas, el aprendizaje continuo y el trabajo tanto colaborativo como autónomo. Actualmente desarrollando agentes de IA con RAG, integración con mensajería y procesamiento de texto y voz con LLMs, además de profundizar en Machine Learning y diseño de sistemas.',
    ],
    en: [
      'Software developer with over 4 years of experience in web and mobile development, working on both frontend and backend. Main stack: Angular, TypeScript, Node.js, Express, Java, Spring Boot and Docker.',
      'Experienced in RESTful API design, relational and NoSQL data modeling, and agile methodologies (Scrum). Proficient with Next.js, React, React Query and Zustand, with knowledge of Google Cloud Platform, React Native and GraphQL.',
      'Problem-solving oriented, committed to continuous learning, and comfortable working both in teams and autonomously. Currently building AI agents with RAG, messaging integrations and text and voice processing with LLMs, while going deeper into Machine Learning and system design.',
    ],
  },
}

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'kipBip / Planifi-k',
    start: '2024-09',
    end: null,
    mode: { es: 'Jornada completa · Remoto', en: 'Full-time · Remote' },
    // Un mismo empleo con varios proyectos, del más reciente al más antiguo
    projects: [
      {
        name: { es: 'Agente IA de soporte (RAG)', en: 'AI support agent (RAG)' },
        start: '2026-10',
        end: null,
        intro: {
          es: 'Asistente que responde consultas de soporte sobre la documentación de ROADNET y RNA.',
          en: 'Assistant that answers support questions about the ROADNET and RNA documentation.',
        },
        bullets: {
          es: [
            'Pipeline de ingesta: conversión de PDF a Markdown, chunking, embeddings con sentence-transformers e índice FAISS por fuente, con caché de embeddings.',
            'API en FastAPI con LLM (GPT-OSS), multi-fuente: reescritura de la consulta según la conversación, fuentes citadas en cada respuesta y respuestas en español, portugués o inglés.',
            'Chat en Angular con conversaciones separadas por sistema.',
            'Registro de uso, tokens y feedback de los usuarios.',
            'Deploy en AWS EC2 con Nginx y systemd, con un script de actualización automatizada.',
          ],
          en: [
            'Ingestion pipeline: PDF to Markdown conversion, chunking, sentence-transformers embeddings and a FAISS index per source, with an embeddings cache.',
            'Multi-source FastAPI API with an LLM (GPT-OSS): query rewriting based on the conversation, cited sources in every answer and answers in Spanish, Portuguese or English.',
            'Angular chat with separate conversations per system.',
            'Usage, token and user feedback logging.',
            'Deployment on AWS EC2 with Nginx and systemd, with an automated update script.',
          ],
        },
        tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Hugging Face', 'RAG', 'Angular', 'AWS EC2', 'Nginx'],
      },
      {
        name: { es: 'pkConnector, plataforma de integración (iPaaS)', en: 'pkConnector, integration platform (iPaaS)' },
        start: '2026-02',
        end: null,
        intro: {
          es: 'Motor ELT on-premise para intercambiar datos entre SAP, ROADNET y RNA.',
          en: 'On-premise ELT engine to exchange data between SAP, ROADNET and RNA.',
        },
        bullets: {
          es: [
            'Amplié el motor de transformación: mapeo de arrays, arrays anidados y arrays de objetos con múltiples items, y autodetección del formato de fecha de origen.',
            'Implementé el enriquecimiento desde DataStores: lookups configurables desde el wizard, claves compuestas y construcción de objetos a partir de los datos cacheados.',
            'Agregué archivos Excel como origen de datos, procesados por el motor de colas (RabbitMQ).',
            'Desarrollé gran parte del wizard de mapeo en Angular: selector de campos en árbol, vista previa del payload y visor JSON; optimicé su carga y su performance.',
            'Construí el editor de modelos canónicos con propiedades anidadas y validaciones.',
            'Redefiní roles y permisos (RBAC), manejé la expiración del JWT en el frontend y agregué links de activación y cambio de contraseña.',
            'Participé en migraciones de datos de clientes desde ROADNET hacia RNA.',
            'Tests unitarios y de integración (Jest, Vitest) para cada funcionalidad, y reglas y skills de Claude Code para el equipo.',
          ],
          en: [
            'Extended the transformation engine: mapping of arrays, nested arrays and object arrays with multiple items, plus automatic detection of the source date format.',
            'Implemented DataStore enrichment: lookups configurable from the wizard, composite keys and building objects from cached data.',
            'Added Excel files as a data source, processed by the queue engine (RabbitMQ).',
            'Built most of the Angular mapping wizard: tree field picker, payload preview and JSON viewer; optimized its loading and performance.',
            'Built the canonical model editor with nested properties and validations.',
            'Redesigned roles and permissions (RBAC), handled JWT expiration on the frontend and added activation and password reset links.',
            'Took part in customer data migrations from ROADNET to RNA.',
            'Unit and integration tests (Jest, Vitest) for each feature, and Claude Code rules and skills for the team.',
          ],
        },
        tech: ['Angular', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Jest', 'Vitest', 'Claude Code'],
      },
      {
        name: { es: 'Tracking y optimización de rutas', en: 'Tracking and route optimization' },
        start: '2024-09',
        end: '2026-01',
        intro: {
          es: 'Desarrollo end-to-end de una aplicación de tracking de vehículos, secuenciación y optimización de rutas.',
          en: 'End-to-end development of a vehicle tracking, route sequencing and route optimization application.',
        },
        bullets: {
          es: [
            'Planeamiento de rutas en función de órdenes y múltiples parámetros definidos por el usuario, consumiendo, estudiando y adaptando distintas APIs.',
            'Visualización geoespacial y manipulación gráfica de mapas para mostrar información relevante al usuario.',
            'Diseño y documentación de modelos de datos, asegurando claridad sobre cada servicio y la mantenibilidad del sistema.',
            'Sincronización y migración de datos de la app mobile desde Firebase hacia SQL Server.',
            'Integraciones con Twilio y NodeMailer para enviar SMS, WhatsApp y correos ante eventos del sistema.',
            'Refactorización de componentes legacy: mejor rendimiento y tiempos de carga, menor consumo de recursos, código centralizado y reutilizable, y mejor usabilidad siguiendo los lineamientos de diseño en Figma.',
            'Uso de herramientas de IA asistida (Claude Code, Codex) para acelerar features, refactors y documentación técnica.',
          ],
          en: [
            'Route planning based on orders and multiple user-defined parameters, by consuming, studying and adapting several APIs.',
            'Geospatial visualization and graphical map manipulation to surface relevant information to users.',
            'Data model design and documentation, keeping every service understandable and the system maintainable.',
            'Synchronization and migration of the mobile app data from Firebase to SQL Server.',
            'Twilio and NodeMailer integrations to send SMS, WhatsApp messages and emails on system events.',
            'Legacy component refactoring: better performance and load times, lower resource usage, centralized and reusable code, and improved usability following Figma design guidelines.',
            'AI-assisted development (Claude Code, Codex) to speed up features, refactors and technical documentation.',
          ],
        },
        tech: ['Angular', 'TypeScript', 'RxJS', 'SASS', 'Node.js', 'REST APIs', 'SQL Server', 'Firebase', 'Twilio', 'NodeMailer', 'Figma'],
      },
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Plus+Ups',
    start: '2022-09',
    end: '2024-06',
    mode: { es: 'Jornada completa · Remoto', en: 'Full-time · Remote' },
    intro: {
      es: 'Desarrollo de aplicaciones web y mobile para empresas, en un equipo ágil.',
      en: 'Web and mobile application development for companies, in an agile team.',
    },
    bullets: {
      es: [
        'Modelado de datos: entidades paramétricas y transaccionales, sus relaciones y las pantallas ABM, considerando la experiencia de usuario.',
        'Backend con Java, Spring Boot, Spring Security, Spring Data, Hibernate y Liquibase sobre MySQL y PostgreSQL.',
        'Generación de reportes PDF con JasperReports y archivos Excel con Apache POI.',
        'Frontend con Angular, TypeScript, RxJS y Bootstrap.',
        'Proyectos mobile para iOS y Android con NativeScript y OpenCV, lo que me llevó a aprender Python; además, la empresa me ayudó a estudiar Kotlin para Android.',
        'Documentación de la arquitectura y los patrones del sistema, resolución de bugs legacy y deuda técnica, con Docker, Git y Scrum.',
      ],
      en: [
        'Data modeling: parametric and transactional entities, their relationships and CRUD screens, with the user experience in mind.',
        'Backend with Java, Spring Boot, Spring Security, Spring Data, Hibernate and Liquibase on MySQL and PostgreSQL.',
        'PDF reports with JasperReports and Excel files with Apache POI.',
        'Frontend with Angular, TypeScript, RxJS and Bootstrap.',
        'iOS and Android mobile projects with NativeScript and OpenCV, which led me to learn Python; the company also supported me in studying Kotlin for Android.',
        'Documented system architecture and patterns, fixed legacy bugs and technical debt, using Docker, Git and Scrum.',
      ],
    },
    tech: ['Java', 'Spring Boot', 'Hibernate', 'Liquibase', 'JHipster', 'MySQL', 'PostgreSQL', 'Angular', 'TypeScript', 'RxJS', 'NativeScript', 'OpenCV', 'Docker', 'Scrum'],
  },
]

export const skills = [
  { group: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'React', 'Next.js', 'React Query', 'Zustand', 'HTML5', 'CSS3', 'SASS', 'Angular Material', 'Bootstrap', 'SSR', 'TailwindCSS', 'Responsive Design', 'React Native', 'NativeScript'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'JWT', { es: 'Microservicios', en: 'Microservices' }, 'Mongoose', 'Prisma', 'RabbitMQ', 'Python', 'FastAPI', 'GraphQL', 'Kotlin'] },
  { group: { es: 'Bases de datos', en: 'Databases' }, items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase', 'Liquibase'] },
  { group: 'DevOps / Cloud', items: ['Docker', 'Docker Compose', 'Google Cloud Platform', 'AWS EC2', 'Nginx', 'CI/CD', 'Linux', 'Git', 'GitHub'] },
  { group: 'Testing', items: ['Jest', 'Vitest', 'Jasmine', 'Karma', 'Mocha', 'Chai'] },
  { group: { es: 'IA y datos', en: 'AI & data' }, items: ['Claude Code', 'Codex', 'Cursor', 'Windsurf', 'RAG', 'Memory', 'LangChain', 'FAISS', 'Hugging Face', 'Tool calling', 'Machine Learning', 'NumPy'] },
  { group: { es: 'Metodologías', en: 'Methodologies' }, items: ['Scrum', 'Agile'] },
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
    detail: { es: 'Formación técnica en lógica, resolución de problemas y sistemas.', en: 'Technical training in logic, problem solving and systems.' },
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

// Ordenadas de la más reciente a la más antigua
export const certifications = [
  { name: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI · Coursera', date: '2026-06', category: 'ai', id: '0R2WTISL4DPH', url: 'https://www.coursera.org/account/accomplishments/verify/0R2WTISL4DPH' },
  { name: 'Supervised Machine Learning: Regression and Classification', issuer: 'DeepLearning.AI · Coursera', date: '2026-05', category: 'ai', id: 'PJ7W4LX21427', url: 'https://www.coursera.org/account/accomplishments/verify/PJ7W4LX21427' },
  eit({ es: 'Introducción a Python', en: 'Introduction to Python' }, '2025-08', 76860, 'backend'),
  eit('Google Cloud Platform Fundamentals', '2023-12', 62832, 'cloud'),
  eit({ es: 'Android Avanzado en Kotlin', en: 'Advanced Android with Kotlin' }, '2023-05', 62063, 'cloud'),
  eit('Java Spring Boot', '2023-03', 62201, 'backend'),
  eit('Java Standard 11 Web Programming', '2023-02', 61933, 'backend'),
  { name: 'Back End Development and APIs', issuer: 'freeCodeCamp', date: '2022-04', category: 'backend', url: 'https://www.freecodecamp.org/certification/fccf30b95d0-a474-47ee-b199-5c17a1107aa7/back-end-development-and-apis' },
  eit({ es: 'Introducción a Bases de Datos y SQL', en: 'Introduction to Databases and SQL' }, '2022-01', 55957, 'data'),
  eit({ es: 'MongoDB Avanzado', en: 'Advanced MongoDB' }, '2021-12', 52949, 'data'),
  eit({ es: 'Arquitectura avanzada en Node.js', en: 'Advanced Node.js Architecture' }, '2021-11', 50443, 'backend'),
  eit({ es: 'Scrum Fundamentos', en: 'Scrum Fundamentals' }, '2021-11', 55756, 'other'),
  eit({ es: 'Presupuesto Digital', en: 'Digital Budgeting' }, '2021-11', 55964, 'other'),
  eit('Angular 11', '2021-11', 49642, 'frontend'),
  eit({ es: 'React.js Avanzado', en: 'Advanced React.js' }, '2021-10', 50454, 'frontend'),
  eit({ es: 'Node.js y MongoDB', en: 'Node.js and MongoDB' }, '2021-09', 49655, 'backend'),
  eit('React.js', '2021-09', 54318, 'frontend'),
  eit({ es: 'Git: Desarrollo Colaborativo', en: 'Git: Collaborative Development' }, '2021-08', 54450, 'other'),
  eit('Javascript PWA (Progressive Web App)', '2021-08', 52126, 'frontend'),
  eit({ es: 'Introducción al Paradigma de Objetos', en: 'Introduction to Object-Oriented Programming' }, '2021-08', 54424, 'other'),
  eit({ es: 'MongoDB Fundamentos', en: 'MongoDB Fundamentals' }, '2021-06', 50998, 'data'),
  eit({ es: 'Javascript Desarrollador Avanzado', en: 'Advanced Javascript Developer' }, '2021-06', 52136, 'frontend'),
  eit({ es: 'Maquetador Web Avanzado (HTML5 y CSS3)', en: 'Advanced Web Layout (HTML5 & CSS3)' }, '2021-05', 53408, 'frontend'),
  eit({ es: 'Javascript desde cero', en: 'Javascript from scratch' }, '2021-04', 45988, 'frontend'),
  eit({ es: 'Desarrollo Web con HTML', en: 'Web Development with HTML' }, '2021-02', 52277, 'frontend'),
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
  {
    name: { es: 'Diseño de sistemas a gran escala y arquitectura de software', en: 'Large-scale system design and software architecture' },
    issuer: 'Udemy',
    url: 'https://www.udemy.com/course/diseno-de-sistemas-a-gran-escala-y-arquitectura-de-software/',
  },
]

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'Conversacional · lectura técnica', en: 'Conversational · technical reading' } },
]
