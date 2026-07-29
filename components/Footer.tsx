import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Signal</p>
          <p>LinkedIn content for B2B professionals.</p>
        </div>
        <nav>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/for">Who it&apos;s for</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/tools/linkedin-post-editor">Free post editor</Link>
        </nav>
        <p className="site-footer__meta">© {new Date().getFullYear()} Blueberry Media. Signal is a Blueberry Media product.</p>
      </div>
    </footer>
  );
}
