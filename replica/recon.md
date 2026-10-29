# Recon map: babakanasori.com / LMSL Anasori Research Lab (web)

Scope: Academic lab website — public marketing/content site for Layered Materials & Structures Lab (LMSL), Purdue. Core slice: lab identity + research themes + people directories + publications archive + facilities inventory + news + outreach (art & career / gallery). Not cloning Wix CMS admin, site member accounts, or third-party competition platforms (NanoArtography.org, MRS YouTube).
For: Clean-room rebuild of a research-lab website information architecture and UX patterns (features/flows only; original copy, photos of people, logos, and publication text stay owned by the lab / publishers).
Date: 2026-10-29 (Asia/Qyzylorda)

## Sources

| # | source | URL | notes |
| --- | --- | --- | --- |
| 1 | marketing / home | https://www.babakanasori.com/ | Lab brand, PI intro, homepage highlights |
| 2 | research themes | https://www.babakanasori.com/research | Grants, MXene fundamentals, applications |
| 3 | members directory | https://www.babakanasori.com/members | PI bio, role cohorts, emails as `name[at]domain` |
| 4 | publications list | https://www.babakanasori.com/publications | Year-indexed bibliography with DOI links |
| 5 | lab facilities | https://www.babakanasori.com/facilities | Equipment catalog + INDI shared instruments |
| 6 | news feed | https://www.babakanasori.com/news | Chronological lab news (2026, 2024, …) |
| 7 | news archive | https://www.babakanasori.com/news2018andbefore | Older news (sitemap) |
| 8 | art & career / teaching | https://www.babakanasori.com/artandcareer | Courses, NanoArtography, SciVid, MRS outreach |
| 9 | creative & critical (legacy) | https://www.babakanasori.com/creative-and-critical | Overlaps art/career; older education/outreach page |
| 10 | cover / SEM gallery | https://www.babakanasori.com/gallery | Covers + awarded SEM/art images |
| 11 | alumni directory | https://www.babakanasori.com/alumni | Grad/postdoc/undergrad alumni + group photos |
| 12 | honors & awards | https://www.babakanasori.com/honors-and-awards | PI + poster/presentation awards |
| 13 | sitemap | https://www.babakanasori.com/pages-sitemap.xml | Complete public route list (Wix) |
| 14 | robots | https://www.babakanasori.com/robots.txt | Public crawl allowed; lightbox query blocked |
| 15 | platform fingerprint | HTML generator meta | Wix.com Website Builder / Thunderbolt viewer |

Duplicate / low-value route (skip clone): `/copy-of-news` (sitemap leftover).

## Core loop

Visitor lands on Home → browses Research or News → drills into Members / Publications / Facilities → optionally Gallery or Art & Career; PI contact via obfuscated email. No account, no checkout — content discovery for recruiting, collaborators, and public outreach.

## Screens

| ID | screen | route / how to reach | purpose | key components | states seen |
| --- | --- | --- | --- | --- | --- |
| S01 | Home | `/` | Brand + PI + lab intro / highlights | Top nav, hero/brand block, PI card, footer © | filled desktop/mobile; Wix SSR HTML |
| S02 | Research | `/research` | Themes, sponsors, MXene primer, paper links | Section headings, grant blocks, external DOI/PDF links | filled |
| S03 | Members | `/members` | Team directory by role | Role sections, person name/title/edu/email, photo cards (typical) | filled large cohort; no empty state observed |
| S04 | Publications | `/publications` | Year-filtered bibliography | Year tabs/anchors, numbered entries, DOI links, hero image credit | filled many years; long scroll |
| S05 | Facilities | `/facilities` | Equipment inventory | Category headings, instrument name + specs lists, INDI callouts | filled; some incomplete spec fields on original |
| S06 | News | `/news` | Lab announcements | Year groups, dated cards, images | filled 2026+2024… |
| S07 | News archive | `/news2018andbefore` | Older news | Same pattern as S06 | filled (archived) |
| S08 | Art & Career | `/artandcareer` | Teaching + outreach competitions | Course list, competition sections, external links, music examples | filled |
| S09 | Creative & Critical | `/creative-and-critical` | Legacy outreach/education | Articles, competition recaps, 3D MXene embeds | filled; overlaps S08 |
| S10 | Gallery | `/gallery` | Cover art + SEM posters | Image gallery grids, captions/awards | filled |
| S11 | Alumni | `/alumni` | Past members + group photos | Role lists, photo albums by semester | filled |
| S12 | Honors & Awards | `/honors-and-awards` | Awards timeline | Year/title/description list | filled |
| S13 | External NanoArtography | nanoartography.org (linked) | Competition site | Out of product boundary | linked only |
| S14 | External MRS video | MRS YouTube (linked) | SciVid winners | Out of product boundary | linked only |

Nav labels observed (primary): Home, Research, Members, Publications, Lab Facilities, News, Art & Career, Cover Gallery; Alumni reachable as related people page.

## Flows

```
F01 Learn who the lab is
    S01 -> S03 (or S12)
    happy path clicks: 1–2
    edge: deep PI bio only on Members; Home may only tease

F02 Understand research focus / sponsors
    S01 -> S02 -> external paper DOI/PDF
    happy path clicks: 2–3
    edge: broken/aged PDF link; mobile long scroll

F03 Find a person / contact PI
    S01 -> S03 -> email pattern banasori[at]purdue.edu
    happy path clicks: 2
    edge: no mailto (anti-spam obfuscation); alumni may still appear under Members until moved

F04 Look up papers by year
    S01 -> S04 -> year anchor -> DOI
    happy path clicks: 2–3
    edge: very long page; years without entries; image credit on hero

F05 Check equipment / characterization access
    S01 -> S05
    happy path clicks: 1
    edge: some blank specs; shared INDI instruments vs in-lab ownership

F06 Read recent lab news
    S01 -> S06 (-> S07 archive)
    happy path clicks: 1–2
    edge: year gaps; /copy-of-news duplicate

F07 Explore science-as-art / teaching outreach
    S01 -> S08 or S10 (-> S13/S14 external)
    happy path clicks: 1–3
    edge: S09 duplicates S08; external sites not owned

F08 Browse alumni / group history
    S01 -> S11
    happy path clicks: 1
    edge: long undergrad list; photo albums heavy images
```

## Components

| component | variants | states | used on |
| --- | --- | --- | --- |
| Global top nav | desktop horizontal, mobile collapse (Wix) | default, active route, hover | all |
| Brand lockup | LMSL / Anasori Research Lab | default | header/footer |
| Page hero / title band | with image watermark / cover art | filled | most pages |
| Section heading | H1/H2 academic | default | all content pages |
| Person profile block | PI featured, postdoc, grad, visitor, undergrad | filled (photo+bio vs name+email only) | S03, S11 |
| Grant / research theme card | long-form text + bullet refs | filled | S02 |
| Publication entry | index#, authors, title, venue, year, DOI | filled | S04 |
| Year filter / anchor nav | year chips or in-page links | selected/unselected | S04, S06 |
| News item | title, date, body, optional image | filled | S06, S07 |
| Facility instrument block | name + spec list | filled, incomplete specs | S05 |
| Image gallery tile | cover, SEM poster | caption + award line | S10, S11 photos |
| External text link | DOI, PDF, YouTube, NanoArtography | default, visited | S02, S04, S08 |
| Footer / copyright | © Babak Anasori | default | all |
| Obfuscated email | `name[at]domain` | static text (no mailto) | S03 |
| Background atmosphere | beige/tan + faint structure watermark (site style) | decorative | site-wide |

## Inferred data model

```
LabSite  name, institution, schools[], tagline, copyright_holder
         evidence: S01, footer
         confidence: high

Person  id, full_name, role (pi|postdoc|grad|undergrad|visitor|ra|alumni),
        titles[], education[], research_interests[], email_obfuscated,
        photo_asset_id?, sort_order, alumni_year?, alumni_degree?
        evidence: S03, S11
        confidence: high

ResearchTheme  id, title, sponsor_name?, grant_code?, body_md, related_paper_ids[]
               evidence: S02
               confidence: high

Publication  id, year, index_number, authors[], title, venue, doi_url?, pdf_url?,
             sort_within_year
             evidence: S04
             confidence: high

FacilityItem  id, category, name, vendor?, specs{k:v}, location_note?, shared_facility?
              evidence: S05
              confidence: high (some specs empty = nullable fields)

NewsPost  id, year, published_on, title, body_md, image_asset_ids[]
          evidence: S06, S07
          confidence: high

OutreachProgram  id, name, description, external_url?, related_news_ids[]
                 evidence: S08, S09
                 confidence: high

GalleryItem  id, kind (cover|sem_poster), title, award_line?, creators[], year?,
             image_asset_id
             evidence: S10
             confidence: high

Course  code, title, level (ug|grad)
        evidence: S08
        confidence: high

Award  id, year, title, org, description, person_id?
       evidence: S12
       confidence: high

MediaAsset  id, url, alt, credit?, usage (hero|gallery|news|portrait)
            evidence: Wix static.wixstatic.com media URLs across pages
            confidence: high

ExternalLink  label, url, context_screen
              evidence: DOI/PDF/YouTube/NanoArtography
              confidence: high
```

Relationships: LabSite 1-n Person, ResearchTheme, Publication, FacilityItem, NewsPost, GalleryItem, OutreachProgram, Award, Course. Person 0-n Award. GalleryItem n-n Person (creators). Publication n-n Person (authors — often external coauthors; store as string list unless matched).

## Feature matrix

See `features.csv`. Must: 14, should: 8, could: 5, skip: 6.

## Out of scope (cannot or should not be cloned)

- Original lab copy, people photos, SEM/cover art, logos, and ©Babak Anasori branding assets (licensed/owned content)
- Full publication full-texts behind publisher paywalls (link out via DOI only)
- Wix editor, site-members login, analytics, and hosting stack
- NanoArtography.org and MRS YouTube competition platforms (partner/external networks)
- Real Purdue email delivery / HR / VIP program backends
- Duplicate leftover page `/copy-of-news`
- Private lab data, unpublished results, account-gated anything (none public)

## Size

Screens ~12 in-product (+2 external), flows 8, entities ~12. Hard parts: long Publications year IA + search; Members/Alumni scale with photos; Facilities structured specs CMS; Gallery media performance; content migration without copying owned prose/images. Size: **M** (solid academic site IA + CMS-shaped content model; not an XL product).
