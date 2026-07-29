import Link from "next/link";

const NAV_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/compare", label: "Compare" },
  { href: "/for", label: "Who it's for" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          Signal
        </Link>
        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <a href="https://app.postsignal.co/auth">Sign in</a>
          <a href="https://app.postsignal.co/auth?signup=true" className="btn-primary">
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
