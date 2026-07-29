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
const page = data["compare__index"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "https://postsignal.co/compare" },
};

const tools = [
  { slug: "taplio", name: "Taplio" },
  { slug: "authoredup", name: "AuthoredUp" },
  { slug: "supergrow", name: "Supergrow" },
  { slug: "scripe", name: "Scripe" },
  { slug: "magicpost", name: "MagicPost" },
  { slug: "kleo", name: "Kleo" },
];

export default function CompareIndexPage() {
  const h1 = page.blocks.find((b) => b.type === "h1")?.text || page.title;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Compare", item: "https://postsignal.co/compare" },
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
      <nav aria-label="All comparisons">
        <ul>
          {tools.map((tool) => (
            <li key={tool.slug}>
              <Link href={`/compare/${tool.slug}`}>Signal vs {tool.name}: full comparison →</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
