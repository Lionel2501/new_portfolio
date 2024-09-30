// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Definición de las traducciones
const resources = {
    es: {
        translation: {
            "presentation": {
                "card_title": "¡Hola! Soy Lionel,",
                "card_text_1": "Comencé a programar en 2019 de manera autodidacta, antes de estudiar en la UNICEN de Tandil.",
                "card_text_2": "Tengo experiencia en el desarrollo de sistemas, tanto en front-end como en back-end.",
                "card_text_3": "Desliza el contenido para descubrir más sobre mis habilidades y experiencia.",
            },
            "tecnologies": {
                "card_title": "Ya sea en la facultad, por curiosidad o de manera profesional, he tenido la oportunidad de trabajar con distintas tecnologías de desarrollo. A continuación, pueden acceder a más información haciendo click sobre cada una.",
            },
            "experience_arteyparte": {
                "title": "Desarrollador Web",
                "date": "2021",
                "title_job": "Desarrollador Web / Arte y Parte",
                "title_job_date": "junio 2021 - enero 2022",
                "job_posicion": "Responsable de la implementación del contenido de la sección de los cursos para el sitio ",
                "_job_posicion": "www.arteyparte.net",
                "goals_1": "Actualizar el contenido del sistema.",
                "goals_2": "Actualizar el diseño del sitio.",
                "task_done_1": "Contribuí al diseño, desarrollo y mantenimiento de una plataforma de cursos en línea, asegurando una experiencia de usuario fluida y accesible para los estudiantes.",
                "task_done_2": "Me encargué de la actualización periódica del contenido de los cursos, integrando nuevos materiales y recursos didácticos para mantener la relevancia y calidad de la oferta educativa.",
                "task_done_3": "Implementé los estilos y la identidad visual diseñada por el equipo de diseño, garantizando la coherencia estética y funcional en la interfaz de la plataforma.",
                "task_done_4": "Participé activamente en sesiones colaborativas con equipos multidisciplinarios, aportando ideas y soluciones para mejorar tanto el desarrollo técnico como la experiencia del usuario en la plataforma.",
            },
            "experience_grupoagni": {
                "title": "Desarrollador Full Stack",
                "date": "2021 - 2023",
                "title_job": "Desarrollador Full Stack / Grupo Agni",
                "title_job_date": "septiembre 2021 - agosto 2023.",
                "job_posicion": " Miembro del equipo de desarrollo de un CRM cloud para un cliente en EE.UU.",
                "goals_1": "Renderización de datos en el cliente.",
                "goals_2": "Gestionar solicitudes en el servidor.",
                "task_done_1": "Implementé y optimicé bases de datos NoSQL, asegurando un rendimiento robusto y escalable para aplicaciones que manejan grandes volúmenes de datos no estructurados.",
                "task_done_2": "Automatizé la carga y almacenamiento de archivos CSV en sistemas de gestión de datos, garantizando la integridad y accesibilidad de los datos para su posterior análisis.",
                "task_done_3": "Integré y gestioné la implementación de coordenadas geográficas en Google Maps, mejorando la localización y visualización de datos espaciales en aplicaciones web.",
                "task_done_4": "Desarrollé funcionalidades para calcular y visualizar rutas óptimas en Google Maps, optimizando el tiempo de desplazamiento y los recursos en aplicaciones logísticas.",
                "task_done_5": "Implementé filtros de búsqueda dinámicos que permitieron a los usuarios refinar los resultados en tiempo real, mejorando la experiencia de búsqueda en aplicaciones web.",
                "task_done_6": "Desarrollé y optimicé métodos en segundo plano (background processes) para manejar tareas intensivas en procesamiento sin afectar el rendimiento de la interfaz de usuario.",
                "task_done_7": "Desarrollé y configuré la generación automática de documentos PDF descargables desde aplicaciones web, asegurando la correcta representación de datos y la facilidad de acceso para los usuarios.",
                "task_done_8": "Implementé la gestión de estados globales en aplicaciones, permitiendo una sincronización eficiente y consistente de datos entre diferentes componentes y vistas.",
                "task_done_9": "Desarrollé servicios de respuesta eficientes para manejar solicitudes del lado del servidor, mejorando la velocidad y fiabilidad de las aplicaciones web.",
                "task_done_10": "Implementé y mantuve plataformas de e-commerce, integrando funcionalidades clave como la gestión de productos, pagos y seguimientos de órdenes, optimizando la experiencia de compra en línea.",
                "task_done_11": "Implementé la gestión de estados del lado del cliente, utilizando frameworks modernos para asegurar la coherencia y eficiencia en la manipulación de datos en la interfaz de usuario.",
                "task_done_12": "Diseñé y desarrollé componentes reutilizables en aplicaciones web, promoviendo la eficiencia y consistencia en la implementación de interfaces de usuario.",
                "task_done_13": "Implementé y personalicé el diseño visual de interfaces utilizando Material UI, asegurando una experiencia de usuario moderna y coherente con las directrices de diseño establecidas.",
                "task_done_14": "Diseñé e implementé sistemas ETL (Extracción, Transformación y Carga) para la integración de datos desde diversas fuentes, asegurando la precisión y consistencia en el manejo de grandes volúmenes de información.",
                "task_done_15": "Realicé tareas de refactorización y optimización de código para mejorar la eficiencia, legibilidad y mantenibilidad de aplicaciones, reduciendo tiempos de carga y mejorando el rendimiento general."
            },
            "experience_wippie": {
                "title": "Desarrollador Full Stack",
                "date": "2023 a la actualidad",
                "title_job": "Desarrollador Full Stack / Wippie",
                "title_job_date": "septiembre 2023 - a la actualidad.",
                "job_posicion": "Responsable del desarrolló y mantenimiento de la administración de los cursos para la Dirección de Informática y Comunicaciones de Mendoza.",
                "goals_1": "Renderización de datos del lado del cliente.",
                "goals_2": "Gestionar solicitudes en el servidor.",
                "goals_3": "Actualizar el diseño del sitio.",
                "task_done_1": "Gestioné y supervisé el despliegue de aplicaciones en entornos de producción, asegurando la correcta configuración y funcionamiento del sistema, así como la mitigación de riesgos durante la transición.",
                "task_done_2": "Realicé tareas de mantenimiento preventivo y correctivo en sistemas productivos, garantizando su estabilidad, rendimiento y disponibilidad para los usuarios finales.",
                "task_done_3": "Diseñé, administré y optimicé bases de datos relacionales, asegurando la integridad, consistencia y rendimiento en la gestión de grandes volúmenes de datos transaccionales.",
                "task_done_4": "Implementé la conexión segura de servidores mediante SSL y su integración con la plataforma X-Road, asegurando la protección de datos sensibles y la interoperabilidad entre diferentes sistemas.",
                "task_done_5": "Diseñé y estructuré tablas de bases de datos relacionales, optimizando la organización y el acceso a los datos para mejorar la eficiencia de las consultas y la integridad referencial.",
                "task_done_6": "Desarrollé e implementé procesos para la ingesta y procesamiento eficiente de archivos CSV de gran tamaño, asegurando la correcta importación y manejo de datos en sistemas de alto rendimiento."
            },
            "contact": {
                "title": "Mensaje",
                "name": "Nombre *",
                "email": "Email *",
                "subjet": "Asunto",
                "message": "Mensaje *",
                "button_send": "Enviar",
                "download": "Descargar CV"
            },
            "global": {
                "presentation": "Presentatión",
                "tecnologies": "Tecnologias",
                "experience": "Experiencia",
                "contact": "Contactar",
                "subtitle": "Desarollador Full Stack basado en Argentina",
                "button_read_more": "leer más",
                "button_close": "Cerrar",
                "job_posicion_title": "Puesto:",
                "goals": "Objetivos:",
                "tecnologies": "Tecnologias:",
                "task_done": "Tareas realizadas:",
                "hability": "Habilidades:",
                "note": "Nota:",
            },
            "vuejs":{
                "habilidad_1": "Enrutamiento con Vue Router",
                "habilidad_2": "Integración con Tailwind CSS",
                "habilidad_3": "Comunicación con API usando Axios",
                "opinion": "En 2021, utilicé Vue.js para desarrollar mi primer portafolio mientras buscaba mi primera experiencia laboral. Implementé Tailwind CSS para los estilos, lo que me permitió explorar y fortalecer mis habilidades en el desarrollo front-end a través de este proyecto."
            },
            "python": {
              "habilidad_1": "Uso de BeautifulSoup para web scraping",
              "habilidad_2": "Automatización de tareas",
              "habilidad_3": "Gestión de datos y almacenamiento",
              "opinion": "Exploré Python por curiosidad, ya que es un lenguaje que me interesa aprender más a fondo. Desarrollé un script utilizando la librería BeautifulSoup para extraer datos de páginas web y almacenarlos en mi base de datos, lo que me permitió automatizar tareas de scraping y gestión de información."
            },
            "javascript": {
              "habilidad_1": "Manipulación del DOM",
              "habilidad_2": "Manejo de Eventos",
              "habilidad_3": "Programación Asíncrona",
              "habilidad_4": "Uso de Frameworks y Librerías",
              "habilidad_5": "Exploración de Node.js",
              "opinion": "Adquirí una sólida comprensión de JavaScript durante mis estudios universitarios y lo apliqué en mi experiencia profesional para el desarrollo de front-end. Además, realicé experimentos con Node.js para explorar el desarrollo en el back-end, ampliando así mi conocimiento en la construcción de aplicaciones completas."
            },
            "php": {
              "habilidad_1": "Programación Orientada a Objetos (OOP)",
              "habilidad_2": "Sintaxis y Estructura de PHP",
              "habilidad_3": "Manejo de Formularios",
              "habilidad_4": "Conexión con Bases de Datos",
              "habilidad_5": "Autenticación y Autorización",
              "habilidad_6": "Manejo de Peticiones HTTP",
              "opinion": "Adquirí una sólida comprensión de PHP durante mis estudios universitarios, donde aprendí la sintaxis del lenguaje y desarrollé diversas funcionalidades, incluyendo sistemas de autenticación, manejo de peticiones, controladores, así como la implementación de clases y objetos."
            },
            "laravel": {
              "habilidad_1": "Rutas y Controladores",
              "habilidad_2": "Eloquent ORM",
              "habilidad_3": "Middleware y Autenticación",
              "habilidad_4": "Integración con MongoDB",
              "habilidad_5": "Micro servicios",
              "habilidad_6": "Optimización y Escalabilidad",
              "opinion": "Después de mi primer año de estudios universitarios, profundicé en Laravel para seguir perfeccionando mis habilidades en PHP. A lo largo de dos años de experiencia trabajando con Laravel, he implementado microservicios y realizado peticiones a MongoDB utilizando el paquete Jenssegers. Esta experiencia me ha proporcionado una sólida comprensión del framework y sus capacidades."
            },
            "react": {
              "habilidad_1": "Componentes Funcionales y de Clase",
              "habilidad_2": "Hooks",
              "habilidad_3": "Gestión de Estados Globales",
              "habilidad_4": "Creación de Componentes Reutilizables",
              "habilidad_5": "Integración de Librerías y APIs",
              "habilidad_6": "Diseño de Interfaces con Material UI",
              "opinion": "Durante mi experiencia profesional, aprendí React para desarrollar la parte front-end de mis proyectos. Trabajé en la implementación de estados globales utilizando herramientas como Redux, creé componentes reutilizables para mejorar la eficiencia del desarrollo y utilicé diversas librerías para optimizar la funcionalidad de las aplicaciones. Además, manejé el diseño de interfaces utilizando Material UI, lo que me permitió crear interfaces atractivas y funcionales. Esta experiencia me ha proporcionado un sólido conocimiento en el desarrollo front-end con React."
            },
            "mysql": {
              "habilidad_1": "Diseño de Esquemas",
              "habilidad_2": "Consultas SQL",
              "habilidad_3": "Índices y Optimización",
              "opinion": "Durante mis estudios universitarios, aprendí a realizar consultas en MySQL, comprendiendo la estructura y el lenguaje de consultas SQL. Además, en mi experiencia laboral, diseñé y creé tablas para un sistema que tenía a mi cargo, asegurando la correcta organización y gestión de los datos. Esto me permitió desarrollar habilidades en la optimización de consultas y en la administración de bases de datos relacionales."
            },
            "mongodb": {
              "habilidad_1": "Manipulación de datos básicos",
              "habilidad_2": "Sintaxis",
              "habilidad_3": "Escalabilidad",
              "opinion": "Durante mi formación profesional, exploré MongoDB, adquiriendo experiencia en la creación y manipulación de documentos en bases de datos NoSQL. A lo largo de mi carrera, he trabajado con MongoDB para manejar grandes volúmenes de datos y realizar consultas eficientes. En proyectos anteriores, utilicé la flexibilidad de MongoDB para desarrollar estructuras de datos dinámicas y optimizar el rendimiento en sistemas de gran escala."
            },
            "git": {
              "habilidad_1": "Control de Versiones",
              "habilidad_2": "Ramas y Fusiones",
              "habilidad_3": "Resolución de Conflictos",
              "opinion": "A lo largo de mi carrera, he utilizado Git como herramienta esencial para el control de versiones. Desde mis primeros proyectos hasta trabajos profesionales, he gestionado repositorios, colaborado en equipo, y realizado ramas y fusiones para asegurar un desarrollo organizado. Además, he aplicado Git para mantener un historial de cambios claro y revertir a versiones anteriores cuando ha sido necesario, lo que me ha permitido mantener un flujo de trabajo eficiente y estructurado."
            }
        }
    },
    en: {
        translation: {
            "presentation": {
                "card_title": "Hello! I'm Lionel,",
                "card_text_1": "I started programming in 2019 on my own, before studying at UNICEN in Tandil.",
                "card_text_2": "I have experience in system development, both front-end and back-end.",
                "card_text_3": "Swipe the content to discover more about my skills and experience.",
            },
            "tecnologies": {
                "card_title": "Whether in university, out of curiosity, or professionally, I have had the opportunity to work with various development technologies. Below, you can access more information by clicking on each one.",
            },
            "experience_arteyparte": {
                "title": "Web Developer",
                "date": "2021",
                "title_job": "Web Developer / Arte y Parte",
                "title_job_date": "June 2021 - January 2022",
                "job_posicion": "Responsible for implementing the content of the courses section for the site ",
                "_job_posicion": "www.arteyparte.net",
                "goals_1": "Update the system content.",
                "goals_2": "Update the site design.",
                "task_done_1": "Contributed to the design, development, and maintenance of an online course platform, ensuring a smooth and accessible user experience for students.",
                "task_done_2": "Managed the periodic update of course content, integrating new materials and educational resources to maintain relevance and quality in the educational offering.",
                "task_done_3": "Implemented styles and visual identity designed by the design team, ensuring aesthetic and functional consistency in the platform's interface.",
                "task_done_4": "Actively participated in collaborative sessions with multidisciplinary teams, contributing ideas and solutions to improve both technical development and user experience on the platform.",
            },
            "experience_grupoagni": {
                "title": "Full Stack Developer",
                "date": "2021 - 2023",
                "title_job": "Full Stack Developer / Grupo Agni",
                "title_job_date": "September 2021 - August 2023.",
                "job_posicion": "Member of the development team of a cloud CRM for a client in the USA.",
                "goals_1": "Rendering data on the client side.",
                "goals_2": "Manage requests on the server.",
                "task_done_1": "Implemented and optimized NoSQL databases, ensuring robust and scalable performance for applications handling large volumes of unstructured data.",
                "task_done_2": "Automated the upload and storage of CSV files in data management systems, ensuring data integrity and accessibility for further analysis.",
                "task_done_3": "Integrated and managed the implementation of geographic coordinates in Google Maps, improving the localization and visualization of spatial data in web applications.",
                "task_done_4": "Developed functionalities to calculate and visualize optimal routes in Google Maps, optimizing travel time and resources in logistics applications.",
                "task_done_5": "Implemented dynamic search filters that allowed users to refine results in real-time, enhancing the search experience in web applications.",
                "task_done_6": "Developed and optimized background processes to handle processing-intensive tasks without affecting the performance of the user interface.",
                "task_done_7": "Developed and configured automatic generation of downloadable PDF documents from web applications, ensuring correct data representation and ease of access for users.",
                "task_done_8": "Implemented global state management in applications, allowing efficient and consistent data synchronization between different components and views.",
                "task_done_9": "Developed efficient response services to handle server-side requests, improving the speed and reliability of web applications.",
                "task_done_10": "Implemented and maintained e-commerce platforms, integrating key functionalities such as product management, payments, and order tracking, optimizing the online shopping experience.",
                "task_done_11": "Implemented client-side state management, using modern frameworks to ensure consistency and efficiency in data manipulation in the user interface.",
                "task_done_12": "Designed and developed reusable components in web applications, promoting efficiency and consistency in the implementation of user interfaces.",
                "task_done_13": "Implemented and customized the visual design of interfaces using Material UI, ensuring a modern user experience consistent with established design guidelines.",
                "task_done_14": "Designed and implemented ETL (Extract, Transform, Load) systems for data integration from various sources, ensuring accuracy and consistency in handling large volumes of information.",
                "task_done_15": "Refactored and optimized code to improve efficiency, readability, and maintainability of applications, reducing loading times and improving overall performance."
            },
            "experience_wippie": {
                "title": "Full Stack Developer",
                "date": "2023 to present",
                "title_job": "Full Stack Developer / Wippie",
                "title_job_date": "September 2023 - present.",
                "job_posicion": "Responsible for the development and maintenance of course management for the Mendoza Directorate of Informatics and Communications.",
                "goals_1": "Rendering data on the client side.",
                "goals_2": "Manage requests on the server.",
                "goals_3": "Update the site design.",
                "task_done_1": "Managed and supervised the deployment of applications in production environments, ensuring the correct configuration and functioning of the system, as well as mitigating risks during the transition.",
                "task_done_2": "Performed preventive and corrective maintenance on productive systems, ensuring their stability, performance, and availability for end users.",
                "task_done_3": "Designed, managed, and optimized relational databases, ensuring integrity, consistency, and performance in managing large volumes of transactional data.",
                "task_done_4": "Implemented secure server connections via SSL and their integration with the X-Road platform, ensuring the protection of sensitive data and interoperability between different systems.",
                "task_done_5": "Designed and structured tables of relational databases, optimizing data organization and access to improve query efficiency and referential integrity.",
                "task_done_6": "Developed and implemented processes for the efficient ingestion and processing of large CSV files, ensuring correct import and handling of data in high-performance systems."
            },
            "contact": {
                "title": "Message",
                "name": "Name *",
                "email": "Email *",
                "subjet": "Subject",
                "message": "Message *",
                "button_send": "Send",
                "download": "Download CV"
            },
            "global": {
                "presentation": "Presentation",
                "tecnologies": "Technologies",
                "experience": "Experience",
                "contact": "Contact",
                "subtitle": "Full Stack Developer based in Argentina",
                "button_read_more": "read more",
                "button_close": "Close",
                "job_posicion_title": "Position:",
                "goals": "Goals:",
                "tecnologies": "Technologies:",
                "task_done": "Tasks completed:",
                "hability": "Skills:",
                "note": "Note:",
            },
            "vuejs": {
                "habilidad_1": "Routing with Vue Router",
                "habilidad_2": "Integration with Tailwind CSS",
                "habilidad_3": "API Communication using Axios",
                "opinion": "In 2021, I used Vue.js to develop my first portfolio while looking for my first work experience. I implemented Tailwind CSS for the styles, which allowed me to explore and strengthen my skills in front-end development through this project."
            },
            "python": {
                "habilidad_1": "Using BeautifulSoup for web scraping",
                "habilidad_2": "Task automation",
                "habilidad_3": "Data management and storage",
                "opinion": "I explored Python out of curiosity, as it is a language I am interested in learning more about. I developed a script using the BeautifulSoup library to extract data from web pages and store it in my database, allowing me to automate scraping and data management tasks."
            },
            "javascript": {
                "habilidad_1": "DOM manipulation",
                "habilidad_2": "Event handling",
                "habilidad_3": "Asynchronous programming",
                "habilidad_4": "Use of frameworks and libraries",
                "habilidad_5": "Exploration of Node.js",
                "opinion": "I gained a solid understanding of JavaScript during my university studies and applied it in my professional experience for front-end development. Additionally, I experimented with Node.js to explore back-end development, thus expanding my knowledge in building full applications."
            },
            "php": {
                "habilidad_1": "Object-Oriented Programming (OOP)",
                "habilidad_2": "Syntax and Structure of PHP",
                "habilidad_3": "Form handling",
                "habilidad_4": "Database connection",
                "habilidad_5": "Authentication and Authorization",
                "habilidad_6": "Handling HTTP requests",
                "opinion": "I gained a solid understanding of PHP during my university studies, where I learned the language's syntax and developed various functionalities, including authentication systems, request handling, controllers, and implementing classes and objects."
            },
            "laravel": {
                "habilidad_1": "Routes and Controllers",
                "habilidad_2": "Eloquent ORM",
                "habilidad_3": "Middleware and Authentication",
                "habilidad_4": "Integration with MongoDB",
                "habilidad_5": "Microservices",
                "habilidad_6": "Optimization and Scalability",
                "opinion": "After my first year in college, I learned Laravel, which allowed me to understand how the framework works, use the Eloquent ORM, handle data, and develop applications with optimal performance."
            },
            "mysql": {
                "habilidad_1": "Database design",
                "habilidad_2": "Complex Queries",
                "habilidad_3": "Database optimization",
                "habilidad_4": "Data integrity and security",
                "habilidad_5": "Indexing and Relationships",
                "habilidad_6": "Stored Procedures",
                "opinion": "I have experience designing and creating MySQL tables for a system I was responsible for during my work. I learned to perform MySQL queries in college, which provided me with a solid foundation for working with relational databases."
            },
            "mongodb": {
                "habilidad_1": "Data storage and retrieval",
                "habilidad_2": "Document-oriented model",
                "habilidad_3": "Integration with Node.js",
                "habilidad_4": "Aggregation Framework",
                "habilidad_5": "Data validation",
                "habilidad_6": "Indexing and performance optimization",
                "opinion": "I began learning MongoDB when I started implementing NoSQL databases in projects. I found it interesting to work with its flexible data model, which allowed me to adapt to the requirements of different applications."
            },
            "git": {
                "habilidad_1": "Version control",
                "habilidad_2": "Branch management",
                "habilidad_3": "Merge conflicts",
                "habilidad_4": "Collaboration in teams",
                "habilidad_5": "Documentation and workflows",
                "opinion": "I learned Git in my early days of programming and have used it for version control in all my projects. I understand how to create branches, manage merges, and collaborate with teams using Git workflows."
            },
            "python": {
                "habilidad_1": "Web scraping with BeautifulSoup",
                "habilidad_2": "Task automation scripts",
                "habilidad_3": "Data management",
                "opinion": "I began exploring Python out of curiosity and as a way to expand my knowledge of programming languages. I have created scripts to automate web scraping tasks and manage data effectively."
            },
        },
    },
    fr: {
        translation: {
            "presentation": {
                "card_title": "Bonjour ! Je suis Lionel,",
                "card_text_1": "J'ai commencé à programmer en 2019 par moi-même, avant d'étudier à l'UNICEN à Tandil.",
                "card_text_2": "J'ai de l'expérience dans le développement de systèmes, tant front-end que back-end.",
                "card_text_3": "Faites glisser le contenu pour découvrir plus sur mes compétences et mon expérience.",
            },
            "tecnologies": {
                "card_title": "Que ce soit à l'université, par curiosité ou professionnellement, j'ai eu l'occasion de travailler avec diverses technologies de développement. Ci-dessous, vous pouvez accéder à plus d'informations en cliquant sur chacune d'entre elles.",
            },
            "experience_arteyparte": {
                "title": "Développeur Web",
                "date": "2021",
                "title_job": "Développeur Web / Arte y Parte",
                "title_job_date": "Juin 2021 - Janvier 2022",
                "job_posicion": "Responsable de l'implémentation du contenu de la section des cours pour le site ",
                "_job_posicion": "www.arteyparte.net",
                "goals_1": "Mettre à jour le contenu du système.",
                "goals_2": "Mettre à jour le design du site.",
                "task_done_1": "Contribué à la conception, au développement et à la maintenance d'une plateforme de cours en ligne, garantissant une expérience utilisateur fluide et accessible pour les étudiants.",
                "task_done_2": "Géré la mise à jour périodique du contenu des cours, intégrant de nouveaux matériels et ressources éducatives pour maintenir la pertinence et la qualité de l'offre éducative.",
                "task_done_3": "Implémenté des styles et une identité visuelle conçus par l'équipe de design, assurant la cohérence esthétique et fonctionnelle de l'interface de la plateforme.",
                "task_done_4": "Participé activement à des sessions collaboratives avec des équipes pluridisciplinaires, contribuant par des idées et des solutions à améliorer le développement technique et l'expérience utilisateur sur la plateforme.",
            },
            "experience_grupoagni": {
                "title": "Développeur Full Stack",
                "date": "2021 - 2023",
                "title_job": "Développeur Full Stack / Grupo Agni",
                "title_job_date": "Septembre 2021 - Août 2023.",
                "job_posicion": "Membre de l'équipe de développement d'un CRM cloud pour un client aux États-Unis.",
                "goals_1": "Rendre les données côté client.",
                "goals_2": "Gérer les demandes sur le serveur.",
                "task_done_1": "Implémenté et optimisé des bases de données NoSQL, garantissant des performances robustes et évolutives pour des applications traitant de grands volumes de données non structurées.",
                "task_done_2": "Automatisé le téléchargement et le stockage de fichiers CSV dans des systèmes de gestion de données, garantissant l'intégrité des données et leur accessibilité pour des analyses ultérieures.",
                "task_done_3": "Intégré et géré l'implémentation des coordonnées géographiques dans Google Maps, améliorant la localisation et la visualisation des données spatiales dans les applications web.",
                "task_done_4": "Développé des fonctionnalités pour calculer et visualiser des itinéraires optimaux dans Google Maps, optimisant le temps de trajet et les ressources dans les applications logistiques.",
                "task_done_5": "Implémenté des filtres de recherche dynamiques permettant aux utilisateurs de raffiner les résultats en temps réel, améliorant l'expérience de recherche dans les applications web.",
                "task_done_6": "Développé et optimisé des processus en arrière-plan pour traiter des tâches exigeantes sans affecter les performances de l'interface utilisateur.",
                "task_done_7": "Développé et configuré la génération automatique de documents PDF téléchargeables à partir des applications web, garantissant une représentation correcte des données et une facilité d'accès pour les utilisateurs.",
                "task_done_8": "Implémenté une gestion d'état globale dans les applications, permettant une synchronisation efficace et cohérente des données entre différents composants et vues.",
                "task_done_9": "Développé des services de réponse efficaces pour gérer les demandes côté serveur, améliorant la rapidité et la fiabilité des applications web.",
                "task_done_10": "Implémenté et maintenu des plateformes de commerce électronique, intégrant des fonctionnalités clés telles que la gestion des produits, les paiements et le suivi des commandes, optimisant l'expérience d'achat en ligne.",
                "task_done_11": "Implémenté une gestion d'état côté client, utilisant des frameworks modernes pour assurer la cohérence et l'efficacité dans la manipulation des données dans l'interface utilisateur.",
                "task_done_12": "Conçu et développé des composants réutilisables dans les applications web, favorisant l'efficacité et la cohérence dans la mise en œuvre des interfaces utilisateur.",
                "task_done_13": "Implémenté et personnalisé le design visuel des interfaces à l'aide de Material UI, assurant une expérience utilisateur moderne conforme aux directives de conception établies.",
                "task_done_14": "Conçu et mis en œuvre des systèmes ETL (Extraire, Transformer, Charger) pour l'intégration des données à partir de diverses sources, garantissant l'exactitude et la cohérence dans la gestion de grands volumes d'informations.",
                "task_done_15": "Refactorisé et optimisé le code pour améliorer l'efficacité, la lisibilité et la maintenabilité des applications, réduisant les temps de chargement et améliorant les performances globales."
            },
            "experience_wippie": {
                "title": "Développeur Full Stack",
                "date": "2023 à présent",
                "title_job": "Développeur Full Stack / Wippie",
                "title_job_date": "Septembre 2023 - présent.",
                "job_posicion": "Responsable du développement et de la maintenance de la gestion des cours pour la Direction de l'Informatique et des Communications de Mendoza.",
                "goals_1": "Rendre les données côté client.",
                "goals_2": "Gérer les demandes sur le serveur.",
                "goals_3": "Mettre à jour le design du site.",
                "task_done_1": "Géré et supervisé le déploiement des applications dans les environnements de production, assurant la configuration correcte et le fonctionnement du système, tout en atténuant les risques lors de la transition.",
                "task_done_2": "Effectué la maintenance préventive et corrective des systèmes productifs, garantissant leur stabilité, performance et disponibilité pour les utilisateurs finaux.",
                "task_done_3": "Conçu, géré et optimisé des bases de données relationnelles, garantissant l'intégrité, la cohérence et la performance dans la gestion de grands volumes de données transactionnelles.",
                "task_done_4": "Implémenté des connexions sécurisées au serveur via SSL et leur intégration avec des systèmes d'authentification, garantissant la protection des informations sensibles des utilisateurs.",
                "task_done_5": "Participé activement à des sessions de travail collaboratives, apportant des idées et des solutions pour améliorer les processus de développement et optimiser l'expérience utilisateur.",
            },
            "skills": {
                "title": "Compétences",
                "web": {
                    "habilidad_1": "HTML5",
                    "habilidad_2": "CSS3",
                    "habilidad_3": "JavaScript",
                    "habilidad_4": "React",
                    "habilidad_5": "PHP",
                    "habilidad_6": "Laravel",
                },
                "mysql": {
                    "habilidad_1": "Conception de bases de données",
                    "habilidad_2": "Requêtes complexes",
                    "habilidad_3": "Optimisation des bases de données",
                    "habilidad_4": "Intégrité et sécurité des données",
                    "habilidad_5": "Indexation et relations",
                    "habilidad_6": "Procédures stockées",
                },
                "mongodb": {
                    "habilidad_1": "Stockage et récupération de données",
                    "habilidad_2": "Modèle orienté document",
                    "habilidad_3": "Intégration avec Node.js",
                    "habilidad_4": "Framework d'agrégation",
                    "habilidad_5": "Validation des données",
                    "habilidad_6": "Indexation et optimisation des performances",
                },
                "git": {
                    "habilidad_1": "Contrôle de version",
                    "habilidad_2": "Gestion des branches",
                    "habilidad_3": "Conflits de fusion",
                    "habilidad_4": "Collaboration en équipe",
                    "habilidad_5": "Documentation et workflows",
                },
                "python": {
                    "habilidad_1": "Web scraping avec BeautifulSoup",
                    "habilidad_2": "Scripts d'automatisation des tâches",
                    "habilidad_3": "Gestion des données",
                },
            },
        },
    }
    
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador o localStorage
  .use(initReactI18next) // Configura i18next con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no se detecta o no está disponible el idioma del usuario
    interpolation: {
      escapeValue: false // React ya escapa los valores
    }
  });

export default i18n;
