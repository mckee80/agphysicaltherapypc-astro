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

## ~~When Moving to Custom Domain (Netlify)~~ DONE

### ~~8. Set Up Netlify Deployment~~ DONE
- [x] Netlify site created: `singular-scone-c8074a.netlify.app`
- [x] Custom domain `agphysicaltherapypc.com` added
- [x] DNS configured in Squarespace Domains (A record + CNAME)
- [x] HTTPS enabled with Let's Encrypt certificate
- [x] Auto-deploy from master branch working

### ~~8b. Update Base Path~~ DONE
- [x] Removed `/agphysicaltherapypc-astro/` from all references across 21 files
- [x] Site URL updated to `https://www.agphysicaltherapypc.com`

### 8c. Optional: Remove GitHub Pages Deploy
- Delete `.github/workflows/deploy.yml` (or keep it as a backup deploy target)
- In GitHub repo Settings > Pages, disable GitHub Pages

### ~~9. Submit to Google Search Console~~ DONE
- [x] Domain verified via DNS TXT record
- [x] Sitemap submitted (`sitemap-index.xml`)
- [x] Key pages submitted for indexing

### ~~9b. Update Google Business Profile~~ N/A
- GBP website URL unchanged (same domain)
- Booking link already points to Jane App
- Verify GBP data matches website (address, hours, phone, services)
- See `GBP-CHECKLIST.md` for full sync checklist

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

## Remaining Tasks

### 16. Blog Post Cover Images
3 blog posts still need cover images:
- `comprehensive-orthopedic-therapy-for-all-needs.md` — Orthopedic therapy
- `leaking-urine-stress-incontinence.md` — Stress urinary incontinence
- `imposter-syndrome.md` — Imposter syndrome / personal growth

### 17. Optimize Images for Mobile Performance
Mobile PageSpeed performance score is 76 (Desktop is 97). Main opportunity:
- Convert large JPGs (professional photos) to WebP format with Astro's `<Image>` component
- Resize images to appropriate display dimensions (most are full-resolution originals)
- Add explicit `width`/`height` attributes to prevent layout shift
- Consider `astro:assets` or `@astrojs/image` for automatic optimization at build time

### 20. Disable GitHub Pages
Old deploy at `mckee80.github.io/agphysicaltherapypc-astro` is broken (base path removed). Disable in GitHub repo Settings > Pages.

### 21. Delete Wix Site
Cancel/delete the old Wix site once stable on Netlify (no rush).

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
| Birth prep blog post | Done | 9 exercises with images, cover image added |
| Blog author credentials | Done | All posts show "Dr. Ashlee Gendron, PT, DPT, PCES" |
| Referral FAQ update | Done | "No immediate referral" wording in config + homepage |
| aggregateRating in schema | Done | 5.0 stars, 14 reviews wired into LocalBusiness structured data |
| Social icons in footer | Done | Facebook, Instagram, Yelp icons with links |
| Sticky mobile CTA | Done | Fixed "Book Online" button on mobile, appears after scrolling |
| BreadcrumbList schema | Done | JSON-LD on all pages, 2-level for blog posts |
| Service card icons | Done | Meaningful SVGs: droplet, baby, pregnant, dumbbell, flower, sparkle |
| Professional photos | Done | Homepage, about page, areas served, homepage photo break |
| Hours update | Done | Clinic 8am-1pm Wed/Fri, home visits Mon-Fri 8am-1pm |
| Resources page updates | Done | Whole Women Nutrition, Annie Guevara, Heather LeMaster, Laci Mattson, Jackie Martinez |
| GA4 tracking | Done | Measurement ID G-EX6G073Z5H installed in BaseLayout |
| Netlify deployment | Done | Live at agphysicaltherapypc.com with HTTPS |
| Base path removal | Done | Removed /agphysicaltherapypc-astro/ from 21 files |
| Google Search Console | Done | Verified, sitemap submitted, key pages indexed |

---

*Last updated: February 2026*
