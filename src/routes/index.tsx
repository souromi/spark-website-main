import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import litchiAsset from "@/assets/litchi.png";
import mintMojitoAsset from "@/assets/mint-mojito.png";
import masalaJeeraAsset from "@/assets/masala-jeera.png";
import blueLagoonAsset from "@/assets/blue-lagoon.png";
import mangoBobaAsset from "@/assets/mango-boba.png";
import litchiBobaAsset from "@/assets/litchi-boba.png";
import strawberryBobaAsset from "@/assets/strawberry-boba.png";
import heroBlueLagoon from "@/assets/hero-blue-lagoon.jpg";
import heroLitchi from "@/assets/hero-litchi.jpg";
import heroMangoBoba from "@/assets/hero-mango-boba.jpg";
import heroMangoSplash from "@/assets/hero-mango-splash.jpg";
import heroMasalaJeera from "@/assets/hero-masala-jeera.jpg";
import heroMintMojito from "@/assets/hero-mint-mojito.jpg";
import heroStrawberryBoba from "@/assets/hero-strawberry-boba.jpg";
import heroLitchiBoba from "@/assets/hero-litchi-boba.jpg";
import sparkCartoon from "@/assets/animation-video.mp4";
import sparkLogoAsset from "@/assets/spark-logo.png";
import cartoonClinkAsset from "@/assets/cartoon-kids-clink.png";
import cartoonRunAsset from "@/assets/cartoon-kids-run.jpg";
import cartoonSwingAsset from "@/assets/cartoon-kid-swing.jpg";
import cartoonSparkAsset from "@/assets/cartoon-kids-spark.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const flavors = [
  {
    name: "Blue Lagoon",
    tagline: "Perfect Coolant",
    desc: "Icy citrus, an electric blue calm. Hits like a Goan breeze.",
    img: blueLagoonAsset,
    hero: heroBlueLagoon,
    bg: "bg-sky-100",
    hoverBg: "hover:bg-sky-500",
    accent: "text-sky-600",
    heroBg: "from-[#001a3d] via-[#003b8e] to-[#00b4ff]",
  },
  {
    name: "Litchi",
    tagline: "Sparkling Litchi",
    desc: "Cool monsoon nights and lychee orchards. Crisp, floral, electric.",
    img: litchiAsset,
    hero: heroLitchi,
    bg: "bg-rose-100",
    hoverBg: "hover:bg-rose-500",
    accent: "text-rose-600",
    heroBg: "from-[#3d0014] via-[#a01548] to-[#ff7fa3]",
  },
  {
    name: "Popping Boba Mango",
    tagline: "Popping Boba",
    desc: "Alphonso pulp wrapped around pop-in-your-mouth mango pearls.",
    img: mangoBobaAsset,
    hero: heroMangoBoba,
    bg: "bg-yellow-100",
    hoverBg: "hover:bg-yellow-500",
    accent: "text-yellow-700",
    heroBg: "from-[#0f2a25] via-[#1e5a4a] to-[#ff9d2e]",
  },
  {
    name: "Masala Jeera",
    tagline: "Spiced Soda",
    desc: "Roasted cumin, black salt, sharp lemon — a Banarasi galli in a glass.",
    img: masalaJeeraAsset,
    hero: heroMasalaJeera,
    bg: "bg-amber-100",
    hoverBg: "hover:bg-amber-600",
    accent: "text-amber-700",
    heroBg: "from-[#2a0e00] via-[#7a3500] to-[#ffb347]",
  },
  {
    name: "Mint Mojito",
    tagline: "Minty Soda",
    desc: "Hill-station mint and lime, fizzed up with high-voltage cool.",
    img: mintMojitoAsset,
    hero: heroMintMojito,
    bg: "bg-emerald-100",
    hoverBg: "hover:bg-emerald-600",
    accent: "text-emerald-700",
    heroBg: "from-[#001a0e] via-[#0b4a2e] to-[#7ad97a]",
  },
  {
    name: "Popping Boba Strawberry",
    tagline: "Popping Boba",
    desc: "Sun-ripened strawberries with juicy pearls that pop on every sip.",
    img: strawberryBobaAsset,
    hero: heroStrawberryBoba,
    bg: "bg-red-100",
    hoverBg: "hover:bg-red-600",
    accent: "text-red-600",
    heroBg: "from-[#3a0010] via-[#a8003a] to-[#ff4f7a]",
  },
  {
    name: "Popping Boba Litchi",
    tagline: "Popping Boba",
    desc: "Velvety litchi with a constellation of bursting pearls.",
    img: litchiBobaAsset,
    hero: heroLitchiBoba,
    bg: "bg-pink-100",
    hoverBg: "hover:bg-pink-500",
    accent: "text-pink-600",
    heroBg: "from-[#2a0028] via-[#7a2470] to-[#ff9cc8]",
  },
];

const marqueeItems = [
  "Blue Lagoon",
  "Litchi",
  "Popping Boba Mango",
  "Masala Jeera",
  "Mint Mojito",
  "Popping Boba Strawberry",
  "Popping Boba Litchi",
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sparkofficial_india?igsh=MXY3eWFzMmRvYWh5MA==",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19Aq9DEPVt/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:spark.beverage@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
];

function SparkLogo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "xl";
}) {
  const sizeCls = size === "xl" ? "h-24 sm:h-32 md:h-40" : "h-20 sm:h-24 md:h-28";
  return (
    <img
      src={sparkLogoAsset}
      alt="Spark Beverages logo"
      className={`${sizeCls} w-auto object-contain drop-shadow-[0_4px_30px_rgba(255,107,0,0.7)] ${className}`}
    />
  );
}

function Index() {
  const [active, setActive] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % flavors.length), 2800);
    return () => clearInterval(t);
  }, []);
  const current = flavors[active];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
  setSuccess(true);
  form.reset();

  setTimeout(() => {
    setSuccess(false);
  }, 3000); // hides after 3 seconds
}
   else {
    alert("Failed to send message.");
  }
};

  return (
    <div className="bg-paper font-body text-[#1a1a1a] selection:bg-spark selection:text-white overflow-x-hidden">
      {/* Nav — transparent (Sting style) */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
  <div
    className="
      flex items-center justify-between
      w-full max-w-5xl
      h-16 sm:h-20
      px-5 sm:px-10
      rounded-full
      border border-white/20
      bg-black/35
      backdrop-blur-xl
      shadow-[0_15px_40px_rgba(0,0,0,.35)]
    "
  >
    <a href="#top">
      <SparkLogo size="xl" />
    </a>

    <div className="flex items-center gap-5 sm:gap-10">
      <a
        href="#flavours"
        className="uppercase text-xs sm:text-base text-white font-semibold tracking-[2px] hover:text-orange-400 transition"
      >
        Flavours
      </a>

      <a
        href="#contact"
        className="uppercase text-xs sm:text-base text-white font-semibold tracking-[2px] hover:text-orange-400 transition"
      >
        Contact
      </a>
    </div>
  </div>
</nav>
      {/* Hero — rotating single-bottle cinematic showcase */}
      <section
        id="top"
        className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36 pb-16 px-4 bg-gradient-to-br ${current.heroBg} transition-[background] duration-700`}
      >
        {/* Background sparks/bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className="absolute bottom-0 size-2 rounded-full bg-white/40"
              style={{
                left: `${(i * 47) % 100}%`,
                animation: `bubble-rise ${4 + (i % 5)}s ease-in ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <h1 className="font-display text-[28vw] leading-none text-white/[0.06] uppercase italic text-center">
            Spark
          </h1>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
          {/* Rotating cinematic bottle */}
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-spark/25 blur-3xl rounded-full" />
            <div className="relative w-[70vw] max-w-[420px] sm:max-w-[480px] aspect-[3/4] rounded-[2rem] overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/50">
              {flavors.map((f, i) => (
                <img
                  key={f.name}
                  src={f.hero}
                  alt={`Spark ${f.name} bottle hero`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? "opacity-100 animate-[bottle-glow_2.6s_ease-in-out_infinite]" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>

          {/* Flavor pip indicators */}
          <div className="mt-6 flex gap-2">
            {flavors.map((f, i) => (
              <button
                key={f.name}
                onClick={() => setActive(i)}
                aria-label={`Show ${f.name}`}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-spark" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>

          <div className="mt-6 text-center max-w-3xl">
            <div className="text-spark text-xs font-bold uppercase tracking-[0.3em]">
              {current.tagline}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-balance leading-[0.9] italic uppercase text-white mt-2">
              {current.name}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-md mx-auto">
              {current.desc}
            </p>
            <a
              href="#flavors"
              className="inline-block mt-8 px-10 py-4 bg-spark text-white font-display text-lg sm:text-xl rounded-full hover:scale-105 transition-transform shadow-lg shadow-spark/40"
            >
              Experience the Fizz
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-crate py-4 overflow-hidden border-y border-black/20">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] ">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center px-6 shrink-0">
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-12">
                  <span className="font-display text-white/25 text-3xl sm:text-4xl uppercase italic">
                    {item}
                  </span>
                  <span className="size-2 bg-spark rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Flavors */}
      <section id="flavors" className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-spark text-xs font-bold uppercase tracking-widest">
                The Lineup
              </span>
              <h2 className="font-display text-5xl sm:text-6xl italic uppercase text-crate mt-2 leading-none">
                Pick your <span className="text-spark">spark.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-crate/60 max-w-md text-pretty">
              Seven bottled moments. From the heat of a Nagpur afternoon to the breeze on a Mumbai
              chowpatty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {flavors.map((f, i) => (
              <article
                key={f.name}
                className={`group relative ${f.bg} ${f.hoverBg} rounded-[2rem] p-6 sm:p-8 overflow-hidden flex flex-col h-[540px] border border-black/5 transition-colors duration-500`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${f.accent} group-hover:text-white/80 transition-colors`}
                    >
                      {f.tagline}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl uppercase italic mt-2 text-crate group-hover:text-white transition-colors leading-[0.95] break-words">
                      {f.name}
                    </h3>
                  </div>
                  <div className="mt-auto pt-6">
                    <p className="text-crate/80 group-hover:text-white/85 transition-colors mb-5 text-sm sm:text-base">
                      {f.desc}
                    </p>
                    <div
                      className="w-full aspect-square bg-white/40 group-hover:bg-white/10 transition-colors rounded-2xl overflow-hidden animate-[spark-blink_2.6s_ease-in-out_infinite]"
                      style={{ animationDelay: `${(i % 7) * 0.3}s` }}
                    >
                      <img
                        src={f.img}
                        alt={`Spark ${f.name} bottle in a green wooden crate`}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 animate-[bottle-glow_2.6s_ease-in-out_infinite]"
                        style={{ animationDelay: `${(i % 7) * 0.3}s` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Childhood Cartoon Strip + Animation Video */}
      <section
        id="watch"
        className="relative bg-gradient-to-b from-paper via-[#fff4d6] to-paper py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      >
        {/* Floating mini bottles (using real product pics, scattered) */}
        <img src={litchiAsset} alt="" aria-hidden className="hidden sm:block absolute top-10 left-6 w-16 rotate-[-12deg] animate-[bottle-wave_6s_ease-in-out_infinite] opacity-90" />
        <img src={mintMojitoAsset} alt="" aria-hidden className="hidden sm:block absolute top-20 right-10 w-20 rotate-[14deg] animate-[bottle-wave_7s_ease-in-out_infinite] opacity-90" style={{ animationDelay: "1s" }} />
        <img src={blueLagoonAsset} alt="" aria-hidden className="hidden md:block absolute bottom-24 left-12 w-20 rotate-[8deg] animate-[bottle-wave_8s_ease-in-out_infinite] opacity-90" style={{ animationDelay: "2s" }} />

        <div className="max-w-6xl mx-auto text-center relative">
          <span className="text-spark text-xs font-bold uppercase tracking-widest">
            Clink &amp; Spark
          </span>
          <h2 className="font-display text-5xl sm:text-7xl italic uppercase text-crate mt-3 leading-none text-balance">
            Seven bottles. <span className="text-spark">One spark.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-crate/65 max-w-2xl mx-auto">
            Watch the whole Spark crew clink together — every touch lights up a tiny lightning
            storm.
          </p>

          {/* Spark poem */}
          <div className="mt-8 max-w-xl mx-auto px-6 py-6 rounded-2xl bg-white/60 ring-1 ring-spark/20 backdrop-blur">
            <p className="font-display italic text-crate text-lg sm:text-xl leading-relaxed">
              "Seven bottles, seven moods,
              <br />
              one golden spark, a thousand grooves.
              <br />
              Clink them close, let the magic fly —<br />a sip of Spark, a piece of sky."
            </p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.35em] text-spark">
              — The Spark Anthem
            </p>
          </div>
            {/* Cartoon collage: clink scene big, two smaller scenes flanking */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 items-center">
            <div className="md:col-span-3 rounded-[1.5rem] overflow-hidden ring-2 ring-spark/30 shadow-xl shadow-spark/10 bg-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={cartoonSwingAsset}
                alt="Cartoon kid on a swing with a Spark bottle"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-6 rounded-[2rem] overflow-hidden ring-2 ring-spark/40 shadow-2xl shadow-spark/30 bg-white relative">
              <img
                src={cartoonSparkAsset}
                alt="Cartoon kids running through a sparkling orchard with Spark bottles"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 rounded-[1.5rem] overflow-hidden ring-2 ring-spark/30 shadow-xl shadow-spark/10 bg-white rotate-[3deg] hover:rotate-0 transition-transform duration-500 relative">
              <img
                src={cartoonClinkAsset}
                alt="Two kids clinking Spark bottles with a golden spark"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Sparkle burst where the two bottles connect */}
              <div className="absolute top-[14%] left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full bg-spark/60 blur-md animate-[sparkle-burst_1.5s_ease-in-out_infinite]" />
                  <div className="absolute inset-2 rounded-full bg-white/80 blur-sm animate-[sparkle-burst_1.5s_ease-in-out_infinite_0.1s]" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-5 bg-gradient-to-t from-transparent via-spark to-white rounded-full origin-bottom animate-[sparkle-star_1.2s_ease-in-out_infinite]"
                      style={{
                        transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-12px)`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={`dot-${i}`}
                      className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-white animate-[sparkle-burst_1s_ease-in-out_infinite]"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-22px)`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cartoon clink animation video */}
          <div className="relative mt-16">
            <div className="absolute -inset-4 bg-spark/25 blur-3xl rounded-[3rem] pointer-events-none" />
            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden ring-2 ring-spark/30 shadow-2xl shadow-spark/20">
              <video
                src={sparkCartoon}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-crate/50">
              Clink. Spark. Sip. Repeat.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="bg-crate py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-4 sm:-left-10 text-spark/20 pointer-events-none">
              <div className="font-display text-7xl sm:text-9xl italic uppercase">Soul</div>
            </div>
            <div className="relative w-full aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden ring-1 ring-white/10">
              <img
                src={heroMangoSplash}
                alt="Spark Mango Boba cinematic bottle"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-white order-1 md:order-2">
            <div className="inline-block px-4 py-1 border border-spark/40 rounded-full text-spark text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8">
              Our Story
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl italic uppercase leading-none mb-6 sm:mb-8 text-balance">
              From <span className="text-spark">Tradition</span> To Tension.
            </h2>
            <p className="text-base sm:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 text-pretty">
              We grew up on the soul of Indian fruit drinks and the energy of modern life. Spark is
              where the warmth of a paper boat meets the power of a lightning strike. No artificial
              filler — just high-intensity flavor and the memories of your favorite summer.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10">
              <div>
                <div className="text-2xl sm:text-3xl font-display text-spark italic">100%</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-60 mt-1">
                  Real Fruit Pulp
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display text-spark italic">0%</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-60 mt-1">
                  Artificial Bull
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display text-spark italic">High</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-60 mt-1">
                  Voltage Fizz
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition / Promise Strip */}
      <div className="bg-spark py-3 flex items-center overflow-hidden border-y-2 border-crate/20">
        <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "Rich in Vitamin C",
                "Energy Boost",
                "Real Fruit Pulp",
                "Zero Synthetic Colors",
                "Stay Wild",
                "Bottled in India",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="font-display text-white text-lg sm:text-xl px-6 uppercase italic">
                    {item}
                  </span>
                  <span className="size-1.5 bg-white/60 rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-spark text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl sm:text-7xl italic uppercase text-crate mt-3 leading-[0.95] text-balance">
            Stock Spark. <br />
            Spark <span className="text-spark">Conversations.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-crate/70 max-w-xl mx-auto">
            Retail stockists, café partners, distributors, or just a hello — we read every message.
          </p>

          <form
           onSubmit={handleSubmit}
           className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left"
           >
            
          <input
           type="hidden"
           name="access_key"
           value="5d3ab80b-be33-4fc6-a710-95258dae2b85"
           />
           
            <input
             type="text"
              name="name"
               placeholder="Your name"
               required
              className="bg-white border border-crate/15 rounded-2xl px-5 py-4 font-body placeholder:text-crate/40 focus:outline-none focus:border-spark transition-colors"
            />
            <input
            type="email"
             name="email"
             placeholder="Email"
             required
              className="bg-white border border-crate/15 rounded-2xl px-5 py-4 font-body placeholder:text-crate/40 focus:outline-none focus:border-spark transition-colors"
            />
            <textarea
            name="message"
            placeholder="Tell us what you're looking for..."
            rows={4}
            required
              className="sm:col-span-2 bg-white border border-crate/15 rounded-2xl px-5 py-4 font-body placeholder:text-crate/40 focus:outline-none focus:border-spark transition-colors resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 mt-2 px-10 py-4 bg-crate text-white font-display text-lg italic uppercase rounded-full hover:bg-spark transition-colors"
            >
              Send the Spark →
            </button>
          </form>
          {success && (
  <p className="mt-4 text-green-600 font-bold">
    ✅ Thank you! Your message has been sent.
  </p>
)}
        </div>
      </section>

      {/* The whole family — real bottles side by side */}
      <section
        id="family"
        className="relative bg-crate py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-spark text-xs font-bold uppercase tracking-widest">
            The Whole Family
          </span>
          <h2 className="font-display text-5xl sm:text-7xl italic uppercase text-white mt-3 leading-none text-balance">
            Seven Flavors. <span className="text-spark">One Spark.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/65 max-w-2xl mx-auto">
            The real crew — every Spark, lined up and lit up.
          </p>

          <div className="relative mt-14 rounded-[2rem] sm:rounded-[3rem] px-4 py-10 sm:px-8 sm:py-14 bg-gradient-to-b from-[#0a3a30] to-[#062420] ring-1 ring-white/10 shadow-2xl shadow-spark/20 overflow-hidden">
            <div className="absolute -inset-8 bg-spark/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 items-end">
              {flavors.map((f, i) => (
                <div
                  key={f.name}
                  className="relative group"
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  <div
                    className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/20 animate-[bottle-wave_5s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    <img
                      src={f.hero}
                      alt={`Spark ${f.name} real bottle`}
                      loading="lazy"
                      className="w-full aspect-[2/3] object-cover animate-[bottle-glow_2.6s_ease-in-out_infinite]"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  </div>
                  <div className="mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/80 leading-tight">
                    {f.name}
                  </div>
                </div>
              ))}
            </div>
            {/* "shelf" line */}
            <div className="relative mt-4 h-1 bg-spark/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer — Paper Boat style social circles */}
      <footer className="bg-paper pt-20 pb-12 px-4 sm:px-8 border-t border-crate/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8 mb-14">
            <SparkLogo size="xl" />
            <h4 className="font-display text-4xl sm:text-6xl italic uppercase text-crate leading-none">
              Stay <span className="text-spark">Sparked.</span>
            </h4>
            <form
              className="flex border-b-2 border-crate py-3 w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="yourname@spark.in"
                className="bg-transparent flex-grow outline-none placeholder:text-crate/30 font-display italic text-lg sm:text-xl min-w-0"
              />
              <button className="font-display uppercase text-spark tracking-widest text-sm shrink-0 ml-2">
                Join
              </button>
            </form>

            {/* Social icons arranged in a circle (paper boat style) */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] mt-4">
              {/* center label medallion */}
              <div className="absolute inset-0 m-auto w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-spark text-white flex flex-col items-center justify-center shadow-2xl shadow-spark/40 ring-4 ring-white">
                <span className="font-display italic text-2xl sm:text-3xl uppercase leading-none">
                  Say
                </span>
                <span className="font-display italic text-2xl sm:text-3xl uppercase leading-none">
                  Hi!
                </span>
              </div>
              {/* dashed orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-crate/30 animate-[splash-spin_30s_linear_infinite]" />
              {socials.map((s, i) => {
                const angle = (i / socials.length) * Math.PI * 2 - Math.PI / 2;
                const r = 110;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-crate text-white flex items-center justify-center shadow-xl shadow-crate/40 hover:bg-spark hover:scale-110 hover:-rotate-6 transition-all duration-300 ring-4 ring-white"
                  >
                    {s.icon}
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-crate/70 whitespace-nowrap">
                      {s.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-crate/10">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-crate/40">
              © 2026 Spark Beverages India — Stay Wild.
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-crate/40">
              spark.beverage@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
