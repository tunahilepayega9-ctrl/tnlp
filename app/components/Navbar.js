import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Modern Website</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default function Navbar() {
  return (
    <nav style={{
      background: "linear-gradient(90deg, #1e1e2f, #2d2d5c)",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>Home</Link>
      <Link href="/about" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>About</Link>
      <Link href="/contact" style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>Contact</Link>
    </nav>
  )
}
