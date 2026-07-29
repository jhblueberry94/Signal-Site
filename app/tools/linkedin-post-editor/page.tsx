import type { Metadata } from "next";

// Title/description carried forward unchanged, both already within limits
// (title 49 chars, description 145 chars).
export const metadata: Metadata = {
  title: "Free LinkedIn Post Preview & Editor Tool | Signal",
  description:
    "Write and format your LinkedIn post, then preview exactly how it will look before you publish, including the 'see more' cutoff. Free, no sign-up.",
  alternates: { canonical: "https://postsignal.co/tools/linkedin-post-editor" },
};

const faqs = [
  {
    q: "How do I preview what my LinkedIn post will look like before posting?",
    a: "Type or paste your post into the editor on the left. The preview panel on the right updates as you type, rendering your post at LinkedIn's actual feed width and font size, including where the \u201csee more\u201d cutoff will appear.",
  },
  {
    q: "Why does LinkedIn cut off my post with \u201csee more\u201d?",
    a: "LinkedIn truncates posts in the feed after roughly three visible lines of text, showing a \u201csee more\u201d link so readers can expand the rest. The exact cutoff point depends on line length, line breaks, and device width, not a fixed character count.",
  },
  {
    q: "What is the LinkedIn character limit for posts?",
    a: "LinkedIn allows up to 3,000 characters per post. The \u201csee more\u201d feed cutoff happens much earlier than that, typically after around three visible lines, so most of a longer post is hidden until a reader clicks to expand it.",
  },
  {
    q: "Does this tool save or post my content to LinkedIn?",
    a: "No. This tool runs entirely in your browser. Nothing you type is saved, stored, or sent anywhere. Use the copy button to copy your finished post, then paste it into LinkedIn yourself.",
  },
  {
    q: "Can I format bold and italic text for LinkedIn with this tool?",
    a: "Yes. LinkedIn's post composer does not support real bold or italic formatting, so this tool converts your selected text into Unicode characters that display as bold, italic, or underlined the moment you paste them into LinkedIn.",
  },
];

export default function LinkedInPostEditorPage() {
  // This page previously had zero schema (flagged in Phase 1). WebApplication
  // is the correct type for a functional free tool. SoftwareApplication's
  // web-app subtype, and pairs it with FAQPage for the five real Q&As below.
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Signal LinkedIn Post Preview & Editor",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://postsignal.co/tools/linkedin-post-editor",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    publisher: {
      "@type": "Organization",
      name: "Signal",
      url: "https://postsignal.co/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section aria-label="Hero">
        <p>Free tool · No sign-up required</p>
        <h1>Free LinkedIn post preview &amp; editor</h1>
        <p>
          Write and format your post, then see exactly how it will render in the LinkedIn feed.
          Check precisely where the &ldquo;see more&rdquo; cutoff falls before you publish.
        </p>
        <ul>
          <li>21 founders using Signal</li>
          <li>75+ posts generated</li>
          <li>100+ questions answered</li>
        </ul>
      </section>

      <section aria-label="Editor">
        <p>[Phase 4: the interactive editor + live preview widget renders here. This is a frontend build task, not an SEO content task]</p>
      </section>

      <section aria-labelledby="tool-faq-heading">
        <h2 id="tool-faq-heading">Frequently asked questions</h2>
        {faqs.map((item) => (
          <article key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
