import type { Metadata } from "next";
import Link from "next/link";
import blogArticlesData from "@/content/blog-articles.json";

const articles = blogArticlesData as Record<string, { title: string; description: string }>;
const slugs = Object.keys(articles);

export const metadata: Metadata = {
  title: "LinkedIn Content Strategy & Personal Branding Blog",
  description:
    "LinkedIn content strategy and personal branding advice for B2B professionals: consultants, founders, fractional executives and agency owners.",
  alternates: { canonical: "https://postsignal.co/blog" },
};

export default function BlogIndexPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Signal Blog",
    url: "https://postsignal.co/blog",
    publisher: {
      "@type": "Organization",
      name: "Signal",
      url: "https://postsignal.co/",
    },
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <h1>LinkedIn content strategy and personal branding advice for B2B professionals</h1>
      <p>
        <Link href="/blog/linkedin-by-role">Browse guides by role →</Link>
      </p>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{articles[slug].title.replace(/\s*\|\s*Signal$/, "")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
