# 🚀 NASA Portfolio - Deployment Guide

This guide covers deploying the NASA Portfolio to various platforms with best practices for performance and security.

## 🌐 Deployment Options

### **1. Vercel (Recommended)**

Vercel is the optimal choice for Next.js applications with automatic deployments, edge functions, and global CDN.

#### **Setup Steps:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from CLI**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   ```env
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_NAME=NASA Portfolio
   ```

5. **Automatic Deployments**
   - Connect GitHub repository
   - Push to `main` branch triggers production deployment
   - Pull requests create preview deployments

#### **Vercel Configuration (`vercel.json`)**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### **2. Netlify**

Great alternative with excellent build tools and form handling.

#### **Setup Steps:**

1. **Connect Repository**
   - Link GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

2. **Environment Variables**
   ```env
   NODE_VERSION=18
   NPM_FLAGS=--legacy-peer-deps
   ```

3. **Netlify Configuration (`netlify.toml`)**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
   ```

### **3. AWS Amplify**

Enterprise-grade hosting with AWS integration.

#### **Setup Steps:**

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Project**
   ```bash
   amplify init
   ```

3. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

## 🔧 Pre-Deployment Checklist

### **Performance Optimization**
- [ ] Run `npm run build` successfully
- [ ] Check bundle size with `npm run analyze`
- [ ] Optimize images and assets
- [ ] Verify Lighthouse scores locally

### **SEO & Meta Tags**
- [ ] Update `src/app/layout.tsx` metadata
- [ ] Verify Open Graph tags
- [ ] Check Twitter Card meta tags
- [ ] Update sitemap URLs

### **Security Headers**
- [ ] Verify CSP headers in `next.config.js`
- [ ] Check HSTS configuration
- [ ] Validate X-Frame-Options
- [ ] Test security headers locally

### **PWA Configuration**
- [ ] Update `public/manifest.json`
- [ ] Verify service worker setup
- [ ] Test offline functionality
- [ ] Check app installation

## 🚀 Production Deployment

### **1. Build Optimization**

```bash
# Clean previous builds
npm run clean

# Install production dependencies
npm ci --only=production

# Build for production
npm run build

# Verify build output
ls -la .next/
```

### **2. Environment Configuration**

Create `.env.production`:
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://nasa-cyber.dev
NEXT_PUBLIC_APP_NAME=NASA Portfolio
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### **3. Performance Monitoring**

```bash
# Analyze bundle size
npm run analyze

# Check Core Web Vitals
npx lighthouse http://localhost:3000 --view

# Run performance audit
npx next-bundle-analyzer
```

## 📱 PWA Deployment

### **Service Worker Setup**

1. **Create Service Worker**
   ```typescript
   // public/sw.js
   const CACHE_NAME = 'nasa-portfolio-v1';
   const urlsToCache = [
     '/',
     '/offline',
     '/manifest.json'
   ];
   
   self.addEventListener('install', (event) => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then((cache) => cache.addAll(urlsToCache))
     );
   });
   ```

2. **Register Service Worker**
   ```typescript
   // src/app/layout.tsx
   useEffect(() => {
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/sw.js');
     }
   }, []);
   ```

### **PWA Testing**
- [ ] Test offline functionality
- [ ] Verify app installation
- [ ] Check background sync
- [ ] Validate manifest.json

## 🔒 Security Configuration

### **Content Security Policy**

```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: https:;
            connect-src 'self' https://api.github.com;
            frame-ancestors 'none';
          `.replace(/\s+/g, ' ').trim()
        }
      ]
    }
  ];
}
```

### **HTTPS Configuration**
- [ ] Enable HTTPS redirects
- [ ] Configure HSTS headers
- [ ] Set secure cookie flags
- [ ] Validate SSL certificates

## 📊 Analytics & Monitoring

### **Google Analytics 4**

1. **Setup GA4**
   ```typescript
   // src/lib/analytics.ts
   export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
   
   export const pageview = (url: string) => {
     window.gtag('config', GA_TRACKING_ID, {
       page_location: url,
     });
   };
   ```

2. **Track Page Views**
   ```typescript
   // src/app/layout.tsx
   useEffect(() => {
     pageview(window.location.pathname);
   }, []);
   ```

### **Performance Monitoring**

```typescript
// src/lib/performance.ts
export const trackWebVitals = (metric: any) => {
  if (metric.label === 'web-vital') {
    // Send to analytics
    console.log(metric);
  }
};
```

## 🧪 Testing Deployment

### **Local Testing**
```bash
# Build and start production server
npm run build
npm start

# Test on different devices
# Check responsive design
# Verify all functionality
```

### **Staging Environment**
1. Deploy to staging domain
2. Run full test suite
3. Check performance metrics
4. Validate user flows

### **Production Testing**
1. Monitor error logs
2. Check performance metrics
3. Verify SEO elements
4. Test contact form

## 🔄 Continuous Deployment

### **GitHub Actions Setup**

1. **Repository Secrets**
   - `VERCEL_TOKEN`: Vercel deployment token
   - `VERCEL_ORG_ID`: Vercel organization ID
   - `VERCEL_PROJECT_ID`: Vercel project ID

2. **Automatic Deployments**
   - Push to `main` → Production
   - Pull Request → Preview
   - Push to `develop` → Staging

### **Deployment Pipeline**
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
```

## 📈 Post-Deployment

### **Performance Monitoring**
- [ ] Monitor Core Web Vitals
- [ ] Track user engagement
- [ ] Analyze conversion rates
- [ ] Monitor error rates

### **SEO Verification**
- [ ] Check Google Search Console
- [ ] Verify structured data
- [ ] Monitor page speed
- [ ] Check mobile usability

### **Security Audits**
- [ ] Run security scans
- [ ] Monitor security headers
- [ ] Check for vulnerabilities
- [ ] Validate SSL configuration

## 🆘 Troubleshooting

### **Common Issues**

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Performance Issues**
   ```bash
   # Analyze bundle
   npm run analyze
   
   # Check dependencies
   npm audit
   ```

3. **Deployment Errors**
   - Check environment variables
   - Verify build commands
   - Check platform-specific logs

### **Support Resources**
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Help](https://vercel.com/help)
- [Netlify Support](https://docs.netlify.com)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**🚀 Ready to deploy your NASA Portfolio!**

For additional support, contact the development team or refer to the platform-specific documentation.