# 📦 SCDP Installation Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Prerequisites Check
```bash
# Check Node.js version (need 18+)
node --version
# Should show: v18.x.x or higher

# Check npm version
npm --version
# Should show: 9.x.x or higher
```

### Step 2: Install Dependencies
```bash
cd /Users/manit/Documents/GitHub/smartcity/smartcity
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open Browser
```
http://localhost:3000
```

**That's it! 🎉**

---

## 📋 Detailed Installation

### 1. System Requirements

#### Minimum Requirements
- **OS:** macOS, Windows 10+, Linux
- **Node.js:** 18.17 or higher
- **RAM:** 4 GB
- **Disk Space:** 500 MB

#### Recommended
- **Node.js:** 20.x (LTS)
- **RAM:** 8 GB+
- **SSD:** For faster builds

---

### 2. Install Node.js

#### macOS (using Homebrew)
```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node@20
```

#### Windows
1. Download from: https://nodejs.org/
2. Run installer
3. Check "Add to PATH"

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### 3. Clone or Navigate to Project

```bash
# If you already have the project
cd /Users/manit/Documents/GitHub/smartcity/smartcity

# Or clone from Git (if needed)
# git clone <your-repo-url>
# cd smartcity
```

---

### 4. Install Dependencies

```bash
# Using npm (default)
npm install

# Or using yarn
yarn install

# Or using pnpm (faster)
pnpm install
```

**This will install:**
- next (14.1.0)
- react (18.2.0)
- react-dom (18.2.0)
- typescript (5.3.3)
- tailwindcss (3.4.1)
- lucide-react (0.316.0)
- and more...

**Wait for installation to complete (~2-3 minutes)**

---

### 5. Verify Installation

```bash
# Check if node_modules exists
ls node_modules/

# Should see folders like: next, react, tailwindcss, etc.
```

---

### 6. Run Development Server

```bash
npm run dev
```

**You should see:**
```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- Environments: .env

✓ Ready in 2.5s
```

---

### 7. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

**You should see:**
- SCDP Dashboard Overview
- Sidebar on the left
- Topbar at the top
- Stat cards and content

---

## 🔧 Troubleshooting

### Problem: Port 3000 already in use

**Solution:**
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or run on different port
npm run dev -- -p 3001
```

### Problem: Module not found errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: TypeScript errors

**Solution:**
```bash
# Ignore TypeScript errors temporarily
npm run dev -- --no-typescript-check

# Or fix them later after installing deps
```

### Problem: Tailwind not working

**Solution:**
```bash
# Make sure PostCSS and Tailwind are installed
npm install -D tailwindcss postcss autoprefixer

# Restart dev server
npm run dev
```

### Problem: Slow performance

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

---

## 🏗️ Build for Production

### Step 1: Build
```bash
npm run build
```

**This will:**
1. Compile TypeScript
2. Optimize code
3. Generate static pages
4. Create `.next` folder

**Output:**
```
Route (app)                              Size     First Load JS
┌ ○ /                                    1.2 kB          85 kB
├ ○ /citizen                             800 B           84 kB
├ ○ /data-catalog                        900 B           84 kB
├ ○ /vehicle-tracking                    850 B           84 kB
├ ○ /vms                                 880 B           84 kB
└ ○ /weather-iot                         870 B           84 kB
```

### Step 2: Start Production Server
```bash
npm run start
```

### Step 3: Test
```
http://localhost:3000
```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)

#### Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Using Vercel Dashboard
1. Go to https://vercel.com
2. Import Git Repository
3. Select project
4. Click Deploy

**Your site will be live at:**
```
https://your-project.vercel.app
```

---

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

---

### Option 3: Docker

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
# Build image
docker build -t scdp .

# Run container
docker run -p 3000:3000 scdp
```

---

### Option 4: Traditional Server (VPS)

```bash
# On server
git clone <your-repo>
cd smartcity

# Install dependencies
npm install

# Build
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "scdp" -- start

# Setup Nginx reverse proxy
sudo nano /etc/nginx/sites-available/scdp
```

Nginx config:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 Environment Variables (Optional)

Create `.env.local`:
```bash
# API URLs (if you add backend)
NEXT_PUBLIC_API_URL=https://api.example.com

# Feature flags
NEXT_PUBLIC_ENABLE_VMS=true
NEXT_PUBLIC_ENABLE_TRACKING=true

# Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

**Never commit `.env.local` to Git!**

---

## 📱 Mobile Testing

### iOS Simulator (macOS)
```bash
# Start dev server
npm run dev

# Get local IP
ipconfig getifaddr en0

# Open in iPhone Safari
http://192.168.x.x:3000
```

### Android Emulator
```bash
# Forward port
adb reverse tcp:3000 tcp:3000

# Open in Chrome
http://localhost:3000
```

---

## 🧪 Testing Setup (Optional)

### Install Jest
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### Install Playwright (E2E)
```bash
npm init playwright@latest
```

---

## 📊 Performance Optimization

### 1. Enable SWC Minification
In `next.config.js`:
```javascript
module.exports = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### 2. Enable Image Optimization
```bash
# Install Sharp for better image performance
npm install sharp
```

### 3. Enable Gzip
```javascript
// next.config.js
module.exports = {
  compress: true,
}
```

---

## 🔍 Development Tools

### VS Code Extensions (Recommended)
```
1. ES7+ React/Redux/React-Native snippets
2. Tailwind CSS IntelliSense
3. Prettier - Code formatter
4. ESLint
5. GitLens
```

### Browser Extensions
```
1. React Developer Tools
2. Redux DevTools (if using Redux)
3. Lighthouse (performance testing)
```

---

## 📦 Package Management

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all
npm update

# Update specific package
npm install next@latest
```

### Lock Dependencies
```bash
# Generate package-lock.json
npm install

# Use exact versions
npm install --save-exact
```

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Cleaning
rm -rf .next             # Clear Next.js cache
rm -rf node_modules      # Remove dependencies
npm ci                   # Clean install

# Debugging
npm run dev -- --debug   # Debug mode
NODE_OPTIONS='--inspect' npm run dev  # Node debugging
```

---

## 📚 Additional Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

### Community
- **Next.js Discord:** https://discord.gg/nextjs
- **GitHub Issues:** Create issue in repo
- **Stack Overflow:** Tag: nextjs, tailwindcss

---

## ✅ Installation Checklist

- [ ] Node.js 18+ installed
- [ ] Project cloned/downloaded
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser opened (http://localhost:3000)
- [ ] All pages loading correctly
- [ ] No console errors
- [ ] Responsive design working

---

## 🎉 Success!

If you can see the SCDP Dashboard in your browser, **congratulations!** 

You're ready to:
- Explore all 6 modules
- Customize the design
- Add your own features
- Connect to real APIs
- Deploy to production

---

## 💡 Next Steps

1. **Read README.md** - Understand the project
2. **Check MOCKUP_GUIDE.md** - Learn the design system
3. **Explore components/** - See reusable components
4. **Modify colors** - Edit `tailwind.config.ts`
5. **Add features** - Create new pages/components
6. **Deploy** - Share with your team

---

## 🆘 Need Help?

### Quick Fixes
```bash
# Reset everything
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

### Still Having Issues?
1. Check Node.js version: `node --version`
2. Clear cache: `rm -rf .next`
3. Reinstall: `rm -rf node_modules && npm install`
4. Check error messages carefully
5. Search error on Google/Stack Overflow

---

**Happy Coding! 🚀**

**Installation Time:** ~5 minutes
**Setup Difficulty:** ⭐⭐☆☆☆ (Easy)
**Status:** ✅ Ready to Go!
