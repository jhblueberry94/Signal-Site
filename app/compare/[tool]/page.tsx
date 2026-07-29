import type { Metadata } from "next";
import { notFound } from "next/navigation";
import compareForData from "@/content/compare-for.json";
import ContentBlocks, { ContentBlock } from "@/components/ContentBlocks";

interface PageData {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  blocks: ContentBlock[];
}

const data = compareForData as Record<string, PageData>;

const toolSlugs = ["taplio", "authoredup", "supergrow", "scripe", "magicpost", "kleo"];

export function generateStaticParams() {
  return toolSlugs.map((tool) => ({ tool }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const page = data[`compare__${tool}`];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://postsignal.co/compare/${tool}` },
  };
}

export default async function CompareToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const page = data[`compare__${tool}`];
  if (!page) notFound();

  const url = `https://postsignal.co/compare/${tool}`;
  const h1 = page.blocks.find((b) => b.type === "h1")?.text || page.title;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Compare", item: "https://postsignal.co/compare" },
        { "@type": "ListItem", position: 2, name: h1, item: url },
      ],
    },
  ];

  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <h1>{h1}</h1>
      <ContentBlocks blocks={page.blocks} />
      {page.faqs.length > 0 && (
        <section aria-labelledby="compare-faq-heading">
          <h2 id="compare-faq-heading">Frequently asked questions</h2>
          {page.faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
