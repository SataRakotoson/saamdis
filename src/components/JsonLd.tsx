import Script from 'next/script'

interface JsonLdProps {
  data: object
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Données de base de l'organisation SAAMDIS
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SAAMDIS - SAAM DISTRIBUTION",
  "alternateName": "SAAM DISTRIBUTION",
  "description": "Distributeur alimentaire spécialisé dans l'importation de produits uniques à La Réunion. Snacks, boissons, confiseries et produits alimentaires variés.",
  "url": "https://www.saamdis.fr",
  "logo": "https://www.saamdis.fr/logo.png",
  "image": "https://www.saamdis.fr/logo.png",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+262693032241",
    "contactType": "Service commercial",
    "email": "contact@saamdis.fr",
    "availableLanguage": ["fr"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Rue Adolphe Ramassamy",
    "addressLocality": "Sainte Clotilde",
    "postalCode": "97490",
    "addressRegion": "La Réunion",
    "addressCountry": "FR"
  },
  "founder": {
    "@type": "Person",
    "name": "SAAM DISTRIBUTION"
  },
  "foundingDate": "2024",
  "slogan": "Votre distributeur alimentaire de confiance à La Réunion",
  "knowsAbout": [
    "Distribution alimentaire",
    "Import de produits alimentaires",
    "Snacks",
    "Boissons",
    "Confiseries",
    "Produits alimentaires La Réunion"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "La Réunion",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -20.8978,
      "longitude": 55.4889
    }
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "SIREN",
    "value": "988126389"
  },
  "legalName": "SAAM DISTRIBUTION",
  "vatID": "FR27988126389"
}

// Schema pour LocalBusiness
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SAAMDIS - SAAM DISTRIBUTION",
  "description": "Distributeur alimentaire spécialisé dans l'importation de produits uniques à La Réunion.",
  "url": "https://www.saamdis.fr",
  "telephone": "+262693032241",
  "email": "contact@saamdis.fr",
  "image": "https://www.saamdis.fr/logo.png",
  "logo": "https://www.saamdis.fr/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Rue Adolphe Ramassamy",
    "addressLocality": "Sainte Clotilde",
    "postalCode": "97490",
    "addressRegion": "La Réunion",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -20.897646,
    "longitude": 55.488973
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": ["Virement", "Chèque", "Espèces"],
  "areaServed": "La Réunion",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -20.897646,
      "longitude": 55.488973
    },
    "geoRadius": "100000"
  }
}

// Schema pour le site web
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SAAMDIS",
  "alternateName": "SAAM DISTRIBUTION",
  "description": "Site officiel de SAAMDIS, distributeur alimentaire à La Réunion spécialisé dans l'import de produits uniques.",
  "url": "https://www.saamdis.fr",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.saamdis.fr/produits?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SAAMDIS",
    "logo": "https://www.saamdis.fr/images/logo.png"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "SAAM DISTRIBUTION"
  },
  "copyrightYear": "2025",
  "inLanguage": "fr-FR",
  "audience": {
    "@type": "Audience",
    "audienceType": "Professionnels et particuliers à La Réunion"
  }
}

// Schema pour les breadcrumbs
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// Schema pour un produit
export function createProductSchema(product: {
  name: string
  description: string
  image?: string
  brand?: string
  category?: string
  sku?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || "https://www.saamdis.fr/images/products/default.webp",
    "brand": {
      "@type": "Brand",
      "name": product.brand || "SAAMDIS"
    },
    "category": product.category || "Alimentation",
    "sku": product.sku,
    "manufacturer": {
      "@type": "Organization",
      "name": "SAAMDIS",
      "url": "https://www.saamdis.fr"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "SAAMDIS",
        "url": "https://www.saamdis.fr"
      }
    }
  }
}

// Schema pour la page de contact
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact - SAAMDIS",
  "description": "Contactez SAAMDIS pour tous vos besoins en distribution alimentaire à La Réunion.",
  "url": "https://www.saamdis.fr/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "SAAMDIS",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+262693032241",
        "contactType": "Service commercial",
        "email": "contact@saamdis.fr"
      },
      {
        "@type": "ContactPoint",
        "email": "commercial@saamdis.fr",
        "contactType": "Service commercial"
      }
    ]
  }
}

// Schema pour la page à propos
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "À propos - SAAMDIS",
  "description": "Découvrez l'histoire et les valeurs de SAAMDIS, votre distributeur alimentaire de confiance à La Réunion.",
  "url": "https://www.saamdis.fr/a-propos",
  "mainEntity": {
    "@type": "Organization",
    "name": "SAAMDIS",
    "description": "SAAM DISTRIBUTION (SAAMDIS) est une entreprise jeune mais ambitieuse, née d'un constat simple : le marché réunionnais mérite mieux.",
    "foundingDate": "2024",
    "mission": "Dépoussiérer l'offre actuelle en apportant des produits innovants, variés et adaptés à tous."
  }
}
