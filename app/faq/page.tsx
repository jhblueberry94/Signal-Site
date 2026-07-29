import type { Metadata } from "next";
import { faqCategories } from "@/lib/faq-data";

// Carried forward from faq.html: title 45 chars, description 125 chars,
// both already well within SERP limits.
export const metadata: Metadata = {
  title: "FAQ: Pricing & LinkedIn Content Help",
  description:
    "Answers on Signal pricing, how it works, LinkedIn content strategy and tool comparisons. 50 questions across four categories.",
  alternates: { canonical: "https://postsignal.co/faq" },
};

export default function FaqPage() {
  const allItems = faqCategories.flatMap((c) => c.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1>Frequently asked questions</h1>
      <p>
        Straight answers on Signal pricing, how the product works, LinkedIn content strategy, and
        how Signal compares to other tools.
      </p>

      <nav aria-label="FAQ categories">
        <ul>
          {faqCategories.map((cat) => (
            <li key={cat.category}>
              <a href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {cat.category} ({cat.items.length})
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {faqCategories.map((cat) => {
        const id = cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <section key={cat.category} id={id} aria-labelledby={`${id}-heading`}>
            <h2 id={`${id}-heading`}>{cat.category}</h2>
            {cat.items.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </section>
        );
      })}
    </div>
  );
}
