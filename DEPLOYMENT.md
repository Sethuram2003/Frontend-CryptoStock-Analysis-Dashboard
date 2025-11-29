# Vercel Deployment Guide

This guide will help you deploy your Crypto Analytics Dashboard to Vercel from the `master` branch.

## Prerequisites

- A GitHub account with your repository
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to the `master` branch

## Deployment Steps

### Method 1: Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Connect to Vercel**
   - Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository

3. **Configure Project**
   - **Project Name**: Choose a name (e.g., `crypto-analytics-dashboard`)
   - **Framework Preset**: Create React App (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Configure Git Settings**
   - **Production Branch**: `master` (this is already configured in vercel.json)
   - Vercel will automatically deploy when you push to `master`

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

4. **Link to Git**
   ```bash
   vercel git connect
   ```

## Configuration Files

The following files are already configured for Vercel deployment:

### `vercel.json`
- Specifies build configuration
- Sets up routing for SPA (Single Page Application)
- Configures `master` branch for automatic deployments
- Handles static asset serving

### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size and time

### `package.json`
- Contains `vercel-build` script
- Specifies all dependencies

## Environment Variables

If you need to add environment variables:

1. **Local Development**
   - Create `.env.local` file
   - Add variables with `REACT_APP_` prefix:
     ```
     REACT_APP_API_URL=https://your-api.com
     ```

2. **Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add each variable:
     - **Name**: `REACT_APP_API_URL`
     - **Value**: `https://your-api.com`
     - **Environment**: Production, Preview, Development

3. **Redeploy**
   - After adding environment variables, trigger a new deployment

## Automatic Deployments

Once connected, Vercel will automatically:

- **Deploy to Production**: When you push to `master` branch
- **Deploy Preview**: When you create a pull request
- **Deploy on Commit**: Every commit gets a unique preview URL

## Custom Domain

To add a custom domain:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `crypto-dashboard.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

## Monitoring

After deployment, you can:

- **View Logs**: Project → Deployments → Select deployment → Logs
- **Check Analytics**: Project → Analytics
- **Monitor Performance**: Project → Speed Insights

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check for environment variable issues

### 404 Errors

- The `vercel.json` routing configuration handles SPA routing
- All routes redirect to `index.html` for client-side routing

### Slow Build Times

- Check if `node_modules` is in `.vercelignore`
- Ensure you're not committing build artifacts
- Consider using Vercel's caching features

## Rollback

To rollback to a previous deployment:

1. Go to Project → Deployments
2. Find the working deployment
3. Click "..." → "Promote to Production"

## Branch Configuration

The project is configured to deploy from `master` branch:

```json
{
  "git": {
    "deploymentEnabled": {
      "master": true
    }
  }
}
```

To change the production branch:
1. Update `vercel.json`
2. Or change in Vercel Dashboard → Settings → Git

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]
```

---

**Your app is now ready to deploy! 🚀**

Simply push to the `master` branch and Vercel will handle the rest.
