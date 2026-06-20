# Personal/Portfolio Site Research for Colton Fouch

> **Prepared:** June 19, 2026  
> **Context:** Redesign research for coltonfouch.com — personal site for a Platform Manager / IT infrastructure leader at Patagonia (7+ years, 2,000+ endpoints, MDM architecture, zero-touch deployments, live production infrastructure).

---

## Table of Contents

1. [Current Site Audit](#1-current-site-audit)
2. [Audience Analysis](#2-audience-analysis)
3. [Content Strategy](#3-content-strategy)
4. [Design Patterns That Work](#4-design-patterns-that-work)
5. [Anti-Patterns to Avoid](#5-anti-patterns-to-avoid)
6. [Real Examples Analyzed](#6-real-examples-analyzed)
7. [Framework & Structure Recommendation](#7-framework--structure-recommendation)
8. [Actionable Redesign Recommendations](#8-actionable-redesign-recommendations)
9. [Sources & References](#9-sources--references)

---

## 1. Current Site Audit

The current coltonfouch.com is a **single-page site** with a **terminal/CRT retro aesthetic** (scanlines, dot grid, monospace feel, density toggle). It has these sections:

| Section | Content | Assessment |
|---------|---------|------------|
| Hero | Photo, name, title, one-liner, CTA buttons | ✅ Good first impression |
| About | "The Work & The Rest" — mission statement, tech stack overview | ✅ Strong voice, could be tighter |
| Experience | Career timeline — 4 roles, company, dates, tech tags | ⚠️ Chronological but thin on impact |
| Projects | 5 key projects with descriptions + tech tags | ✅ Best section — shows real work |
| Skills | Tech stack grid by category (MDM, Platforms, Infra, Cloud, etc.) | ✅ Comprehensive |
| Certifications | 4 certs listed | ✅ Clean |
| Blog | Single "Hello World" post | ❌ Placeholder — needs content strategy |
| Contact | Email + LinkedIn | ✅ Functional, minimal |
| Tweaks | Accent color, dot grid, scanlines, density toggles | ⚠️ Novel but potentially distracting |

**Strengths:** The CRT/terminal aesthetic establishes a distinct visual identity. The projects section demonstrates real infrastructure work with specific technologies. The career path (Helpdesk → Platform Manager) tells a clear growth story.

**Weaknesses:**
- The retro aesthetic may not signal "platform engineering leader" to non-technical visitors (recruiters, executives)
- Scanlines/dot grid read as "junior dev portfolio" trope rather than "IT infrastructure leader"
- Project descriptions lack **measurable business impact** (metrics, scale, outcomes)
- No case studies with problem → approach → result structure
- Blog is an empty shell
- No thought leadership content, speaking engagements, or community involvement
- Single-page limits SEO and discoverability
- No testimonials or social proof

---

## 2. Audience Analysis

### Who visits a Platform Manager's site?

| Audience | What They Want | Priority |
|----------|---------------|----------|
| **Recruiters / Hiring Managers** | Quick scan of impact, credibility, career trajectory. Can this person lead at scale? | 🔴 Highest |
| **Peers / Other IT leaders** | Technical depth, architecture decisions, tooling opinions. Is this person worth following? | 🟡 Medium |
| **Conference / Event Organizers** | Speaking topics, thought leadership, presentation history | 🟡 Medium |
| **Vendors / Partners** | Technical environment, integration depth, decision-making authority | 🟢 Lower |
| **Future direct reports** | Leadership style, team culture, technical mentorship | 🟢 Lower |

### Key Insight

Unlike a software engineer portfolio (where visitors want to see code, side projects, and live demos), a Platform Manager's site is evaluated on:

- **Authority & Trust** — Can this person own enterprise-scale infrastructure?
- **Impact & Scale** — Numbers matter: endpoints, users, uptime, time saved
- **Decision-Making** — Why did they choose Jamf over Intune? What trade-offs?
- **Communication** — Can they explain complex infrastructure to non-technical stakeholders?
- **Career Trajectory** — Clear growth from hands-on to strategic leadership

### What NOT to do

Per the sysadmin Reddit community consensus: "Make some pretty diagrams, talk about the challenges, hurdles, design decisions and technical implementation of the project(s)." — **don't** treat it like a code portfolio. IT infrastructure work doesn't translate well to GitHub repos and live demos. Case studies, architecture diagrams, and impact metrics are the right medium.

---

## 3. Content Strategy

### What sections matter most for this role?

#### Tier 1: Must Have

1. **Hero with Value Proposition** — Name, title, company, one powerful sentence that captures *what you do and why it matters*. Examples:
   - ✅ "I architect and scale device management solutions at Patagonia" (current — good)
   - Better: "I run the infrastructure that keeps 2,000+ Patagonia employees working — from zero-touch deployments to broadcast-grade live production."

2. **Impact Metrics Dashboard** — A visual summary of scale and results:
   - 2,000+ endpoints managed
   - Deployment time: hours → <20 minutes
   - 7+ years at Patagonia
   - Jamf Pro + Intune + SCCM multi-platform
   - Platform SSO eliminating legacy auth

3. **Case Studies (3-5)** — The most critical content type. Structure each as:
   - **Problem** — What was broken, slow, risky, or missing?
   - **Approach** — What strategy did you choose and WHY? (This is where you differentiate — the architecture decision is the content)
   - **Implementation** — Key technical details, stack used, obstacles overcome
   - **Results** — Quantified impact: time saved, endpoints covered, security posture improved, cost reduced
   - **Lessons** — What would you do differently? What did you learn?

   Per ITU Online's IT portfolio guide: "Use metrics: 'Script reduced setup time from 20 minutes to 3 minutes,' 'Documentation cut repeated questions by 30%.'"

4. **Career Timeline** — Keep but enhance with impact bullets per role (not just duties)

5. **Technical Stack** — Organized by domain (current structure is good)

#### Tier 2: Should Have

6. **Architecture Decision Records (Selected)** — 1-2 key decisions explained. This is unique content that almost no one does. Example: "Why we chose Jamf Pro + Intune hybrid over Intune-only for macOS management." This positions you as a strategic thinker, not just an operator.

7. **Speaking / Community** — Conference talks, internal presentations, Jamf Nation contributions, blog posts

8. **Testimonials / Endorsements** — Quotes from managers, peers, or internal stakeholders

9. **About / Philosophy** — Your approach to platform engineering. What do you believe about infrastructure? About automation? About the relationship between IT and the business?

#### Tier 3: Nice to Have

10. **Blog / Writing** — But only if you'll maintain it. An empty blog is worse than no blog. Topics could include:
    - MDM best practices
    - Zero-touch deployment patterns
    - Platform SSO implementation stories
    - IT leadership lessons

11. **Reading List / Influences** — Books, blogs, people you follow

### Content hierarchy (what visitors see first → last)

```
Hero (value prop + impact stats)
  ↓
Case Studies (the core proof of capability)
  ↓
Career Timeline (how you got here)
  ↓
Technical Stack (what you work with)
  ↓
Writing / Speaking (thought leadership)
  ↓
About / Philosophy
  ↓
Contact
```

This flips the current structure (which puts experience before projects). Per the dev.to portfolio review of 40+ sites: **"Bring out your skills and projects ASAP. Visitors typically come to see skills and projects, not an extensive 'about me.'"**

---

## 4. Design Patterns That Work

### The "Platform Engineering Leader" Aesthetic

After analyzing ~40 portfolios across developers, product managers, CEOs, and platform engineers, clear patterns emerge for the IT infrastructure leader persona:

#### Pattern A: Clean & Authoritative (Recommended)

**Best for:** Platform Managers, IT Directors, Engineering Leaders, CTOs

Characteristics:
- **Dark or light minimal backgrounds** — soft black (`#1C1C1C`), off-white (`#F4F4F4`), or dark navy (`#0F172A`)
- **Strong typography, not code aesthetics** — Inter, SF Pro, or DM Sans for headings; system fonts for body
- **Generous whitespace** — lets content breathe, signals confidence
- **1-2 accent colors max** — muted blue (`#4A90E2`), deep teal (`#2A9D8F`), or muted gold (`#BFA181`)
- **Professional photography** — hero image showing you (not an avatar/illustration)
- **Subtle motion, not flashy animations** — fade-in on scroll, not terminal typing effects

Examples from research:
- **Yuriy Tkach** (Systems Architect) — Code-inspired visual style with strong contrast, but functional layout. Memorable without being gimmicky.
- **Sahana Carlsen** (Engineering Manager) — Clean, to-the-point, polished layout. Personality-forward with professional photography and icons. First-person writing.
- **Nicolas Backal** (Director of Product Design, Okta) — Sleek, modern, visually balanced. Professional and authoritative.
- **Artem Zaitsev** (Fractional CTO) — Single-page with strong typography, compact spacing, modular proof blocks. 99% performance, 100% SEO. Built in 2 days for €1,250.
- **Shane Kinkennon** (Leadership Advisor) — Clean, bold colors, professional photography showing him teaching. First-person, confident tone.

#### Pattern B: Tech-Forward

**Best for:** DevOps engineers, SRE leads, Platform Engineers closer to code

Characteristics:
- Dark backgrounds with neon accents (cyan `#22D3EE`, green)
- Monospace elements for section headers or code blocks
- Architecture diagrams or infrastructure visualizations

Example: **Shubhanshu Singh** (Platform Engineer & Architect) — Terminal-style intro with `$ whoami` style, but transitions to clean resume-style content below. Good balance.

#### Pattern C: The Terminal Aesthetic (Anti-Pattern for Leaders)

**Best for:** Junior developers, side projects, creative portfolios

The current coltonfouch.com uses this pattern. While it has personality, it's the most common portfolio trope among junior developers. For a Platform Manager at Patagonia, it:
- Undersells your seniority — reads as "trying to prove I'm technical" rather than "confident in my authority"
- Creates accessibility issues — scanlines reduce readability
- May confuse non-technical visitors (recruiters, exec-level hiring managers)
- Is difficult to make responsive or fast-loading

### Color Palette Recommendation

The "Elegant & High-End" palette from webportfolios.dev's research is the strongest fit:

| Role | Color | Hex |
|------|-------|-----|
| Background | Soft Black | `#1C1C1C` |
| Primary | Muted Gold | `#BFA181` |
| Secondary | Warm Beige | `#D4C5B0` |
| Accent | Light Gray | `#F4F4F4` |

Alternative: "Tech & Futuristic" for a more technical feel:
- Background: `#0F172A` (Dark Navy)
- Primary: `#22D3EE` (Neon Cyan)
- Secondary: `#64748B` (Cool Gray)

### Typography

- **Headings:** Inter or DM Sans (modern, clean, excellent readability)
- **Body:** System font stack or Inter
- **Code/technical labels:** JetBrains Mono or SF Mono (sparingly, in tags/labels only)
- **Font size:** ≥16px body text for readability
- **Line width:** 600-800px for comfortable reading

### Photography

Per the Site Builder Report's analysis of 35 personal websites: **"Use large photos of yourself, ideally showing you in action."** A professional headshot or contextual photo (you at work, speaking, or in your element) builds instant credibility.

---

## 5. Anti-Patterns to Avoid

### From Portfolio Research

Based on the dev.to review of 40+ developer portfolios, the Reddit thread about 3 mistakes even in 2025, and cross-referenced with IT leader expectations:

| Anti-Pattern | Why It Hurts | Severity |
|-------------|-------------|----------|
| **Terminal/CRT aesthetic as primary design** | Signals junior dev, not infrastructure leader. Used by thousands of entry-level portfolios. Creates accessibility issues. | 🔴 Critical |
| **Skill bars / percentage ratings** | "90% Jamf Pro" is meaningless. What's 100%? Per the dev.to analysis: "Percentages and skill-bars tell me nothing." | 🟡 Medium |
| **Third-person writing** | "Colton is a Platform Manager..." — creates distance. First-person builds trust. "I architect..." is stronger. | 🟡 Medium |
| **Over-animated interactions** | Flashing elements, typing effects, parallax scrolling. Distracts from content and hurts performance. | 🟡 Medium |
| **Empty blog / stale content** | A blog with one "Hello World" post signals abandonment. Either commit to publishing or remove it. | 🔴 Critical |
| **No measurable outcomes** | Listing technologies without impact is a resume, not a portfolio. "Managed 2,000 endpoints" is weaker than "Reduced provisioning from hours to <20 minutes across 2,000 endpoints." | 🔴 Critical |
| **Projects as tech-stack lists** | "Jamf Pro, ABM, macOS" doesn't tell me what problem you solved or what you learned. | 🔴 Critical |
| **Too many colors/fonts** | >3 colors or >2 fonts creates visual noise. "Stick to ≤ 3 main colors, ≤ 2 fonts" per the dev.to analysis. | 🟢 Lower |
| **Unnecessary clicks** | "Do not make me click unnecessarily. Every click must have a purpose." — dev.to review | 🟢 Lower |
| **Poor mobile experience** | Recruiters browse on phones. Test on real devices. | 🔴 Critical |
| **No contact info above the fold** | Email/social should be visible without scrolling — in header or fixed position. | 🟡 Medium |
| **Generic about section** | "I care about craft" is vague. What specifically do you believe about infrastructure? | 🟢 Lower |

### IT-Specific Anti-Patterns

- **Over-indexing on tools over outcomes** — You're not a tool operator, you're an infrastructure leader. Lead with what you achieved, not just what you used.
- **No architecture diagrams** — Infrastructure is inherently visual. A well-designed diagram of a zero-touch deployment flow or SSO architecture is worth 1,000 words.
- **Hiding the career story** — Your Helpdesk → Platform Manager trajectory is a superpower. Very few leaders have come up through the trenches. This builds credibility with both technical and non-technical audiences.

---

## 6. Real Examples Analyzed

### Directly Relevant (Platform Engineer / IT Leader)

#### 1. Shubhanshu Singh — Platform Engineer & Architect
- **URL:** shubhanshusingh.com
- **What works:** Terminal-style `$ whoami` intro section is contained to a hero area, then transitions to clean resume content. Massive depth in experience section — each role has architecture-level detail. Clear project ownership and scale metrics.
- **What doesn't:** Terminal intro still reads as junior despite his seniority. Information density is very high — could benefit from visual hierarchy.
- **Takeaway for Colton:** The contained-terminal pattern (terminal header → clean content) is a reasonable compromise if you love the terminal aesthetic. But pure terminal design undersells leadership.

#### 2. Sahana Carlsen — Engineering Manager
- **URL:** sahanacarlsen.com
- **What works:** Extremely clean, personality-forward. Professional photo, first-person writing, timeline-style career with clear progression visible at a glance. Icons add personality without clutter. Essays section demonstrates thought leadership. Clear calls-to-action for speaking, partnerships, and contact.
- **What doesn't:** Somewhat informal tone — works for her creator/influencer brand but may not fit a corporate IT leader.
- **Takeaway for Colton:** The balance of professionalism + personality is excellent. The timeline format for career progression is particularly effective. The essays section proves she thinks, not just executes.

#### 3. Yuriy Tkach — Systems Architect & Team Lead
- **URL:** yuriytkach.com
- **What works:** Code-inspired visual style (braces, code blocks as section headers) that reads as distinct and memorable. Clear positioning as "Software engineer, architect, mentor, and volunteer." Strong typography, good contrast. The code aesthetic works because it's architectural (he literally writes `about(me) {}` as a header), not a terminal simulation.
- **What doesn't:** Functional rather than polished — could use more visual refinement.
- **Takeaway for Colton:** Code-as-visual-motif can work for architects if done with restraint. The pattern of using structural elements (braces, function signatures) rather than simulating a terminal is more sophisticated.

#### 4. Artem Zaitsev — Fractional CTO
- **URL:** zaitsevartem.com
- **What works:** Single-page, strong typography, modular proof blocks. 99% performance, 100% SEO. Visitors can scan in seconds and understand value. CTAs placed in hero, services, and closing block — no dead ends. Built in 2 days.
- **What doesn't:** Very functional — prioritizes conversion over personality. May feel too sales-oriented for a personal portfolio.
- **Takeaway for Colton:** The "modular proof blocks" approach is ideal — visitors should be able to scan and understand your authority in seconds. The performance benchmarks are inspiring.

### Adjacent/Inspiring (Different Role, Strong Patterns)

#### 5. Nicolas Backal — Director of Product Design, Okta
- **URL:** nicolasbackal.com
- **What works:** Sleek, modern, visually balanced. Selected work section with clear role/context/impact per project. Selected writing with article excerpts. Selected talks — establishes authority across multiple channels. The "Product Cookbook" co-authored series demonstrates collaborative leadership.

#### 6. W. Jesse Wright — Product Manager / Design-Ops Leader
- **URL:** wjessewright.com
- **What works:** Clean, easy-to-read layout, clear project stories. Impressive client roster (Microsoft, Capital One, Oreo, etc.). Awards section provides external validation. Case studies with proper narrative structure.
- **Takeaway for Colton:** The "client roster" pattern could be adapted as "platforms managed" or "technologies mastered" for instant credibility scanning.

#### 7. Seth Godin — Author & Thought Leader
- **URL:** sethgodin.com
- **What works:** Ultra-minimal, distraction-free, tight typography. Single clear action: subscribe. Decades of work compressed into a clean, scannable archive.
- **Takeaway for Colton:** The ultimate example of "less is more." For a senior leader, restraint signals confidence.

---

## 7. Framework & Structure Recommendation

### Single-Page vs. Multi-Page

**Recommendation: Primarily single-page with dedicated case study pages.**

| Approach | Use For |
|----------|---------|
| **Single-page** | Hero, overview, career timeline, tech stack, contact — everything a visitor needs to decide "I want to talk to this person" |
| **Dedicated case study pages** | Each major project gets its own page with deep detail, diagrams, metrics. Linked from the single-page overview cards. |
| **Blog/essays section** | If you commit to writing — separate section with its own index |

**Why:** Single-page is excellent for conversion (recruiters scan once and decide). But case studies need depth that doesn't fit a single page. The hybrid approach (used by Sahana Carlsen, Nicolas Backal, W. Jesse Wright) gives you both.

### Page Structure (Recommended)

```
/
├── Hero
│   ├── Professional photo
│   ├── Name + Title + Company
│   ├── One-line value proposition
│   ├── Key impact metrics (3-4 big numbers)
│   └── Primary CTA (contact / view case studies)
│
├── Case Studies (overview cards, 3-5)
│   ├── Card: Zero-Touch Deployments
│   ├── Card: Platform SSO & Identity
│   ├── Card: Live Streaming Infrastructure
│   ├── Card: Patch Automation
│   └── Card: Content Caching Infra
│   (Each card → dedicated /projects/zero-touch/ page)
│
├── Career Timeline
│   └── 4 roles with impact bullets + tech tags
│
├── Technical Stack
│   └── Organized by domain (current structure is good)
│
├── Architecture Decisions (1-2 featured)
│   └── "Why hybrid Jamf+Intune" or similar
│
├── Speaking / Community
│   └── Talks, contributions, certifications
│
├── Writing (if committed)
│   └── Latest 2-3 posts + link to full blog
│
├── About / Philosophy
│   └── Your approach to platform engineering
│
└── Contact
    ├── Email
    ├── LinkedIn
    └── (Optional) Calendly for booking calls
```

### Navigation

- **Sticky header** with: Logo/Name | Case Studies | Experience | Writing | Contact
- **Fixed social/contact links** in footer or side — per the dev.to review: "Place email/social links in both header and footer."
- **Smooth scroll** for single-page navigation
- **Case study pages** have a "← Back" link to main page

---

## 8. Actionable Redesign Recommendations

### Priority 1: Critical Changes

1. **Move away from full CRT/terminal aesthetic.** Keep the dot-grid or scanlines as a subtle background texture layer if you love it, but the primary design should be clean, typography-forward, and authoritative. The current "Tweaks" panel signals that the terminal look is a gimmick, not the brand.

2. **Add impact metrics to your hero.** Right now the hero says "I architect and scale device management solutions." Add:
   - "2,000+ endpoints"
   - "Deployments: hours → <20 min"
   - "7+ years at Patagonia"
   - "Jamf Pro + Intune + SCCM"

3. **Transform projects into case studies.** Each project needs:
   - **Problem statement** (what was broken?)
   - **Architecture decision** (why this approach?)
   - **Implementation** (how did you build it?)
   - **Measured impact** (what improved, by how much?)
   - **Visual** (diagram, screenshot, or flow chart)

   Current example (Zero-Touch Deployments):
   > "Designed a fully automated deployment workflow for macOS using Jamf Setup Manager and Apple Business Manager. Reduced provisioning from hours to under 20 minutes."

   Better:
   > **Problem:** Manual device provisioning was taking IT staff 2-4 hours per Mac, creating a bottleneck for new hires and refreshes across 2,000+ endpoints.  
   > **Decision:** Chose Jamf Setup Manager + ABM over manual imaging because it enables true zero-touch, scales infinitely, and eliminates IT hands-on time entirely.  
   > **Implementation:** Built automated enrollment profiles, configuration policies, app deployment sequences, and compliance checks. Integrated with Entra ID for identity.  
   > **Result:** Provisioning dropped from hours to <20 minutes. IT staff reclaimed ~15 hours/week. New hires receive ready-to-work devices on Day 1 without IT intervention.  
   > **Stack:** Jamf Pro, Apple Business Manager, Entra ID, Bash scripting

4. **Add architecture diagrams.** Infrastructure work is visual by nature. A clean diagram showing:
   - Zero-touch deployment flow (ABM → Jamf → Device → User)
   - Platform SSO architecture (macOS → Secure Enclave → Entra ID)
   - Live streaming infrastructure topology

   These are far more impactful than text descriptions alone.

5. **Remove or populate the blog.** An empty blog with "Hello World" hurts credibility. Either:
   - Remove it entirely and redirect energy to case studies
   - Commit to 1 post/month minimum with real infrastructure content

### Priority 2: High-Impact Improvements

6. **Add a career narrative.** Your Helpdesk → Platform Manager path is rare and valuable. Add a brief "How I got here" section or weave it into the About section. Most platform managers came from software engineering. Your operations-to-architecture path is a differentiator.

7. **Add testimonials.** If you can get even 2-3 quotes from managers, peers, or internal stakeholders at Patagonia, it dramatically increases credibility. Per the portfolio research, social proof is consistently among the top conversion elements.

8. **Add speaking/community contributions.** If you've presented at Jamf Nation, internal all-hands, or any venue — list it. This signals leadership beyond your day job.

9. **Create 1-2 "Architecture Decision Records" (ADRs).** This is a unique content format almost no one uses on personal sites. A short page explaining WHY you made a key technical decision (e.g., "Why Jamf Pro + Intune hybrid over Intune-only") positions you as a strategic thinker. Format:
   - Title: The decision
   - Context: What was the situation?
   - Decision: What did we choose?
   - Alternatives considered: What else did we evaluate?
   - Consequences: What became easier? What became harder?

10. **Run Lighthouse audit.** Per the dev.to portfolio review, even great-looking sites often fail on performance, accessibility, or SEO. Run Google Lighthouse and fix any issues before launch.

### Priority 3: Nice to Have

11. **Consider a dedicated `/resume` PDF route** — One-click PDF download for recruiters who want to file you.

12. **Add Calendly or similar for booking calls** — Reduces friction for recruiters and conference organizers.

13. **Optimize social sharing** — Open Graph tags, Twitter cards, structured data (as done on zaitsevartem.com).

14. **Light/dark mode toggle** — Table stakes for modern personal sites, especially given your current dark-only aesthetic.

15. **Analytics** — Simple, privacy-respecting analytics (Plausible, Fathom) to understand who visits and what they read.

---

## 9. Sources & References

### Primary Research
- **Dev.to: "What I learned after reviewing over 40 developer portfolios — 9 tips"** — kethmars (DeveloperHabits). Comprehensive UX/content analysis of portfolio patterns. Key insights: define purpose, bring skills forward, minimal vs original, less animation, skill bars are meaningless, reduce clicks, make contact easy, run Lighthouse.
- **Site Builder Report: "15+ Software Engineer Portfolio Examples (2026)"** — Juhil Mendpara. Curated examples including Yuriy Tkach (Systems Architect), Sahana Carlsen (Engineering Manager), Jameson Nuss (PM/Engineer).
- **Site Builder Report: "20+ Product Manager Portfolio Examples (2026)"** — Juhil Mendpara. Includes W. Jesse Wright, Nicolas Backal, Thaisa Fernandes, and others. Product manager portfolio patterns are closest to the IT leader use case.
- **Site Builder Report: "35 Inspiring Personal Websites (2026)"** — Juhil Mendpara. Principles: communicate personality, be human, keep goal front and center, stay readable.
- **ITU Online: "How To Build An IT Portfolio That Gets You Hired"** — April 2026. Case study template: Problem → Approach → Tools → Implementation → Results. "An IT resume can tell a hiring manager what you claim to know. An IT portfolio shows what you can actually do."
- **SearchBloom: "The 21 Best Personal Branding Websites for CEOs"** — Scoring on design, storytelling, and conversion. Seth Godin's ultra-minimal site rated 15/15.
- **Webportfolios.dev: "Best Color Palettes for Developer Portfolios (2025)"** — Color psychology, curated palettes, common mistakes. "Users form an opinion about your site in just 50 milliseconds."
- **Vezert Portfolio: "Personal Branding Website for CTO"** — Case study of Artem Zaitsev's site. 99% performance, 100% SEO, single-page with modular proof blocks.
- **Reddit r/sysadmin** — Multiple threads on sysadmin portfolios, personal websites vs LinkedIn, and what to include. Consensus: diagrams, design decisions, case studies.

### Example Sites Analyzed
- coltonfouch.com (current site)
- shubhanshusingh.com (Platform Engineer & Architect)
- sahanacarlsen.com (Engineering Manager)
- yuriytkach.com (Systems Architect & Team Lead)
- zaitsevartem.com (Fractional CTO)
- nicolasbackal.com (Director of Product Design, Okta)
- wjessewright.com (Product Manager / Design-Ops Leader)
- sethgodin.com (Thought Leader)
- brittanychiang.com (Software Engineer — frequently cited as best-in-class)

### Relevant Frameworks
- GitHub: emmabostian/developer-portfolios (1,775+ portfolios, 24.4k stars)
- Architecture Decision Records (ADR) format — adr.github.io, Martin Fowler

---

## Summary: The One-Page Brief

**What coltonfouch.com should be:**
A clean, authoritative single-page site with deep case study pages that tells the story of an IT infrastructure leader who architects enterprise-scale device management at Patagonia. It should lead with measurable impact, explain architectural decisions, and signal strategic thinking — not tool operation.

**What to keep:** Career timeline, tech stack organization, projects (as expanded case studies), first-person voice, the dot-grid as subtle background texture (if desired).

**What to change:** Full CRT/terminal aesthetic → clean typography-forward design; thin project descriptions → detailed case studies with metrics and diagrams; empty blog → remove or commit; add testimonials, architecture decisions, and speaking/community content.

**North star:** When a recruiter lands on the site, they should know within 5 seconds: "This person runs enterprise infrastructure at Patagonia, they think strategically, and I want to talk to them."
