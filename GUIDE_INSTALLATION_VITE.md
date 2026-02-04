# 🚀 GUIDE D'INSTALLATION - SDIEP avec React + Vite

## ⚡ Pourquoi Vite ?

**Vite** est beaucoup plus rapide que Create React App :
- ⚡ Démarrage instantané (< 1 seconde)
- 🔥 Hot Module Replacement ultra-rapide
- 📦 Build optimisé et léger
- 🎯 Configuration minimale

## 📦 Installation Express (3 minutes)

### Méthode 1 : À partir de zéro

```bash
# 1. Créer le projet avec Vite
npm create vite@latest sdiep-vite -- --template react

# 2. Entrer dans le dossier
cd sdiep-vite

# 3. Installer les dépendances de base
npm install

# 4. Installer les dépendances supplémentaires
npm install react-router-dom react-icons framer-motion

# 5. Extraire et copier les fichiers du ZIP
# Remplacer tout le contenu du dossier src/ par celui du ZIP
# Copier aussi index.html à la racine
# Copier vite.config.js à la racine

# 6. Lancer le projet
npm run dev
```

### Méthode 2 : Avec le ZIP fourni (PLUS RAPIDE)

```bash
# 1. Extraire le ZIP
unzip sdiep-vite.zip
cd sdiep-vite

# 2. Installer les dépendances
npm install

# 3. Lancer le projet
npm run dev
```

✅ Votre site sera accessible sur `http://localhost:3000`

---

## 📁 Structure du Projet Vite

```
sdiep-vite/
│
├── index.html              ← À la racine (différent de CRA)
├── vite.config.js          ← Configuration Vite
├── package.json
│
├── public/
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       └── services/
│           ├── plomberie.jpg
│           ├── carrelage.jpg
│           ├── electricite.jpg
│           ├── vitrerie.jpg
│           ├── peinture.jpg
│           └── menuiserie.jpg
│
└── src/
    ├── main.jsx            ← Point d'entrée (au lieu de index.js)
    ├── App.jsx
    ├── App.css
    ├── index.css
    │
    ├── components/
    │   ├── common/
    │   └── home/
    │
    ├── pages/
    └── data/
```

---

## 🔄 Différences avec Create React App

| Aspect | Create React App | Vite |
|--------|------------------|------|
| Fichier d'entrée | `src/index.js` | `src/main.jsx` |
| HTML | `public/index.html` | `index.html` (racine) |
| Démarrage | `npm start` | `npm run dev` |
| Build | `npm run build` | `npm run build` |
| Temps démarrage | ~30-60 secondes | ~1 seconde ⚡ |
| Hot Reload | Lent | Ultra-rapide 🔥 |
| Extensions | `.js` ou `.jsx` | `.jsx` recommandé |

---

## 📝 Scripts Disponibles

```bash
# Lancer en mode développement
npm run dev

# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 🖼️ Images à Ajouter

Créez le dossier `public/images/services/` et ajoutez :

**Obligatoire :**
- `public/logo.png` (200x60px)
- `public/images/hero-bg.jpg` (1920x1080px)

**Services :**
- `public/images/services/plomberie.jpg`
- `public/images/services/carrelage.jpg`
- `public/images/services/electricite.jpg`
- `public/images/services/vitrerie.jpg`
- `public/images/services/peinture.jpg`
- `public/images/services/menuiserie.jpg`

**💡 Astuce :** Dans Vite, les images dans `public/` sont accessibles directement via `/images/...`

---

## ⚙️ Configuration Vite

Le fichier `vite.config.js` est déjà configuré :

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Port personnalisé
    open: true         // Ouvre automatiquement le navigateur
  }
})
```

Vous pouvez modifier le port si nécessaire.

---

## 🎨 Personnalisation

### Modifier les couleurs
`src/App.css` ligne 12-16 :
```css
:root {
  --primary-color: #f4a261;    /* Votre couleur */
  --secondary-color: #e76f51;
}
```

### Modifier les services
`src/data/servicesData.js` - Tous vos services

### Modifier les contacts
- `src/components/common/Footer.jsx`
- `src/pages/Contact.jsx`

---

## 🚀 Build de Production

```bash
# Créer le build optimisé
npm run build

# Le build sera dans le dossier dist/
```

Le dossier `dist/` contiendra tous les fichiers optimisés pour la production.

---

## 📤 Déploiement

### Sur Netlify

```bash
# 1. Build
npm run build

# 2. Glisser-déposer le dossier dist/ sur Netlify
```

### Sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Configuration Netlify
Créez un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔧 Dépannage

### Port 3000 déjà utilisé

Modifiez `vite.config.js` :
```javascript
server: {
  port: 3001  // Changez le port
}
```

### Images ne s'affichent pas

- Vérifiez que les images sont dans `public/images/`
- Les chemins doivent être `/images/...` (avec le `/` au début)

### Erreur "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload ne fonctionne pas

```bash
# Redémarrer le serveur
npm run dev
```

---

## 📊 Comparaison de Performance

| Métrique | Create React App | Vite |
|----------|------------------|------|
| Démarrage initial | ~30-60s | ~1s ⚡ |
| Hot reload | 2-5s | < 0.5s 🔥 |
| Build production | 2-3 min | 30-60s 📦 |
| Taille bundle | ~500kb | ~200kb 🎯 |

---

## ✅ Checklist Première Installation

- [ ] Node.js installé (version 16+)
- [ ] ZIP extrait
- [ ] `npm install` exécuté
- [ ] Images ajoutées dans `public/images/`
- [ ] Logo ajouté (`public/logo.png`)
- [ ] Serveur démarré (`npm run dev`)
- [ ] Site accessible sur localhost:3000
- [ ] Hot reload fonctionne (testez une modification)

---

## 🎯 Avantages de Vite

✅ **10x plus rapide** au démarrage
✅ **Hot reload instantané**
✅ **Build léger et optimisé**
✅ **Configuration minimale**
✅ **Support TypeScript natif**
✅ **Future-proof** (utilisé par Vue, Svelte, etc.)

---

## 📚 Ressources

- [Documentation Vite](https://vitejs.dev)
- [Guide Vite + React](https://vitejs.dev/guide/)
- [Migration depuis CRA](https://vitejs.dev/guide/migration.html)

---

## 🆘 Support

En cas de problème :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez la console du terminal
3. Consultez [vitejs.dev](https://vitejs.dev)

---

**Bon développement avec Vite ! ⚡🚀**
