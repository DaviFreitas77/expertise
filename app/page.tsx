"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";

const whatsappUrl = "https://wa.me/5511940782687";

function Arrow() {
  return (
    <span aria-hidden="true" className="text-base">
      ↗
    </span>
  );
}

function Brand() {
  return (
    <span className="flex h-[50px] w-[150px] items-center">
      <img
        src="/logoex.png"
        alt="EXPERTISE — Solução em Portaria"
        className="h-[50px] w-[150px] object-contain"
      />
    </span>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M4 10h16" />
      <path d="M6 10V7l6-3 6 3v3" />
      <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path d="M3 19h18" />
    </>,
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
      <path d="M18 5h3v3" />
    </>,
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      <path d="M9 13h6" />
    </>,
    <>
      <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    <>
      <path d="M4 7h16v12H4z" />
      <path d="M8 7V5h8v2M8 12h8M8 16h5" />
    </>,
    <>
      <path d="M3 5h18v14H3z" />
      <path d="M7 9h10M7 13h6" />
      <path d="M7 19v2M17 19v2" />
    </>,
  ];

  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffd21f"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

const differences = [
  "Equipe treinada e capacitada.",
  "Segurança 24 horas, 7 dias por semana.",
  "Transparência e confiança.",
  "Atendimento personalizado.",
  "Compromisso com a qualidade.",
  "Soluções sob medida para cada condomínio.",
];

const servicePoints = [
  {
    side: "left",
    title: "Controle de acesso",
    description: "Organização da entrada e saída de pessoas no condomínio.",
  },
  {
    side: "left",
    title: "Atendimento e recepção",
    description:
      "Orientação a moradores, visitantes e prestadores de serviços.",
  },
  {
    side: "left",
    title: "Profissionais preparados",
    description: "Equipe capacitada para as rotinas de portaria.",
  },
  {
    side: "right",
    title: "Atenção aos procedimentos",
    description:
      "Cumprimento das orientações e regras de acesso estabelecidas.",
  },
  {
    side: "right",
    title: "Organização e confiança",
    description: "Atendimento responsável e organizado no dia a dia.",
  },
  {
    side: "right",
    title: "Soluções para condomínios",
    description: "Serviços alinhados às necessidades de cada local.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  const servicesRef = useRef<HTMLElement>(null);

  const whatsappContacts = [
    {
      name: "Atendimento comercial",
      description: "Orçamentos e novas propostas",
      number: "5511940782687",
    },
    {
      name: "Atendimento 02",
      description: "Fale com nossa equipe",
      number: "5511999999999",
    },
    {
      name: "Atendimento 03",
      description: "Estamos prontos para ajudar",
      number: "5511999999999",
    },
    {
      name: "Atendimento 04",
      description: "Entre em contato conosco",
      number: "5511999999999",
    },
    {
      name: "Atendimento 05",
      description: "Conte com nossa equipe",
      number: "5511999999999",
    },
  ];

  useEffect(() => {
    const section = servicesRef.current;

    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 24);
      setShowBackToTop(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let servicesObserver: IntersectionObserver | undefined;

    if (section) {
      servicesObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setServicesVisible(true);
            servicesObserver?.disconnect();
          }
        },
        { threshold: 0.2 },
      );

      servicesObserver.observe(section);
    }

    return () => {
      revealObserver.disconnect();
      servicesObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const container =
    "mx-auto w-[calc(100%-32px)] max-w-[1500px] md:w-[calc(100%-64px)]";

  return (
    <main className="overflow-hidden bg-[#0b0b0f] font-['DM_Sans'] text-white">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[72px] md:h-[82px] transition-all duration-500 ${
          headerScrolled
            ? "border-b border-[#252b30] bg-[#080a0d]/95 shadow-xl backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`${container} flex h-full items-center justify-between`}
        >
          <a href="#inicio" onClick={closeMenu}>
            <Brand />
          </a>

          <button
            className="flex flex-col gap-[5px] p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`h-[2px] w-[22px] bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-[22px] bg-white transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-[22px] bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>

          <nav
            className={`${
              menuOpen
                ? "flex translate-y-0 opacity-100 visible"
                : "invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100"
            } absolute left-0 right-0 top-[72px] flex-col gap-6 bg-[#0b0b0f] p-6 text-sm text-[#c2cad0] shadow-xl transition-all md:static md:flex md:flex-row md:items-center md:gap-[30px] md:bg-transparent md:p-0 md:shadow-none`}
          >
            {[
              ["Início", "#inicio"],
              ["Sobre nós", "#sobre"],
              ["Serviços", "#servicos"],
              ["Diferenciais", "#diferenciais"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="transition-colors hover:text-brand-yellow"
              >
                {label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-4 bg-[#ffd21f] px-5 py-3 text-xs font-bold !text-black transition hover:-translate-y-1 hover:bg-[#ffe37a]"
            >
              Contatar equipe <Arrow />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[#0b0b0f] pb-0 pt-[120px] md:pt-[164px]"
      >
        <div
          className={`${container} grid items-center gap-12 md:grid-cols-[0.86fr_1.14fr] md:gap-[77px]`}
        >
          <div className="animate-[heroRise_.8s_ease_both] pb-8 md:pb-[47px]">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />
              Solução em portaria
            </p>

            <h1 className="font-['Space_Grotesk'] text-[40px] font-semibold leading-[1.07] tracking-[-0.05em] md:text-[clamp(39px,4.7vw,62px)]">
              Mais segurança e{" "}
              <em className="not-italic text-[#ffd21f]">tranquilidade</em> para
              o seu condomínio!
            </h1>

            <div className="mt-6 h-[3px] w-[72px] bg-[#ffd21f]" />

            <p className="mt-7 max-w-[430px] text-sm leading-[1.75] text-[#b9c4cc]">
              Soluções em portaria com profissionais preparados para atender às
              necessidades do seu condomínio.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <a
                className="inline-flex items-center justify-center gap-4 bg-[#ffd21f] px-5 py-[13px] text-[11px] font-bold !text-black transition hover:-translate-y-1 hover:bg-[#ffe37a]"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Solicite um orçamento <Arrow />
              </a>

              <a
                className="border-b border-[#5b6142] pb-1 text-xs font-bold text-[#ffd21f] transition hover:border-[#ffd21f]"
                href="#servicos"
              >
                Conheça os serviços →
              </a>
            </div>
          </div>

          <div className="relative min-h-[290px] animate-[heroPhotoIn_1s_ease_both] md:min-h-[520px]">
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0f_0%,transparent_23%),url('/hero-condominio.png')] bg-cover bg-center"
              role="img"
              aria-label="Condomínio residencial moderno"
            />

            <div className="absolute bottom-4 left-0 bg-[#ffd21f] px-5 py-4 font-['Space_Grotesk'] text-sm font-semibold text-black md:bottom-[34px]">
              <span className="mr-3 text-[11px] text-[#8d7200]">01</span>
              Presença que faz diferença.
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#252b30] text-[9px] uppercase tracking-wider text-white md:text-[10px]">
          <div
            className={`${container} flex flex-wrap gap-x-6 gap-y-3 py-5 md:gap-10`}
          >
            <span>Segurança 24 horas</span>
            <span>Equipe qualificada</span>
            <span>Atendimento personalizado</span>

            <span className="md:ml-auto">
              Fale com a gente:{" "}
              <a className="text-[#ffd21f]" href={whatsappUrl}>
                (11) 94078-2687
              </a>
            </span>
          </div>
        </div>
      </section>
      {/* SOBRE NÓS */}
      <section
        id="sobre"
        className="border-b border-[#121213] bg-[#0b0b0f] py-20 md:py-[120px]"
      >
        <div
          className={`${container} grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-[115px]`}
        >
          <div
            data-reveal="image"
            className="relative h-[290px] bg-[url('/about-reception.jpg')] bg-cover bg-center saturate-75 md:h-[435px]"
          >
            <div className="absolute -right-[18px] top-[18px] h-full w-[32%] border-r-2 border-t-2 border-[#ffd21f]" />
          </div>

          <div data-reveal="up">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />
              Expertise — solução em portaria
            </p>

            <h2 className="font-['Space_Grotesk'] text-[clamp(39px,4vw,55px)] font-semibold leading-tight tracking-[-0.05em]">
              Portaria que{" "}
              <em className="not-italic text-[#ffd21f]">faz a diferença.</em>
            </h2>

            <p className="mt-7 max-w-[430px] text-sm leading-[1.8] text-white">
              Profissionais treinados e capacitados para contribuir com a
              segurança do seu condomínio, com atendimento, organização e
              comprometimento no dia a dia.
            </p>

            <div className="mt-9 flex max-w-[430px] flex-col gap-4 border-t border-[#303940] pt-5">
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#8a959d]">
                Atendimento
              </span>
              <strong className="font-['Space_Grotesk'] text-[17px] font-medium">
                Do jeito que cada condomínio precisa.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        ref={servicesRef}
        className={`border-b border-[#121213] bg-[#0b0b0f] px-0 py-20 transition-colors duration-700 md:py-[108px] ${servicesVisible ? "is-visible" : ""}`}
      >
        <div className={container}>
          <div className="mb-14 text-center" data-reveal="up">
            <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />O que fazemos
            </p>

            <h2 className="font-['Space_Grotesk'] text-[clamp(37px,4vw,55px)] font-semibold leading-tight tracking-[-0.05em]">
              Presença preparada
              <br />
              <em className="not-italic text-[#ffd21f]">
                para cuidar do acesso.
              </em>
            </h2>
          </div>

          <div className="grid items-center gap-9 md:grid-cols-[1fr_330px_1fr] md:gap-[55px]">
            {/* SERVIÇOS ESQUERDA */}
            <div className="flex flex-col gap-7 md:gap-12">
              {servicePoints
                .filter((point) => point.side === "left")
                .map((point, index) => (
                  <article
                    key={point.title}
                    data-reveal="up"
                    style={{ "--delay": `${index * 140}ms` } as CSSProperties}
                    className="group relative flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1 md:flex-row-reverse md:text-right"
                  >
                    <span className="mt-[-3px] grid h-8 w-8 shrink-0 place-items-center text-[#ffd21f] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                      <ServiceIcon index={index} />
                    </span>

                    <div>
                      <h3 className="mb-2 font-['Space_Grotesk'] text-base font-semibold text-white transition-colors group-hover:text-[#ffd21f]">
                        {point.title}
                      </h3>
                      <p className="max-w-[260px] text-[11px] leading-relaxed text-[#a0a9b0] md:ml-auto">
                        {point.description}
                      </p>
                    </div>
                  </article>
                ))}
            </div>

            {/* IMAGEM CENTRAL */}
            <div
              data-reveal="image"
              role="img"
              aria-label="Controlador de acesso uniformizado em portaria de condomínio"
              className="mx-auto h-[390px] w-full max-w-[330px] bg-[linear-gradient(180deg,transparent_58%,#f7f8f6_100%),url('/service-guard.jpg')] bg-cover bg-[52%_center] [clip-path:polygon(15%_0,85%_0,100%_100%,0_100%)] md:h-[520px]"
            />

            {/* SERVIÇOS DIREITA */}
            <div className="flex flex-col gap-7 md:gap-12">
              {servicePoints
                .filter((point) => point.side === "right")
                .map((point, index) => (
                  <article
                    key={point.title}
                    data-reveal="up"
                    style={
                      { "--delay": `${(index + 3) * 140}ms` } as CSSProperties
                    }
                    className="group relative flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="mt-[-3px] grid h-8 w-8 shrink-0 place-items-center text-[#ffd21f] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                      <ServiceIcon index={index + 3} />
                    </span>

                    <div>
                      <h3 className="mb-2 font-['Space_Grotesk'] text-base font-semibold text-white transition-colors group-hover:text-[#ffd21f]">
                        {point.title}
                      </h3>
                      <p className="max-w-[260px] text-[11px] leading-relaxed text-[#a0a9b0]">
                        {point.description}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="bg-[#0b0b0f] py-20 text-white md:py-[120px]"
      >
        <div
          className={`${container} grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-[130px]`}
        >
          <div data-reveal="up">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffd21f]">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />O nosso jeito
            </p>

            <h2 className="font-['Space_Grotesk'] text-[clamp(42px,4.5vw,60px)] font-semibold leading-tight tracking-[-0.05em]">
              Nossos
              <br />
              <em className="not-italic text-[#ffd21f]">diferenciais.</em>
            </h2>

            <p className="mt-7 max-w-[300px] text-[13px] leading-[1.7] text-[#9ca8b0]">
              Segurança, organização e tranquilidade para o seu condomínio.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-[#303940] sm:grid-cols-2">
            {differences.map((item, index) => (
              <div
                key={item}
                data-reveal="fade"
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
                className="grid min-h-[75px] grid-cols-[29px_1fr] items-center gap-3 border-b border-[#303940] py-4"
              >
                <span className="font-['Space_Grotesk'] text-[11px] text-[#ffd21f]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-xs leading-relaxed text-[#d5dde2]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER DE DESTAQUE */}
      <section className="bg-[#ffd21f] py-[72px]">
        <div
          className={`${container} flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-[45px]`}
        >
          <div data-reveal="up">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#746000]">
              <span className="h-[2px] w-6 bg-[#746000]" />
              EXPERTISE · Solução em Portaria
            </p>

            <h2 className="max-w-[690px] font-['Space_Grotesk'] text-[clamp(36px,4vw,54px)] font-semibold leading-tight tracking-[-0.05em] text-black">
              Precisando de portaria
              <br />
              para o seu condomínio?
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-black">
              Conte com uma equipe preparada para atender às necessidades do seu
              condomínio.
            </p>
          </div>

          <a
            data-reveal="fade"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-4 bg-[#0b0b0f] px-6 py-4 text-[11px] font-bold text-[#ffd21f] transition duration-300 hover:-translate-y-1 hover:bg-[#161616]"
          >
            Solicitar orçamento pelo WhatsApp <Arrow />
          </a>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="bg-[#0b0b0f] py-20 md:py-[120px]">
        <div
          className={`${container} grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-[105px]`}
        >
          {/* INFORMAÇÕES */}
          <div data-reveal="up">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />
              Entre em contato
            </p>

            <h2 className="font-['Space_Grotesk'] text-[clamp(38px,4vw,54px)] font-semibold leading-tight tracking-[-0.05em]">
              Solicite uma visita
              <br />
              <em className="not-italic text-[#ffd21f]">
                e faça seu orçamento!
              </em>
            </h2>

            <p className="mb-9 mt-6 max-w-[350px] text-[13px] leading-[1.7] text-white">
              Fale com a EXPERTISE e conheça as soluções em portaria para o seu
              condomínio.
            </p>

            <div className="border-t border-[#303940]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 border-b border-[#303940] py-4 transition hover:text-[#ffd21f]"
              >
                <small className="text-[9px] uppercase tracking-[0.14em] text-[#89949a]">
                  WhatsApp comercial
                </small>
                <strong className="text-xs">(11) 94078-2687 ↗</strong>
              </a>

              <a
                href="https://www.instagram.com/expertiseportaria/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 border-b border-[#303940] py-4 transition hover:text-[#ffd21f]"
              >
                <small className="text-[9px] uppercase tracking-[0.14em] text-[#89949a]">
                  Instagram
                </small>
                <strong className="text-xs">@expertiseportaria ↗</strong>
              </a>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <form
            data-reveal="fade"
            onSubmit={submitForm}
            className="border border-[#303940] p-6 md:p-[37px]"
          >
            {submitted ? (
              <div className="px-2 py-10 text-center">
                <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#fff2ae] text-lg text-[#876900]">
                  ✓
                </span>

                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold">
                  Solicitação preparada.
                </h3>

                <p className="mb-6 mt-4 text-[13px] leading-relaxed text-[#b9c4cc]">
                  O envio online ainda não está conectado a um backend. Para
                  receber atendimento agora, envie seus dados pelo WhatsApp.
                </p>

                <a
                  className="inline-flex items-center justify-center gap-4 bg-[#ffd21f] px-5 py-[13px] text-[11px] font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffe37a]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir WhatsApp <Arrow />
                </a>
              </div>
            ) : (
              <>
                <div className="mb-6 border-b border-[#303940] pb-6">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#ffd21f]">
                    ORÇAMENTO
                  </span>

                  <h3 className="mt-2 font-['Space_Grotesk'] text-[25px] font-semibold">
                    Conte como podemos ajudar.
                  </h3>
                </div>

                <div className="grid gap-0 sm:grid-cols-2 sm:gap-5">
                  <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                    Nome
                    <input
                      required
                      name="name"
                      placeholder="Seu nome"
                      className="w-full border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition placeholder:text-[#89949a] focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                    />
                  </label>

                  <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                    Condomínio ou empresa
                    <input
                      required
                      name="company"
                      placeholder="Nome do condomínio"
                      className="w-full border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition placeholder:text-[#89949a] focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                    />
                  </label>
                </div>

                <div className="grid gap-0 sm:grid-cols-2 sm:gap-5">
                  <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                    Telefone
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="(11) 00000-0000"
                      className="w-full border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition placeholder:text-[#89949a] focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                    />
                  </label>

                  <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                    Cidade
                    <input
                      required
                      name="city"
                      placeholder="São Paulo - SP"
                      className="w-full border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition placeholder:text-[#89949a] focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                    />
                  </label>
                </div>

                <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                  Serviço de interesse
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="w-full border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option>Portaria presencial</option>
                    <option>Controle de acesso</option>
                    <option>Recepção</option>
                    <option>Serviços gerais</option>
                    <option>Outros</option>
                  </select>
                </label>

                <label className="mb-5 flex flex-col gap-2 text-[10px] font-bold">
                  Mensagem
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full resize-y border border-[#303940] bg-[#121213] p-[13px] text-xs text-white outline-none transition placeholder:text-[#89949a] focus:border-[#ffd21f] focus:ring-2 focus:ring-[#ffd21f]/20"
                  />
                </label>

                <p className="mb-5 text-[10px] leading-relaxed text-[#89949a]">
                  Para uma resposta mais rápida, você também pode falar conosco
                  pelo WhatsApp.
                </p>

                <button
                  className="inline-flex w-full items-center justify-center gap-4 bg-[#ffd21f] px-5 py-4 text-[11px] font-bold text-black transition hover:-translate-y-1 hover:bg-[#ffe37a] sm:w-auto"
                  type="submit"
                >
                  Continuar para atendimento <Arrow />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#303940] bg-black pb-5 pt-14 text-[#d9dfe3]">
        <div
          className={`${container} grid gap-8 border-b border-[#303940] pb-12 sm:grid-cols-2 md:grid-cols-[1.2fr_0.9fr_0.7fr_1fr]`}
        >
          <a href="#inicio" className="inline-block">
            <Brand />
          </a>

          <p className="text-[11px] leading-[1.7] text-[#909da6]">
            Solução em Portaria
            <br />
            para condomínios mais seguros.
          </p>

          <nav className="flex flex-col gap-3 text-[11px]">
            <a href="#sobre" className="transition hover:text-[#ffd21f]">
              Sobre nós
            </a>
            <a href="#servicos" className="transition hover:text-[#ffd21f]">
              Serviços
            </a>
            <a href="#diferenciais" className="transition hover:text-[#ffd21f]">
              Diferenciais
            </a>
            <a href="#contato" className="transition hover:text-[#ffd21f]">
              Contato
            </a>
          </nav>

          <div className="flex flex-col gap-3 text-[11px] text-[#ffd21f]">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              (11) 94078-2687
            </a>

            <a
              href="https://www.instagram.com/expertiseportaria/"
              target="_blank"
              rel="noreferrer"
            >
              @expertiseportaria
            </a>

            <a
              href="https://www.expertiseportaria.com.br"
              target="_blank"
              rel="noreferrer"
            >
              expertiseportaria.com.br
            </a>
          </div>
        </div>

        <div
          className={`${container} flex flex-col justify-between gap-3 pt-5 text-[9px] text-[#78858e] md:flex-row`}
        >
          <span>
            © 2025 EXPERTISE — Solução em Portaria. Todos os direitos
            reservados.
          </span>

          <span>São Paulo — SP</span>
        </div>
      </footer>
      {/* BOTÃO VOLTAR AO TOPO */}

      {/* MODAL DE CONTATOS WHATSAPP */}
      {whatsAppModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          onClick={() => setWhatsAppModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-h-[600px] md:max-h-full over max-w-[600px] overflow-scroll md:overflow-hidden border border-[#343434] bg-[#101014] shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-[heroRise_.3s_ease_both]"
          >
            {/* DETALHE SUPERIOR */}
            <div className="h-[4px] w-full bg-[#ffd21f]" />

            {/* FECHAR */}
            <button
              type="button"
              onClick={() => setWhatsAppModalOpen(false)}
              aria-label="Fechar janela"
              className="absolute right-5 top-6 grid h-9 w-9 place-items-center border border-[#343434] text-xl text-white transition hover:border-[#ffd21f] hover:text-[#ffd21f]"
            >
              ×
            </button>

            <div className="p-7 sm:p-9">
              {/* ÍCONE */}
              <div className="mb-6 grid h-14 w-14 place-items-center border border-[#ffd21f]/30 bg-[#ffd21f]/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="#ffd21f"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                </svg>
              </div>

              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffd21f]">
                EXPERTISE · ATENDIMENTO
              </p>

              <h2
                id="whatsapp-modal-title"
                className="font-['Space_Grotesk'] text-[30px] font-semibold leading-tight tracking-[-0.04em] text-white"
              >
                Como podemos <span className="text-[#ffd21f]">ajudar?</span>
              </h2>

              <p className="mb-7 mt-3 text-xs leading-relaxed text-[#a0a9b0]">
                Escolha um de nossos canais de atendimento e fale diretamente
                com nossa equipe pelo WhatsApp.
              </p>

              {/* LISTA DE CONTATOS */}
              <div className="flex flex-col gap-3">
                {whatsappContacts.map((contact, index) => (
                  <a
                    key={contact.number + index}
                    href={`https://wa.me/${contact.number}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setWhatsAppModalOpen(false)}
                    className="group flex items-center gap-4 border border-[#303940] bg-[#17171c] p-4 transition-all duration-300 hover:border-[#ffd21f] hover:bg-[#202025]"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center bg-[#ffd21f]/10 text-[#ffd21f] transition group-hover:bg-[#ffd21f] group-hover:text-black">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold text-white transition group-hover:text-[#ffd21f]">
                        {contact.name}
                      </h3>
                      <p className="mt-1 text-[10px] text-[#929ba2]">
                        {contact.description}
                      </p>
                    </div>

                    <span className="text-lg text-[#ffd21f] transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-center text-[9px] tracking-wide text-[#68727a]">
                EXPERTISE — Solução em Portaria
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BOTÃO VOLTAR AO TOPO */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Voltar ao topo"
          className="fixed bottom-3 right-4 z-[100] grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#ffd21f] text-2xl font-bold text-black shadow-[0_5px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffe37a] md:bottom-8 md:right-8 cursor-pointer"
        >
          ↑
        </button>
      )}

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <button
        type="button"
        onClick={() => setWhatsAppModalOpen(true)}
        aria-label="Escolher atendimento pelo WhatsApp"
       className="fixed bottom-[62px] right-4 z-[100] grid h-11 w-11 place-items-center rounded-full bg-[#ffd21f] text-black shadow-[0_5px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffe37a] md:bottom-24 md:right-8"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        </svg>
      </button>
    </main>
  );
}
