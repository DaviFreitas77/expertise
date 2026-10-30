"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiUsers } from "react-icons/pi";
const whatsappUrl = "https://wa.me/5535991443116";

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
    description:
      "Organização da entrada e saída de moradores, visitantes e prestadores de serviços, seguindo as regras do condomínio.",
  },
  {
    side: "left",
    title: "Atendimento e recepção",
    description:
      "Atendimento cordial e orientação a moradores, visitantes e prestadores, garantindo uma recepção organizada.",
  },
  {
    side: "left",
    title: "Limpeza",
    description:
      "Serviços de limpeza e conservação de ambientes, com equipe preparada para manter os espaços higienizados, organizados e agradáveis.",
  },
  {
    side: "right",
    title: "instalação e manutenção elétrica.",
    description:
      "Execução de instalações elétricas e manutenção preventiva e corretiva, garantindo o bom funcionamento, a segurança e a eficiência dos sistemas elétricos.",
  },
  {
    side: "right",
    title: "Organização e confiança",
    description:
      "Atuação responsável e organizada, contribuindo para uma rotina mais tranquila no condomínio.",
  },
  {
    side: "right",
    title: "Soluções para condomínios",
    description:
      "Serviços adaptados à estrutura, ao fluxo de pessoas e às necessidades de cada condomínio.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

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
    function closeMenu() {
      setMenuOpen(false);
    }

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
          {/* LOGO */}
          <a href="#inicio" onClick={closeMenu} className="relative z-50">
            <Brand />
          </a>

          {/* BOTÃO MOBILE */}
          <button
            className="relative z-50 flex flex-col gap-[5px] p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-[22px] bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden items-center gap-[30px] md:flex">
            {[
              ["Início", "#inicio"],
              ["Sobre nós", "#sobre"],
              ["Serviços", "#servicos"],
              ["Diferenciais", "#diferenciais"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#c2cad0] transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            {/* BOTÃO CONTATAR EQUIPE */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-[#ffd21f] px-7 py-3 text-xs font-bold !text-black shadow-[0_5px_20px_rgba(255,210,31,0.15)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#ffe37a] hover:shadow-[0_10px_35px_rgba(255,210,31,0.3)] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />

              <span className="relative z-10">Contatar Equipe</span>

              <PiUsers
                size={18}
                strokeWidth={2.5}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </nav>
        </div>
      </header>
      {/* MENU MOBILE */}
      <nav
        className={`fixed inset-x-0 bottom-0 top-[72px] z-[45] flex flex-col bg-[#0b0b0f] px-6 pb-8 pt-8 transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        {/* LINKS */}
        <div className="flex flex-col">
          {[
            ["Início", "#inicio"],
            ["Sobre nós", "#sobre"],
            ["Serviços", "#servicos"],
            ["Diferenciais", "#diferenciais"],
          ].map(([label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-[#252525] py-5 text-[17px] font-medium text-[#c2cad0] transition-colors hover:text-white"
            >
              <span>{label}</span>

              <span className="text-[11px] font-medium tracking-widest text-[#656565] transition-colors group-hover:text-[#ffd21f]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>

        {/* BOTÃO CONTATAR EQUIPE */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          className="group relative mt-auto inline-flex w-full shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ffd21f] px-7 py-[15px] text-sm font-bold !text-black shadow-[0_5px_20px_rgba(255,210,31,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffe37a] active:translate-y-0 active:scale-[0.98]"
        >
          <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative z-10 text-xs">Contatar Equipe</span>

          <PiUsers
            size={18}
            strokeWidth={2.5}
            className="relative z-10 transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[#0b0b0f] pb-0 pt-[120px] md:pt-[224px]"
      >
        <div
          className={`${container} grid items-center gap-12 md:grid-cols-[0.86fr_1.14fr] md:gap-[77px]`}
        >
          <div className="animate-[heroRise_.8s_ease_both] pb-8 md:pb-[47px]">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-[2px] w-6 bg-[#ffd21f]" />
              Portaria & limpeza patrimonial
            </p>

            <h1 className=" text-[40px] font-semibold leading-[1.07]  md:text-[clamp(39px,4.7vw,62px)]">
              Mais segurança e{" "}
              <em className="not-italic text-[#ffd21f]">tranquilidade</em> para
              o seu condomínio!
            </h1>

            <div className="mt-6 h-[3px] w-[72px] bg-[#ffd21f]" />

            <p className="mt-7 max-w-[430px] text-base leading-[1.75] text-[#b9c4cc]">
              Soluções em portaria com profissionais preparados para atender às
              necessidades do seu condomínio.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <a
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ffd21f] px-5 py-[13px] text-sm font-bold !text-black shadow-[0_4px_14px_rgba(255,210,31,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#ffe37a] hover:shadow-[0_8px_24px_rgba(255,210,31,0.18)] active:translate-y-0 active:scale-[0.98]"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {/* Efeito de brilho */}
                <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                <span className="relative z-10">Contatar Equipe</span>

                <FaWhatsapp
                  size={20}
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:rotate-[-8deg] group-hover:scale-110"
                />
              </a>

              <a
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#454545] px-5 py-[13px] text-sm font-semibold text-[#d0d2d5] transition-all duration-300 hover:-translate-y-1 hover:border-[#777] hover:bg-white/5 hover:text-white active:translate-y-0"
                href="#servicos"
              >
                Conheça os serviços
                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
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

      {/* SOBRE NÓS */}
      <section
        id="sobre"
        className="border-b border-[#121213] bg-[#0b0b0f] py-20 md:py-[120px]"
      >
        <div
          className={`${container} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[100px]`}
        >
          {/* IMAGEM */}
          <div
            data-reveal="image"
            className="relative h-[290px] bg-[url('/about-reception.jpg')] bg-cover bg-center rounded-lg saturate-75 sm:h-[380px] lg:h-[435px]"
          >
            <div className="absolute -right-[12px] top-[12px] h-full w-[32%] border-r-2 border-t-2 border-[#ffd21f] sm:-right-[18px] sm:top-[18px]" />
          </div>

          {/* CONTEÚDO */}
          <div data-reveal="up">
            {/* BADGE */}
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4c4c4]">
              Sobre nós
            </p>

            {/* TÍTULO */}
            <h2 className="font-serif text-[clamp(34px,4vw,46px)] font-normal leading-tight tracking-tight text-white max-w-[550px]">
              Portaria que{" "}
              <em className="not-italic text-[#ffd21f]">faz a diferença.</em>
            </h2>

            {/* DESCRIÇÃO */}
            <p className="mt-7 max-w-[460px] text-base leading-[1.8] text-[#d0d2d5] md:text-[15px]">
              Profissionais treinados e capacitados para contribuir com a
              segurança do seu condomínio, oferecendo atendimento, organização e
              comprometimento no dia a dia.
            </p>

            {/* DIFERENCIAL */}
            <div className="mt-9 flex max-w-[460px] flex-col gap-4 border-t border-[#303940] pt-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a959d]">
                Nosso compromisso
              </span>

              <strong className="text-[17px] font-medium text-white">
                Do jeito que cada condomínio precisa.
              </strong>
            </div>

            {/* EXPERIÊNCIA */}
            <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-[#303940] pt-6">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-[#ffd21f]">
                  10 anos
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#a0a9b0]">
                  De experiência
                </p>
              </div>

              <div className="h-10 w-px bg-[#303940]" />

              <div>
                <p className="text-sm font-semibold text-white">
                  Atendimento personalizado
                </p>
                <p className="mt-1 text-[10px] text-[#a0a9b0]">
                  Soluções para cada condomínio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}

      <section
        id="servicos"
        ref={servicesRef}
        className={`border-b border-[#202020] bg-[#0b0b0f] px-0 py-20 transition-colors duration-700 md:py-[108px] ${
          servicesVisible ? "is-visible" : ""
        }`}
      >
        <div className={container}>
          {/* CABEÇALHO */}
          <div
            className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end"
            data-reveal="up"
          >
            <div>
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4c4c4]">
                Áreas de atuação
              </p>

              <h2 className="font-serif text-[clamp(34px,4vw,46px)] font-normal leading-tight tracking-tight text-white">
                Áreas de Atuação
              </h2>

              <p className="mt-4 max-w-[570px] text-base leading-6 text-[#a0a9b0]">
                Conheça nossas soluções em portaria e controle de acesso,
                desenvolvidas para atender às necessidades do seu condomínio.
              </p>
            </div>

            <a
              href="#contato"
              className="group flex w-fit items-center gap-3 border-b border-white/30 pb-1 text-xs text-[#c4c4c4] transition-colors hover:border-white hover:text-white"
            >
              Ver todas as áreas
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* CARDS DE SERVIÇOS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicePoints.map((point, index) => (
              <article
                key={point.title}
                data-reveal="up"
                style={
                  {
                    "--delay": `${index * 100}ms`,
                  } as CSSProperties
                }
                className="group flex min-h-[245px] flex-col rounded-xl border border-[#252525] bg-[#151515] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-white md:p-7"
              >
                {/* ÍCONE */}
                <div className=" grid h-11 w-11  place-items-center rounded-full border border-[#39312d] text-[#b99a87] transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <ServiceIcon index={index} />
                </div>

                {/* CONTEÚDO */}
                <div className="mt-8">
                  <h3 className="mb-3 font-serif text-[19px] font-semibold text-white transition-colors duration-300 group-hover:text-[#0b0b0f]">
                    {point.title}
                  </h3>

                  <p className="max-w-[400px] text-base leading-[1.65] text-[#a0a9b0] transition-colors duration-300 group-hover:text-[#555]">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
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
          <div>
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4c4c4]">
              O nosso jeito
            </p>

            <h2 className="font-serif text-[clamp(34px,4vw,46px)] font-normal leading-tight tracking-tight text-white">
              Nossos diferenciais
            </h2>

            <p className="mt-4 max-w-[440px] text-base leading-6 text-[#a0a9b0]">
              Segurança, organização e tranquilidade para o seu condomínio, com
              profissionais preparados eatendimento de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-[#303940] sm:grid-cols-2">
            {differences.map((item, index) => (
              <div
                key={item}
                data-reveal="fade"
                style={
                  {
                    "--delay": `${index * 70}ms`,
                  } as CSSProperties
                }
                className="group grid min-h-[85px] grid-cols-[32px_1fr] items-center gap-3 border-b border-[#303940] py-5 transition-colors duration-300 hover:border-[#ffd21f]"
              >
                <span className="text-[11px] font-medium tabular-nums text-[#ffd21f] transition-transform duration-300 group-hover:translate-x-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[13px] leading-relaxed text-[#d5dde2] transition-colors duration-300 group-hover:text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-[#0b0b0f] py-20 md:py-[120px] border-t border-[#303940]"
      >
        <div
          className={`${container} grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-[105px]`}
        >
          {/* INFORMAÇÕES */}
          <div data-reveal="up">
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4c4c4]">
              Entre em contato
            </p>

            <h2 className="font-serif text-[clamp(34px,4vw,46px)] font-normal leading-tight tracking-tight text-white">
              Solicite uma visita{" "}
              <em className="not-italic text-[#ffd21f]">
                {" "}
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
            className="border border-[#303940] p-6 md:p-[37px] rounded-xl"
          >
            {submitted ? (
              <div className="px-2 py-10 text-center">
                <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#fff2ae] text-lg text-[#876900]">
                  ✓
                </span>

                <h3 className="text-2xl font-semibold">
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
                  <h3 className="mt-2 text-[25px] font-normal leading-tight tracking-tight">
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
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ffd21f] px-5 py-[13px] text-sm font-bold text-black shadow-[0_4px_14px_rgba(255,210,31,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#ffe37a] hover:shadow-[0_8px_24px_rgba(255,210,31,0.18)] active:translate-y-0 active:scale-[0.98] sm:w-auto cursor-pointer"
                  type="submit"
                >
                  {/* Efeito de brilho */}
                  <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                  <span className="relative z-10">
                    Continuar para atendimento
                  </span>

                  <FaArrowRight
                    size={14}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-[#303940] bg-[#080a0d] pb-6 pt-14 text-[#d9dfe3]">
        <div
          className={`${container} grid gap-10 border-b border-[#303940] pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.3fr]`}
        >
          {/* MARCA */}
          <div className="flex flex-col items-start gap-5">
            <a href="#inicio" className="inline-block">
              <Brand />
            </a>

            <p className="max-w-[260px] text-sm leading-7 text-[#909da6]">
              Soluções profissionais em portaria e limpeza patrimonial para
              condomínios.
            </p>

            <a
              href="https://www.instagram.com/expertiseportaria/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#ffd21f] transition hover:text-[#ffe37a]"
            >
              @expertiseportaria
            </a>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Navegação
            </h3>

            <nav className="flex flex-col gap-4 text-sm text-[#909da6]">
              <a href="#inicio" className="transition hover:text-[#ffd21f]">
                Início
              </a>
              <a href="#sobre" className="transition hover:text-[#ffd21f]">
                Sobre nós
              </a>
              <a href="#servicos" className="transition hover:text-[#ffd21f]">
                Serviços
              </a>
              <a
                href="#diferenciais"
                className="transition hover:text-[#ffd21f]"
              >
                Diferenciais
              </a>
              <a href="#contato" className="transition hover:text-[#ffd21f]">
                Contato
              </a>
            </nav>
          </div>

          {/* CONTATOS */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Fale com nossa equipe
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Daniel", "(35) 99144-3116"],
                ["Juliana", "(11) 95757-8188"],
                ["Ivan", "(11) 95757-8317"],
                ["Angela", "(11) 95757-6192"],
                ["Willam", "(11) 94014-1578"],
              ].map(([name, phone]) => (
                <a
                  key={name}
                  href={`https://wa.me/55${phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs text-[#78858e]">{name}</span>
                  <span className="text-sm text-[#d9dfe3] transition group-hover:text-[#ffd21f]">
                    {phone}
                  </span>
                </a>
              ))}
            </div>

            <a
              href="https://www.expertiseportaria.com.br"
              target="_blank"
              rel="noreferrer"
              className="mt-1 w-fit text-sm text-[#ffd21f] transition hover:text-[#ffe37a]"
            >
              expertiseportaria.com.br →
            </a>
          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div
          className={`${container} flex flex-col justify-between gap-4 pt-6 text-[10px] text-[#78858e] md:flex-row md:items-center`}
        >
          <span>
            © 2026 EXPERTISE PORTARIA & LIMPEZA PATRIMONIAL. Todos os direitos
            reservados.
          </span>

          <span>CNPJ: 29.593.962/0001-83</span>
        </div>
      </footer>

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
            className="relative max-h-[85dvh] w-full max-w-[600px] overflow-y-auto border border-[#343434] bg-[#101014] shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-[heroRise_.3s_ease_both]"
          >
            {/* DETALHE SUPERIOR */}
            <div className="sticky top-0 z-10 h-[4px] w-full bg-[#ffd21f]" />

            {/* FECHAR */}
            <button
              type="button"
              onClick={() => setWhatsAppModalOpen(false)}
              aria-label="Fechar janela"
              className="absolute right-5 top-6 z-20 grid h-9 w-9 place-items-center border border-[#343434] text-xl text-white transition hover:border-[#ffd21f] hover:text-[#ffd21f]"
            >
              ×
            </button>

            <div className="p-6 sm:p-9">
              {/* ÍCONE WHATSAPP */}
              <div className="mb-6 grid h-14 w-14 place-items-center border border-[#ffd21f]/30 bg-[#ffd21f]/10">
                <FaWhatsapp className="h-7 w-7 text-[#ffd21f]" />
              </div>

              {/* TÍTULO */}
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffd21f]">
                EXPERTISE · ATENDIMENTO
              </p>

              <h2
                id="whatsapp-modal-title"
                className="text-[30px] font-semibold leading-tight tracking-[-0.04em] text-white"
              >
                Como podemos <span className="text-[#ffd21f]">ajudar?</span>
              </h2>

              <p className="mb-7 mt-3 text-xs leading-relaxed text-[#a0a9b0]">
                Escolha um de nossos canais de atendimento e fale diretamente
                com nossa equipe pelo WhatsApp.
              </p>

              {/* LISTA DE CONTATOS */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    name: "Daniel",
                    number: "5535991443116",
                    description: "(35) 99144-3116",
                  },
                  {
                    name: "Juliana",
                    number: "5511957578188",
                    description: "(11) 95757-8188",
                  },
                  {
                    name: "Ivan",
                    number: "5511957578317",
                    description: "(11) 95757-8317",
                  },
                  {
                    name: "Angela",
                    number: "5511957576192",
                    description: "(11) 95757-6192",
                  },
                  {
                    name: "Willam",
                    number: "5511940141578",
                    description: "(11) 94014-1578",
                  },
                ].map((contact) => (
                  <a
                    key={contact.number}
                    href={`https://wa.me/${contact.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setWhatsAppModalOpen(false)}
                    className="group flex min-w-0 items-center gap-3 border border-[#303940] bg-[#17171c] p-4 transition-all duration-300 hover:border-[#ffd21f] hover:bg-[#202025]"
                  >
                    {/* ÍCONE DO CONTATO */}
                    <div className="grid h-10 w-10 shrink-0 place-items-center bg-[#ffd21f]/10 text-[#ffd21f] transition group-hover:bg-[#ffd21f] group-hover:text-black">
                      <FaUser className="h-4 w-4" />
                    </div>

                    {/* INFORMAÇÕES */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold text-white transition group-hover:text-[#ffd21f]">
                        {contact.name}
                      </h3>

                      <p className="mt-1 text-[10px] text-[#929ba2]">
                        {contact.description}
                      </p>
                    </div>

                    {/* ÍCONE DE SETA */}
                    <span className="text-[#ffd21f] transition group-hover:translate-x-1">
                      <FaArrowUpRightFromSquare className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>

              {/* RODAPÉ DO MODAL */}
              <p className="mt-6 text-center text-[9px] tracking-wide text-[#68727a]">
                EXPERTISE — Solução em Portaria
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <button
        type="button"
        onClick={() => setWhatsAppModalOpen(true)}
        aria-label="Escolher atendimento pelo WhatsApp"
        className="fixed bottom-6 right-4 z-[100] grid h-15 w-15 place-items-center rounded-full bg-[#ffd21f] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffe37a] md:bottom-15 md:right-8 cursor-pointer"
      >
        <FaWhatsapp className="h-7 w-7" />
      </button>
    </main>
  );
}
