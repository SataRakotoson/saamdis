import JsonLd, { organizationSchema, createBreadcrumbSchema, createProductSchema } from '../JsonLd'

interface Product {
  id: string
  nom: string
  description?: string
  image?: string
  marque?: string
  categorie?: string
}

interface ProductsPageJsonLdProps {
  products?: Product[]
  category?: string
}

export default function ProductsPageJsonLd({ products = [], category }: ProductsPageJsonLdProps) {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Accueil", url: "https://www.saamdis.fr" },
    { name: "Produits", url: "https://www.saamdis.fr/produits" }
  ])

  const categoryNames: { [key: string]: string } = {
    'boissons': 'Jus et Boissons',
    'confiseries': 'Confiseries et Céréales',
    'sales': 'Snacks Salés',
    'sucres': 'Snacks Sucrés'
  }

  const pageTitle = category && categoryNames[category] 
    ? `${categoryNames[category]} - SAAMDIS`
    : 'Nos produits - SAAMDIS'

  const pageDescription = category && categoryNames[category]
    ? `Découvrez notre sélection de ${categoryNames[category].toLowerCase()} de qualité chez SAAMDIS.`
    : 'Explorez notre gamme complète de produits alimentaires importés à La Réunion.'

  const pageUrl = category 
    ? `https://www.saamdis.fr/produits?category=${category}`
    : 'https://www.saamdis.fr/produits'

  const productsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "breadcrumb": breadcrumbs,
    "isPartOf": {
      "@type": "WebSite",
      "name": "SAAMDIS",
      "url": "https://www.saamdis.fr"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": category ? categoryNames[category] : "Produits SAAMDIS",
      "description": pageDescription,
      "numberOfItems": products.length,
      "itemListElement": products.slice(0, 20).map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": createProductSchema({
          name: product.nom,
          description: product.description || `${product.nom} - Produit de qualité distribué par SAAMDIS`,
          image: product.image,
          brand: product.marque,
          category: product.categorie,
          sku: product.id
        })
      }))
    },
    "about": {
      "@type": "Thing",
      "name": category ? categoryNames[category] : "Produits alimentaires",
      "description": "Gamme de produits alimentaires importés et distribués par SAAMDIS"
    }
  }

  // Schema pour la collection de produits
  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": pageUrl,
    "name": category ? categoryNames[category] : "Gamme produits SAAMDIS",
    "description": pageDescription,
    "image": "https://www.saamdis.fr/images/products/collection.webp",
    "brand": {
      "@type": "Brand",
      "name": "SAAMDIS"
    },
    "manufacturer": organizationSchema,
    "category": category ? categoryNames[category] : "Produits alimentaires",
    "hasVariant": products.slice(0, 10).map(product => 
      createProductSchema({
        name: product.nom,
        description: product.description || `${product.nom} - Produit de qualité`,
        image: product.image,
        brand: product.marque,
        category: product.categorie,
        sku: product.id
      })
    )
  }

  return (
    <>
      <JsonLd data={productsPageSchema} />
      {products.length > 0 && <JsonLd data={productCollectionSchema} />}
    </>
  )
}
