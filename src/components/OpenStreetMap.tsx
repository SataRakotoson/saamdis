'use client'

import { useEffect, useRef } from 'react'

interface OpenStreetMapProps {
  latitude: number
  longitude: number
  zoom?: number
  className?: string
}

export default function OpenStreetMap({ latitude, longitude, zoom = 16, className = "w-full h-64" }: OpenStreetMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markerRef = useRef<any>(null)

  useEffect(() => {
    // Fonction pour charger Leaflet CSS et JS
    const loadLeaflet = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.L) {
          resolve()
          return
        }

        // Charger le CSS Leaflet
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)

        // Charger le JS Leaflet
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
        script.crossOrigin = ''
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Leaflet failed to load'))
        document.head.appendChild(script)
      })
    }

    // Initialiser la carte
    const initMap = async () => {
      try {
        await loadLeaflet()
        
        if (!mapRef.current || !window.L) return

        const L = window.L

        // Créer la carte
        const map = L.map(mapRef.current).setView([latitude, longitude], zoom)

        // Ajouter la couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        // Ajouter le marqueur personnalisé
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              background: #892444;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 14px;
            ">
              S
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        })

        const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map)

        // Ajouter une popup
        marker.bindPopup(`
          <div style="text-align: center; padding: 5px;">
            <h3 style="margin: 0 0 5px 0; font-weight: bold; color: #892444;">SAAMDIS</h3>
            <p style="margin: 0; color: #666; font-size: 12px;">Votre distributeur de produits alimentaires</p>
          </div>
        `)

        mapInstanceRef.current = map
        markerRef.current = marker

      } catch (error) {
        console.error('Erreur lors du chargement de la carte:', error)
        // Fallback : afficher un message d'erreur
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
              <div class="text-center">
                <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p class="text-gray-600">Carte temporairement indisponible</p>
                <p class="text-sm text-gray-500 mt-2">Coordonnées : ${latitude}, ${longitude}</p>
              </div>
            </div>
          `
        }
      }
    }

    initMap()

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [latitude, longitude, zoom])

  return (
    <div 
      ref={mapRef} 
      className={`${className} rounded-lg shadow-lg border border-gray-200`}
    />
  )
}

// Déclaration des types pour TypeScript
declare global {
  interface Window {
    L: any
  }
} 