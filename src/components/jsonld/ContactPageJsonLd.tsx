import JsonLd, { organizationSchema, contactPageSchema, createBreadcrumbSchema } from '../JsonLd'

export default function ContactPageJsonLd() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Accueil", url: "https://www.saamdis.fr" },
    { name: "Contact", url: "https://www.saamdis.fr/contact" }
  ])

  const contactWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - SAAMDIS",
    "description": "Contactez SAAMDIS pour tous vos besoins en distribution alimentaire à La Réunion. Service commercial disponible du lundi au vendredi.",
    "url": "https://www.saamdis.fr/contact",
    "breadcrumb": breadcrumbs,
    "isPartOf": {
      "@type": "WebSite",
      "name": "SAAMDIS",
      "url": "https://www.saamdis.fr"
    },
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "Service commercial",
      "telephone": "+262693032241",
      "email": "contact@saamdis.fr",
      "availableLanguage": "French",
      "hoursAvailable": [
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
        }
      ],
      "areaServed": "La Réunion"
    }
  }

  // Schema pour l'adresse et localisation
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "SAAMDIS - Siège social",
    "description": "Siège social de SAAM DISTRIBUTION à Sainte Clotilde, La Réunion",
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
      "longitude": 55.488973,
      "elevation": "50"
    },
    "hasMap": "https://www.openstreetmap.org/?mlat=-20.89764550577095&mlon=55.488972728835634&zoom=16",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "La Réunion",
      "addressCountry": "FR"
    }
  }

  // Schema pour les différents moyens de contact
  const contactOptionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Options de contact SAAMDIS",
    "description": "Différents moyens de contacter SAAMDIS",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "ContactPoint",
          "contactType": "Service commercial principal",
          "telephone": "+262693032241",
          "name": "Téléphone principal"
        }
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "item": {
          "@type": "ContactPoint",
          "contactType": "Email général",
          "email": "contact@saamdis.fr",
          "name": "Email de contact"
        }
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "item": {
          "@type": "ContactPoint",
          "contactType": "Service commercial",
          "email": "commercial@saamdis.fr",
          "name": "Email commercial"
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={contactWebPageSchema} />
      <JsonLd data={contactPageSchema} />
      <JsonLd data={placeSchema} />
      <JsonLd data={contactOptionsSchema} />
    </>
  )
}
