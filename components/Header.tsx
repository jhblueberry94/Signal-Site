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
    <nav id="mainnav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="Signal home">
          <img src="/logo.png" alt="Signal" height={28} style={{ display: "block", height: 28, width: "auto" }} />
        </Link>
        <ul className="nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <a href="https://app.postsignal.co/auth" className="nav-signin">
          Sign in
        </a>
        <a href="https://app.postsignal.co/auth?signup=true" className="btn-primary" style={{ marginLeft: "1rem" }}>
          Start free trial
        </a>
      </div>
    </nav>
  );
}
