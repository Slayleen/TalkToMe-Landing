import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/talktome-logo.png";
import appShot from "@/assets/talktome-app-new.png";
import cozyBg from "@/assets/cozy-bg.jpg";
import { Mic, Sparkles, Heart, Gem, Flame, Apple } from "lucide-react";

const WAITLIST_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwiRigIP31SIMLKTH6Sfzofcg9DaOIUtYmzLfbrCA3mP9C6z-mnwg3XMqoxSY0xw7lg/exec";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalkToMe — Cozy AI language practice with cute characters" },
      {
        name: "description",
        content:
          "Practice speaking a new language with adorable AI chatbot characters. Collect, customize, and chat your way to fluency in a cozy gacha-style world.",
      },
      { property: "og:title", content: "TalkToMe — Cozy AI language practice" },
      {
        property: "og:description",
        content:
          "Speak Spanish, Japanese, French and more with charming AI buddies. No drills. No awkward strangers. Just cozy conversation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito:wght@400;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Chip({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/80 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground/80">
      {icon}
      {children}
    </span>
  );
}

function Landing() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const cleanEmail = email.trim().toLowerCase();
    if (!EMAIL_RE.test(cleanEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      // NOTE: Content-Type is deliberately "text/plain" here, NOT "application/json".
      // Apps Script Web Apps don't respond to CORS preflight (OPTIONS) requests, so
      // using "application/json" makes the browser send a preflight that just fails
      // silently. "text/plain" keeps this a "simple request" (no preflight), and the
      // Apps Script's doPost can still JSON.parse(e.postData.contents) just fine.
      const response = await fetch(WAITLIST_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const result = await response.json();

      if (result.success) {
        alert("🎉 You're on the waitlist!");
        setEmail("");
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative min-h-screen bg-cozy overflow-hidden">
      {/* Wallpaper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{ backgroundImage: `url(${cozyBg})`, backgroundSize: "700px" }}
        aria-hidden
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-primary/90 grid place-items-center text-primary-foreground font-bold shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">TalkToMe</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-foreground/70">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#gacha" className="hover:text-foreground">Gacha</a>
          <a href="#download" className="hover:text-foreground">Waitlist</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-8 pb-24 md:grid-cols-2 md:pt-16">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Chip icon={<Flame className="h-3.5 w-3.5 text-primary" />}>Streaks</Chip>
            <Chip icon={<Gem className="h-3.5 w-3.5 text-teal" />}>Pulls</Chip>
            <Chip icon={<Heart className="h-3.5 w-3.5 text-primary" />}>Bonds</Chip>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] font-bold text-foreground">
            Speak a new language <span className="text-primary">with a friend.</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/70 max-w-lg">
            TalkToMe turns casual language practice into a cozy little world. Chat out loud with AI
            characters who each have their own voice, personality, and style — and collect them all.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:brightness-105 transition"
            >
              <Apple className="h-4 w-4" /> Join the iOS waitlist
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground/80 hover:bg-card/70 transition"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Phone mock */}
        <div className="relative mx-auto">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/25 via-accent/25 to-honey/25 blur-2xl" aria-hidden />
          <div className="relative rounded-[2.5rem] p-3 card-cozy">
            <img
              src={appShot}
              alt="TalkToMe app showing Luna, a cozy teahouse buddy for Spanish practice"
              className="w-[280px] md:w-[320px] rounded-[2rem] shadow-inner"
              width={320}
            />
          </div>
          <div className="absolute -left-8 -bottom-6 rotate-[-8deg] rounded-2xl card-cozy px-3 py-2 text-xs font-semibold flex items-center gap-2 animate-float">
            <Mic className="h-3.5 w-3.5 text-primary" /> "Hola! ¿Cómo estás hoy?"
          </div>
          <div className="absolute -right-6 top-10 rotate-[6deg] rounded-2xl card-cozy px-3 py-2 text-xs font-semibold flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
            <Gem className="h-3.5 w-3.5 text-teal" /> +40 gems
          </div>
        </div>
      </section>

      {/* Logo divider band */}
      <section className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="card-cozy rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <img src={logo} alt="TalkToMe logo" className="h-28 md:h-32 rounded-2xl" />
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Cozy chats. Real language skills.
            </h2>
            <p className="mt-2 text-foreground/70 max-w-xl">
              Tiny, warm conversations that add up — with characters you'll actually want to see again tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Pick a buddy", d: "Swipe through your roster and choose who you're in the mood to chat with today." },
            { n: "02", t: "Just talk", d: "Tap Speak Now and say anything. Your buddy replies out loud, gently corrects, and keeps the chat going." },
            { n: "03", t: "Level up together", d: "Earn gems, unlock outfits, and grow your bond. Fluency, but make it cozy." },
          ].map((s) => (
            <div key={s.n} className="card-cozy rounded-3xl p-6">
              <div className="font-display text-4xl text-primary/60 font-bold">{s.n}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-foreground/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gacha */}
      <section id="gacha" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="card-cozy rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Gacha wardrobe</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">
              Collect them. Dress them. Chat with them.
            </h2>
            <p className="mt-4 text-foreground/70 text-lg">
              Spend gems on the wish banner to pull rare characters and outfits. Every buddy has seasonal
              looks — because vocab sticks better when there's something to unlock.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip icon={<Gem className="h-3.5 w-3.5 text-teal" />}>Wish banner</Chip>
              <Chip icon={<Sparkles className="h-3.5 w-3.5 text-primary" />}>Outfit sets</Chip>
              <Chip icon={<Heart className="h-3.5 w-3.5 text-primary" />}>Bond levels</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Your first cozy conversation is one tap away.
        </h2>
        <p className="mt-4 text-foreground/70 text-lg">
          Join the TalkToMe waitlist and be first in when the app opens.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Joining…" : "Get early access"}
          </button>
        </form>
      </section>

      <footer className="relative z-10 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8 rounded-lg" />
            <span className="font-display font-bold text-foreground">TalkToMe </span>
          </div>
          <p>© {new Date().getFullYear()} TalkToMe. Made with love and too much boba.</p>
        </div>
      </footer>
    </div>
  );
}