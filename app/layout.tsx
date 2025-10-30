import Navbar from "./components/Navbar";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer style={{
          textAlign: "center",
          padding: "1rem",
          background: "#111",
          color: "#fff",
          marginTop: "2rem"
        }}>
          © 2025 My Modern Website | Built with ❤️ using Next.js
        </footer>
      </body>
    </html>
  );
}
