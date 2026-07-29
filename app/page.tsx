import type { Metadata } from "next";
import Link from "next/link";

// Title kept at 66 chars (within Google's ~60-65 char render limit) and the
// meta description at 152 chars (under the 160-char SERP truncation point),
// both carried forward unchanged from index.html since the June audit
// already confirmed these were correctly sized.
export const metadata: Metadata = {
  title: "Signal: Daily LinkedIn Content Prompts for B2B Professionals",
  description:
    "Three research-backed LinkedIn questions every morning. Answer one, get a post outline. Build your personal brand without the blank page. Free to start.",
  alternates: { canonical: "https://postsignal.co/" },
  openGraph: {
    title: "Signal: Daily LinkedIn Content Prompts for B2B Professionals",
    description:
      "Three research-backed LinkedIn questions every morning. Answer one, get a post outline. Build your personal brand without the blank page.",
    url: "https://postsignal.co/",
    type: "website",
    images: [{ url: "https://postsignal.co/og-image.png", width: 1200, height: 630 }],
  },
};

const personas = [
  {
    name: "Founders",
    headline: "Build a reputation that warms every sale.",
    body: "You're the voice of the company. Signal turns your daily thinking into posts that attract the right people: those curious enough to start a conversation.",
  },
  {
    name: "Executive Coaches",
    headline: "Help people understand how valuable you are.",
    body: "Signal surfaces questions from your niche every morning so your content reflects real expertise, not recycled frameworks. Being yourself is the differentiator.",
  },
  {
    name: "Consultants",
    headline: "Become the obvious choice in your space.",
    body: "Clients hire the consultant they've been reading for months. Signal gives you a daily prompt rooted in your market so you're the one with the timely, credible take.",
  },
  {
    name: "Fractional Leaders",
    headline: "Make your availability known without shouting.",
    body: "The best fractional work comes through trust, not cold outreach. Signal helps you share thinking that keeps you visible and credible with decision-makers.",
  },
  {
    name: "B2B Advisors",
    headline: "Stay on the pulse between engagements.",
    body: "When you're deep in a project, visibility falls away. Signal keeps you consistent: one question a day that shows you're still the expert in the room.",
  },
  {
    name: "Leadership Trainers",
    headline: "Show the depth behind your methodology.",
    body: "Anyone can post leadership tips. Signal helps you share the harder thinking: patterns from the room, real observations. That's what separates a trainer from someone worth following.",
  },
];

const dataSources = [
  {
    name: "Google Search Trends",
    body: "What your buyers are actively typing into search right now: the questions and topics gaining momentum in your space.",
  },
  {
    name: "Reddit Discussions",
    body: "The unfiltered conversations happening in your industry's communities: the frustrations, debates and questions people ask when no one's selling to them.",
  },
  {
    name: "Search Intent Data",
    body: "The underlying motivation behind what people search for. Not just the keywords, but what they're really trying to understand or solve.",
  },
];

export default function HomePage() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Signal",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://postsignal.co",
    author: {
      "@type": "Person",
      name: "Josh Huggins",
      sameAs: "https://www.linkedin.com/in/joshua-huggins-socialmedia/",
    },
    offers: {
      "@type": "Offer",
      price: "35",
      priceCurrency: "GBP",
      url: "https://postsignal.co/pricing",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Signal",
    url: "https://postsignal.co",
    logo: "https://postsignal.co/og-image.png",
    sameAs: "https://www.linkedin.com/in/joshua-huggins-socialmedia/",
    description:
      "Signal gives B2B professionals three research-backed LinkedIn questions every day, turning logged answers into structured LinkedIn posts.",
    founder: {
      "@type": "Person",
      name: "Josh Huggins",
      sameAs: "https://www.linkedin.com/in/joshua-huggins-socialmedia/",
    },
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section aria-label="Hero">
        <p>Built for LinkedIn personal brand</p>
        <h1>
          One question a day. One <span className="accent">LinkedIn post</span>. Done in minutes.
        </h1>
        <p>
          The fastest way to build your B2B personal brand on LinkedIn. One research-backed
          question a day. Answer one. Post it. Simple.
        </p>
        <p>
          <a href="https://app.postsignal.co/auth?signup=true" className="btn-primary">
            Try Signal for free →
          </a>
        </p>
        <p>7-day free trial. No credit card required. Cancel anytime.</p>
      </section>

      <section aria-labelledby="built-for-heading">
        <h2 id="built-for-heading">Built for founders, coaches, consultants and advisors</h2>
        {personas.map((persona) => (
          <article key={persona.name}>
            <h3>{persona.name}</h3>
            <p>
              <strong>{persona.headline}</strong>
            </p>
            <p>{persona.body}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading">From blank page to LinkedIn post in under five minutes</h2>
        <p>Here&apos;s exactly what happens when you open Signal each day.</p>

        <article>
          <h3>Step 1: three researched questions arrive every morning</h3>
          <p>
            Each one is built from what your market is actually searching for right now. One
            covers your industry, one your journey, one what you do. You pick the one that sparks
            something.
          </p>
        </article>

        <article>
          <h3>Step 2: speak your answer or type it, your choice</h3>
          <p>
            Tap record and talk through your thinking, or just type if that&apos;s how you work.
            Either way, Signal captures your actual point of view, not a sanitised version of it.
          </p>
        </article>

        <article>
          <h3>Step 3: edit, refine, post directly to LinkedIn</h3>
          <p>
            Signal generates a structured post from your logged answer. Tweak any section inline,
            swap hooks if the first one doesn&apos;t feel right, then post straight to LinkedIn
            without leaving the app.
          </p>
        </article>
      </section>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">You know LinkedIn matters. You just never find the right thing to say.</h2>
        <article>
          <h3>The fog</h3>
          <p>You open LinkedIn, stare at the box, and close it. Every day.</p>
        </article>
        <article>
          <h3>The scroll trap</h3>
          <p>You spend 20 minutes reading other people&apos;s content instead of creating your own.</p>
        </article>
        <article>
          <h3>The generic post</h3>
          <p>
            You write something vague because you couldn&apos;t think of anything specific. It gets
            three likes. Two of them are your own connections.
          </p>
        </article>
      </section>

      <section aria-labelledby="voice-heading">
        <h2 id="voice-heading">Have a thought? Voice it. Signal does the rest.</h2>
        <p>
          Answer a question with a voice note or rough idea. Signal pulls out the insight and
          builds a structured LinkedIn post based on your voice, ready in minutes.
        </p>
        <p>Every prompt is pulled from real search and conversation data in your market.</p>
        <p>Signal learns how you write. Output sounds like you, not a generator.</p>
      </section>

      <section aria-labelledby="data-sources-heading">
        <h2 id="data-sources-heading">Every question is backed by what your market is actually doing</h2>
        <p>
          Every question Signal asks you is informed by what&apos;s actually happening in your
          market, not guesswork, not generic prompts. Signal pulls from three public data sources
          so your content is always relevant, timely and worth reading.
        </p>
        {dataSources.map((source) => (
          <article key={source.name}>
            <h3>{source.name}</h3>
            <p>{source.body}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="cost-heading">
        <h2 id="cost-heading">Your time has a price</h2>
        <p>
          At an average day rate, DIY LinkedIn content costs the average B2B professional around
          £563 a month in lost time. Signal is £35 a month.
        </p>
        <p>
          <Link href="/pricing" className="btn-primary">
            Start free trial →
          </Link>
        </p>
      </section>

      <section aria-labelledby="cta-heading">
        <h2 id="cta-heading">You have the expertise. You just don&apos;t know what to say.</h2>
        <p>
          Signal is for B2B professionals who want to build their personal brand, but
          don&apos;t know what to say. Answer the right questions. Your expertise does the rest.
        </p>
        <p>
          <a href="https://app.postsignal.co/auth?signup=true" className="btn-primary">
            Get started free →
          </a>
        </p>
      </section>
    </div>
  );
}
