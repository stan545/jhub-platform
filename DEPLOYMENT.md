# Deploying JHub to Vercel

## Quick Start (Easiest)

### Option 1: GitHub + Vercel (Recommended)

**Step 1: Initialize Git Repository**
```bash
cd c:\Users\Kanuc\Desktop\JHub
git init
git add .
git commit -m "Initial commit: JHub platform"
```

**Step 2: Push to GitHub**
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository (e.g., `jhub-platform`)
3. Copy your repo URL (e.g., `https://github.com/yourusername/jhub-platform.git`)
4. Run:
```bash
git remote add origin https://github.com/yourusername/jhub-platform.git
git branch -M main
git push -u origin main
```

**Step 3: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New..." → "Project"
3. Select your GitHub repository (`jhub-platform`)
4. Click "Import"
5. Vercel auto-detects your project configuration
6. Click "Deploy"
7. Done! Your site is live at `https://jhub-[random].vercel.app`

---

### Option 2: Vercel CLI (Quick Test)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
cd c:\Users\Kanuc\Desktop\JHub
vercel
```

**Step 3: Follow Prompts**
- Select "JHub" or create a new project
- Accept default settings
- Visit the provided URL to see your live site

---

## Environment Setup

### Windows PowerShell Users

If you don't have Git or Node.js installed:

**Install Git:**
- Download from [git-scm.com](https://git-scm.com/download/win)
- Run installer with default settings
- Restart PowerShell

**Install Node.js (includes npm):**
- Download from [nodejs.org](https://nodejs.org)
- Choose LTS version
- Run installer with default settings
- Restart PowerShell

**Verify Installation:**
```bash
git --version
node --version
npm --version
```

---

## Configuration Details

### What's in `vercel.json`?

```json
{
  "buildCommand": "",              // No build command needed (static site)
  "outputDirectory": ".",          // All files at root level
  "framework": "static",           // Static HTML/CSS/JS
  "public": true,                  // Publicly accessible
  "regions": ["iad1"],             // US Virginia (fastest for most)
  "headers": [                     // Security & caching headers
    "Cache-Control": "3600s",      // Cache for 1 hour
    "X-Frame-Options": "SAMEORIGIN"// Prevent clickjacking
  ]
}
```

---

## Post-Deployment

### Update Your Domain (Optional)

**Step 1: Custom Domain**
1. Go to Vercel Project Settings
2. Click "Domains"
3. Add your custom domain (e.g., `jhub.com`)
4. Follow DNS setup instructions from your domain registrar

**Step 2: Environment Variables (If Needed Later)**
- Vercel Dashboard → Project Settings → Environment Variables
- Add any API keys or config values

---

## Common Deployment Issues

### Issue: "404 - File Not Found"
**Solution:** Verify all file paths use forward slashes (`/`) not backslashes (`\`). Check HTML links:
```html
<!-- ✅ Correct -->
<link rel="stylesheet" href="styles/main.css">
<script src="scripts/data.js"></script>

<!-- ❌ Wrong -->
<link rel="stylesheet" href="styles\main.css">
```

### Issue: "CORS Error on Mercor API"
**Solution:** This is expected—Mercor API blocks browser requests due to CORS. JHub falls back to local job data automatically. No action needed.

### Issue: "Assets Not Loading (Images)"
**Solution:** Ensure image URLs in `index.html` and `blog` posts use full URLs:
```html
<!-- ✅ Correct -->
<img src="https://images.unsplash.com/photo-...">

<!-- ❌ Wrong -->
<img src="Assets/my-image.jpg">  <!-- Local paths may fail -->
```

---

## Performance Tips

### Enable Caching
Vercel automatically caches static files. No action needed. But you can verify:
- Vercel Dashboard → Project → Deployments → Click a deployment → Logs

### Monitor Analytics
- Vercel Dashboard → Analytics (free for all projects)
- View page views, response times, top routes

### Update Your Site
**Push Changes:**
```bash
cd c:\Users\Kanuc\Desktop\JHub
git add .
git commit -m "Update: Added new blog post"
git push
```

Vercel auto-deploys on every push to `main` branch.

---

## Rollback to Previous Version

If something breaks:
1. Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "Promote to Production"
4. Your site reverts to that version instantly

---

## Vercel CLI Commands

```bash
# Login to Vercel
vercel login

# Deploy current project
vercel

# Deploy with production URL
vercel --prod

# View project info
vercel projects

# See deployment logs
vercel logs

# Pull environment variables
vercel env pull

# Open project on Vercel
vercel open
```

---

## Next Steps

1. ✅ **Deploy** using Option 1 or Option 2 above
2. ✅ **Share your URL** (e.g., https://jhub-xyz.vercel.app)
3. ✅ **Test all features:**
   - Search & filters work?
   - Blog posts load?
   - Legal page accessible?
   - Sample blog post displays?
   - Referral links functional?
4. ✅ **Set up custom domain** (optional)
5. ✅ **Monitor analytics** on Vercel dashboard

---

## Questions?

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **GitHub Help:** https://docs.github.com

---

**Deployment Date:** February 11, 2026  
**Status:** Ready for Production ✅
