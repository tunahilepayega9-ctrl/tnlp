'use client';
import Link from "next/link";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#f8f8f8",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      borderBottom: "1px solid #ddd"
    }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
