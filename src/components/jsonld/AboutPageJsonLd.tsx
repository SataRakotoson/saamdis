import JsonLd, { organizationSchema, aboutPageSchema, createBreadcrumbSchema } from '../JsonLd'

export default function AboutPageJsonLd() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Accueil", url: "https://www.saamdis.fr" },
    { name: "À propos", url: "https://www.saamdis.fr/a-propos" }
  ])

  const aboutWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos - SAAMDIS",
    "description": "Découvrez l'histoire et les valeurs de SAAMDIS, votre distributeur alimentaire de confiance à La Réunion.",
    "url": "https://www.saamdis.fr/a-propos",
    "breadcrumb": breadcrumbs,
    "isPartOf": {
      "@type": "WebSite",
      "name": "SAAMDIS",
      "url": "https://www.saamdis.fr"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "SAAM DISTRIBUTION",
      "alternateName": "SAAMDIS",
      "description": "SAAM DISTRIBUTION (SAAMDIS) est une entreprise jeune mais ambitieuse, née d'un constat simple : le marché réunionnais mérite mieux.",
      "foundingDate": "2024",
      "slogan": "Dépoussiérer l'offre actuelle en apportant des produits innovants, variés et adaptés à tous",
      "mission": "Proposer des produits qui font la différence, à la fois dans la qualité, dans le choix, et dans l'expérience consommateur",
      "values": [
        "Innovation",
        "Qualité", 
        "Accessibilité",
        "Diversité",
        "Service client"
      ],
      "knowsAbout": [
        "Import de produits alimentaires",
        "Distribution alimentaire",
        "Marques exclusives",
        "Snacks premium",
        "Boissons de qualité"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Offre produits SAAMDIS",
        "description": "Gamme variée de produits alimentaires importés et exclusifs"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Histoire de l'entreprise",
        "description": "L'évolution et la croissance de SAAMDIS à La Réunion"
      },
      {
        "@type": "Thing", 
        "name": "Mission et valeurs",
        "description": "L'engagement de SAAMDIS pour améliorer l'offre alimentaire réunionnaise"
      }
    ]
  }

  // Schema pour les personnes clés (si applicable)
  const leadershipSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SAAMDIS",
    "employee": [
      {
        "@type": "Person",
        "jobTitle": "Direction",
        "worksFor": {
          "@type": "Organization",
          "name": "SAAMDIS"
        }
      }
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "Service Commercial",
        "description": "Équipe dédiée au service client et aux relations commerciales"
      },
      {
        "@type": "Organization",
        "name": "Import et Distribution",
        "description": "Équipe spécialisée dans l'importation et la logistique"
      }
    ]
  }

  return (
    <>
      <JsonLd data={aboutWebPageSchema} />
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={leadershipSchema} />
    </>
  )
}
