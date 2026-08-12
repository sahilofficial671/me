# Sahil Bhatia Portfolio

Production-ready personal portfolio for **Sahil Bhatia (Senior Full Stack Engineer)** built with Next.js and Tailwind CSS, configured for static export and deployment on GitHub Pages.

## Tech Stack

- Next.js 12
- React 17
- Tailwind CSS 2
- GitHub Actions (GitHub Pages deployment)

## Local Development

### 1) Install dependencies

```bash
npm ci
```

### 2) Start development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3) Lint

```bash
npm run lint
```

### 4) Production build

```bash
npm run build
```

### 5) Static export (same output used by GitHub Pages)

```bash
npm run export
```

Generated static files are written to `out/`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml` that builds and deploys automatically.

### One-time GitHub setup

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Source: GitHub Actions**.
3. Ensure the default branch is `main`.

### Automatic deployment

- Every push to `main` triggers the deployment workflow.
- You can also run it manually from **Actions → Deploy Portfolio to GitHub Pages → Run workflow**.

### How base path works

The app automatically detects `GITHUB_REPOSITORY` in GitHub Actions and applies the correct project base path (for example `/me`) so assets and routes work correctly on Pages.

## Portfolio Sections Included

- Summary
- Skills
- Experience
- Selected Projects
- Certifications
- Education
- Contact links (GitHub + LinkedIn)

All sections have been updated to match the latest resume details provided.
