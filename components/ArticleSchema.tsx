interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs: { name: string; url: string }[];
  faq?: { question: string; answer: string }[];
}

export default function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs,
  faq,
}: ArticleSchemaProps) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline,
      description,
      url,
      ...(datePublished ? { datePublished } : {}),
      ...(dateModified ? { dateModified } : {}),
      publisher: {
        "@type": "Organization",
        name: "Signal",
        url: "https://postsignal.co/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  ];

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
