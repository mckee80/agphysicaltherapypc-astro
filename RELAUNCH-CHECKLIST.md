# AG Physical Therapy - Relaunch Checklist

Everything needed to go live on agphysicaltherapypc.com and sync Google Business Profile.

---

## Recommended Timeline

Phased rollout to protect SEO equity and avoid triggering GBP suspicion filters.

### Phase 1 — Website Cutover (Days 1-2)
Same domain, better content. Google sees an upgrade, not a disruption.

- [ ] **Day 1:** Prepare codebase — remove base paths, add CNAME file, build & test locally (Steps 2a-2b)
- [ ] **Day 1:** Update DNS at Google Domains — swap Wix IP for GitHub Pages (Step 2c)
- [ ] **Day 1:** Configure GitHub Pages custom domain, commit, push, verify (Steps 2e-2f)
- [ ] **Day 2:** Confirm site is live, all pages working, HTTPS enforced
- [ ] **Day 2:** Add site to Google Search Console, submit sitemap (Step 2g)
- [ ] **Day 2:** Unpublish Wix site (Step 2d)

### Phase 2 — GBP Name Change Only (Day 7)
Wait ~5 days after website launch, then make ONE change.

- [ ] Change GBP business name to "AG Physical Therapy" (Step 1)
- [ ] Touch **nothing else** in GBP
- [ ] Wait 5-7 days for approval and listing to stabilize

*Name changes are the highest-risk GBP edit. Isolating it avoids stacking risk.*

### Phase 3 — GBP Services Update (Day 14-15)
Once name change is approved and listing is stable.

- [ ] Update existing service names and descriptions to match website (Step 3)
- [ ] Add Reconnection Session as a new service (Step 4)
- [ ] Add pricing to GBP services (Step 4)
- [ ] Wait 3-5 days

*Service edits are moderate-risk. Batching them together is fine — Google expects service info updates.*

### Phase 4 — GBP Photos & Attributes (Days 20-21)
Low-risk changes that boost listing visibility.

- [ ] Upload photos — logo, cover, Dr. Gendron, treatment space (Step 5)
- [ ] Add service locations and service area (Step 6)
- [ ] Add modality attributes — home visits, telehealth (Step 7)
- [ ] Update appointment link and business hours (Step 7)

*Photos and attributes are low-risk. By now the listing is stable and trusted.*

### Phase 5 — Cleanup (Days 25-30)
- [ ] Cancel Wix subscription
- [ ] Verify all pages indexed in Search Console
- [ ] Check for crawl errors
- [ ] Monitor local pack rankings

---

## Detailed Steps

### Step 1. Change GBP Business Name
- [ ] Update Google Business Profile name to **"AG Physical Therapy"**
- [ ] Wait for Google to verify/approve the name change (can take a few days)

---

### Step 2. Replace Old Wix Site with New Site

The new Astro site is currently at `mckee80.github.io/agphysicaltherapypc-astro`. It needs to replace the Wix site at `agphysicaltherapypc.com`.

#### 2a. Prepare the Codebase for Custom Domain
- [ ] Update `astro.config.mjs`: change `site` to `https://www.agphysicaltherapypc.com` and remove the `base: '/agphysicaltherapypc-astro'` line
- [ ] Update navigation links in `src/config/site.ts` — remove `/agphysicaltherapypc-astro/` prefix from all 10 nav links (main + footer)
- [ ] Update hardcoded links in `src/pages/index.astro` (3 occurrences)
- [ ] Update hardcoded links in `src/layouts/BlogPostLayout.astro` (1 occurrence)
- [ ] Update hardcoded links in `src/components/layout/Header.astro` (2 occurrences — logo link)
- [ ] Update hardcoded links in `src/components/layout/Footer.astro` (1 occurrence)
- [ ] Update hardcoded links in `src/components/seo/SEOHead.astro` (2 occurrences)
- [ ] Update hardcoded links in `src/pages/about.astro` (1 occurrence)
- [ ] Update hardcoded links in `src/pages/blog/index.astro` (1 occurrence)
- [ ] Update hardcoded links in `src/pages/404.astro` (1 occurrence)
- [ ] Update image paths in blog posts (7 blog posts with `/agphysicaltherapypc-astro/images/` paths, 28 total occurrences)
- [ ] Run `npm run build` and verify no broken links
- [ ] Test locally with `npm run dev` — check all pages, navigation, images

**Total: 51 path references across 17 files need updating**

#### 2b. Add Custom Domain File
- [ ] Create `public/CNAME` file containing `www.agphysicaltherapypc.com`

#### 2c. Update DNS at Domain Registrar
**Domain is at Google Domains / Squarespace Domains** (nameservers: `ns-cloud-c*.googledomains.com`). Wix does NOT control the domain — just update DNS records.

- [ ] Log into [domains.google.com](https://domains.google.com) (or Squarespace Domains if migrated)
- [ ] Remove existing A record pointing to Wix (`23.236.62.147`)
- [ ] Remove any existing CNAME for `www` pointing to Wix
- [ ] Add A records for apex domain (`agphysicaltherapypc.com`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Add CNAME record: `www` -> `mckee80.github.io`
- [ ] DNS propagation typically takes 15 min - 1 hour (sometimes up to 48 hours)

#### 2d. Disconnect Wix
- [ ] Unpublish or delete the Wix site (it won't serve traffic once DNS points elsewhere, but clean up to avoid confusion)
- [ ] Cancel Wix subscription if no longer needed (domain is NOT at Wix, so canceling is safe)

#### 2e. Configure GitHub Pages Custom Domain
- [ ] Go to repo Settings > Pages > Custom domain
- [ ] Enter `www.agphysicaltherapypc.com`
- [ ] Check "Enforce HTTPS" (may need to wait for DNS propagation first)
- [ ] Verify the site loads at both `agphysicaltherapypc.com` and `www.agphysicaltherapypc.com`

#### 2f. Commit, Push, and Verify
- [ ] Commit all path changes and CNAME file
- [ ] Push to master (triggers deploy)
- [ ] Wait for GitHub Actions deploy to complete
- [ ] Test all pages on the live custom domain
- [ ] Verify images load correctly (especially blog post images)
- [ ] Verify booking links work
- [ ] Verify sitemap at `agphysicaltherapypc.com/sitemap-index.xml`

#### 2g. Post-Launch SEO
- [ ] Add site to Google Search Console (verify ownership)
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing of key pages (homepage, about, areas served, blog)
- [ ] Check for crawl errors after a few days

---

### Step 3. GBP: Update Service Names and Descriptions
- [ ] Update existing GBP services to match the 9 service names on the website:
  1. Urinary Incontinence & Pelvic Organ Prolapse
  2. Pelvic Pain
  3. Diastasis Recti & Postpartum Recovery
  4. Pregnancy & Birth Preparation
  5. Orthopedic Physical Therapy
  6. Women's Health
  7. Virtual Consultations
  8. Concierge Home Visits
  9. Reconnection Session: Acupuncture + Pelvic Floor Therapy
- [ ] Copy descriptions from site.ts to match website exactly

---

### Step 4. GBP: Add New Services and Pricing
- [ ] Add any services not yet in GBP (especially Reconnection Session)
- [ ] Add pricing to GBP services:
  - Home Visit: Initial $200, Follow-up $185
  - In-Clinic: Initial $150, Follow-up $125
  - Discovery Call: Free
  - Reconnection Session: $670 (3 sessions: $250, $210, $210)

---

### Step 5. GBP: Add Pictures
- [ ] Upload professional photos of Dr. Gendron
- [ ] Upload clinic/treatment space photos
- [ ] Upload logo as profile photo
- [ ] Add cover photo
- [ ] Add photos to relevant service categories

---

### Step 6. GBP: Add Service Locations
- [ ] Primary: San Diego County Midwives HQ — 16885 Via Del Campo Ct, Suite 110, San Diego, CA 92127
- [ ] Set service area for home visits: Vista, Carlsbad, Oceanside, San Marcos, Encinitas, Escondido, Rancho Bernardo, Rancho Santa Fe, Fallbrook, Solana Beach, Bonsall
- [ ] Note virtual availability in business description

---

### Step 7. GBP: Add Modality/Service Type Attributes
- [ ] Enable "Home visit" / "At-home service" attribute
- [ ] Enable "Telehealth" / "Online appointments" attribute
- [ ] Set appointment link to `https://agphysicaltherapypc.janeapp.com/`
- [ ] Update business hours:
  - In-clinic: Wed & Fri 9:00 AM - 1:00 PM
  - Note flexible scheduling for home visits (Tue-Fri)

---

### Why This Order

| Principle | Reasoning |
|-----------|-----------|
| Website first, GBP second | Let Google see the improved site before changing GBP |
| Name change isolated | Highest-risk GBP edit — don't combine with anything |
| Batch similar GBP edits | Services together, photos/attributes together |
| 3-7 day gaps between GBP phases | Gives Google time to process each batch without suspicion |
| Same domain throughout | No domain change = preserved SEO equity |

---

*Created: February 2026*
