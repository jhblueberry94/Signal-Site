import type { Metadata } from "next";
import Link from "next/link";
import blogArticlesData from "@/content/blog-articles.json";

const articles = blogArticlesData as Record<string, { title: string; description: string }>;

export const metadata: Metadata = {
  title: "LinkedIn Content Guides by Role",
  description: "LinkedIn content guides organised by role: consultants, founders, fractional executives, executive coaches, agency owners and leadership advisors.",
  alternates: { canonical: "https://postsignal.co/blog/linkedin-by-role" },
};

const roleSlugs = [
  "linkedin-for-consultants",
  "linkedin-for-founders",
  "linkedin-fractional-executives",
  "linkedin-executive-coaches",
  "linkedin-agency-owners",
  "linkedin-leadership-advisors",
];

// Static route. Next.js resolves this specific path ahead of the
// app/blog/[slug] dynamic route, so the two coexist without conflict.
export default function LinkedInByRolePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: "https://postsignal.co/blog" },
      { "@type": "ListItem", position: 2, name: "LinkedIn by role", item: "https://postsignal.co/blog/linkedin-by-role" },
    ],
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1>LinkedIn content by role</h1>
      <p>
        Every role builds credibility on LinkedIn differently. Start with the guide built for
        your specific position.
      </p>
      <ul>
        {roleSlugs.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{articles[slug]?.title.replace(/\s*\|\s*Signal$/, "") ?? slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
