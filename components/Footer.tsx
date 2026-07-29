import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Signal" height={32} style={{ display: "block", height: 32, width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="footer-tagline">LinkedIn content for B2B professionals.</p>
          </div>
          <div className="footer-col footer-links-col">
            <span className="footer-col-title">Product</span>
            <Link href="/pricing">Pricing</Link>
            <Link href="/tools/linkedin-post-editor">Free post editor</Link>
            <Link href="/compare">Compare</Link>
          </div>
          <div className="footer-col footer-links-col">
            <span className="footer-col-title">Content</span>
            <Link href="/blog">Blog</Link>
            <Link href="/blog/linkedin-by-role">By role</Link>
            <Link href="/for">Who it&apos;s for</Link>
          </div>
          <div className="footer-col footer-links-col">
            <span className="footer-col-title">Support</span>
            <Link href="/faq">FAQ</Link>
            <a href="https://www.cal.eu/josh-huggins-mkwhu8/30min">Book a demo</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Blueberry Media. Signal is a Blueberry Media product.</p>
        </div>
      </div>
    </footer>
  );
}
