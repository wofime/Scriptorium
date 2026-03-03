// Configuration des pages du menu
const SCRIPTORIUM_PAGES = [
    { id: 'personnages', label: 'Personnages', file: 'personnages.html', section: 'Monde', default: true },
    { id: 'lieux', label: 'Lieux', file: 'lieux.html', section: 'Monde' },
    { id: 'objets', label: 'Objets', file: 'objets.html', section: 'Monde' },
    { id: 'encyclopedie', label: 'Encyclopédie', file: 'encyclopedie.html', section: 'Monde' },
    { id: 'glossaire', label: 'Glossaire', file: 'glossaire.html', section: 'Monde' },
    { id: 'magie', label: 'Magie', file: 'magie.html', section: 'Monde' },
    { id: 'connexion', label: 'Connexion', file: 'connexion.html', section: 'Partage' },
    { id: 'chronologie', label: 'Chronologie', file: 'chronologie.html', section: 'Histoire' }
];

// Configuration des icônes SVG (couleur blanche pour la sidebar)
var iconMap = {
    'personnages': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    'lieux': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'objets': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'encyclopedie': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    'glossaire': '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    'magie': '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    'connexion': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    'chronologie': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'
};
