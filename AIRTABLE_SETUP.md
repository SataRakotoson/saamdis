# Configuration Airtable pour SAAMDIS

## Structure de la table "Produits"

Votre table Airtable doit contenir les champs suivants :

### Champs requis :

1. **nom** (Type: Single line text)
   - Nom du produit (ex: "Adoro - Gâteau moelleux au cacao")

2. **description** (Type: Long text)
   - Description détaillée du produit

3. **specification** (Type: Single line text)
   - Spécifications techniques (ex: "30g - packing 24 - DLV 09 mois")

4. **image** (Type: Multiple attachments)
   - Images du produit (format: webp, jpg, png)
   - L'URL de la première image sera automatiquement utilisée

5. **categorie** (Type: Single select)
   - Valeurs possibles :
     - `sucres` (Snacks sucrés)
     - `sales` (Snacks salés)
     - `confiseries` (Confiseries et céréales)
     - `boissons` (Jus et boissons)

### Champs optionnels :

6. **tagColor** (Type: Single line text)
   - Couleur personnalisée pour le tag (ex: "bg-red-500")
   - Si non spécifié, une couleur par défaut sera attribuée selon la catégorie

## Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine de votre projet :

```bash
NEXT_PUBLIC_AIRTABLE_API_TOKEN=votre_token_airtable_ici
```

## Comment obtenir votre token Airtable

1. Allez sur [airtable.com](https://airtable.com)
2. Connectez-vous à votre compte
3. Allez dans Account → API
4. Générez un nouveau token d'API
5. Copiez le token et collez-le dans votre fichier `.env.local`

## Exemple de données

```json
{
  "nom": "Adoro - Gâteau moelleux au cacao",
  "description": "Un gâteau moelleux au cacao qui ravira tous les amateurs de chocolat.",
  "specification": "30g - packing 24 - DLV 09 mois",
  "categorie": "sucres",
  "image": [
    {
      "url": "https://v5.airtableusercontent.com/...",
      "filename": "gateau-cacao.webp"
    }
  ]
}
```

## Notes importantes

- Les images doivent être au format webp, jpg ou png
- La première image du tableau sera utilisée comme image principale
- Les catégories doivent correspondre exactement aux valeurs listées ci-dessus
- Le token d'API doit avoir les permissions de lecture sur votre base

## Configuration Next.js

Le fichier `next.config.js` a été automatiquement configuré pour permettre les images d'Airtable. Si vous modifiez ce fichier, assurez-vous de conserver la section `images.remotePatterns` :

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'v5.airtableusercontent.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'dl.airtable.com',
      port: '',
      pathname: '/**',
    },
  ],
},
```
