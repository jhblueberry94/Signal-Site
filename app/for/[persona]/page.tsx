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

const personaSlugs = ["consultants", "founders", "fractional-executives"];

export function generateStaticParams() {
  return personaSlugs.map((persona) => ({ persona }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ persona: string }>;
}): Promise<Metadata> {
  const { persona } = await params;
  const page = data[`for__${persona}`];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://postsignal.co/for/${persona}` },
  };
}

export default async function ForPersonaPage({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona } = await params;
  const page = data[`for__${persona}`];
  if (!page) notFound();

  const url = `https://postsignal.co/for/${persona}`;
  const h1 = page.blocks.find((b) => b.type === "h1")?.text || page.title;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Who it's for", item: "https://postsignal.co/for" },
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
        <section aria-labelledby="persona-faq-heading">
          <h2 id="persona-faq-heading">Frequently asked questions</h2>
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
