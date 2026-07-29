// Central content registry for the site's dynamic route sections.
// Phase 3 will replace the placeholder `title`/`description` values with the
// real copy migrated from each corresponding .html file in the old repo.
// The `slug` values below are pulled directly from the Phase 1 inventory,
// do not rename these without updating redirect-map.csv and next.config.ts.

export interface ContentEntry {
  slug: string;
  title: string;
  description: string;
}

export const blogArticles: ContentEntry[] = [
  { slug: "authoredup-vs-signal", title: "AuthoredUp vs Signal", description: "" },
  { slug: "b2b-personal-brand-linkedin", title: "B2B Personal Brand on LinkedIn", description: "" },
  { slug: "best-linkedin-content-tools-2026", title: "Best LinkedIn Content Tools 2026", description: "" },
  { slug: "best-linkedin-content-tools-consultants", title: "Best LinkedIn Content Tools for Consultants", description: "" },
  { slug: "best-time-to-post-linkedin-2026", title: "Best Time to Post on LinkedIn 2026", description: "" },
  { slug: "how-to-get-consulting-clients-linkedin", title: "How to Get Consulting Clients on LinkedIn", description: "" },
  { slug: "how-to-write-linkedin-posts", title: "How to Write LinkedIn Posts", description: "" },
  { slug: "kleo-alternatives-2026", title: "Kleo Alternatives 2026", description: "" },
  { slug: "linkedin-agency-owners", title: "LinkedIn for Agency Owners", description: "" },
  { slug: "linkedin-algorithm-2026", title: "LinkedIn Algorithm 2026", description: "" },
  { slug: "linkedin-content-strategy-2026", title: "LinkedIn Content Strategy 2026", description: "" },
  { slug: "linkedin-executive-coaches", title: "LinkedIn for Executive Coaches", description: "" },
  { slug: "linkedin-for-consultants", title: "LinkedIn for Consultants", description: "" },
  { slug: "linkedin-for-founders", title: "LinkedIn for Founders", description: "" },
  { slug: "linkedin-fractional-executives", title: "LinkedIn for Fractional Executives", description: "" },
  { slug: "linkedin-leadership-advisors", title: "LinkedIn for Leadership Advisors", description: "" },
  { slug: "linkedin-post-ideas-for-consultants", title: "LinkedIn Post Ideas for Consultants", description: "" },
  { slug: "magicpost-alternatives-2026", title: "MagicPost Alternatives 2026", description: "" },
  { slug: "scripe-alternatives-2026", title: "Scripe Alternatives 2026", description: "" },
  { slug: "supergrow-alternatives-2026", title: "Supergrow Alternatives 2026", description: "" },
  { slug: "taplio-alternatives-2026", title: "Taplio Alternatives 2026", description: "" },
  { slug: "why-linkedin-content-fails", title: "Why LinkedIn Content Fails", description: "" },
];

export const compareTools: ContentEntry[] = [
  { slug: "authoredup", title: "Signal vs AuthoredUp", description: "" },
  { slug: "kleo", title: "Signal vs Kleo", description: "" },
  { slug: "magicpost", title: "Signal vs MagicPost", description: "" },
  { slug: "scripe", title: "Signal vs Scripe", description: "" },
  { slug: "supergrow", title: "Signal vs Supergrow", description: "" },
  { slug: "taplio", title: "Signal vs Taplio", description: "" },
];

export const forPersonas: ContentEntry[] = [
  { slug: "consultants", title: "LinkedIn for Consultants", description: "" },
  { slug: "founders", title: "LinkedIn for Founders", description: "" },
  { slug: "fractional-executives", title: "LinkedIn for Fractional Executives", description: "" },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((a) => a.slug === slug);
}

export function getCompareTool(slug: string) {
  return compareTools.find((t) => t.slug === slug);
}

export function getForPersona(slug: string) {
  return forPersonas.find((p) => p.slug === slug);
}
