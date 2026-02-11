# JHub Blog Writing Guidelines

## Purpose
This guide ensures all JHub blog content maintains legal compliance, editorial quality, and reader trust while promoting our affiliate relationships transparently.

---

## 1. Key Principles

### ✅ Do This
- **Be transparent** about affiliate relationships from the start
- **Cite public information** only (official websites, published articles, publicly available data)
- **Use your own words** when summarizing platforms or opportunities
- **Link generously** back to official sources and your referral pages
- **Disclose limitations** (e.g., "This is based on public information, not internal platform data")

### ❌ Don't Do This
- **Share confidential information** from your contractor agreement
- **Post dashboard screenshots** or internal platform images
- **Name specific clients** or mention proprietary project details
- **Claim unauthorized endorsements** (e.g., "Mercor recommends this" without proof)
- **Copy platform descriptions verbatim** (summarize instead)
- **Hide referral links** or their affiliations

---

## 2. Legal Compliance Checklist

Before publishing any post, verify:

- [ ] **Affiliate disclosure:** Clear statement at top or in referral box
- [ ] **Independence disclaimer:** Not affiliated with platforms mentioned
- [ ] **Source attribution:** All claims backed by public data
- [ ] **No confidential info:** No dashboard screenshots, client names, or project details
- [ ] **Proper referral links:** Using your unique tracking links
- [ ] **Fair use compliance:** If using screenshots, only public-facing pages
- [ ] **Trademark notice:** No unauthorized use of company logos
- [ ] **User responsibility:** Readers understand they're responsible for their choices

**Template Language:**
```
📋 Transparency Note: JHub is compensated through referral commissions when you 
sign up for platforms via our links. This analysis is based on publicly available 
information and general user experiences.
```

---

## 3. Content Structure Template

### Blog Post Metadata (in data.js)
```javascript
{
    id: 8,
    title: "Your Post Title (50-60 chars)",
    date: "February 11, 2026",
    excerpt: "Brief preview (max 160 chars)", 
    image: "https://image-url.jpg",  // 16:9 aspect ratio
    author: "Your Name or JHub Editorial",
    category: "Career Tips",  // Match content pillar
    featured: false,  // Highlight on homepage?
    readTime: "5 min read"
}
```

### Article Structure
```
1. Headline
   └─ Subheading (optional)

2. Meta Information
   └─ Date | Author | Read Time | Category

3. Transparency Disclosure
   └─ "This post contains referral links..."

4. Introduction (1-2 paragraphs)
   └─ Hook + Overview

5. Main Content (H2 sections)
   └─ Pros/Cons boxes (if comparing)
   └─ Platform cards (if featuring platforms)
   └─ Lists and examples

6. Platform Referral Box
   └─ CTA button with unique link

7. Conclusion (1 paragraph)
   └─ Summary + Next steps

8. Author Bio
   └─ Credentials + Disclaimer
```

---

## 4. Writing Best Practices by Topic

### Blog Topic: "Getting Started with Annotation"

**✅ Good Approach:**
> "AI annotation platforms like Mercor invite vetted professionals to label training data for AI models. You'll work on tasks like image classification, text evaluation, or video analysis—helping to improve how AI systems understand the world."

**❌ Bad Approach:**
> "Mercor gets you hired directly to OpenAI for $500/day guaranteed. I made $30K in my first month."
(Misleading, confidentiality violation, unverifiable)

---

### Blog Topic: "Comparing Platforms"

**✅ Good Approach:**
```markdown
## Mercor vs. Upwork

**Mercor:**
- Founded: 2020 | Focus: AI professionals
- Average Pay: $30-$150/hour (public range)
- Vetting: Rigorous (interviews required)
- Payment: Weekly via Stripe

**Upwork:**
- Founded: 2015 | Focus: General freelancing
- Average Pay: $5-$50/hour for annotation
- Vetting: Minimal
- Payment: After escrow + 20% commission

*Source: Public platform information, user reviews*
```

**❌ Bad Approach:**
> "I saw someone on Mercor earning $200/hour this week. You can too if you click my link!"
(Unverifiable, implies guarantee, misleading)

---

### Blog Topic: "Company Spotlight"

**✅ Good Approach:**
```markdown
## "What It's Like Working with Mercor"

Via the Mercor platform, I've worked on **[General Skill Category]** projects. 
The experience has taught me **[Skill/Insight]**, which reinforces my belief 
that annotation is a viable career path.

*This is my personal experience and may not represent all users.*
```

**❌ Bad Approach:**
> "At Mercor, we work on secret government AI projects targeting terrorists. 
> I can't say more, but trust me..."
(Confidentiality breach + unverifiable)

---

## 5. Topics to Avoid

❌ **Confidential Information:**
- Client names or project codenames
- Internal team members or managers
- Proprietary algorithms or evaluation rubrics
- Screenshots of dashboards or project details
- Salary negotiations or specific payment amounts

❌ **Unverifiable Claims:**
- "Guaranteed to earn $X/hour"
- "This platform is better/worse" (without data)
- "Everyone says..." (unsourced)
- Personal anecdotes presented as general truth

❌ **Trademark Violations:**
- Using official company logos without permission
- Implying endorsement you don't have
- Claiming affiliation beyond referral partnership

❌ **Advice Beyond Your Role:**
- Tax/legal guidance (suggest consulting professionals)
- Career counseling without disclaimer
- Financial guarantees (all income is variable)

---

## 6. Referral Link Strategy

### Mercor Referral Link Format
```
https://mercor.com/?ref=yourname
(or the link provided in your Mercor dashboard)
```

### Link Attribution
Place referral CTAs in:
1. **Referral Box** (highlighted section mid-article) ← Primary
2. **Author bio** (at bottom) ← Secondary
3. **Conclusion** (short mention) ← Tertiary

**Example CTA Box:**
```markdown
### Ready to Get Started?
Browse opportunities on Mercor's platform using our referral link:
[Browse Mercor Opportunities](https://mercor.com/?ref=jhub)

*By signing up via this link, you support JHub at no cost. We earn a 
commission if you're hired.*
```

---

## 7. SEO Best Practices

### Title Optimization (50–60 characters)
- Include primary keyword
- Front-load important words
- Make it compelling

**Examples:**
- ✅ "How to Land Your First Annotation Job" (47 chars)
- ✅ "Annotation Platforms Compared: Mercor vs Upwork" (47 chars)
- ❌ "Some Thoughts About Work" (too vague)

### Excerpt/Meta Description (150–160 characters)
- Summary of post value
- Include target keyword naturally
- Call-to-action implied

**Example:**
> "Explore the differences between specialized AI annotation platforms and traditional freelance marketplaces. Learn which is right for your career."

### Headers (H2, H3)
- Use keywords naturally
- One H1 (title) per post
- Logically nested

---

## 8. Image Guidelines

### Technical Requirements
- **Format:** JPG or PNG
- **Aspect Ratio:** 16:9 (e.g., 1600×900)
- **File Size:** < 500KB (optimize for web)
- **Alt Text:** Descriptive (e.g., "A person working at a desk with annotation software on screen")

### Licensed Images Only
- Use **Unsplash** (free, CC0)
- Use **Pexels** (free, CC0)
- Use **Pixabay** (free, CC0)
- **Never** use copyrighted images without permission

### Example Alt Text
```html
<img src="image.jpg" alt="Data annotator reviewing images on computer screen" />
```

---

## 9. Editing & Quality Checklist

Before hitting publish:

**Content Quality:**
- [ ] Headline is compelling and keyword-optimized
- [ ] Intro hooks the reader
- [ ] Main content is well-organized with clear headers
- [ ] Conclusion summarizes key takeaways
- [ ] All claims are cited or attributed

**Legal Compliance:**
- [ ] Affiliate disclosure is prominent
- [ ] Independence disclaimer included
- [ ] No confidential information disclosed
- [ ] No unverifiable claims
- [ ] No trademarks or logos misused
- [ ] Author bio with credentials

**Formatting:**
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Bullet points for lists
- [ ] Code blocks for examples
- [ ] Links to external sources
- [ ] Images with alt text
- [ ] Referral CTA box included

**Writing Style:**
- [ ] Professional yet conversational tone
- [ ] No jargon (or explained if necessary)
- [ ] Active voice preferred
- [ ] Short paragraphs (2-3 sentences max)
- [ ] Proofread for typos/grammar

**SEO:**
- [ ] Keyword appears in title, headers, first paragraph
- [ ] Meta description is compelling (160 chars max)
- [ ] Internal links to related posts/pages
- [ ] External links to authoritative sources
- [ ] Image alt text includes relevant keywords

---

## 10. Publishing Workflow

### Step 1: Pitch Your Idea
- [ ] Email: contact@jhub.com with topic + outline
- [ ] Wait for editorial approval

### Step 2: Write Draft
- [ ] Follow template above
- [ ] Use Markdown or plain text
- [ ] Include metadata (title, date, author, etc.)

### Step 3: Self-Review
- [ ] Run through checklist (Section 9)
- [ ] Check all links work
- [ ] Verify image quality

### Step 4: Submit for Edit
- [ ] Email draft to contact@jhub.com
- [ ] Include metadata and image URL
- [ ] Wait for feedback (3-5 business days)

### Step 5: Publish
- [ ] Editorial team adds to blogData in data.js
- [ ] Post appears on JHub homepage
- [ ] Promotion on social media

---

## 11. Post-Publish Maintenance

### Monthly Review
- [ ] Update outdated information (pay rates, platform features)
- [ ] Fix broken links
- [ ] Check SEO ranking

### Quarterly Update
- [ ] Refresh statistics with new data
- [ ] Add more platforms if relevant
- [ ] Re-promote on social media if still relevant

### Evergreen Content
- Posts about "fundamentals" (e.g., "How to Annotate Images") should be reviewed annually
- Posts about "trends" (e.g., "2026 Annotation Outlook") need quarterly updates

---

## 12. Examples: Good vs. Bad

### Example 1: Referral Disclosure

**✅ GOOD:**
> "📋 Transparency Note: JHub is compensated through referral commissions when you sign up for platforms via our links. If you join Mercor using the link below, we earn a commission at no extra cost to you. This supports our platform's development."

**❌ BAD:**
> "Click here to join Mercor!" 
(No disclosure of affiliate relationship)

---

### Example 2: Platform Comparison

**✅ GOOD:**
> "Based on publicly available information and user reviews, Mercor typically offers higher pay ($30–$150/hour) compared to traditional platforms ($5–$30/hour), but requires a rigorous vetting process."

**❌ BAD:**
> "Mercor pays way better than Upwork—everyone knows this. I made $10K last month." 
(Unverifiable, no source, misleading claim)

---

### Example 3: Confidentiality Respect

**✅ GOOD:**
> "While working on specialized AI projects, I've learned the importance of detailed observation and documentation—skills that translate across industries."

**❌ BAD:**
> "I was working on a secret facial recognition project for OpenAI. The rubric required labeling 10,000 faces per day..." 
(Confidentiality violation, unverifiable claim)

---

## 13. Questions? 

For questions about blog guidelines, editorial standards, or legal compliance:

**Email:** contact@jhub.com  
**Subject:** "Blog Guidelines Question"

Include:
- Your specific question or topic
- The section of this guide you're referencing
- Any draft content you'd like reviewed

---

**Last Updated:** February 11, 2026  
**Version:** 1.0
