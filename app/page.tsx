import type { Metadata } from "next";
import Link from "next/link";

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
  { name: "Founders", headline: "Build a reputation that warms every sale.", body: "You're the voice of the company. Signal turns your daily thinking into posts that attract the right people: those curious enough to start a conversation." },
  { name: "Executive Coaches", headline: "Help people understand how valuable you are.", body: "Signal surfaces questions from your niche every morning so your content reflects real expertise, not recycled frameworks. Being yourself is the differentiator." },
  { name: "Consultants", headline: "Become the obvious choice in your space.", body: "Clients hire the consultant they've been reading for months. Signal gives you a daily prompt rooted in your market so you're the one with the timely, credible take." },
  { name: "Fractional Leaders", headline: "Make your availability known without shouting.", body: "The best fractional work comes through trust, not cold outreach. Signal helps you share thinking that keeps you visible and credible with decision-makers." },
  { name: "B2B Advisors", headline: "Stay on the pulse between engagements.", body: "When you're deep in a project, visibility falls away. Signal keeps you consistent: one question a day that shows you're still the expert in the room." },
];

const dataSources = [
  { name: "Google Search Trends", body: "What your buyers are actively typing into search right now: the questions and topics gaining momentum in your space." },
  { name: "Reddit Discussions", body: "The unfiltered conversations happening in your industry's communities: the frustrations, debates and questions people ask when no one's selling to them." },
  { name: "Search Intent Data", body: "The underlying motivation behind what people search for. Not just the keywords, but what they're really trying to understand or solve." },
];

export default function HomePage() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Signal",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://postsignal.co",
    offers: { "@type": "Offer", price: "35", priceCurrency: "GBP", url: "https://postsignal.co/pricing" },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Signal",
    url: "https://postsignal.co",
    logo: "https://postsignal.co/og-image.png",
    sameAs: "https://www.linkedin.com/in/joshua-huggins-socialmedia/",
    description: "Signal gives B2B professionals three research-backed LinkedIn questions every day, turning logged answers into structured LinkedIn posts.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section id="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <div className="hero-pill">
            <div className="pill-icon" aria-hidden="true">
              <div className="dot dot-tl"></div>
              <div className="dot dot-tr"></div>
              <div className="dot dot-bl"></div>
              <div className="dot dot-br"></div>
            </div>
            Built for LinkedIn personal brand
          </div>
          <h1 id="hero-heading">
            One question a day.<br />
            <span className="italic-accent">One LinkedIn post.</span><br />
            Done in minutes.
          </h1>
          <p className="hero-sub">
            The fastest way to build your B2B personal brand on LinkedIn. One research-backed question a day. <strong>Answer one. Post it. Simple.</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: ".75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn-primary" href="https://app.postsignal.co/auth?signup=true" style={{ background: "#D85A30" }}>
              Try Signal for free &rarr;
            </a>
            <a
              href="https://www.cal.eu/josh-huggins-mkwhu8/30min?user=josh-huggins-mkwhu8&layout=month_view"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: ".7rem 1.5rem", background: "transparent", color: "#555", border: "1.5px solid #D0CFC8", borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Book a demo
            </a>
          </div>
          <span className="hero-microcopy">7-day free trial. No credit card required. Cancel anytime.</span>
          <div className="hero-stats" role="note" aria-label="Signal usage stats">
            <span className="hero-stat-item"><strong>21</strong>&nbsp;founders using Signal</span>
            <span className="hero-stat-divider" aria-hidden="true"></span>
            <span className="hero-stat-item"><strong>75+</strong>&nbsp;posts generated</span>
            <span className="hero-stat-divider" aria-hidden="true"></span>
            <span className="hero-stat-item"><strong>100+</strong>&nbsp;questions answered</span>
          </div>
        </div>
      </section>

      <div className="built-for-strip" aria-label="Built for">
        <span className="built-for-label">Built for</span>
        {personas.map((p) => (
          <div className="bf-pill" key={p.name}>
            {p.name}
            <span className="tooltip">
              <span className="tooltip-label">{p.name}</span>
              <span className="tooltip-head">{p.headline}</span>
              <span className="tooltip-body">{p.body}</span>
            </span>
          </div>
        ))}
      </div>

      <section id="problem" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">The problem</span>
            <h2 id="problem-heading">
              You know LinkedIn matters.<br />
              You just never find the <span className="italic-accent">right thing</span> to say.
            </h2>
          </div>
          <div className="pain-grid">
            <article className="card pain-card">
              <h3>The fog</h3>
              <p>You open LinkedIn, stare at the box, and close it. Every day.</p>
            </article>
            <article className="card pain-card">
              <h3>The scroll trap</h3>
              <p>You spend 20 minutes reading other people&apos;s content instead of creating your own.</p>
            </article>
            <article className="card pain-card">
              <h3>The generic post</h3>
              <p>You write something vague because you couldn&apos;t think of anything specific. It gets three likes. Two of them are your own connections.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="voice" aria-labelledby="voice-heading">
        <div className="section-inner voice-grid">
          <div>
            <span className="voice-label">How it works</span>
            <h3 className="voice-h3" id="voice-heading">Have a thought? Voice it. Signal does the rest.</h3>
            <p className="voice-sub">Answer a question with a voice note or rough idea. Signal pulls out the insight and builds a structured LinkedIn post based on your voice, ready in minutes.</p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-title">Research-backed prompts</span>
                <span className="feature-sub">Every prompt is pulled from real search and conversation data in your market.</span>
              </div>
              <div className="feature-item">
                <span className="feature-title">Sounds like you</span>
                <span className="feature-sub">Signal learns how you write. Output sounds like you, not a generator.</span>
              </div>
            </div>
          </div>
          <div className="voice-demo">
            <p>Interactive voice-note demo renders here in the live product</p>
          </div>
        </div>
      </section>

      <section id="how" aria-labelledby="how-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">How it works</span>
            <h2 id="how-heading">From blank page to LinkedIn post in under five minutes</h2>
          </div>
          <div className="steps-row">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Three questions arrive</h3>
              <p>Each one built from what your market is actually searching for right now.</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Speak or type your answer</h3>
              <p>Signal captures your actual point of view, not a sanitised version of it.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Edit, refine, post</h3>
              <p>Post straight to LinkedIn without leaving the app.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" aria-labelledby="pillars-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">What you&apos;ll post about</span>
            <h2 id="pillars-heading">Your expertise already fits into <span className="italic-accent">three powerful buckets</span>.</h2>
          </div>
          <div className="pillars-grid">
            <article className="card pillar-card">
              <span className="pillar-pill pill-m">Market &amp; Industry</span>
              <h3>Market &amp; Industry</h3>
              <p>What&apos;s shifting in your space. What your buyers are worried about. What everyone else is getting wrong.</p>
            </article>
            <article className="card pillar-card">
              <span className="pillar-pill pill-j">Personal Journey</span>
              <h3>Personal Journey</h3>
              <p>The lessons, turning points and opinions that make you worth following.</p>
            </article>
            <article className="card pillar-card">
              <span className="pillar-pill pill-p">Product &amp; Service</span>
              <h3>Product &amp; Service</h3>
              <p>What you actually do and why it matters. Told through outcomes, objections and real moments, not features.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="research" aria-labelledby="research-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Where the questions come from</span>
            <h2 id="research-heading">Every question is backed by what <span className="italic-accent">your market</span> is actually doing.</h2>
            <p className="section-sub">Every question Signal asks you is informed by what&apos;s actually happening in your market, not guesswork, not generic prompts. We pull from three public data sources so your content is always relevant, timely and worth reading.</p>
          </div>
          <div className="research-grid">
            {dataSources.map((source) => (
              <article className="card research-card" key={source.name}>
                <h3>{source.name}</h3>
                <p>{source.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" aria-labelledby="calculator-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">The real cost</span>
            <h2 id="calculator-heading">Your time has a price</h2>
            <p className="calc-sub">At an average day rate, DIY LinkedIn content costs the average B2B professional around <strong className="coral">&pound;563</strong> a month in lost time. Signal is &pound;35 a month.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-box">
              <span className="stat-label">DIY cost / month</span>
              <span className="stat-num coral">&pound;563</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Signal cost / month</span>
              <span className="stat-num">&pound;35</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Time saved / month</span>
              <span className="stat-num">~14 hrs</span>
            </div>
          </div>
          <p className="calc-sentence">
            <Link href="/pricing" className="btn-primary">Start free trial &rarr;</Link>
          </p>
        </div>
      </section>

      <section id="final-cta" aria-labelledby="final-cta-heading">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 id="final-cta-heading">
            You have the expertise.<br />
            <span className="italic-accent" style={{ color: "#7aafd4" }}>You just don&apos;t know what to say.</span>
          </h2>
          <p>Signal is for B2B professionals who want to build their personal brand, but don&apos;t know what to say. Answer the right questions. Your expertise does the rest.</p>
          <a className="btn-primary" href="https://app.postsignal.co/auth?signup=true" style={{ background: "var(--coral)" }}>
            Get started free &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
