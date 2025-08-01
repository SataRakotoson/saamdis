# Landing Page - Votre Distributeur de Confiance

Un site web moderne et responsive pour un distributeur de produits à La Réunion, construit avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

### Page d'accueil
- **Header** : Logo, menu de navigation et réseaux sociaux
- **Hero Banner** : Section principale avec titre accrocheur et image de fond
- **Nos Avantages** : 3 cartes présentant les points forts de l'entreprise
- **Meilleurs Produits** : Slider horizontal avec 3.5 produits visibles
- **Nouveautés** : Grande image pleine largeur
- **Nos Produits** : 4 catégories de produits (2x2)
- **Qui Sommes-Nous** : Section avec image et texte sur fond orange
- **Nos Marques** : Slider automatique des marques partenaires
- **Bouton Contact** : Call-to-action principal
- **Footer** : Informations de contact et liens

### Pages supplémentaires
- **À Propos** : Histoire et mission de l'entreprise
- **Produits** : Catalogue complet avec catégories et promotions
- **Contact** : Formulaire de contact et informations

## 🛠️ Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes
- **Swiper** : Carrousel/slider (optionnel)

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd landing-page
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── a-propos/
│   │   └── page.tsx         # Page À propos
│   ├── produits/
│   │   └── page.tsx         # Page Produits
│   └── contact/
│       └── page.tsx         # Page Contact
├── components/
│   ├── Header.tsx           # Composant header
│   ├── HeroBanner.tsx       # Section hero
│   ├── Avantages.tsx        # Section avantages
│   └── MeilleursProduits.tsx # Slider produits
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- `primary` : #FF6B35 (orange)
- `secondary` : #2C3E50 (bleu foncé)

### Images
- Remplacez les URLs d'images par vos propres images
- Utilisez des images optimisées pour le web
- Recommandé : format WebP ou JPEG optimisé

### Contenu
- Modifiez les textes dans les composants
- Adaptez les informations de contact
- Personnalisez les catégories de produits

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres plateformes
- **Netlify** : Compatible avec Next.js
- **AWS Amplify** : Support complet
- **VPS** : Build manuel avec `npm run build`

## 📝 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` pour les variables sensibles :
```env
NEXT_PUBLIC_SITE_URL=https://votresite.com
```

### SEO
- Métadonnées configurées dans `layout.tsx`
- Balises meta personnalisables
- Open Graph et Twitter Cards

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : contact@votredistributeur.re
- Téléphone : +262 XXX XXX XXX

---

**Développé avec ❤️ pour La Réunion** 