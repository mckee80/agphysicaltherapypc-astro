# Potential Improvements for AG Physical Therapy Website

## SEO & Content

### 1. Create Cornerstone Service Pages
Create 2-3 dedicated service pages for main specialties:
- **Pelvic Floor Physical Therapy** - flagship service covering incontinence, pelvic pain, prolapse, TMJ connection
- **Postpartum Recovery** - targets new moms, includes diastasis recti, C-section recovery, return to exercise
- **Orthopedic PT** (optional) - if you want to capture that audience separately

Each page should include: what to expect, who it's for, Dr. Gendron's approach, link to book.

### 2. Add Sticky Mobile CTA
Add a floating "Book Now" button on mobile for better conversion when users scroll past the header.

### 3. Vista-Specific Content
Create blog posts or content targeting local keywords:
- "Pelvic Floor PT Near Via Del Campo"
- "Postpartum Physical Therapy Vista CA"

### ~~4. Add More Social Profiles~~ DONE
- [x] Facebook added to site config and schema
- [x] Instagram in site config and schema
- [x] Yelp in site config and schema
- [ ] Display social links in footer/header UI (configured in config + schema but not visible on site)

---

## Technical SEO

### ~~5. Add Physician Schema for Dr. Gendron~~ DONE
- [x] Person schema in JsonLd.astro (name, jobTitle, description, credentials)
- [x] Full ProfilePage + Person schema on About page (credentials, alumni, knowsAbout)

### 6. Add BreadcrumbList Schema
Add breadcrumb structured data for improved navigation signals in search results.

### 7. Add aggregateRating to LocalBusiness Schema
Google Reviews data exists in site.ts (5.0 stars, 14 reviews) but is not wired into schema markup. Add aggregateRating to LocalBusiness structured data.

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

## Next Up

### 15. Add Resources Section
Add a resources section to the site (e.g., helpful links, recommended reading, patient education materials).

### 16. Add Pictures
Incorporate professional photos throughout the site (hero, about, services, etc.). Pending client photo assets.

### 17. Add Pricing
Display pricing information for sessions (initial evaluation, follow-ups, discovery call).

### 18. Add Reconnection Session Info
Add information about reconnection sessions as a service/offering on the site.

### 19. Convert Community Resources PDF to Web Page
Turn the community resources PDF into a dedicated page on the site for better SEO and user accessibility.

---

## Completed Items

| Item | Status | Notes |
|------|--------|-------|
| Social profiles in config/schema | Done | Facebook, Instagram, Yelp added |
| Person schema for Dr. Gendron | Done | On About page + JsonLd.astro |
| About page | Done | Full story, credentials, ProfilePage schema |
| Areas Served page | Done | GBP linking, service area coverage |
| FAQ section with CTA links | Done | 10 FAQs, "Book a Discovery Call" button |
| Client-confirmed service descriptions | Done | 8 services in site.ts |
| Preview page for SEO content | Done | /preview/ with alternative homepage copy |
| Backlink opportunities research | Done | BACKLINK-OPPORTUNITIES.md |
| Local marketing plan | Done | LOCAL-MARKETING.md |
| GBP sync checklist | Done | GBP-CHECKLIST.md |
| Client checklist | Done | CLIENT-CHECKLIST.md |

---

*Last updated: February 2026*
