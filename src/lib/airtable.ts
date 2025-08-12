interface AirtableRecord {
  id: string
  fields: {
    nom: string
    description: string
    specification: string
    image: {
      id: string
      width: number
      height: number
      url: string
      filename: string
      size: number
      type: string
      thumbnails: {
        small: { url: string; width: number; height: number }
        large: { url: string; width: number; height: number }
        full: { url: string; width: number; height: number }
      }
    }[]
    categorie: string
    tagColor?: string
  }
}

interface AirtableResponse {
  records: AirtableRecord[]
}

export interface Produit {
  id: string
  nom: string
  specification: string
  description: string
  image: string
  categorie: string
  tagColor: string
}

export async function getProduits(): Promise<Produit[]> {
  try {
    const response = await fetch('https://api.airtable.com/v0/appU7LvcCIWKwYkTn/Produits', {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // Désactiver le cache pour avoir des données toujours à jour
      cache: 'no-store'
    })
    

    if (!response.ok) {
      throw new Error(`Erreur API Airtable: ${response.status}`)
    }

    const data: AirtableResponse = await response.json()

    // Transformer les données Airtable en format attendu
    const produits: Produit[] = data.records.map((record) => ({
      id: record.id,
      nom: record.fields.nom || '',
      specification: record.fields.specification || '',
      description: record.fields.description || '',
      image: record.fields.image && record.fields.image.length > 0 ? record.fields.image[0].url : '',
      categorie: record.fields.categorie || '',
      tagColor: record.fields.tagColor || getDefaultTagColor(record.fields.categorie)
    }))

    

    return produits
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error)
    // Retourner un tableau vide en cas d'erreur pour éviter de casser l'application
    return []
  }
}

// Fonction helper pour définir les couleurs par défaut selon la catégorie
function getDefaultTagColor(categorie: string): string {
  switch (categorie) {
    case 'sucres':
      return 'bg-red-500'
    case 'sales':
      return 'bg-[#f7a139]'
    case 'confiseries_cereales':
      return 'bg-[#29425c]'
    case 'jus_boissons':
      return 'bg-green-500'
    default:
      return 'bg-gray-500'
  }
}
