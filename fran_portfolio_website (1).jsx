import React from "react";

const projects = [
  {
    title: "Civic Events Platform",
    type: "UX / Web Concept",
    description:
      "A digital concept for finding community events, workshops, and local opportunities through a clearer, more intentional browsing experience.",
    tags: ["UX", "Web", "Community"],
    visual: "CIVIC / MAP / ACCESS",
  },
  {
    title: "Dental Studio Refresh",
    type: "Website Direction",
    description:
      "A website direction for a dental office built around patient trust, simple navigation, warm visuals, and a stronger booking path.",
    tags: ["Web", "Brand", "Healthcare"],
    visual: "CARE / CLARITY / TRUST",
  },
  {
    title: "Editorial Design Experiments",
    type: "Personal Study",
    description:
      "Self-initiated explorations in typography, image rhythm, contrast, and texture, influenced by music culture and editorial design systems.",
    tags: ["Type", "Editorial", "Image"],
    visual: "TYPE / IMAGE / TENSION",
  },
  {
    title: "Visual Identity Studies",
    type: "Art Direction",
    description:
      "Moodboards and design tests exploring how color, photography, and layout can create a visual language that feels specific and memorable.",
    tags: ["Art Direction", "Mood", "Systems"],
    visual: "COLOR / SYMBOL / SYSTEM",
  },
];

const services = [
  {
    icon: "pen",
    title: "Graphic Design",
    text:
      "Social graphics, typography, layout systems, and visual concepts with a clear sense of mood and hierarchy.",
  },
  {
    icon: "screen",
    title: "Website Making",
    text:
      "Portfolio sites, landing pages, and small business websites that feel polished, structured, and easy to move through.",
  },
  {
    icon: "camera",
    title: "Visual Direction",
    text:
      "Moodboards, visual research, image direction, and creative concepts for brands, artists, and digital projects.",
  },
  {
    icon: "layers",
    title: "Creative Systems",
    text:
      "Organizing colors, type, images, and content into a visual direction that feels consistent without feeling flat.",
  },
];

const palette = {
  ink: "#171412",
  navy: "#1f2a44",
  ivory: "#f7f2e8",
  parchment: "#efe2c8",
  oxblood: "#7b1e2b",
  forest: "#243829",
  gold: "#c49a45",
};

function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "arrow") {
    return (
      <svg {...commonProps}>
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "sparkles") {
    return (
      <svg {...commonProps}>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
        <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
        <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...commonProps}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    );
  }

  if (name === "pen") {
    return (
      <svg {...commonProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    );
  }

  if (name === "screen") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg {...commonProps}>
        <path d="M14.5 5 13 3H8L6.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function Button({ children, href = "#", variant = "solid" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-[#c49a45]/40";
  const styles =
    variant === "outline"
      ? "border border-[#1f2a44] bg-transparent text-[#1f2a44] hover:bg-[#1f2a44] hover:text-[#f7f2e8]"
      : "bg-[#7b1e2b] text-[#f7f2e8] shadow-[6px_6px_0_#1f2a44] hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#1f2a44]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const accent = index % 2 === 0 ? "#c49a45" : "#7b1e2b";

  return (
    <article className="group border border-[#f7f2e8]/15 bg-[#171412] p-5 transition hover:-translate-y-1 hover:border-[#c49a45]/70">
      <div className="mb-7 flex h-60 items-end overflow-hidden bg-[#f7f2e8] p-4 text-[#171412]">
        <div className="relative h-full w-full border border-[#171412]/20 p-4">
          <div className="absolute left-4 top-4 h-10 w-10 rounded-full" style={{ backgroundColor: accent }} />
          <div className="absolute bottom-4 right-4 h-20 w-12 border-2 border-[#1f2a44]" />
          <p className="absolute bottom-4 left-4 max-w-[12rem] font-serif text-4xl uppercase leading-[0.9] tracking-tight">
            {project.visual}
          </p>
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#c49a45]">{project.type}</p>
      <h3 className="mt-3 flex items-center justify-between gap-4 font-serif text-3xl leading-none text-[#f7f2e8]">
        {project.title}
        <Icon
          name="arrow"
          className="h-5 w-5 shrink-0 text-[#c49a45] transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </h3>
      <p className="mt-5 leading-7 text-[#d8cfbf]">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-[#f7f2e8]/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#f7f2e8]/70">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="border border-[#1f2a44]/20 bg-[#f7f2e8] p-6 shadow-[8px_8px_0_#1f2a44]">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#1f2a44] text-[#f7f2e8]">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>
      <h3 className="font-serif text-2xl leading-none text-[#171412]">{service.title}</h3>
      <p className="mt-4 text-sm leading-6 text-[#3f3934]">{service.text}</p>
    </article>
  );
}

function runSmokeTests() {
  console.assert(projects.length === 4, "Expected four portfolio projects.");
  console.assert(services.length === 4, "Expected four service cards.");
  console.assert(
    projects.every((project) => project.title && project.description && project.tags.length > 0),
    "Every project should include a title, description, and tags."
  );
  console.assert(
    services.every((service) => service.icon && service.title && service.text),
    "Every service should include an icon, title, and text."
  );
  console.assert(
    palette.navy === "#1f2a44",
    "The selected navy identity color should stay consistent."
  );
  console.assert(
    palette.oxblood === "#7b1e2b",
    "The contrast accent should remain oxblood unless intentionally redesigned."
  );
  console.assert(
    !projects.some((project) => project.title.toLowerCase().includes("client")),
    "Project titles should not imply client work unless it is real."
  );
}

runSmokeTests();

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#171412]">
      <header className="sticky top-0 z-50 border-b border-[#1f2a44]/20 bg-[#f7f2e8]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-2xl tracking-tight text-[#1f2a44]">
            Fran B.
          </a>

          <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
            <a href="#work" className="hover:text-[#7b1e2b]">Work</a>
            <a href="#about" className="hover:text-[#7b1e2b]">About</a>
            <a href="#services" className="hover:text-[#7b1e2b]">What I Do</a>
            <a href="#contact" className="hover:text-[#7b1e2b]">Contact</a>
          </div>

          <button className="rounded-full border border-[#1f2a44]/30 p-2 md:hidden" aria-label="Open menu">
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-6 inline-flex w-fit items-center gap-2 border border-[#1f2a44]/25 bg-[#efe2c8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1f2a44]">
              <Icon name="sparkles" className="h-4 w-4 text-[#7b1e2b]" /> Graphic Design / Web / Art Direction
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[0.9] tracking-[-0.04em] text-[#171412] sm:text-7xl md:text-8xl">
              Visual systems with culture, contrast, and a point of view.
            </h1>

            <p className="mt-8 max-w-2xl border-l-4 border-[#c49a45] pl-5 text-lg leading-8 text-[#3f3934]">
              I design digital work that feels structured but alive: websites, graphics, and visual directions shaped by music, editorial references, cultural research, and strong visual rhythm.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#work">
                View my work <Icon name="arrow" className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#contact" variant="outline">Work with me</Button>
            </div>
          </div>

          <div className="relative">
            <div className="border border-[#1f2a44] bg-[#1f2a44] p-10 text-[#f7f2e8] shadow-[12px_12px_0_#c49a45]">
              <p className="font-serif text-6xl leading-[0.85] tracking-[-0.03em]">
                elegant
              </p>
              <p className="ml-12 mt-2 font-serif text-6xl leading-[0.85] tracking-[-0.03em] text-[#c49a45]">
                restless
              </p>
              <p className="mt-2 font-serif text-6xl leading-[0.85] tracking-[-0.03em]">
                intentional
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#7b1e2b]" />
          </div>
        </section>

        <section id="work" className="border-y border-[#1f2a44]/20 bg-[#1f2a44] px-6 py-20 text-[#f7f2e8]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c49a45]">Selected Work</p>
                <h2 className="font-serif text-5xl leading-none md:text-7xl">Selected projects.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#d8cfbf]">
                A focused selection of built work, developing concepts, and studies—showing structure, judgment, and execution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7b1e2b]">About</p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Design that makes information feel considered, not decorated.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#3f3934]">
            <p>
              I am a designer and web creator focused on digital identity, editorial systems, and visual storytelling. My work prioritizes clarity, structure, and distinction—balancing refinement with a deliberate sense of edge.
            </p>
            <p>
              With a background in criminology and sociology, I approach design through systems thinking and user behavior. This perspective informs how I organize information, shape interfaces, and build visual directions that communicate with purpose.
            </p>
            <p>
              I am currently developing projects across web design, branding, and art direction, and I am open to collaborations where design, culture, and strategy intersect.
            </p>
          </div>
        </section>

        <section id="services" className="bg-[#243829] px-6 py-20 text-[#f7f2e8]">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c49a45]">What I Do</p>
            <h2 className="mb-10 max-w-3xl font-serif text-5xl leading-none md:text-6xl">
              Creative work with structure, taste, and direction.
            </h2>
            <div className="grid gap-5 md:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="border border-[#1f2a44] bg-[#efe2c8] p-8 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#7b1e2b]">Visual Direction</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.03em]">
              Editorial structure, contemporary visual culture, and one unexpected detail.
            </h2>
          </div>
        </section>

        <section id="contact" className="border-t border-[#1f2a44]/20 px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#7b1e2b]">Contact</p>
              <h2 className="font-serif text-5xl leading-none md:text-7xl">Let’s make something with a point of view.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#3f3934]">
                Open to freelance projects, portfolio collaborations, website work, and creative direction.
              </p>
            </div>
            <Button href="mailto:your-email@example.com">
              <Icon name="mail" className="mr-2 h-4 w-4" /> Email me
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
