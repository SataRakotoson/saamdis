import JsonLd, { organizationSchema, localBusinessSchema, websiteSchema, createBreadcrumbSchema } from '../JsonLd'

export default function HomePageJsonLd() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Accueil", url: "https://www.saamdis.fr" }
  ])

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SAAMDIS - Distributeur alimentaire à La Réunion",
    "description": "Découvrez SAAMDIS : importateur de saveurs uniques et de marques exclusives à La Réunion. Une offre variée pour tous les goûts.",
    "url": "https://www.saamdis.fr",
    "mainEntity": organizationSchema,
    "breadcrumb": breadcrumbs,
    "isPartOf": {
      "@type": "WebSite",
      "name": "SAAMDIS",
      "url": "https://www.saamdis.fr"
    },
    "about": {
      "@type": "Thing",
      "name": "Distribution alimentaire",
      "description": "Services de distribution et d'importation de produits alimentaires"
    },
    "mentions": [
      {
        "@type": "Product",
        "name": "Snacks",
        "category": "Alimentation"
      },
      {
        "@type": "Product", 
        "name": "Boissons",
        "category": "Boissons"
      },
      {
        "@type": "Product",
        "name": "Confiseries", 
        "category": "Confiseries"
      }
    ]
  }

  // Schema pour les services offerts
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Distribution alimentaire",
    "description": "Services de distribution et d'importation de produits alimentaires à La Réunion",
    "provider": organizationSchema,
    "areaServed": "La Réunion",
    "serviceType": "Distribution alimentaire",
    "category": "Commerce de gros alimentaire",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue produits SAAMDIS",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Snacks salés",
          "description": "Gamme variée de snacks salés importés"
        },
        {
          "@type": "OfferCatalog",
          "name": "Snacks sucrés",
          "description": "Sélection de confiseries et snacks sucrés"
        },
        {
          "@type": "OfferCatalog",
          "name": "Boissons",
          "description": "Jus et boissons de qualité premium"
        }
      ]
    }
  }

  return (
    <>
      <JsonLd data={homePageSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={serviceSchema} />
    </>
  )
}
