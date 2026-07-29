import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import blogArticlesData from "@/content/blog-articles.json";
import ContentBlocks, { ContentBlock } from "@/components/ContentBlocks";

interface ArticleData {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  article_meta: { headline: string; datePublished: string; dateModified: string };
  blocks: ContentBlock[];
  word_count: number;
  faqs_derived?: boolean;
}

const articles = blogArticlesData as Record<string, ArticleData>;
const slugs = Object.keys(articles);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://postsignal.co/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://postsignal.co/blog/${slug}`,
      type: "article",
      ...(article.article_meta.datePublished
        ? { publishedTime: article.article_meta.datePublished }
        : {}),
      ...(article.article_meta.dateModified
        ? { modifiedTime: article.article_meta.dateModified }
        : {}),
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const url = `https://postsignal.co/blog/${slug}`;
  const h1 = article.blocks.find((b) => b.type === "h1")?.text || article.title;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: article.article_meta.headline || h1,
      description: article.description,
      url,
      ...(article.article_meta.datePublished
        ? { datePublished: article.article_meta.datePublished }
        : {}),
      ...(article.article_meta.dateModified
        ? { dateModified: article.article_meta.dateModified }
        : {}),
      publisher: {
        "@type": "Organization",
        name: "Signal",
        url: "https://postsignal.co/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: "https://postsignal.co/blog" },
        { "@type": "ListItem", position: 2, name: article.title, item: url },
      ],
    },
  ];

  if (article.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faqs.map((item) => ({
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

      <nav aria-label="Breadcrumb">
        <Link href="/blog">Blog</Link> / <span>{h1}</span>
      </nav>

      <h1>{h1}</h1>

      <ContentBlocks blocks={article.blocks} />

      {article.faqs.length > 0 && !article.faqs_derived && (
        <section aria-labelledby="article-faq-heading">
          <h2 id="article-faq-heading">Frequently asked questions</h2>
          {article.faqs.map((item) => (
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
