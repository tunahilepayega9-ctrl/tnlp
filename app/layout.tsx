import "./globals.css";
import Navbar from "./components/Navbar";





export const metadata = {
  title: "My Website",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
