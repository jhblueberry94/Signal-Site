import type { Metadata } from "next";
import Link from "next/link";

// Title/description carried forward from pricing.html at their existing,
// correctly-sized lengths (title 47 chars, description 153 chars).
export const metadata: Metadata = {
  title: "Signal Pricing: LinkedIn Content Tool, £35/month",
  description:
    "Signal gives B2B professionals daily LinkedIn prompts and drafted posts. One plan at £35/month, everything included. 7-day free trial, cancel anytime.",
  alternates: { canonical: "https://postsignal.co/pricing" },
};

const pricingFaqs = [
  {
    q: "How much does Signal cost?",
    a: "Signal is £35/month, or the equivalent in USD and EUR. One plan, everything included, with a 7-day free trial and no credit card required to start.",
  },
  {
    q: "Is Signal's LinkedIn content tool free right now?",
    a: "Yes. During our open testing period all users get full Pro access at no cost, for a limited time. Once the period ends, new users start a standard 7-day free trial before moving to £35/month.",
  },
  {
    q: "What happens to existing users when the free period ends?",
    a: "You'll receive an email before the period ends inviting you to start a paid plan. There are no automatic charges. You choose when to subscribe.",
  },
  {
    q: "Do I need a credit card to start the free trial?",
    a: "No. Start your 7-day trial with just an email address. You'll only be asked for payment details if you choose to continue.",
  },
];

export default function PricingPage() {
  // Product schema with both Offer types. This was the audit's top pricing
  // gap: zero structured data meant no rich-result eligibility for price
  // or availability in SERPs.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Signal",
    description:
      "Daily research-backed LinkedIn prompts and structured post drafting for B2B professionals.",
    brand: { "@type": "Brand", name: "Signal" },
    offers: [
      {
        "@type": "Offer",
        name: "Pro: Individual",
        price: "35",
        priceCurrency: "GBP",
        url: "https://postsignal.co/pricing",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Team: Enterprise",
        price: "18",
        priceCurrency: "GBP",
        url: "https://postsignal.co/pricing",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1>One plan for LinkedIn content. Everything included.</h1>
      <p>
        Simple, transparent pricing for the Signal LinkedIn content tool. No tiers, no feature
        gating. Full access from day one, for individuals and teams.
      </p>
      <p>Free access for a limited time. After that: £35/month with a 7-day free trial.</p>

      <section aria-labelledby="pro-plan-heading">
        <h2 id="pro-plan-heading">Pro: Individual, £35/month</h2>
        <p>7-day free trial, no card required.</p>
        <p>
          Everything you need to post consistently on LinkedIn. One question a day, one
          structured draft, one voice that sounds like you.
        </p>
        <ul>
          <li>All three content pillars: Market, Personal, Product</li>
          <li>Daily research-backed prompts, Monday to Friday</li>
          <li>Unlimited Story Arc post drafts</li>
          <li>Full Tone of Voice calibration tab</li>
          <li>LinkedIn post preview and one-click copy</li>
          <li>Weekly Wildcard prompt</li>
          <li>7-day question history blacklist</li>
          <li>Monday–Friday streak system</li>
          <li>Full 9-step onboarding calibration</li>
        </ul>
        <p>
          <a href="https://app.postsignal.co/auth?signup=true" className="btn-primary">
            Start free trial
          </a>
        </p>
        <p>Cancel anytime. No commitment.</p>
      </section>

      <section aria-labelledby="team-plan-heading">
        <h2 id="team-plan-heading">Team: Enterprise, £18/seat/month</h2>
        <p>Billed annually. 5 seat minimum.</p>
        <p>
          For agencies, sales teams, and B2B employers running employee advocacy at scale.
          Everything your team needs to post consistently and visibly.
        </p>
        <ul>
          <li>Everything in Pro for every seat</li>
          <li>Team leaderboard: streak, output, and engagement rankings</li>
          <li>Admin dashboard with team posting visibility</li>
          <li>Aggregate streak and engagement tracking</li>
          <li>Shared topic blacklist to prevent content overlap</li>
          <li>Onboarding managed by team admin</li>
          <li>Priority support and onboarding call included</li>
          <li>Consolidated billing and annual invoicing</li>
        </ul>
        <p>Get a quote in 24 hours.</p>
      </section>

      <section aria-labelledby="pricing-comparison-heading">
        <h2 id="pricing-comparison-heading">
          How Signal&apos;s pricing compares to Taplio, Supergrow and AuthoredUp
        </h2>
        <p>
          Most LinkedIn content tools use tiered pricing, where ideation features, analytics or
          scheduling sit behind higher plans. Taplio&apos;s AI features start at around $65/month,
          Supergrow runs $19 to $39/month depending on tier, and AuthoredUp&apos;s paid plans add
          analytics from around $12/month on top of its editor. Signal is one flat plan at
          £35/month with everything included: daily research-backed questions, Story Arc
          drafting, Tone of Voice calibration and LinkedIn scheduling.
        </p>
        <p>
          If you&apos;re weighing up a switch, see the full comparisons:{" "}
          <Link href="/compare/taplio">Signal vs Taplio</Link>,{" "}
          <Link href="/compare/supergrow">Signal vs Supergrow</Link> and{" "}
          <Link href="/compare/authoredup">Signal vs AuthoredUp</Link>.
        </p>
      </section>

      <section aria-labelledby="pricing-faq-heading">
        <h2 id="pricing-faq-heading">Common questions about Signal&apos;s pricing</h2>
        {pricingFaqs.map((item) => (
          <article key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
