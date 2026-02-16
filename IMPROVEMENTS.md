# Potential Improvements for AG Physical Therapy Website

## SEO & Content

### 1. Create Cornerstone Service Pages
Create 2-3 dedicated service pages for main specialties:
- **Pelvic Floor Physical Therapy** - flagship service covering incontinence, pelvic pain, prolapse, TMJ connection
- **Postpartum Recovery** - targets new moms, includes diastasis recti, C-section recovery, return to exercise
- **Orthopedic PT** (optional) - if you want to capture that audience separately

Each page should include: what to expect, who it's for, Dr. Gendron's approach, link to book.

### ~~2. Add Sticky Mobile CTA~~ DONE
- [x] Fixed "Book Online" button at bottom of screen on mobile (lg:hidden)
- [x] Slides in after scrolling past 300px, hidden at top of page
- [x] Links to Jane App booking URL

### 3. Vista-Specific Content
Create blog posts or content targeting local keywords:
- "Pelvic Floor PT Near Via Del Campo"
- "Postpartum Physical Therapy Vista CA"

### ~~4. Add More Social Profiles~~ DONE
- [x] Facebook added to site config and schema
- [x] Instagram in site config and schema
- [x] Yelp in site config and schema
- [x] Social icons displayed in footer (Facebook, Instagram, Yelp)

---

## Technical SEO

### ~~5. Add Physician Schema for Dr. Gendron~~ DONE
- [x] Person schema in JsonLd.astro (name, jobTitle, description, credentials)
- [x] Full ProfilePage + Person schema on About page (credentials, alumni, knowsAbout)

### ~~6. Add BreadcrumbList Schema~~ DONE
- [x] BreadcrumbList JSON-LD on all pages (except homepage and 404)
- [x] Single-level: About, Areas Served, Blog, Resources
- [x] Two-level for blog posts: Home > Blog > Post Title

### ~~7. Add aggregateRating to LocalBusiness Schema~~ DONE
- [x] aggregateRating added to LocalBusiness schema (5.0 stars, 14 reviews from Google)

---

## When Moving to Custom Domain (Netlify)

### 8. Set Up Netlify Deployment

#### Step 1: Create Netlify Site
1. Create a free account at [netlify.com](https://www.netlify.com)
2. Click **Add new site** > **Import an existing project** > **GitHub**
3. Authorize Netlify and select the `mckee80/agphysicaltherapypc-astro` repo
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Under **Environment variables**, add: `NODE_VERSION` = `20`
6. Click **Deploy site** — Netlify will build and deploy to a random URL like `random-name.netlify.app`
7. Verify the site works at that URL before proceeding

#### Step 2: Add Custom Domain in Netlify
1. Go to **Site configuration** > **Domain management** > **Add a domain**
2. Enter `agphysicaltherapypc.com`
3. Netlify will also auto-add `www.agphysicaltherapypc.com`
4. Note your Netlify site name (e.g., `random-name.netlify.app`) — you'll need it for DNS

#### Step 3: Configure DNS in Squarespace Domains
> **Note:** Google Domains was migrated to Squarespace Domains (completed July 2024).
> Manage your domain at [domains.squarespace.com](https://domains.squarespace.com).

1. Log in to **Squarespace Domains** (use your Google account if that's how you registered)
2. Select `agphysicaltherapypc.com` > **DNS** > **DNS Settings**
3. **Delete** any existing default records (A records, CNAME for www, etc.) that point to Squarespace or Google — use the trash/delete icon on each
4. **Add these records:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | `75.2.60.5` | 3600 |
| CNAME | www | `your-site-name.netlify.app` | 3600 |

> Replace `your-site-name.netlify.app` with your actual Netlify subdomain from Step 2.

5. Save changes
6. **Wait for DNS propagation** — can take 15 minutes to 48 hours (usually under 1 hour)

#### Step 4: Enable HTTPS
1. Back in Netlify: **Site configuration** > **Domain management** > **HTTPS**
2. Click **Verify DNS configuration** — if DNS has propagated, it will show green
3. Click **Provision certificate** — Netlify auto-provisions a free Let's Encrypt SSL cert
4. Enable **Force HTTPS** to redirect all HTTP traffic to HTTPS

#### Step 5: Verify Everything Works
- [ ] `https://agphysicaltherapypc.com` loads the site
- [ ] `https://www.agphysicaltherapypc.com` loads the site (redirects to apex or vice versa)
- [ ] HTTPS padlock shows in browser
- [ ] All pages and images load correctly
- [ ] Pushing to `master` triggers automatic Netlify deploy

### 8b. Update Base Path (do this AFTER Netlify is connected)
Remove `/agphysicaltherapypc-astro/` from all references — **25 occurrences across 10 files**:

- `astro.config.mjs` — change `site` to `https://www.agphysicaltherapypc.com`, remove `base` line
- `src/config/site.ts` — 10 occurrences (nav links, image paths, URL)
- `src/pages/index.astro` — 3 occurrences (image paths, nav links)
- `src/components/seo/SEOHead.astro` — 2 occurrences
- `src/components/layout/Header.astro` — 2 occurrences
- `src/pages/about.astro` — 2 occurrences
- `src/layouts/BlogPostLayout.astro` — 2 occurrences (back link, breadcrumb regex)
- `src/components/layout/Footer.astro` — 1 occurrence
- `src/pages/areas-served.astro` — 1 occurrence
- `src/pages/blog/index.astro` — 1 occurrence
- `src/pages/404.astro` — 1 occurrence

After removing, run `npm run build` and verify all links/images work locally.

### 8c. Optional: Remove GitHub Pages Deploy
- Delete `.github/workflows/deploy.yml` (or keep it as a backup deploy target)
- In GitHub repo Settings > Pages, disable GitHub Pages

### 9. Submit to Google Search Console
- Verify domain ownership in Search Console (Netlify DNS or HTML file method)
- Submit new sitemap (`https://www.agphysicaltherapypc.com/sitemap-index.xml`)
- Request indexing of key pages (homepage, about, areas-served, blog)

### 9b. Update Google Business Profile
- Update website URL to `https://www.agphysicaltherapypc.com`
- **Update booking link** to point to Jane App (`https://agphysicaltherapy.janeapp.com/`) — currently points to the old site's "Book Online" page
- Verify all GBP data matches website exactly (address, hours, phone, services)
- See `GBP-CHECKLIST.md` for full sync checklist
- **Important**: GBP-to-website data mismatches can cause profile suspension (2026 policy)

---

## Marketing

### 10. Consider Local Services Ads (LSA)
Per 2025 data, local pack ads are growing (14% mobile, 31% LSA). A small LSA budget could complement organic rankings.

### 11. Review Generation Strategy
- Set up a post-appointment review request workflow
- Important as Google now allows anonymous reviews

---

## Content Differentiation

### 12. Patient Journey Stories
With permission, add real patient recovery stories to build E-E-A-T signals.

### 13. Dr. Gendron's Unique Approach Content
Create content around "Not just do kegels" philosophy and holistic approach.

### 14. Community Involvement Content
Document partnership with San Diego County Midwives, local events, etc.

---

## ~~Next Up~~ Recently Completed

### ~~15. Add Resources Section~~ DONE
Resources page live with community provider referrals across 10 categories.

### 16. Add Pictures
Incorporate professional photos throughout the site (hero, about, services, etc.). Pending client photo assets. Birth prep blog post has 9 image placeholders ready.

### ~~17. Add Pricing~~ DONE
Pricing added to site.ts config (home visit, clinic, discovery call, Reconnection Session). Displayed on services.

### ~~18. Add Reconnection Session Info~~ DONE
Reconnection Session added as 9th service card with pricing ($670 for 3 sessions). Collaborative acupuncture + pelvic floor therapy program with Nina Jung.

### ~~19. Convert Community Resources PDF to Web Page~~ DONE
Community resources converted to the Resources page (/resources/) with all provider referrals organized by category.

---

## Completed Items

| Item | Status | Notes |
|------|--------|-------|
| Social profiles in config/schema | Done | Facebook, Instagram, Yelp added |
| Person schema for Dr. Gendron | Done | On About page + JsonLd.astro |
| About page | Done | Full story, credentials, ProfilePage schema |
| Areas Served page | Done | GBP linking, service area coverage |
| FAQ section with CTA links | Done | 10 FAQs, "Book a Discovery Call" button |
| Client-confirmed service descriptions | Done | 9 services in site.ts (added Reconnection Session) |
| Preview page for SEO content | Done | /preview/ with alternative homepage copy |
| Backlink opportunities research | Done | BACKLINK-OPPORTUNITIES.md |
| Local marketing plan | Done | LOCAL-MARKETING.md |
| GBP sync checklist | Done | GBP-CHECKLIST.md |
| Client checklist | Done | CLIENT-CHECKLIST.md |
| Resources page | Done | Community provider referrals, 10 categories |
| Pricing in site config | Done | Home visit, clinic, discovery call, Reconnection Session |
| Reconnection Session service card | Done | 3-session program ($670) with Nina Jung |
| Community resources PDF to web | Done | /resources/ page |
| Birth prep blog post | Done | 9 exercises from PDF, image placeholders ready |
| Blog author credentials | Done | All posts show "Dr. Ashlee Gendron, PT, DPT, PCES" |
| Referral FAQ update | Done | "No immediate referral" wording in config + homepage |
| aggregateRating in schema | Done | 5.0 stars, 14 reviews wired into LocalBusiness structured data |
| Social icons in footer | Done | Facebook, Instagram, Yelp icons with links |
| Sticky mobile CTA | Done | Fixed "Book Online" button on mobile, appears after scrolling |
| BreadcrumbList schema | Done | JSON-LD on all pages, 2-level for blog posts |

---

*Last updated: February 2026*
