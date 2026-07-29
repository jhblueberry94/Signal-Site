import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Generated from redirect-map.csv (Phase 1). Every URL from the old
    // static HTML site 301s here so existing crawl/ranking signal folds
    // into the new clean URL instead of resetting to zero.
    return [
    { source: "/index.html", destination: "/", permanent: true },
    { source: "/pricing.html", destination: "/pricing", permanent: true },
    { source: "/faq.html", destination: "/faq", permanent: true },
    { source: "/blog.html", destination: "/blog", permanent: true },
    { source: "/compare/index.html", destination: "/compare", permanent: true },
    { source: "/who-its-for.html", destination: "/for", permanent: true },
    { source: "/linkedin-by-role.html", destination: "/blog/linkedin-by-role", permanent: true },
    { source: "/tools/linkedin-post-editor.html", destination: "/tools/linkedin-post-editor", permanent: true },
    { source: "/blog/authoredup-vs-signal.html", destination: "/blog/authoredup-vs-signal", permanent: true },
    { source: "/blog/b2b-personal-brand-linkedin.html", destination: "/blog/b2b-personal-brand-linkedin", permanent: true },
    { source: "/blog/best-linkedin-content-tools-2026.html", destination: "/blog/best-linkedin-content-tools-2026", permanent: true },
    { source: "/blog/best-linkedin-content-tools-consultants.html", destination: "/blog/best-linkedin-content-tools-consultants", permanent: true },
    { source: "/blog/best-time-to-post-linkedin-2026.html", destination: "/blog/best-time-to-post-linkedin-2026", permanent: true },
    { source: "/blog/how-to-get-consulting-clients-linkedin.html", destination: "/blog/how-to-get-consulting-clients-linkedin", permanent: true },
    { source: "/blog/how-to-write-linkedin-posts.html", destination: "/blog/how-to-write-linkedin-posts", permanent: true },
    { source: "/blog/kleo-alternatives-2026.html", destination: "/blog/kleo-alternatives-2026", permanent: true },
    { source: "/blog/linkedin-agency-owners.html", destination: "/blog/linkedin-agency-owners", permanent: true },
    { source: "/blog/linkedin-algorithm-2026.html", destination: "/blog/linkedin-algorithm-2026", permanent: true },
    { source: "/blog/linkedin-content-strategy-2026.html", destination: "/blog/linkedin-content-strategy-2026", permanent: true },
    { source: "/blog/linkedin-executive-coaches.html", destination: "/blog/linkedin-executive-coaches", permanent: true },
    { source: "/blog/linkedin-for-consultants.html", destination: "/blog/linkedin-for-consultants", permanent: true },
    { source: "/blog/linkedin-for-founders.html", destination: "/blog/linkedin-for-founders", permanent: true },
    { source: "/blog/linkedin-fractional-executives.html", destination: "/blog/linkedin-fractional-executives", permanent: true },
    { source: "/blog/linkedin-leadership-advisors.html", destination: "/blog/linkedin-leadership-advisors", permanent: true },
    { source: "/blog/linkedin-post-ideas-for-consultants.html", destination: "/blog/linkedin-post-ideas-for-consultants", permanent: true },
    { source: "/blog/magicpost-alternatives-2026.html", destination: "/blog/magicpost-alternatives-2026", permanent: true },
    { source: "/blog/scripe-alternatives-2026.html", destination: "/blog/scripe-alternatives-2026", permanent: true },
    { source: "/blog/supergrow-alternatives-2026.html", destination: "/blog/supergrow-alternatives-2026", permanent: true },
    { source: "/blog/taplio-alternatives-2026.html", destination: "/blog/taplio-alternatives-2026", permanent: true },
    { source: "/blog/why-linkedin-content-fails.html", destination: "/blog/why-linkedin-content-fails", permanent: true },
    { source: "/compare/authoredup.html", destination: "/compare/authoredup", permanent: true },
    { source: "/compare/kleo.html", destination: "/compare/kleo", permanent: true },
    { source: "/compare/magicpost.html", destination: "/compare/magicpost", permanent: true },
    { source: "/compare/scripe.html", destination: "/compare/scripe", permanent: true },
    { source: "/compare/supergrow.html", destination: "/compare/supergrow", permanent: true },
    { source: "/compare/taplio.html", destination: "/compare/taplio", permanent: true },
    { source: "/for/consultants.html", destination: "/for/consultants", permanent: true },
    { source: "/for/founders.html", destination: "/for/founders", permanent: true },
    { source: "/for/fractional-executives.html", destination: "/for/fractional-executives", permanent: true },
    ];
  },
};

export default nextConfig;
