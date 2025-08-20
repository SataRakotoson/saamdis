# Données structurées JSON-LD pour SAAMDIS

## Vue d'ensemble

Ce dossier contient tous les composants de données structurées JSON-LD pour optimiser le référencement (SEO) du site SAAMDIS.

## Structure des fichiers

### Composants de base
- `../JsonLd.tsx` - Composant de base et schémas globaux
- `HomePageJsonLd.tsx` - Données structurées pour la page d'accueil
- `ProductsPageJsonLd.tsx` - Données structurées pour la page produits
- `AboutPageJsonLd.tsx` - Données structurées pour la page à propos
- `ContactPageJsonLd.tsx` - Données structurées pour la page contact

## Types de schémas implémentés

### Schémas globaux (dans JsonLd.tsx)
- **Organization** - Informations sur l'entreprise SAAMDIS
- **LocalBusiness** - Entreprise locale avec horaires et géolocalisation
- **WebSite** - Informations sur le site web avec recherche
- **Product** - Modèle pour les produits individuels
- **BreadcrumbList** - Navigation en fil d'Ariane

### Schémas spécifiques par page
- **WebPage/CollectionPage** - Structure de page
- **ContactPage** - Page de contact avec coordonnées
- **AboutPage** - Page à propos avec histoire de l'entreprise
- **Service** - Services offerts par SAAMDIS

## Avantages SEO

### Pour les moteurs de recherche
- ✅ Meilleure compréhension du contenu
- ✅ Rich snippets dans les résultats de recherche
- ✅ Informations d'entreprise structurées
- ✅ Géolocalisation pour le SEO local
- ✅ Horaires d'ouverture affichés
- ✅ Coordonnées directement accessibles

### Pour l'utilisateur
- ✅ Affichage enrichi dans Google
- ✅ Informations de contact rapides
- ✅ Localisation sur carte
- ✅ Horaires d'ouverture visibles
- ✅ Navigation améliorée

## Intégration

Chaque composant est intégré automatiquement dans sa page correspondante :

```tsx
// Page d'accueil
<HomePageJsonLd />

// Page produits  
<ProductsPageJsonLd products={produits} category={category} />

// Page à propos
<AboutPageJsonLd />

// Page contact
<ContactPageJsonLd />
```

## Validation

Les données structurées peuvent être validées avec :
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

## Mise à jour

Pour modifier les informations de l'entreprise, éditez le fichier `JsonLd.tsx` :
- Coordonnées de contact
- Adresse et géolocalisation  
- Horaires d'ouverture
- Description de l'entreprise
- Services offerts
