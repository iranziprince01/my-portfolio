"use client"

import { useEffect } from "react"

export function ExtensionCleanup() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const removeExtensionAttributes = () => {
      try {
        const attributesToRemove = [
          'data-gr-ext-installed',
          'data-new-gr-c-s-check-loaded',
          'data-gr-c-s-loaded'
        ]
        
        if (document.body) {
          attributesToRemove.forEach(attr => {
            if (document.body.hasAttribute(attr)) {
              document.body.removeAttribute(attr)
            }
          })
        }
        
        if (document.documentElement) {
          attributesToRemove.forEach(attr => {
            if (document.documentElement.hasAttribute(attr)) {
              document.documentElement.removeAttribute(attr)
            }
          })
        }
      } catch {
        // Ignore errors
      }
    }

    // Run immediately
    removeExtensionAttributes()

    // Run on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', removeExtensionAttributes)
    }

    // Run on load
    window.addEventListener('load', removeExtensionAttributes)

    // Cleanup
    return () => {
      window.removeEventListener('load', removeExtensionAttributes)
      document.removeEventListener('DOMContentLoaded', removeExtensionAttributes)
    }
  }, [])

  return null
}
