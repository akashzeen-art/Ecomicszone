# E-Magazine Arabic - Node.js 18 Deployment Guide

## Node.js 18 Compatibility

### System Requirements
- **Node.js**: 18.x (LTS)
- **npm**: 8.x or higher
- **Next.js**: 16.1.6

### Environment Setup

#### Required Environment Variables
```bash
NEXT_PUBLIC_API_BASE_URL=https://api.ameora.fun
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

### Deployment Options

#### Vercel (Node 18)
1. Connect GitHub repository to Vercel
2. Set Node.js version to 18.x in project settings
3. Add environment variables in dashboard
4. Deploy automatically on push

#### Netlify (Node 18)
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18
3. Set environment variables

#### Docker (Node 18)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .\nRUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Manual Server (Node 18)
```bash
# Verify Node version
node --version  # Should be v18.x.x

# Install and build
npm install
npm run build
npm start
```

### Build Commands
```bash
npm install    # Install dependencies
npm run build  # Build for production
npm start      # Start production server
npm run dev    # Development server
```

### Key Files for Backend Team
- `package.json` - Node 18 compatible dependencies
- `.nvmrc` - Node version specification
- `components/home/comic-timeline.tsx` - Timeline component
- `app/globals.css` - RTL styles
- `.env.example` - Environment template

### Node.js 18 Notes
- All dependencies tested with Node 18
- Next.js 16.1.6 fully supports Node 18
- No additional configuration needed
- Production ready