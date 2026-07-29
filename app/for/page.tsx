import type { Metadata } from "next";
import Link from "next/link";
import compareForData from "@/content/compare-for.json";
import ContentBlocks, { ContentBlock } from "@/components/ContentBlocks";

interface PageData {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  blocks: ContentBlock[];
}

const data = compareForData as Record<string, PageData>;
const page = data["for__index"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "https://postsignal.co/for" },
};

const personas = [
  { slug: "consultants", name: "Consultants" },
  { slug: "founders", name: "Founders" },
  { slug: "fractional-executives", name: "Fractional Executives" },
];

// Formerly who-its-for.html, now the index page for the /for/ persona section.
export default function ForIndexPage() {
  const h1 = page.blocks.find((b) => b.type === "h1")?.text || page.title;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Who it's for", item: "https://postsignal.co/for" },
    ],
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1>{h1}</h1>
      <ContentBlocks blocks={page.blocks} />
      <nav aria-label="All personas">
        <ul>
          {personas.map((persona) => (
            <li key={persona.slug}>
              <Link href={`/for/${persona.slug}`}>LinkedIn for {persona.name} →</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
