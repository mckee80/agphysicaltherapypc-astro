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

## When Moving to Custom Domain

### 8. Update Base Path
- Remove `/agphysicaltherapypc-astro/` prefix from all navigation links in site.ts
- Update `astro.config.mjs` to remove base path
- Verify sitemap generates with correct domain

### 9. Submit to Google Search Console
- Submit new sitemap
- Request indexing of key pages

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
