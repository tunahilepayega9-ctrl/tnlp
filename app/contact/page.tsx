export default function ContactPage() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Fill out the form below or reach us via email.</p>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
        margin: "2rem auto"
      }}>
        <input type="text" placeholder="Your Name" style={{ padding: "0.5rem" }} />
        <input type="email" placeholder="tunahilepayega9@gmail.com" style={{ padding: "0.5rem" }} />
        <textarea placeholder="Your Message" rows={4} style={{ padding: "0.5rem" }} />
        <button type="submit" style={{
          background: "#111",
          color: "white",
          border: "none",
          padding: "0.7rem",
          cursor: "pointer"
        }}>Send</button>
      </form>
    </div>
  );
}
