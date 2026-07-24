import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/talktome-logo.png.asset.json";
import appShot from "@/assets/talktome-app.png.asset.json";
import charKai from "@/assets/char-kai.png";
import charSofia from "@/assets/char-sofia.png";
import charJin from "@/assets/char-jin.png";
import cozyBg from "@/assets/cozy-bg.jpg";
import { Mic, Sparkles, Heart, Gem, Flame, Apple } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalkToMe HQ — Cozy AI language practice with cute characters" },
      {
        name: "description",
        content:
          "Practice speaking a new language with adorable AI chatbot characters. Collect, customize, and chat your way to fluency in a cozy gacha-style world.",
      },
      { property: "og:title", content: "TalkToMe HQ — Cozy AI language practice" },
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
          <span className="font-display text-xl font-bold text-foreground">TalkToMe HQ</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-foreground/70">
          <a href="#characters" className="hover:text-foreground">Characters</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#gacha" className="hover:text-foreground">Gacha</a>
        </nav>
        <a
          href="#download"
          className="rounded-full bg-foreground/90 text-background px-4 py-2 text-sm font-semibold hover:bg-foreground transition"
        >
          Get the app
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-8 pb-24 md:grid-cols-2 md:pt-16">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Chip icon={<Flame className="h-3.5 w-3.5 text-primary" />}>7-day streaks</Chip>
            <Chip icon={<Gem className="h-3.5 w-3.5 text-teal" />}>Gacha buddies</Chip>
            <Chip icon={<Heart className="h-3.5 w-3.5 text-primary" />}>Zero cringe</Chip>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] font-bold text-foreground">
            Speak a new language <span className="text-primary">with someone cute.</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/70 max-w-lg">
            TalkToMe HQ turns casual language practice into a cozy little world. Chat out loud with AI
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
          <p className="mt-4 text-xs text-muted-foreground">
            10 languages · Spanish, Japanese, French, Korean, Italian & more
          </p>
        </div>

        {/* Phone mock */}
        <div className="relative mx-auto">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/25 via-accent/25 to-honey/25 blur-2xl" aria-hidden />
          <div className="relative rounded-[2.5rem] p-3 card-cozy">
            <img
              src={appShot.url}
              alt="TalkToMe HQ app showing Luna, a cozy teahouse buddy for Spanish practice"
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
          <img src={logo.url} alt="TalkToMe HQ logo" className="h-28 md:h-32 rounded-2xl" />
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Cozy chats. Real language skills.
            </h2>
            <p className="mt-2 text-foreground/70 max-w-xl">
              No streak guilt. No robotic drills. Just tiny, warm conversations that add up — with
              characters you'll actually want to see again tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section id="characters" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Meet the buddies</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">
            Every character has a whole personality.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Pick who you want to chat with today. Each buddy has a distinct voice, vibe, and speciality —
            from cozy beginner banter to spicy debate practice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: charKai,
              name: "Kai",
              tag: "Bookshop introvert",
              lang: "🇯🇵 Japanese",
              level: "N4",
              blurb: "Patient, thoughtful, loves reading manga together and rewinding tricky phrases.",
              tint: "from-honey/40 to-cream",
            },
            {
              img: charSofia,
              name: "Sofía",
              tag: "Gelato adventurer",
              lang: "🇮🇹 Italian",
              level: "A1",
              blurb: "Bright and bubbly. Perfect for practicing everyday chats about food, travel and vibes.",
              tint: "from-primary/30 to-cream",
            },
            {
              img: charJin,
              name: "Jin",
              tag: "Late-night DJ",
              lang: "🇰🇷 Korean",
              level: "B1",
              blurb: "Cool but kind. Push your speaking with slang, K-drama quotes and roleplay.",
              tint: "from-accent/40 to-cream",
            },
          ].map((c) => (
            <article key={c.name} className={`card-cozy rounded-3xl p-5 relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-b ${c.tint} opacity-70`} aria-hidden />
              <div className="relative">
                <div className="rounded-2xl bg-white/50 border border-white/70 aspect-square grid place-items-center overflow-hidden">
                  <img src={c.img} alt={c.name} className="h-full w-full object-contain p-2" loading="lazy" width={640} height={640} />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-white/80 px-2 py-1 font-semibold">{c.lang}</span>
                  <span className="rounded-full bg-primary/15 text-primary px-2 py-1 font-bold">{c.level}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">{c.name}</h3>
                <p className="text-sm font-semibold text-foreground/60">✿ {c.tag}</p>
                <p className="mt-2 text-sm text-foreground/75">{c.blurb}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                  <Mic className="h-4 w-4" /> Speak now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Pick a buddy", d: "Swipe through your roster. Each one speaks a different language at a different level." },
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
        <div className="card-cozy rounded-[2.5rem] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Gacha wardrobe</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">
              Collect them. Dress them. Chat with them.
            </h2>
            <p className="mt-4 text-foreground/70 text-lg">
              Spend gems on the wish banner to pull rare characters and outfits. Every buddy has seasonal
              looks, backstories, and unlockable dialogue — because vocab sticks better when there's
              something to unlock.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip icon={<Gem className="h-3.5 w-3.5 text-teal" />}>Wish banner</Chip>
              <Chip icon={<Sparkles className="h-3.5 w-3.5 text-primary" />}>Outfit sets</Chip>
              <Chip icon={<Heart className="h-3.5 w-3.5 text-primary" />}>Bond levels</Chip>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-3">
            {[charKai, charSofia, charJin, charSofia, charJin, charKai].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-white/70 border border-white grid place-items-center overflow-hidden shadow-sm"
                style={{ transform: `rotate(${(i % 2 ? -1 : 1) * (2 + (i % 3))}deg)` }}
              >
                <img src={src} alt="" className="h-full w-full object-contain p-1" loading="lazy" width={640} height={640} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Your first cozy conversation is one tap away.
        </h2>
        <p className="mt-4 text-foreground/70 text-lg">
          Join the TalkToMe HQ waitlist and be first in when the app opens.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-105 transition">
            Get early access
          </button>
        </form>
      </section>

      <footer className="relative z-10 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="" className="h-8 w-8 rounded-lg" />
            <span className="font-display font-bold text-foreground">TalkToMe HQ</span>
          </div>
          <p>© {new Date().getFullYear()} TalkToMe HQ. Made with tea and sparkles.</p>
        </div>
      </footer>
    </div>
  );
}
