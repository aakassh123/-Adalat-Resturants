import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = { title: "Page not found | Adalat Restaurant" };

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "80vh", display: "grid", placeItems: "center", textAlign: "center", padding: "160px 24px 80px", background: "var(--color-ink)" }}>
                <div>
                    <span className="eyebrow" style={{ color: "var(--color-gold)" }}>Error 404</span>
                    <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>This handi is empty</h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 30 }}>The page you are looking for does not exist.</p>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                    <Link href="/menu" className="btn" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>View Menu</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
