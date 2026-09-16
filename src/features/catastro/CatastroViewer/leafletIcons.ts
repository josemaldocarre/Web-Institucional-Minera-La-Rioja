import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

type DefaultIconPrototype = {
  _getIconUrl?: unknown
}

let iconsConfigured = false

export function setupLeafletDefaultIcons(): void {
  if (iconsConfigured) {
    return
  }

  delete (L.Icon.Default.prototype as DefaultIconPrototype)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  })
  iconsConfigured = true
}
