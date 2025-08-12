# 🚀 NASA Portfolio - Quick Start Guide

Get your NASA Portfolio up and running in under 5 minutes!

## ⚡ Quick Setup

### **1. Clone & Install**
```bash
git clone https://github.com/nasa-cyber/nasa-portfolio.git
cd nasa-portfolio
npm install
```

### **2. Start Development**
```bash
npm run dev
```

### **3. Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

🎉 **That's it! Your portfolio is running locally.**

## 🔧 Essential Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code style
npm run type-check   # Verify TypeScript
npm run format       # Format code with Prettier

# Utilities
npm run clean        # Clean build files
npm run analyze      # Analyze bundle size
```

## 📝 Customize Your Portfolio

### **Update Personal Information**
Edit `src/data/portfolio.ts`:
```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    preferredName: "Your Nickname",
    title: "Your Professional Title",
    // ... update other fields
  },
  // ... customize skills, projects, experience
};
```

### **Modify Colors & Theme**
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'nasa-blue': '#YourColor',
      'mission-gold': '#YourGold',
      'neon-cyan': '#YourCyan',
    },
  },
}
```

### **Add New Sections**
1. Create component in `src/components/organisms/`
2. Add to `src/app/page.tsx`
3. Update navigation in `src/components/molecules/Navigation/`

## 🌐 Deploy to Production

### **Vercel (1-Click Deploy)**
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### **Manual Deployment**
```bash
npm run build
# Deploy .next/ folder to your hosting service
```

## 🎯 Next Steps

1. **Customize Content**: Update portfolio data with your information
2. **Add Projects**: Showcase your best work
3. **Optimize Images**: Add project screenshots and avatars
4. **Deploy**: Get your portfolio online
5. **Share**: Share with recruiters and network

## 🆘 Need Help?

- **Documentation**: Check the main [README.md](README.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions

---

**🚀 Ready to launch your career with an amazing portfolio!**