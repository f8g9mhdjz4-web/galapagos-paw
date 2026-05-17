type IconName =
  | "leaf"
  | "heart"
  | "lotus"
  | "wave"
  | "paw"
  | "dog"
  | "house"
  | "cat"
  | "sun"
  | "mountain";

type NavItem = {
  label: string;
  href: string;
};

type ValueItem = {
  icon: IconName;
  label: string;
};

type ServiceItem = {
  icon: IconName;
  title: string;
  text: string;
};

type DnaItem = {
  icon: IconName;
  title: string;
};

type LocalFocusItem = {
  title: string;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const navigation: NavItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Rennes", href: "#rennes" },
  { label: "Valeurs", href: "#valeurs" },
  { label: "Contact", href: "#contact" },
];

const values: ValueItem[] = [
  { icon: "leaf", label: "Naturel" },
  { icon: "heart", label: "Amour" },
  { icon: "lotus", label: "Bien-être" },
  { icon: "wave", label: "Harmonie" },
  { icon: "paw", label: "Confiance" },
];

const services: ServiceItem[] = [
  {
    icon: "house",
    title: "Visites à domicile",
    text: "Présence douce, repas, jeux et repères rassurants.",
  },
  {
    icon: "cat",
    title: "Pet sitting chats",
    text: "Une attention tendre pour les félins sensibles et réservés.",
  },
  {
    icon: "dog",
    title: "Promenades",
    text: "Balades adaptées à l'énergie et au rythme de votre compagnon.",
  },
  {
    icon: "paw",
    title: "Garde douce",
    text: "Accompagnement calme, fiable et naturellement sécurisant.",
  },
  {
    icon: "lotus",
    title: "Soins relaxants",
    text: "Bien-être, douceur et ambiance sereine au quotidien.",
  },
  {
    icon: "heart",
    title: "Suivi personnalisé",
    text: "Un lien régulier, humain et attentif avec chaque animal.",
  },
];

const dna: DnaItem[] = [
  { icon: "leaf", title: "Naturel" },
  { icon: "heart", title: "Amour" },
  { icon: "lotus", title: "Bien-être" },
  { icon: "wave", title: "Harmonie" },
  { icon: "paw", title: "Confiance" },
];

const localFocus: LocalFocusItem[] = [
  {
    title: "Rennes & alentours",
    text: "Interventions à Rennes et autour, selon votre secteur, vos habitudes et les besoins de votre compagnon.",
  },
  {
    title: "Chiens & chats",
    text: "Garde d'animaux, visites à domicile et promenades pensées pour les routines sensibles comme pour les journées actives.",
  },
  {
    title: "Présence bienveillante",
    text: "Une approche douce, fiable et naturelle pour que votre animal reste apaisé, même pendant votre absence.",
  },
];

const localChips = [
  "Pet sitter à Rennes",
  "Garde d'animaux",
  "Visites à domicile",
  "Promenades de chiens",
  "Garde de chats",
  "Rennes & alentours",
];

const faqItems: FaqItem[] = [
  {
    question: "Proposez-vous un service de pet sitter à Rennes ?",
    answer:
      "Oui, Galápagos Paw propose un service de garde d'animaux à Rennes avec des visites à domicile, des promenades et une présence douce pour les chiens et les chats.",
  },
  {
    question: "Les visites à domicile conviennent-elles aux chats ?",
    answer:
      "Oui, les visites à domicile sont idéales pour les chats qui préfèrent garder leurs repères, leur rythme et leur environnement habituel.",
  },
  {
    question: "Pouvez-vous promener un chien régulièrement ?",
    answer:
      "Oui, les promenades peuvent être ponctuelles ou régulières, toujours adaptées à l'énergie, à l'âge et aux habitudes de votre chien.",
  },
  {
    question: "Comment se passe le premier contact ?",
    answer:
      "Un premier échange permet de comprendre vos besoins, le tempérament de votre animal, votre secteur à Rennes et l'accompagnement le plus juste.",
  },
];

function Glyph({ icon }: { icon: IconName }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "leaf":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M25 6C14 6 8 13 8 22c0 2 1 4 3 4 9 0 16-6 16-17Z" />
          <path {...shared} d="M10 23c5-4 9-8 13-13" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            {...shared}
            d="M16 26s-9-5.8-9-12.7C7 9.2 9.7 7 12.9 7c1.9 0 3.1 1 3.1 1s1.2-1 3.1-1C22.3 7 25 9.2 25 13.3 25 20.2 16 26 16 26Z"
          />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M16 7c2.4 2.3 3.9 5.1 3.9 8.3 0 3.6-1.8 6.5-3.9 9-2.1-2.5-3.9-5.4-3.9-9C12.1 12.1 13.6 9.3 16 7Z" />
          <path {...shared} d="M9 12c2.7 1.3 4.8 3.6 5.8 6.5.9 2.6.7 5-.2 7.5-2.9-1.1-5.5-2.8-7-5.3C6 18.3 6.2 15.1 9 12Z" />
          <path {...shared} d="M23 12c-2.7 1.3-4.8 3.6-5.8 6.5-.9 2.6-.7 5 .2 7.5 2.9-1.1 5.5-2.8 7-5.3C26 18.3 25.8 15.1 23 12Z" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M5 13c2.4 0 2.4-2 4.7-2 2.4 0 2.4 2 4.8 2s2.4-2 4.8-2 2.4 2 4.8 2 2.4-2 4.9-2" />
          <path {...shared} d="M5 19c2.4 0 2.4-2 4.7-2 2.4 0 2.4 2 4.8 2s2.4-2 4.8-2 2.4 2 4.8 2 2.4-2 4.9-2" />
        </svg>
      );
    case "paw":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <ellipse {...shared} cx="10" cy="10" rx="2.5" ry="3.4" />
          <ellipse {...shared} cx="16" cy="8.4" rx="2.5" ry="3.4" />
          <ellipse {...shared} cx="22" cy="10" rx="2.5" ry="3.4" />
          <ellipse {...shared} cx="7.5" cy="15.7" rx="2.2" ry="3" />
          <ellipse {...shared} cx="24.5" cy="15.7" rx="2.2" ry="3" />
          <path {...shared} d="M16 25.4c-3.6 0-6.7-2.2-6.7-5.3 0-2.8 2.6-4.8 6.7-4.8s6.7 2 6.7 4.8c0 3.1-3.1 5.3-6.7 5.3Z" />
        </svg>
      );
    case "dog":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M9 20v-5l3-4h6l3 4v5" />
          <path {...shared} d="M12 11 10 8 7 10v5" />
          <path {...shared} d="M20 11l2-3 3 2v5" />
          <path {...shared} d="M11 20v5M21 20v5M15 20v5M8 25h16" />
          <circle {...shared} cx="13.5" cy="16.2" r="0.7" />
          <circle {...shared} cx="18.5" cy="16.2" r="0.7" />
          <path {...shared} d="M15.5 17.5h1M16 17.5v1.2" />
        </svg>
      );
    case "house":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M7 14.5 16 7l9 7.5V25H7Z" />
          <path {...shared} d="M13 25v-6h6v6" />
          <path {...shared} d="M13.4 13.9c0-1.3 1.1-2.4 2.6-2.4s2.6 1.1 2.6 2.4-1.1 2.4-2.6 2.4-2.6-1.1-2.6-2.4Z" />
        </svg>
      );
    case "cat":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M10 12 8 7l4 2h8l4-2-2 5v6.5c0 4-3 7.5-6 7.5s-6-3.5-6-7.5Z" />
          <path {...shared} d="M12.2 16.4h.1M19.7 16.4h.1" />
          <path {...shared} d="M15.8 17.4h.4M16 17.6v1M11 19l-4 1M11 21l-4 0M21 19l4 1M21 21h4" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle {...shared} cx="16" cy="16" r="4.5" />
          <path {...shared} d="M16 5v3M16 24v3M5 16h3M24 16h3M8.4 8.4l2.1 2.1M21.5 21.5l2.1 2.1M23.6 8.4l-2.1 2.1M10.5 21.5l-2.1 2.1" />
        </svg>
      );
    case "mountain":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...shared} d="M4 24 12 12l4 5 4-7 8 14" />
          <path {...shared} d="m14 15 2 2 2-2" />
        </svg>
      );
  }
}

function App() {
  const baseUrl = "https://galapagos-paw.vercel.app";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#business`,
        name: "Galápagos Paw",
        description:
          "Pet sitter à Rennes pour chiens et chats. Visites à domicile, promenades, garde douce et présence bienveillante.",
        url: baseUrl,
        image: [
          `${baseUrl}/media/hero-main.jpg`,
          `${baseUrl}/media/gallery-large.png`,
          `${baseUrl}/media/contact-golden.png`,
        ],
        logo: `${baseUrl}/media/logo-symbol-black.png`,
        telephone: "+33612345678",
        email: "galapagos.paw@gmail.com",
        areaServed: [
          { "@type": "City", name: "Rennes" },
          { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
        ],
        serviceType: [
          "Pet sitting",
          "Garde d'animaux",
          "Visites à domicile",
          "Promenades de chiens",
          "Garde de chats",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page-shell__left-ribbon" aria-hidden="true" />
      <div className="page-shell__paper" aria-hidden="true" />
      <div className="page-shell__glow" aria-hidden="true" />
      <div className="page-shell__curve page-shell__curve--top" aria-hidden="true" />
      <div className="page-shell__curve page-shell__curve--middle" aria-hidden="true" />
      <div className="page-shell__curve page-shell__curve--bottom" aria-hidden="true" />
      <img
        className="page-shell__watermark"
        src="/media/logo-symbol-black.png"
        alt=""
        aria-hidden="true"
      />

      <header className="site-header">
        <a className="site-header__brand" href="#accueil">
          <img
            className="site-header__brand-mark"
            src="/media/logo-symbol-black.png"
            alt="Galápagos Paw"
          />
          <span>Galápagos Paw</span>
        </a>

        <nav className="site-header__nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="site-header__cta" href="#contact">
          Réserver une visite
        </a>
      </header>

      <main className="page-main">
        <section className="hero-panel" id="accueil">
          <div className="hero-panel__copy">
            <div className="section-kicker">
              <span className="section-kicker__paw">🐾</span>
              <span>PET SITTER À RENNES</span>
            </div>

            <div className="hero-panel__brandmark" aria-label="Galápagos Paw">
              <img
                className="hero-panel__brand-symbol"
                src="/media/logo-symbol-black.png"
                alt="Symbole Galápagos Paw"
              />
              <div className="hero-panel__brand-name">
                <span>GALÁPAGOS</span>
                <span>PAW</span>
              </div>
              <div className="hero-panel__brand-subline">
                GARDE DOUCE &amp; BIEN-ÊTRE ANIMAL
              </div>
            </div>

            <h1>Pet sitter à Rennes, avec douceur et confiance.</h1>
            <p className="hero-panel__lede">
              Garde douce, promenades, visites à domicile et bien-être animal à
              Rennes, dans un univers inspiré par les Galápagos.
            </p>
            <p className="hero-panel__subcopy">
              Une présence calme, élégante et profondément attentive pour vos
              chiens et chats.
            </p>
          </div>

          <div className="hero-panel__visual">
            <div className="hero-panel__photo-frame">
              <img
                src="/media/gallery-large.png"
                alt="Golden retriever avec Caroline"
              />
            </div>

            <div className="hero-panel__seal">
              <div className="hero-panel__seal-ring"></div>
              <img
                className="hero-panel__seal-mark"
                src="/media/logo-symbol-white.png"
                alt="Symbole Galápagos Paw"
              />
            </div>
          </div>
        </section>

        <section className="identity-strip" id="apropos">
          <div className="identity-strip__portrait">
            <img
              src="/media/contact-golden.png"
              alt="Caroline avec un golden retriever"
            />
          </div>

          <div className="identity-strip__bio">
            <div className="micro-title">QUI SUIS-JE</div>
            <h2>Carolina</h2>
            <p>
              Je suis Carolina, fondatrice de Galápagos Paw. Je crois à une
              garde d&apos;animaux plus douce, plus naturelle et plus humaine,
              où chaque compagnon est accueilli avec respect.
            </p>
            <div className="signature-mark">
              <Glyph icon="heart" />
              <span>Carolina</span>
            </div>
          </div>

          <article className="identity-strip__quote">
            <span className="identity-strip__quote-mark">“</span>
            <p>
              Je crois en une présence plus calme, naturelle et profondément
              attentive.
            </p>
            <span className="identity-strip__quote-paw">🐾</span>
          </article>

          <aside className="identity-strip__values" id="valeurs">
            <div className="micro-title">VALEURS</div>
            <ul>
              {values.map((value) => (
                <li key={value.label}>
                  <Glyph icon={value.icon} />
                  <span>{value.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="services-panel" id="services">
          <div className="section-title">
            <span className="section-title__line" />
            <h2>MES SERVICES</h2>
            <span className="section-title__line" />
          </div>

          <div className="services-panel__grid">
            {services.map((service) => (
              <article className="service-orb" key={service.title}>
                <div className="service-orb__icon">
                  <Glyph icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <span className="service-orb__rule" />
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="local-panel" id="rennes">
          <div className="local-panel__intro">
            <div>
              <div className="micro-title">RENNES & ALENTOURS</div>
              <h2>
                Une garde d&apos;animaux pensée pour Rennes, les chiens, les
                chats et leurs repères.
              </h2>
              <p>
                Galápagos Paw accompagne les familles avec des visites à
                domicile, des promenades de chiens et une présence calme à
                Rennes et dans les environs, selon disponibilité.
              </p>
            </div>

            <div className="local-panel__chips" aria-label="Services à Rennes">
              {localChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>

          <div className="local-panel__grid">
            {localFocus.map((item) => (
              <article className="local-panel__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-grid">
          <div className="brand-grid__statement-row">
            <article className="brand-grid__statement brand-grid__statement--mission">
              <span className="brand-grid__statement-label">MISSION</span>
              <p>Offrir un accompagnement tranquille, respectueux et naturel.</p>
            </article>

            <article className="brand-grid__statement brand-grid__statement--vision">
              <span className="brand-grid__statement-label">VISION</span>
              <p>Devenir une référence de bien-être animal.</p>
            </article>
          </div>

          <article className="brand-grid__mosaic" aria-label="Univers Galápagos Paw">
            <figure className="brand-grid__photo brand-grid__photo--care">
              <img
                src="/media/contact-golden.png"
                alt="Carolina avec un chien dans un moment tendre"
              />
            </figure>

            <figure className="brand-grid__photo brand-grid__photo--cats">
              <img
                src="/media/about-cats.jpg"
                alt="Carolina avec deux chats dans une ambiance douce"
              />
            </figure>

            <figure className="brand-grid__photo brand-grid__photo--seal">
              <img
                src="/media/galapagos-sealion.png"
                alt="Otarie des Galápagos sur un ponton"
              />
            </figure>

            <figure className="brand-grid__photo brand-grid__photo--journey">
              <img
                src="/media/gallery-large2.png"
                alt="Carolina avec un golden retriever en voiture"
              />
            </figure>

            <figure className="brand-grid__photo brand-grid__photo--iguana">
              <img
                src="/media/galapagos-iguana.png"
                alt="Iguane marin des Galápagos sur la plage"
              />
            </figure>

            <img
              className="brand-grid__mark brand-grid__mark--soft"
              src="/media/logo-symbol-black.png"
              alt="Symbole Galápagos Paw"
            />
          </article>
        </section>

        <section className="faq-panel" aria-labelledby="faq-title">
          <div className="section-title">
            <span className="section-title__line" />
            <h2 id="faq-title">QUESTIONS FRÉQUENTES</h2>
            <span className="section-title__line" />
          </div>

          <div className="faq-panel__grid">
            {faqItems.map((item) => (
              <article className="faq-panel__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="site-footer__brand">
          <img
            className="site-footer__brand-mark"
            src="/media/logo-symbol-black.png"
            alt="Galápagos Paw"
          />
          <strong>Galápagos Paw</strong>
          <span>GARDE DOUCE &amp; BIEN-ÊTRE ANIMAL</span>
        </div>

        <p className="site-footer__tagline">
          Inspiré en Galápagos, pensé avec douceur.
        </p>

        <div className="site-footer__meta">
          <div className="site-footer__contact">
            <a href="mailto:galapagos.paw@gmail.com">galapagos.paw@gmail.com</a>
            <a href="tel:+33612345678">07 78 17 83 69</a>
            <span>Rennes &amp; alentours</span>
          </div>

          <p className="site-footer__seo">
            Pet sitter à Rennes pour chiens et chats, visites à domicile,
            promenades et garde d&apos;animaux en douceur.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
