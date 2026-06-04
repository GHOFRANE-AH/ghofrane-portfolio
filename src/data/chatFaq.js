/**
 * Configuration — remplacez whatsappNumber par votre numéro international
 * sans + ni espaces (ex. 33612345678) pour activer le lien WhatsApp.
 */
export const CHAT_CONFIG = {
  name: 'Ghofrane Hedna',
  role: 'Développeuse Fullstack',
  whatsappNumber: '',
  linkedin: 'https://www.linkedin.com/in/ghofrane-hedna/',
  github: 'https://github.com/GHOFRANE-AH',
  cvUrl: '/cv-informatique.pdf',
}

export const WELCOME_MESSAGE =
  "Bonjour 👋\n\nMerci de visiter le portfolio de Ghofrane Hedna.\nJe suis son assistant virtuel : posez-moi vos questions sur ses compétences, projets, services ou disponibilité.\n\nChoisissez une suggestion ci-dessous ou écrivez votre message."

export const HANDOFF_MESSAGE =
  "Cette question nécessite une réponse personnalisée de Ghofrane. Elle pourra vous répondre directement via LinkedIn ou la section Contact du site."

export const QUICK_REPLIES = [
  'Qui est Ghofrane ?',
  'Compétences',
  'Services proposés',
  'Projets récents',
  'Tarifs et devis',
  'Disponibilité',
  'Me contacter',
]

/** @type {{ keywords: string[]; answer: string; priority?: number }[]} */
export const FAQ_ENTRIES = [
  {
    keywords: ['bonjour', 'salut', 'hello', 'coucou', 'bonsoir', 'hey', 'hi'],
    answer:
      "Bonjour 👋\n\nJe suis l'assistant de Ghofrane Hedna, développeuse Fullstack.\n\nJe peux vous renseigner sur :\n• ses compétences techniques\n• ses projets (Lyter, E-commerce, Lense-Solidaire)\n• les services qu'elle propose\n• sa disponibilité freelance\n• comment la contacter\n\nQue souhaitez-vous savoir ?",
    priority: 1,
  },
  {
    keywords: ['merci', 'thanks', 'thank you', 'parfait', 'super', 'genial', 'génial'],
    answer:
      "Avec plaisir 😊\n\nSi vous avez d'autres questions, je suis là. Pour un échange direct avec Ghofrane, utilisez LinkedIn ou la section Contact en bas de page.",
    priority: 1,
  },
  {
    keywords: ['au revoir', 'aurevoir', 'bye', 'ciao', 'a plus', 'à plus'],
    answer:
      "Au revoir ! N'hésitez pas à revenir si vous avez besoin d'informations. Bonne continuation 👋",
    priority: 1,
  },
  {
    keywords: [
      'qui es tu',
      'qui etes vous',
      'qui êtes-vous',
      'c est quoi',
      "c'est quoi",
      'assistant',
      'robot',
      'bot',
      'chatbot',
      'assistant virtuel',
      'assistant ia',
    ],
    answer:
      "Je suis l'assistant virtuel du portfolio de Ghofrane Hedna. Je réponds automatiquement aux questions fréquentes sur son profil, ses compétences et ses services.\n\nPour une demande spécifique (devis détaillé, entretien, proposition de mission), Ghofrane interviendra personnellement.",
    priority: 2,
  },
  {
    keywords: [
      'qui est',
      'qui est ghofrane',
      'presente',
      'présente',
      'presentation',
      'présentation',
      'profil',
      'parcours',
      'bio',
      'a propos',
      'à propos',
      'about',
    ],
    answer:
      "Ghofrane Hedna est développeuse Fullstack.\n\nElle conçoit des applications web accessibles et robustes, avec une attention particulière à l'expérience utilisateur et à la qualité du code — en équipe ou en autonomie.\n\n📄 CV téléchargeable depuis la page d'accueil.\n🔗 LinkedIn : ghofrane-hedna\n🔗 GitHub : GHOFRANE-AH",
    priority: 5,
  },
  {
    keywords: [
      'fullstack',
      'full stack',
      'full-stack',
      'developpeuse',
      'développeuse',
      'dev',
      'metier',
      'métier',
      'poste',
    ],
    answer:
      "Ghofrane est développeuse Fullstack : elle maîtrise le frontend (React, interfaces soignées) et le backend (Node.js, APIs, bases de données, déploiement).\n\nElle peut prendre en charge un projet de A à Z ou intervenir sur une partie précise (front, back, intégration IA, maintenance).",
    priority: 4,
  },
  {
    keywords: [
      'competence',
      'compétence',
      'competences',
      'compétences',
      'skill',
      'skills',
      'stack',
      'techno',
      'technologie',
      'technologies',
      'maitrise',
      'maîtrise',
      'sait faire',
      'outils',
    ],
    answer:
      "Compétences principales de Ghofrane :\n\n• React\n• Node.js\n• MongoDB\n• TypeScript\n• JavaScript\n• Git & GitHub\n• Firebase\n• Flutter\n• Figma\n\nElle travaille aussi avec Express, SendGrid, TensorFlow.js, Gemini, OpenAI selon les projets.",
    priority: 6,
  },
  {
    keywords: ['react', 'frontend', 'front-end', 'front end', 'interface', 'ui', 'ux'],
    answer:
      "Côté frontend, Ghofrane utilise principalement React pour des interfaces modernes, accessibles et performantes. Elle porte aussi une attention à l'UX et au design (Figma).",
    priority: 4,
  },
  {
    keywords: ['node', 'nodejs', 'node.js', 'backend', 'back-end', 'back end', 'api', 'apis', 'express'],
    answer:
      "Côté backend : Node.js, Express, création d'APIs REST, intégration MongoDB ou Firebase, authentification (JWT), emails transactionnels (SendGrid), déploiement et support.",
    priority: 4,
  },
  {
    keywords: ['mongodb', 'base de donnee', 'base de données', 'database', 'bdd', 'sql', 'nosql'],
    answer:
      "Ghofrane travaille avec MongoDB (projets type e-commerce) et Firebase Firestore (projets type Lyter). Elle adapte le choix de base de données au besoin du projet.",
    priority: 4,
  },
  {
    keywords: ['typescript', 'javascript', 'js', 'ts'],
    answer: 'Ghofrane maîtrise JavaScript et TypeScript pour le développement web frontend et backend.',
    priority: 3,
  },
  {
    keywords: ['flutter', 'mobile', 'application mobile', 'app mobile', 'ios', 'android'],
    answer:
      "Flutter fait partie de sa stack : elle peut développer ou contribuer à des applications mobiles en plus du web.",
    priority: 4,
  },
  {
    keywords: ['firebase', 'firestore', 'auth', 'authentification'],
    answer:
      "Ghofrane utilise Firebase (Firestore, Storage, auth) notamment sur Lyter, avec Node.js/Express en backend complémentaire.",
    priority: 4,
  },
  {
    keywords: ['figma', 'design', 'maquette', 'wireframe'],
    answer:
      "Ghofrane utilise Figma pour les maquettes et la collaboration design, en lien avec le développement des interfaces.",
    priority: 3,
  },
  {
    keywords: ['git', 'github', 'versioning', 'depot', 'dépôt'],
    answer:
      "Elle utilise Git et GitHub au quotidien pour le versioning et la collaboration.\n\n🔗 github.com/GHOFRANE-AH",
    priority: 3,
  },
  {
    keywords: [
      'service',
      'services',
      'propose',
      'proposition',
      'prestation',
      'prestations',
      'offre',
      'offres',
      'faire pour moi',
      'peux tu faire',
      'pouvez vous',
    ],
    answer:
      "Services proposés par Ghofrane :\n\n1️⃣ Sites & landing pages — vitrine, portfolio, pages d'accueil\n2️⃣ Applications sur mesure — plateformes, back-office, admin\n3️⃣ E-commerce — catalogue, commandes, emails, suivi\n4️⃣ Backend & APIs — Node.js, MongoDB, Firebase, déploiement\n5️⃣ Intégrations IA — Gemini, OpenAI, automatisations\n6️⃣ Maintenance & refonte — bugs, nouvelles fonctionnalités, passation claire",
    priority: 6,
  },
  {
    keywords: ['site web', 'site internet', 'vitrine', 'landing', 'portfolio', 'page d accueil'],
    answer:
      "Ghofrane réalise des sites vitrine, landing pages et portfolios — petits ou grands projets, avec un code propre et une mise en ligne accompagnée.",
    priority: 5,
  },
  {
    keywords: ['e-commerce', 'ecommerce', 'boutique', 'shop', 'commande', 'catalogue', 'vente en ligne'],
    answer:
      "Elle développe des plateformes e-commerce complètes : catalogue produits, gestion des commandes, emails transactionnels, bordereaux d'expédition et suivi des statuts.\n\n📁 Voir le projet « Plateforme E-commerce » (2025) sur ce site.",
    priority: 6,
  },
  {
    keywords: [
      'intelligence artificielle projet',
      'integration ia',
      'intégration ia',
      'gemini',
      'openai',
      'gpt',
      'generation',
      'génération',
      'ia metier',
    ],
    answer:
      "Ghofrane intègre l'IA dans ses projets : génération de contenu, images (Gemini), texte (OpenAI), automatisations métier.\n\nExemple : Lyter — plateforme IA pour photos pro et contenu LinkedIn (Gemini + GPT-4o-mini).",
    priority: 5,
  },
  {
    keywords: ['maintenance', 'refonte', 'bug', 'bugs', 'corriger', 'evolution', 'évolution', 'optimisation'],
    answer:
      "Elle propose la maintenance et la refonte : correction de bugs, nouvelles fonctionnalités, optimisation et passation documentée pour votre autonomie.",
    priority: 5,
  },
  {
    keywords: [
      'projet',
      'projets',
      'realisation',
      'réalisation',
      'portfolio projet',
      'exemple',
      'exemples',
      'travaux',
      'realisations',
      'réalisations',
    ],
    answer:
      "Projets récents (2025–2026) :\n\n🔹 Lyter (2026) — IA : photos pro, contenu LinkedIn — React, Node.js, Firebase, Gemini\n🔹 Plateforme E-commerce (2025) — catalogue, commandes, emails — React, Express, MongoDB\n🔹 Lense-Solidaire (2025) — estimation solidaire d'objets — React, Express, TensorFlow.js\n\nCliquez sur chaque projet dans la section « Projets récents » pour les détails.",
    priority: 6,
  },
  {
    keywords: ['lyter', 'linkedin content', 'photo professionnelle', 'photo pro'],
    answer:
      "Lyter (2026) : plateforme IA pour générer des photos professionnelles et du contenu LinkedIn.\n\nFonctionnalités : Mode Select (39 styles), Mode Post, Mode Lab, Mode Lyter, assistant vocal, intégration LinkedIn.\n\nTech : React, Node.js, Firebase, Gemini 2.5 Flash, OpenAI GPT-4o-mini.\n\n🔗 Détail : /lyter",
    priority: 8,
  },
  {
    keywords: ['lense', 'lense-solidaire', 'solidaire', 'association', 'occasion', 'estimation'],
    answer:
      "Lense-Solidaire (2025) : estimation solidaire d'objets d'occasion pour associations, avec IA et règles de prix centralisées.\n\nTech : React, Express, TensorFlow.js.\n\n🔗 Détail : /lense-solidaire",
    priority: 8,
  },
  {
    keywords: [
      'tarif',
      'tarifs',
      'prix',
      'cout',
      'coût',
      'budget',
      'devis',
      'combien',
      'gratuit',
      'payant',
      'honoraire',
      'honoraires',
      'facturation',
      'rate',
      'pricing',
    ],
    answer:
      "Les tarifs dépendent de la nature, de la durée et de la complexité du projet.\n\nPour un devis personnalisé, décrivez votre besoin en quelques lignes (type de site/app, délais, fonctionnalités clés). Ghofrane pourra vous répondre avec une proposition adaptée via LinkedIn ou Contact.",
    priority: 7,
  },
  {
    keywords: [
      'disponib',
      'dispo',
      'libre',
      'freelance',
      'mission',
      'missions',
      'embauche',
      'recrut',
      'recrute',
      'travail',
      'collabor',
      'partenariat',
      'cdd',
      'cdi',
      'stage',
      'alternance',
      'intervention',
    ],
    answer:
      "✅ Ghofrane est actuellement disponible.\n\nElle est ouverte aux missions freelance (courtes ou longues), seule ou en équipe.\n\nChaque livraison inclut une passation claire : mini-guide et explications pour votre autonomie après mise en ligne.",
    priority: 7,
  },
  {
    keywords: ['delai', 'délai', 'delais', 'délais', 'urgent', 'rapidement', 'quand', 'timeline', 'planning'],
    answer:
      "Les délais varient selon le périmètre du projet. Après description de votre besoin, Ghofrane pourra proposer un planning réaliste. Contactez-la pour en discuter.",
    priority: 4,
  },
  {
    keywords: ['remote', 'teletravail', 'télétravail', 'distance', 'a distance', 'à distance', 'presentiel', 'présentiel'],
    answer:
      "Ghofrane peut travailler à distance ou en collaboration avec votre équipe, selon la nature de la mission.",
    priority: 4,
  },
  {
    keywords: [
      'contact',
      'contacter',
      'joindre',
      'email',
      'mail',
      'message',
      'ecrire',
      'écrire',
      'appeler',
      'telephone',
      'téléphone',
      'whatsapp',
      'reseau',
      'réseau',
    ],
    answer:
      "Pour contacter Ghofrane :\n\n🔗 LinkedIn : linkedin.com/in/ghofrane-hedna\n🔗 GitHub : github.com/GHOFRANE-AH\n📄 CV : téléchargement sur la page d'accueil\n📍 Section « Me contacter » en bas de ce site",
    priority: 7,
  },
  {
    keywords: ['linkedin'],
    answer: "Profil LinkedIn de Ghofrane : https://www.linkedin.com/in/ghofrane-hedna/",
    priority: 6,
  },
  {
    keywords: ['github', 'depot code', 'code source'],
    answer: "GitHub de Ghofrane : https://github.com/GHOFRANE-AH — consultez ses dépôts et contributions.",
    priority: 6,
  },
  {
    keywords: ['cv', 'curriculum', 'resume', 'résumé', 'pdf'],
    answer:
      "Le CV de Ghofrane est disponible en PDF sur la page d'accueil (bouton « Mon CV ») : /cv-informatique.pdf",
    priority: 6,
  },
  {
    keywords: [
      'recommandation',
      'recommandations',
      'avis',
      'temoignage',
      'témoignage',
      'reference',
      'référence',
      'lettre',
    ],
    answer:
      "La section « Recommandations » présente des témoignages, captures et lettres de recommandation téléchargeables en PDF.\n\nLes retours soulignent son sérieux, son autonomie et la qualité de son travail.",
    priority: 5,
  },
  {
    keywords: [
      'processus',
      'methode',
      'méthode',
      'travail ensemble',
      'collaboration',
      'comment ca marche',
      'comment ça marche',
      'etapes',
      'étapes',
      'deroulement',
      'déroulement',
    ],
    answer:
      "Déroulement type d'une collaboration :\n\n1. Échange sur votre besoin et vos objectifs\n2. Proposition / devis selon le périmètre\n3. Développement avec points d'avancement\n4. Livraison, mise en ligne et tests\n5. Passation (documentation, explications) pour votre autonomie",
    priority: 5,
  },
  {
    keywords: ['qualite', 'qualité', 'code propre', 'bonne pratique', 'test', 'tests', 'accessib'],
    answer:
      "Ghofrane accorde une importance à la qualité du code, l'accessibilité web et une expérience utilisateur soignée. Ses recommandations et projets illustrent cette rigueur.",
    priority: 4,
  },
  {
    keywords: ['equipe', 'équipe', 'seul', 'seule', 'autonome', 'solo'],
    answer:
      "Elle peut intervenir en autonomie complète ou intégrer une équipe existante (développement, revue, complément de compétences).",
    priority: 4,
  },
  {
    keywords: ['anglais', 'english', 'francais', 'français', 'langue'],
    answer:
      "Ce portfolio et cet assistant sont en français. Pour un échange en anglais, contactez Ghofrane via LinkedIn.",
    priority: 3,
  },
  {
    keywords: ['localisation', 'ville', 'pays', 'ou habite', 'où habite', 'region', 'région', 'paris', 'france'],
    answer:
      "Pour toute question sur la localisation ou les modalités de rendez-vous, contactez Ghofrane directement via LinkedIn.",
    priority: 3,
  },
  {
    keywords: ['aide', 'help', 'question', 'besoin', 'renseignement', 'info', 'informations'],
    answer:
      "Je peux vous aider sur :\n• Profil et compétences\n• Services (web, mobile, IA, e-commerce…)\n• Projets du portfolio\n• Disponibilité et contact\n\nTapez votre question ou utilisez les boutons suggérés.",
    priority: 2,
  },
  {
    keywords: ['erreur', 'bug site', 'probleme site', 'problème site', 'ne marche pas'],
    answer:
      "Si vous rencontrez un problème technique sur ce site, décrivez-le à Ghofrane via LinkedIn. Pour un bug sur votre propre projet, elle propose aussi de la maintenance.",
    priority: 3,
  },
]

export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * @param {string} userMessage
 * @returns {{ answer: string; isHandoff: boolean }}
 */
export function getBotReply(userMessage) {
  const norm = normalizeText(userMessage)
  if (!norm) {
    return {
      answer: "Écrivez votre question ou choisissez une suggestion ci-dessous.",
      isHandoff: false,
    }
  }

  let bestAnswer = null
  let bestScore = 0

  for (const entry of FAQ_ENTRIES) {
    let score = 0
    for (const keyword of entry.keywords) {
      const nk = normalizeText(keyword)
      if (nk && norm.includes(nk)) {
        score += 1
      }
    }
    if (score > 0) {
      const weighted = score * (entry.priority ?? 1)
      if (weighted > bestScore) {
        bestScore = weighted
        bestAnswer = entry.answer
      }
    }
  }

  if (bestAnswer) {
    return { answer: bestAnswer, isHandoff: false }
  }

  return { answer: HANDOFF_MESSAGE, isHandoff: true }
}

export function getWhatsAppUrl(prefill) {
  const num = CHAT_CONFIG.whatsappNumber?.replace(/\D/g, '')
  if (!num) return null
  const text = encodeURIComponent(prefill || 'Bonjour Ghofrane, j\'ai une question après votre assistant sur le site.')
  return `https://wa.me/${num}?text=${text}`
}
