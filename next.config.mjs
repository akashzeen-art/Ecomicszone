import { createRequire } from "node:module"

// Next.js doesn't ship `webpack` as a top-level dependency; use Next's bundled webpack instead
const require = createRequire(import.meta.url)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("next/dist/compiled/webpack/webpack-lib.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify drag-and-drop deployment
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Must be unoptimized for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ameora.fun',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.ameora.fun',
        pathname: '/**',
      },
    ],
  },
  // Experimental performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
  },
  // Empty turbopack configuration to silence the warning
  turbopack: {},
  // Webpack configuration to handle canvas module (fallback for non-turbopack builds)
  webpack: (config, { isServer }) => {
    // Prevent bundling native Node addons (e.g. canvas.node) which will break Webpack parsing
    // This fixes: pdfjs-dist -> canvas -> canvas.node "Module parse failed"
    config.plugins = config.plugins || []
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^canvas$/ }),
      new webpack.IgnorePlugin({ resourceRegExp: /\.node$/ }),
    )

    // Exclude canvas from the build (used by pdfjs-dist but not needed for browser)
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    }
    
    // Handle node modules that shouldn't be bundled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
      }
    }
    
    return config
  },
}

export default nextConfig
