# ⚡ DÉMARRAGE ULTRA-RAPIDE - SDIEP avec Vite

## 🚀 Installation Express (2 minutes)

### Option 1 : Avec le ZIP fourni (RECOMMANDÉ)

```bash
# 1. Extraire le ZIP
unzip sdiep-vite.zip
cd sdiep-vite

# 2. Installer
npm install

# 3. Lancer
npm run dev
```

✅ **C'est tout !** Votre site est sur `http://localhost:3000`

---

### Option 2 : Création manuelle

```bash
# 1. Créer avec Vite
npm create vite@latest sdiep-vite -- --template react
cd sdiep-vite

# 2. Installer les dépendances
npm install
npm install react-router-dom react-icons framer-motion

# 3. Copier les fichiers du ZIP
# - Remplacer src/ complet
# - Copier index.html à la racine
# - Copier vite.config.js à la racine

# 4. Lancer
npm run dev
```

---

## ⚡ Commandes Essentielles

```bash
npm run dev      # Lancer en développement
npm run build    # Créer le build production
npm run preview  # Tester le build localement
```

---

## 🖼️ Images à Ajouter

**Minimum requis :**
```
public/
├── logo.png
└── images/
    ├── hero-bg.jpg
    └── services/
        ├── plomberie.jpg
        ├── carrelage.jpg
        ├── electricite.jpg
        ├── vitrerie.jpg
        ├── peinture.jpg
        └── menuiserie.jpg
```

---

## 🎨 Personnalisation Rapide

### 1. Couleurs (2 min)
`src/App.css` ligne 12-14 :
```css
--primary-color: #f4a261;    /* Votre couleur */
```

### 2. Contacts (3 min)
- `src/components/common/Footer.jsx`
- `src/pages/Contact.jsx`

### 3. Services (5 min)
`src/data/servicesData.js` - Modifier descriptions

---

## 📊 Vite vs Create React App

| Fonctionnalité | Vite | CRA |
|----------------|------|-----|
| Démarrage | **1 sec** ⚡ | 30-60 sec |
| Hot Reload | **0.5 sec** 🔥 | 2-5 sec |
| Build | **30 sec** | 2-3 min |
| Taille finale | **200kb** | 500kb |

---

## 🔥 Pourquoi Vite ?

✅ **10x plus rapide** au développement
✅ **Hot Reload instantané** - Les changements apparaissent immédiatement
✅ **Build léger** - Site plus rapide pour vos clients
✅ **Configuration simple** - Fonctionne directement
✅ **Modern** - Utilisé par les plus grands projets

---

## 🎯 Checklist 5 Minutes

- [ ] `npm install` (1 min)
- [ ] Ajouter `logo.png` (1 min)
- [ ] Ajouter images services (2 min)
- [ ] `npm run dev` (1 sec ⚡)
- [ ] ✅ Site prêt !

---

## 🚀 Déploiement Express

### Netlify (Plus simple)

```bash
npm run build
# Glisser-déposer le dossier dist/ sur netlify.com
```

### Vercel (Ultra-rapide)

```bash
npm install -g vercel
vercel
```

---

## 💡 Astuces Vite

### Changer le port
`vite.config.js` :
```javascript
server: { port: 3001 }
```

### Voir tous les fichiers modifiés
Les changements s'appliquent **instantanément** sans recharger la page ! 🔥

### Build optimisé
```bash
npm run build
# Le dossier dist/ est prêt pour production
```

---

## 🆘 Problème ?

**Port occupé ?**
→ Changez le port dans `vite.config.js`

**Images manquantes ?**
→ Vérifiez `public/images/`
→ Chemins : `/images/...`

**Module not found ?**
→ `npm install`

---

## 📚 Fichiers Inclus

```
sdiep-vite/
├── 📄 README.md                      → Vue d'ensemble
├── 📄 GUIDE_INSTALLATION_VITE.md    → Guide détaillé
├── 📄 DEMARRAGE_RAPIDE_VITE.md      → Ce fichier
├── 📄 SERVICES_PERSONNALISES.md     → Vos services
├── ⚙️ vite.config.js                 → Configuration
└── 📦 package.json                   → Dépendances
```

---

## 🎉 Différences Clés avec CRA

| Aspect | CRA | Vite |
|--------|-----|------|
| HTML | `public/index.html` | `index.html` (racine) |
| Entrée | `src/index.js` | `src/main.jsx` |
| Démarrer | `npm start` | `npm run dev` |
| Vitesse | 🐌 Lent | ⚡ Ultra-rapide |

---

## ✨ Résumé

1. **Extraire** le ZIP
2. **`npm install`**
3. **`npm run dev`**
4. **Voilà !** ⚡

**Temps total : 2 minutes**
**Démarrage : < 1 seconde**
**Hot Reload : Instantané**

---

**Profitez de la vitesse de Vite ! 🚀⚡**
