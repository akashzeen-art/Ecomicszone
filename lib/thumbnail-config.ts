// Standardized thumbnail configuration for all components
export const THUMBNAIL_CONFIG = {
  // Standard thumbnail dimensions
  width: 200,
  height: 200,
  
  // Container heights for different layouts
  containers: {
    small: 'h-40',      // 160px - for compact grids
    medium: 'h-48',     // 192px - for standard cards  
    large: 'h-56',      // 224px - for featured content
    hero: 'h-64'        // 256px - for hero sections
  },
  
  // Responsive sizes attribute
  sizes: {
    grid: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw",
    carousel: "240px",
    featured: "(max-width: 768px) 100vw, 400px",
    hero: "(max-width: 768px) 100vw, 500px"
  }
} as const