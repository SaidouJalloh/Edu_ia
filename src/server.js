
// // src/server.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const generatePlanRouter = require('./apis/generate-plan');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true }));

// const generateSlidesRouter = require('./apis/generate-slides');
// app.use('/ai', generateSlidesRouter);


// // const simplePlanRouter = require('./apis/simple-plan');
// // app.use('/ai', simplePlanRouter);

// // Routes
// app.use('/ai', generatePlanRouter);


// const simplePlanRouter = require('./apis/simple-plan');
// app.use('/ai', simplePlanRouter);


// const fastPlanRouter = require('./apis/fast-simple-plan');
// app.use('/ai', fastPlanRouter);


// const groqPlanRouter = require('./apis/groq-fast-plan');
// app.use('/ai', groqPlanRouter);


// const demoStepsRouter = require('./apis/generate-demo-steps');
// app.use('/ai', demoStepsRouter);


// const slidevRouter = require('./apis/slidev-generator');
// app.use('/ai', slidevRouter);


// const powerpointRouter = require('./apis/powerpoint-generator');
// app.use('/ai', powerpointRouter);





// // Health check
// app.get('/health', (req, res) => {
//     res.json({ status: 'OK', service: 'EduPro AI MicroLearning' });
// });

// app.listen(PORT, () => {
//     console.log(`🚀 EduPro AI Server running on port ${PORT}`);
//     console.log(`📚 Micro-Learning Generator ready!`);
// });




// code qui marche sans la partie ressources



// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // CORS Configuration pour production
// const corsOptions = {
//     origin: process.env.CORS_ORIGIN || '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// };

// app.use(cors(corsOptions));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true }));

// // Middleware pour logs en production
// app.use((req, res, next) => {
//     console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
//     next();
// });

// // Routes APIs avec gestion d'erreurs
// const generatePlanRouter = require('./apis/generate-plan');
// const simplePlanRouter = require('./apis/simple-plan');
// const fastPlanRouter = require('./apis/fast-simple-plan');
// const groqPlanRouter = require('./apis/groq-fast-plan');
// const demoStepsRouter = require('./apis/generate-demo-steps');
// const slidesRouter = require('./apis/generate-slides');
// const slidevRouter = require('./apis/slidev-generator');
// const powerpointRouter = require('./apis/powerpoint-generator');

// app.use('/ai', generatePlanRouter);
// app.use('/ai', simplePlanRouter);
// app.use('/ai', fastPlanRouter);
// app.use('/ai', groqPlanRouter);
// app.use('/ai', demoStepsRouter);
// app.use('/ai', slidesRouter);
// app.use('/ai', slidevRouter);
// app.use('/ai', powerpointRouter);

// // Route principale pour documenter les APIs
// app.get('/', (req, res) => {
//     res.json({
//         service: 'EduPro AI Micro-Learning Generator',
//         version: '1.0.0',
//         status: 'online',
//         deployed_at: new Date().toISOString(),
//         server_info: {
//             node_version: process.version,
//             platform: process.platform,
//             memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
//             uptime: `${Math.round(process.uptime())} seconds`
//         },
//         endpoints: {
//             plans: {
//                 'POST /ai/groq-plan': 'Génération ultra-rapide (1s) - RECOMMANDÉ',
//                 'POST /ai/generate-plan': 'Plan complet + script narration',
//                 'POST /ai/simple-plan': 'Plan basique structure seule',
//                 'POST /ai/fast-plan': 'Version cache optimisé'
//             },
//             demonstrations: {
//                 'POST /ai/generate-demo-steps': 'Steps précis logiciels (Excel, SAP, Power BI, Teams)',
//                 'GET /ai/software-catalog': 'Liste logiciels supportés'
//             },
//             presentations: {
//                 'POST /ai/generate-slides': 'Slides Slidev markdown',
//                 'POST /ai/generate-slidev': 'Slidev complet avec fichiers',
//                 'POST /ai/generate-powerpoint': 'PowerPoint sophistiqué HTML',
//                 'POST /ai/generate-powerpoint-advanced': 'PowerPoint premium avec options'
//             },
//             utilities: {
//                 'GET /ai/health': 'Santé des providers IA (Groq/Ollama)',
//                 'GET /powerpoint/themes': 'Thèmes design disponibles'
//             }
//         },
//         examples: {
//             quick_start: {
//                 url: 'POST /ai/groq-plan',
//                 body: {
//                     topic: 'Créer un tableau croisé dynamique Excel',
//                     type: 'demonstrative',
//                     level: 'beginner',
//                     duration_minutes: 5
//                 }
//             },
//             demo_steps: {
//                 url: 'POST /ai/generate-demo-steps',
//                 body: {
//                     software: 'excel',
//                     task: 'Créer un tableau croisé dynamique',
//                     user_level: 'beginner'
//                 }
//             }
//         },
//         frontend_integration: {
//             base_url: `https://${req.get('host')}`,
//             cors_enabled: true,
//             rate_limit: 'Aucune limite en développement',
//             authentication: 'Aucune (APIs publiques)',
//             response_format: 'JSON',
//             https_required: true
//         },
//         performance: {
//             groq_api: '1-3 secondes',
//             demo_steps: '1-2 secondes',
//             powerpoint: '50-200ms',
//             cache_hit: '< 100ms'
//         },
//         support: {
//             repository: 'https://github.com/SaidouJalloh/Edu_ia',
//             documentation: 'Voir endpoints ci-dessus',
//             contact: 'Via GitHub Issues'
//         }
//     });
// });

// // Health check détaillé
// app.get('/health', (req, res) => {
//     const healthCheck = {
//         status: 'OK',
//         timestamp: new Date().toISOString(),
//         service: 'EduPro AI Micro-Learning Generator',
//         version: '1.0.0',
//         environment: process.env.NODE_ENV || 'development',
//         server: {
//             uptime: `${Math.round(process.uptime())} seconds`,
//             memory_usage: {
//                 used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
//                 total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`
//             },
//             cpu_usage: process.cpuUsage(),
//             platform: process.platform,
//             node_version: process.version
//         },
//         apis_status: {
//             groq_configured: !!process.env.GROQ_API_KEY,
//             ollama_fallback: process.env.OLLAMA_URL || 'not_configured',
//             cache_enabled: process.env.ENABLE_CACHE === 'true',
//             cors_origin: process.env.CORS_ORIGIN || '*'
//         },
//         endpoints_count: {
//             total: 8,
//             plans: 4,
//             presentations: 4,
//             utilities: 2
//         }
//     };

//     res.json(healthCheck);
// });

// // Route de test rapide pour l'équipe frontend
// app.post('/test', (req, res) => {
//     res.json({
//         message: 'API EduPro AI fonctionnelle !',
//         received_data: req.body,
//         timestamp: new Date().toISOString(),
//         server_status: 'OK',
//         next_step: 'Utilisez /ai/groq-plan pour tester la génération IA'
//     });
// });

// // Gestion des erreurs 404
// app.use('*', (req, res) => {
//     res.status(404).json({
//         error: 'Endpoint non trouvé',
//         message: `${req.method} ${req.originalUrl} n'existe pas`,
//         available_endpoints: [
//             'GET /',
//             'GET /health',
//             'POST /test',
//             'POST /ai/groq-plan',
//             'POST /ai/generate-plan',
//             'POST /ai/simple-plan',
//             'POST /ai/generate-demo-steps',
//             'POST /ai/generate-powerpoint'
//         ],
//         documentation: `https://${req.get('host')}/`
//     });
// });

// // Gestion globale des erreurs
// app.use((error, req, res, next) => {
//     console.error('Erreur serveur:', error);
//     res.status(500).json({
//         error: 'Erreur interne serveur',
//         message: process.env.NODE_ENV === 'production' ? 'Une erreur est survenue' : error.message,
//         timestamp: new Date().toISOString()
//     });
// });

// // Graceful shutdown
// process.on('SIGTERM', () => {
//     console.log('🛑 SIGTERM reçu, arrêt graceful du serveur...');
//     process.exit(0);
// });

// process.on('SIGINT', () => {
//     console.log('🛑 SIGINT reçu, arrêt graceful du serveur...');
//     process.exit(0);
// });

// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`🚀 EduPro AI Server running on port ${PORT}`);
//     console.log(`📚 Micro-Learning Generator ready!`);
//     console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
//     console.log(`🔑 Groq configured: ${!!process.env.GROQ_API_KEY}`);
//     console.log(`💾 Cache enabled: ${process.env.ENABLE_CACHE === 'true'}`);
//     console.log(`🌐 CORS origin: ${process.env.CORS_ORIGIN || '*'}`);
//     console.log(`📊 APIs disponibles: 8 endpoints`);
// });

// // Export pour tests
// module.exports = app;





const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration pour production
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Middleware pour logs en production
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes APIs avec gestion d'erreurs
const generatePlanRouter = require('./apis/generate-plan');
const simplePlanRouter = require('./apis/simple-plan');
const fastPlanRouter = require('./apis/fast-simple-plan');
const groqPlanRouter = require('./apis/groq-fast-plan');
const demoStepsRouter = require('./apis/generate-demo-steps');
const slidesRouter = require('./apis/generate-slides');
const slidevRouter = require('./apis/slidev-generator');
const powerpointRouter = require('./apis/powerpoint-generator');

// 🆕 NOUVELLE API PARSE RESOURCES
const parseResourcesRouter = require('./apis/parse-resources');

app.use('/ai', generatePlanRouter);
app.use('/ai', simplePlanRouter);
app.use('/ai', fastPlanRouter);
app.use('/ai', groqPlanRouter);
app.use('/ai', demoStepsRouter);
app.use('/ai', slidesRouter);
app.use('/ai', slidevRouter);
app.use('/ai', powerpointRouter);

// 🆕 AJOUTER LA NOUVELLE ROUTE
app.use('/ai', parseResourcesRouter);

// Route principale pour documenter les APIs
app.get('/', (req, res) => {
    res.json({
        service: 'EduPro AI Micro-Learning Generator',
        version: '1.0.0',
        status: 'online',
        deployed_at: new Date().toISOString(),
        server_info: {
            node_version: process.version,
            platform: process.platform,
            memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
            uptime: `${Math.round(process.uptime())} seconds`
        },
        endpoints: {
            plans: {
                'POST /ai/groq-plan': 'Génération ultra-rapide (1s) - RECOMMANDÉ',
                'POST /ai/generate-plan': 'Plan complet + script narration',
                'POST /ai/simple-plan': 'Plan basique structure seule',
                'POST /ai/fast-plan': 'Version cache optimisé'
            },
            demonstrations: {
                'POST /ai/generate-demo-steps': 'Steps précis logiciels (Excel, SAP, Power BI, Teams)',
                'GET /ai/software-catalog': 'Liste logiciels supportés'
            },
            presentations: {
                'POST /ai/generate-slides': 'Slides Slidev markdown',
                'POST /ai/generate-slidev': 'Slidev complet avec fichiers',
                'POST /ai/generate-powerpoint': 'PowerPoint sophistiqué HTML',
                'POST /ai/generate-powerpoint-advanced': 'PowerPoint premium avec options'
            },
            // 🆕 NOUVELLE SECTION RESOURCES
            resources: {
                'POST /ai/parse-resources': 'Upload et analyse documents (PDF, DOCX, PPTX, XLSX)',
                'GET /ai/parse-resources/formats': 'Formats supportés et limites'
            },
            utilities: {
                'GET /ai/health': 'Santé des providers IA (Groq/Ollama)',
                'GET /powerpoint/themes': 'Thèmes design disponibles'
            }
        },
        examples: {
            quick_start: {
                url: 'POST /ai/groq-plan',
                body: {
                    topic: 'Créer un tableau croisé dynamique Excel',
                    capsuleType: 'demonstrative',
                    settings: {
                        level: 'beginner',
                        duration: 5,
                        style: 'practical'
                    }
                }
            },
            // 🆕 NOUVEL EXEMPLE RESOURCES
            parse_resources: {
                url: 'POST /ai/parse-resources',
                body: {
                    topic: 'Feedback constructif',
                    capsuleType: 'conceptual',
                    settings: {
                        level: 'intermediate',
                        duration: 5,
                        style: 'practical'
                    }
                },
                note: 'Utiliser form-data avec fichiers dans le champ "files"'
            }
        },
        frontend_integration: {
            base_url: `https://${req.get('host')}`,
            cors_enabled: true,
            rate_limit: 'Aucune limite en développement',
            authentication: 'Aucune (APIs publiques)',
            response_format: 'JSON',
            https_required: true
        },
        performance: {
            groq_api: '1-3 secondes',
            demo_steps: '1-2 secondes',
            powerpoint: '50-200ms',
            parse_resources: '2-10 secondes selon taille fichiers', // 🆕
            cache_hit: '< 100ms'
        },
        support: {
            repository: 'https://github.com/SaidouJalloh/Edu_ia',
            documentation: 'Voir endpoints ci-dessus',
            contact: 'Via GitHub Issues'
        }
    });
});

// Health check détaillé
app.get('/health', (req, res) => {
    const healthCheck = {
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'EduPro AI Micro-Learning Generator',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        server: {
            uptime: `${Math.round(process.uptime())} seconds`,
            memory_usage: {
                used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
                total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`
            },
            cpu_usage: process.cpuUsage(),
            platform: process.platform,
            node_version: process.version
        },
        apis_status: {
            groq_configured: !!process.env.GROQ_API_KEY,
            ollama_fallback: process.env.OLLAMA_URL || 'not_configured',
            cache_enabled: process.env.ENABLE_CACHE === 'true',
            cors_origin: process.env.CORS_ORIGIN || '*'
        },
        endpoints_count: {
            total: 9, // 🆕 Mis à jour de 8 à 9
            plans: 4,
            presentations: 4,
            resources: 1, // 🆕 Nouvelle catégorie
            utilities: 2
        }
    };

    res.json(healthCheck);
});

// Route de test rapide pour l'équipe frontend
app.post('/test', (req, res) => {
    res.json({
        message: 'API EduPro AI fonctionnelle !',
        received_data: req.body,
        timestamp: new Date().toISOString(),
        server_status: 'OK',
        next_step: 'Utilisez /ai/groq-plan pour tester la génération IA'
    });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Endpoint non trouvé',
        message: `${req.method} ${req.originalUrl} n'existe pas`,
        available_endpoints: [
            'GET /',
            'GET /health',
            'POST /test',
            'POST /ai/groq-plan',
            'POST /ai/generate-demo-steps',
            'POST /ai/generate-powerpoint',
            'POST /ai/parse-resources' // 🆕
        ],
        documentation: `https://${req.get('host')}/`
    });
});

// Gestion globale des erreurs
app.use((error, req, res, next) => {
    console.error('Erreur serveur:', error);
    res.status(500).json({
        error: 'Erreur interne serveur',
        message: process.env.NODE_ENV === 'production' ? 'Une erreur est survenue' : error.message,
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM reçu, arrêt graceful du serveur...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT reçu, arrêt graceful du serveur...');
    process.exit(0);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 EduPro AI Server running on port ${PORT}`);
    console.log(`📚 Micro-Learning Generator ready!`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔑 Groq configured: ${!!process.env.GROQ_API_KEY}`);
    console.log(`💾 Cache enabled: ${process.env.ENABLE_CACHE === 'true'}`);
    console.log(`🌐 CORS origin: ${process.env.CORS_ORIGIN || '*'}`);
    console.log(`📊 APIs disponibles: 9 endpoints`); // 🆕 Mis à jour
    console.log(`📄 Parse Resources: PDF, DOCX, PPTX, XLSX support`); // 🆕
});

// Export pour tests
module.exports = app;