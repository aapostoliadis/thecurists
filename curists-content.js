(() => {
  const rootAsset = "/curists/";
  const asset = (path) => `${rootAsset}${path}`;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const services = [
    {
      number: "01",
      title: "Weddings & Baptisms",
      href: "/weddingsandbaptisms",
      image: asset("services/baptisms-weddings.png"),
      photo: asset("photos/curists-polaroid-wedding-front.jpg"),
      alt: "A wedding couple kissing inside The Curists van",
      label: "Taste",
      text:
        "Wedding and baptism moments curated with warmth, taste and intention - from welcome rituals and van styling to guest memories that feel personal to the couple, child and family.",
    },
    {
      number: "02",
      title: "Corporate Events",
      href: "/corporateevents",
      image: asset("services/corporate-events.png"),
      photo: asset("photos/curists-polaroid-van-beach.jpg"),
      alt: "The Curists van styled for a seaside celebration",
      label: "People",
      text:
        "Corporate events shaped around connection, hospitality and brand feeling - from team rituals and client receptions to launch moments that feel human, useful and memorable.",
    },
    {
      number: "03",
      title: "Private Celebrations",
      href: "/privatecelebrations",
      image: asset("services/private-celebrations.png"),
      photo: asset("photos/curists-polaroid-wedding-side.jpg"),
      alt: "A wedding couple beside The Curists van",
      label: "Feeling",
      text:
        "Private celebrations for birthdays, anniversaries and family gatherings - designed around the host, the guests and the kind of memory everyone should carry home.",
    },
  ];

  const experiences = [
    {
      number: "01",
      title: "The Curist Van",
      href: "/experiences#van",
      image: asset("experiences/the-curists-van-vw-t2.png"),
      alt: "Illustration of The Curists VW T2 van by the beach",
      label: "Van",
      text:
        "At the heart of The Curist is a reimagined Volkswagen Type 2. Not created to take you somewhere - but to bring you into the moment. Transformed into a bar, a photobooth, a space for movement and connection, it adapts to every experience we design.",
    },
    {
      number: "02",
      title: "Wellbeing Experiences",
      href: "/experiences#wellbeing",
      image: asset("experiences/the-curists-wellbeing-experiences.png"),
      alt: "Illustration of a cooking experience with handmade desserts",
      label: "Wellbeing",
      text:
        "We curate custom wellbeing experiences that reconnect you with your body, mind, and self. From yoga and movement to wine tastings, picnics, cooking and team experiences, each moment blends simple pleasure with deeper awareness.",
    },
    {
      number: "03",
      title: "Let's create something you'll feel.",
      href: "/contact",
      image: asset("experiences/the-curists-feel.png"),
      alt: "Illustration of a couple watching the sunset by the sea",
      label: "Feel",
      text: "Experiences you don't just attend - but carry with you.",
    },
  ];

  const pageNavLinks = [
    { label: "Services", href: "/services" },
    { label: "Experiences", href: "/experiences" },
    { label: "Weddings & Baptisms", href: "/weddingsandbaptisms" },
    { label: "Corporate Events", href: "/corporateevents" },
    { label: "Private Celebrations", href: "/privatecelebrations" },
    { label: "About", href: "/about" },
    { label: "Merch", href: "/merch" },
    { label: "Contact", href: "/contact" },
  ];

  const footerPolicyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const pageAliases = {
    "/cookie-policy": "/privacy-policy",
    "/general-terms-conditions": "/terms-of-service",
  };

  const internalPages = {
    "/services": {
      title: "Services",
      kicker: "Our services",
      description: "Curated services from The Curists for weddings, baptisms, corporate events and private celebrations.",
      heroImage: asset("photos/curists-polaroid-van-beach.jpg"),
      heroAlt: "The Curists van styled for a seaside celebration",
      lede:
        "Every service starts with the same question: what should this gathering feel like? From there, we shape the setting, flow, sensory details and role of the Curist Van around the people in the room.",
      panels: services.map((item) => ({
        eyebrow: item.number,
        title: item.title,
        text: item.text,
        image: item.image,
        alt: item.alt,
        href: item.href,
        linkLabel: "Explore this service",
      })),
      sections: [
        {
          title: "What we can shape",
          text:
            "A mobile bar, a photobooth, a tasting corner, a quiet pause, a welcome ritual or a visual centerpiece. We combine practical hospitality with feeling-led direction.",
          items: ["Experience concept", "Van styling and activation", "Taste moments", "Guest flow", "Supplier coordination"],
        },
      ],
      cta: {
        title: "Start with the mood.",
        text: "Tell us the occasion, the people and the memory you want to leave behind.",
        href: "/contact",
        label: "Start your journey",
      },
    },
    "/weddingsandbaptisms": {
      title: "Weddings & Baptisms",
      kicker: "Ceremonies with feeling",
      description: "Curated wedding and baptism experiences by The Curists.",
      heroImage: asset("photos/curists-polaroid-wedding-front.jpg"),
      heroAlt: "A wedding couple kissing inside The Curists van",
      lede:
        "For weddings and baptisms, The Curists becomes a soft gathering point: a beautiful welcome, a bar with character, a photobooth guests actually want to use and a memory marker for the whole day.",
      panels: [
        {
          eyebrow: "01",
          title: "A welcome that feels personal",
          text:
            "We design the first touchpoint around your story: drinks, flowers, signage, scent, music and the small gestures that tell guests they have arrived somewhere meaningful.",
          image: asset("services/baptisms-weddings.png"),
          alt: "Illustration for Curists weddings and baptisms",
        },
        {
          eyebrow: "02",
          title: "A ceremony-to-party connector",
          text:
            "The van can hold the in-between moments beautifully, from post-ceremony drinks to portraits, guest books, late-night espresso or a quiet space for a breath.",
          image: asset("photos/curists-polaroid-wedding-side.jpg"),
          alt: "A wedding couple beside The Curists van",
        },
      ],
      sections: [
        {
          title: "Proposed inclusions",
          text: "Each plan is tailored, but these are the pieces couples and families often ask us to shape.",
          items: ["Welcome drinks or signature serves", "Van styling", "Guest photobooth moment", "Timeline planning", "Baptism reception corner"],
        },
        {
          title: "Best for",
          text: "Civil weddings, destination weddings, baptisms, intimate ceremonies, wedding weekends and baptism receptions where the atmosphere matters as much as the schedule.",
        },
      ],
      related: [
        { label: "Private celebrations", href: "/privatecelebrations" },
        { label: "Experiences", href: "/experiences" },
      ],
      cta: {
        title: "Make the day feel like yours.",
        text: "Share the date, location and the kind of feeling you want guests to carry home.",
        href: "/contact",
        label: "Plan your celebration",
      },
    },
    "/corporateevents": {
      title: "Corporate Events",
      kicker: "Teams, taste, connection",
      description: "Corporate event experiences curated by The Curists.",
      heroImage: asset("services/corporate-events.png"),
      heroAlt: "Illustration for Curists corporate events",
      lede:
        "Corporate events can feel warm, human and memorable. We create brand moments, team experiences and client gatherings that replace the usual event formula with presence, taste and connection.",
      panels: [
        {
          eyebrow: "01",
          title: "Brand moments with a pulse",
          text:
            "Use the van as a mobile hospitality point, product reveal, tasting station or photo-ready brand object without letting the experience feel staged.",
          image: asset("photos/curists-polaroid-van-beach.jpg"),
          alt: "The Curists van styled for a seaside celebration",
        },
        {
          eyebrow: "02",
          title: "Team rituals people remember",
          text:
            "We can design wellbeing sessions, cooking moments, picnics, wine tastings and relaxed gatherings that give teams a real reason to connect.",
          image: asset("experiences/the-curists-wellbeing-experiences.png"),
          alt: "Illustration of a cooking experience with handmade desserts",
        },
      ],
      sections: [
        {
          title: "Formats",
          text: "Designed for events that need warmth and clarity without becoming overproduced.",
          items: ["Team offsites", "Client receptions", "Brand activations", "Launch moments", "Wellbeing days"],
        },
        {
          title: "How we work",
          text:
            "We align with your brand tone, event objective and guest profile, then build a concise experience plan with flow, styling, service and production notes.",
        },
      ],
      related: [
        { label: "Wellbeing experiences", href: "/experiences#wellbeing" },
        { label: "Contact", href: "/contact" },
      ],
      cta: {
        title: "Give the team something real.",
        text: "Tell us the objective, number of guests and the tone your brand needs.",
        href: "/contact",
        label: "Build a corporate brief",
      },
    },
    "/privatecelebrations": {
      title: "Private Celebrations",
      kicker: "Small gatherings, full feeling",
      description: "Private celebration concepts curated by The Curists.",
      heroImage: asset("services/private-celebrations.png"),
      heroAlt: "Illustration for Curists private celebrations",
      lede:
        "For birthdays, anniversaries, family gatherings and just-because moments, we create an atmosphere that feels thoughtful without becoming stiff.",
      panels: [
        {
          eyebrow: "01",
          title: "A reason to gather beautifully",
          text:
            "The Curists can shape the welcome, food and drink ritual, music cues, sensory details and van styling around the person or moment being celebrated.",
          image: asset("photos/curists-polaroid-wedding-side.jpg"),
          alt: "A wedding couple beside The Curists van",
        },
        {
          eyebrow: "02",
          title: "A centerpiece with character",
          text:
            "The van brings focus without demanding attention. It can become a bar, dessert station, memory booth, picnic anchor or quiet place to pause.",
          image: asset("experiences/the-curists-van-vw-t2.png"),
          alt: "Illustration of The Curists VW T2 van by the beach",
        },
      ],
      sections: [
        {
          title: "Celebrations we can host",
          text: "The format is flexible, as long as the intention is clear.",
          items: ["Birthdays", "Anniversaries", "Family reunions", "Garden gatherings", "Beach picnics"],
        },
        {
          title: "What makes it Curists",
          text:
            "A private celebration should feel effortless to guests and deeply considered underneath. We take care of the rhythm, look and sensory layer so the host can be present.",
        },
      ],
      related: [
        { label: "Weddings and baptisms", href: "/weddingsandbaptisms" },
        { label: "Merch", href: "/merch" },
      ],
      cta: {
        title: "Celebrate with intention.",
        text: "Bring us the reason, the guest list and the feeling. We will shape the rest.",
        href: "/contact",
        label: "Start a private brief",
      },
    },
    "/experiences": {
      title: "Experiences",
      kicker: "Van, wellbeing, taste",
      description: "The Curists experience formats, including the Curist Van and wellbeing experiences.",
      heroImage: asset("experiences/the-curists-van-vw-t2.png"),
      heroAlt: "Illustration of The Curists VW T2 van by the beach",
      lede:
        "The Curists is built around experiences you do not just attend. The van, the setting, the ritual and the sensory details work together to make people feel present.",
      panels: experiences.map((item) => ({
        eyebrow: item.number,
        title: item.title,
        text: item.text,
        image: item.image,
        alt: item.alt,
        href: item.href,
        linkLabel: item.href === "/contact" ? "Start your brief" : "Jump to this experience",
      })),
      sections: [
        {
          title: "The Curist Van",
          anchor: "van",
          text:
            "A reimagined Volkswagen Type 2 that can become a bar, a photobooth, a tasting station, a wellness corner or a quiet icon within the landscape.",
          items: ["Mobile bar", "Photobooth", "Welcome point", "Picnic anchor", "Brand object"],
        },
        {
          title: "Wellbeing Experiences",
          anchor: "wellbeing",
          text:
            "Movement, taste, conversation and slowness can be composed into one generous experience. We create yoga mornings, cooking sessions, wine tastings, team rituals and gentle retreats.",
          items: ["Yoga and movement", "Cooking and tasting", "Picnics", "Team wellbeing", "Sensory rituals"],
        },
      ],
      cta: {
        title: "Choose the feeling first.",
        text: "We will help you find the right format after we understand the people and the moment.",
        href: "/contact",
        label: "Start with a feeling",
      },
    },
    "/about": {
      title: "About The Curists",
      kicker: "Taste, people, feeling",
      description: "About The Curists and its feeling-led approach to curated experiences.",
      heroImage: asset("photos/curists-polaroid-wedding-side.jpg"),
      heroAlt: "A wedding couple beside The Curists van",
      lede:
        "The Curists exists for people who believe a gathering should be more than a pretty setting. It should carry a feeling, create connection and become a memory people can return to.",
      panels: [
        {
          eyebrow: "01",
          title: "A tourist sees. A Curist feels.",
          text:
            "We look beyond decor and logistics to ask what the moment should do for the people inside it. Calm, joy, wonder, appetite, closeness, release - that becomes the brief.",
          image: asset("experiences/the-curists-feel.png"),
          alt: "Illustration of a couple watching the sunset by the sea",
        },
        {
          eyebrow: "02",
          title: "The van is only the beginning",
          text:
            "The VW T2 gives the experience a recognizable heart, but the real work is in the curation: flow, taste, atmosphere, service, timing and detail.",
          image: asset("photos/curists-polaroid-van-beach.jpg"),
          alt: "The Curists van styled for a seaside celebration",
        },
      ],
      sections: [
        {
          title: "Our principles",
          text: "Simple rules guide every project.",
          items: ["Make it personal", "Let people feel at ease", "Use taste as memory", "Keep beauty useful", "Design the rhythm"],
        },
        {
          title: "Who we work with",
          text:
            "Couples, families, founders, teams and hosts who care about how a moment lands, not only how it photographs.",
        },
      ],
      related: [
        { label: "Services", href: "/services" },
        { label: "Experiences", href: "/experiences" },
      ],
      cta: {
        title: "Bring us the occasion.",
        text: "We will help translate it into an experience with taste, people and feeling.",
        href: "/contact",
        label: "Start your journey",
      },
    },
    "/merch": {
      title: "Curists Merch",
      kicker: "Objects for the feeling",
      description: "Proposed Curists merchandise and keepsake concepts.",
      heroImage: asset("thecurists-logo.png"),
      heroAlt: "The Curists logo",
      lede:
        "The Curists merch collection is proposed as a small set of useful, beautiful objects that extend the feeling of the experience beyond the day itself.",
      panels: [
        {
          eyebrow: "01",
          title: "The Picnic Edit",
          text:
            "A linen tote, enamel cups, cotton blanket and simple printed guide for slow outdoor gatherings.",
          image: asset("experiences/the-curists-van-vw-t2.png"),
          alt: "Illustration of The Curists VW T2 van by the beach",
        },
        {
          eyebrow: "02",
          title: "The Memory Pack",
          text:
            "Postcards, matchbooks, custom stickers and a small photo sleeve designed as take-home pieces for guests.",
          image: asset("services/private-celebrations.png"),
          alt: "Illustration for Curists private celebrations",
        },
        {
          eyebrow: "03",
          title: "The Host Kit",
          text:
            "A proposed kit with playlist card, scent cue, menu template and hosting notes for intimate celebrations.",
          image: asset("experiences/the-curists-wellbeing-experiences.png"),
          alt: "Illustration of a cooking experience with handmade desserts",
        },
      ],
      sections: [
        {
          title: "Launch direction",
          text:
            "The collection should feel restrained, useful and collectible. Objects should belong naturally in a van picnic, celebration welcome table or guest gift.",
          items: ["Small batch", "Natural materials", "Useful first", "Customizable for events"],
        },
      ],
      cta: {
        title: "Need guest keepsakes?",
        text: "We can build a merch or gifting concept around your celebration.",
        href: "/contact",
        label: "Create a keepsake brief",
      },
    },
    "/contact": {
      title: "Contact",
      kicker: "Start your journey",
      description: "Contact The Curists to start an event or experience brief.",
      heroImage: asset("photos/curists-polaroid-van-beach.jpg"),
      heroAlt: "The Curists van styled for a seaside celebration",
      layout: "contact",
      lede:
        "Tell us what you are planning, who it is for and what you want people to feel. A clear brief does not need to be polished; it just needs to be honest.",
      sections: [
        {
          title: "Helpful details",
          text: "Share what you already know. Leave the rest open.",
          items: ["Occasion and date", "Location or region", "Estimated guests", "Mood or feeling", "Services you are curious about"],
        },
      ],
      cta: {
        title: "Prefer email?",
        text: "Send a note directly and we will respond with next steps.",
        href: "mailto:hello@thecurists.com",
        label: "hello@thecurists.com",
      },
    },
    "/privacy-policy": {
      title: "Privacy Policy",
      kicker: "Privacy",
      description: "Proposed privacy policy content for The Curists.",
      heroImage: asset("thecurists-logo.png"),
      heroAlt: "The Curists logo",
      layout: "legal",
      lede:
        "This proposed privacy policy explains what The Curists may collect when you browse the site or submit an enquiry, and how that information should be handled.",
      sections: [
        {
          title: "Information we collect",
          text:
            "We may collect your name, email address, phone number, event details and any message you choose to send through a contact form or email.",
        },
        {
          title: "How we use it",
          text:
            "We use enquiry information to respond to your request, prepare a proposal, coordinate services and keep a record of project communication.",
        },
        {
          title: "Storage and sharing",
          text:
            "Personal information should only be shared with trusted collaborators when needed to plan or deliver your experience. It should not be sold.",
        },
        {
          title: "Your choices",
          text:
            "You can ask to update, export or delete your personal information by contacting hello@thecurists.com.",
        },
      ],
    },
    "/terms-of-service": {
      title: "Terms of Service",
      kicker: "Terms",
      description: "Proposed terms of service content for The Curists.",
      heroImage: asset("thecurists-logo.png"),
      heroAlt: "The Curists logo",
      layout: "legal",
      lede:
        "These proposed terms describe how enquiries, proposals, bookings and experience delivery should work for The Curists.",
      sections: [
        {
          title: "Proposals and booking",
          text:
            "A booking should be confirmed only after scope, date, location, pricing, payment schedule and cancellation terms are agreed in writing.",
        },
        {
          title: "Changes",
          text:
            "Changes to guest count, location, timing or services may affect pricing, availability and production requirements.",
        },
        {
          title: "Creative direction",
          text:
            "The Curists provides curation, styling and experience direction based on the agreed brief. Final details may adapt to venue, weather, safety and supplier constraints.",
        },
        {
          title: "Responsibility",
          text:
            "Clients are responsible for accurate event information, required venue permissions and timely approvals unless otherwise agreed.",
        },
      ],
    },
  };

  const curistsMedia = [
    {
      src: asset("photos/curists-polaroid-van-beach.jpg"),
      alt: "The Curists van styled for a seaside celebration",
    },
    {
      src: asset("photos/curists-polaroid-wedding-front.jpg"),
      alt: "A wedding couple kissing inside The Curists van",
    },
    {
      src: asset("photos/curists-polaroid-wedding-side.jpg"),
      alt: "A wedding couple beside The Curists van",
    },
    {
      src: asset("experiences/the-curists-van-vw-t2.png"),
      alt: "Illustration of The Curists VW T2 van by the beach",
    },
    {
      src: asset("services/baptisms-weddings.png"),
      alt: "Illustration for Curists weddings and baptisms",
    },
    {
      src: asset("services/corporate-events.png"),
      alt: "Illustration for Curists corporate events",
    },
    {
      src: asset("services/private-celebrations.png"),
      alt: "Illustration for Curists private celebrations",
    },
  ];

  const menuLinks = pageNavLinks;

  const setText = (element, value) => {
    if (element) element.textContent = value;
  };

  const setHtml = (element, value) => {
    if (element) element.innerHTML = value;
  };

  const setLink = (element, label, href) => {
    if (!element) return;
    element.textContent = label;
    element.href = href;
  };

  const currentPath = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return pageAliases[path] || path;
  };

  const currentPage = () => internalPages[currentPath()] || null;

  const linkMarkup = (link) => `<a href="${link.href}">${link.label}</a>`;

  const listMarkup = (items = []) => {
    if (!items.length) return "";
    return `<ul class="curists-page-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  };

  const relatedMarkup = (links = []) => {
    if (!links.length) return "";
    return `
      <nav class="curists-related" aria-label="Related pages">
        ${links.map((link) => linkMarkup(link)).join("")}
      </nav>
    `;
  };

  let scheduleLineFallbackInstalled = false;
  let updateScheduleLineFallback = () => {};

  const replacePicture = (picture, src, alt = "", loading = "lazy") => {
    if (!picture) return;
    picture.innerHTML = "";
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = loading;
    image.decoding = "async";
    picture.append(image);
  };

  const replaceLogo = () => {
    qsa(".site-logo").forEach((logo) => {
      logo.href = "/";
      logo.setAttribute("aria-label", "The Curists home");
      logo.innerHTML = `
        <img class="curists-logo-mark" src="${asset("thecurists-logo.png")}" alt="The Curists" />
      `;
    });
  };

  const replaceLegacyMedia = () => {
    let mediaIndex = 0;
    const nextMedia = () => {
      const item = curistsMedia[mediaIndex % curistsMedia.length];
      mediaIndex += 1;
      return item;
    };

    qsa("picture").forEach((picture) => {
      const currentImage = qs("img", picture);
      const currentSrc = currentImage?.getAttribute("src") || "";
      if (currentSrc.includes("/curists/")) return;
      const item = nextMedia();
      replacePicture(picture, item.src, item.alt);
    });

    qsa("img").forEach((image) => {
      const currentSrc = image.getAttribute("src") || "";
      if (currentSrc.includes("/curists/")) return;
      if (image.closest("picture")) return;
      if (image.closest(".site-logo")) return;
      const item = nextMedia();
      image.src = item.src;
      image.alt = item.alt;
      image.loading = image.loading || "lazy";
      image.decoding = "async";
    });
  };

  const updateHeaderAndMenus = () => {
    qsa(".block-cta-link .c-btn, .c-cta-mobile .c-btn").forEach((button) => {
      setLink(button, "Start your journey with The Curists", "/contact");
    });

    const overlayMenu = qs(".page-overlay__middle .menu-level-0");
    if (overlayMenu) {
      overlayMenu.innerHTML = menuLinks
        .map((link) => `<li class="menu-item"><a href="${link.href}">${link.label}</a></li>`)
        .join("");
    }

    const footerMenuBlock = qs("#block-jakarta-custommainmenufooter");
    if (footerMenuBlock) {
      footerMenuBlock.innerHTML = `
        <nav class="navigation menu--main" aria-label="Footer">
          <ul class="menu">
            ${menuLinks
        .map(
          (link) => `
            <li class="menu__item menu__item--level-1">
              <a href="${link.href}">${link.label}</a>
            </li>
          `,
        )
        .join("")}
          </ul>
        </nav>
      `;
    }

    setText(qs(".page-overlay__btm"), "Taste. People. Feeling.");
  };

  const updateHero = () => {
    setHtml(qs(".c-banner__title h1"), "<p>Experiences is the Cure</p>");
    replacePicture(
      qs(".c-banner__media picture"),
      asset("photos/curists-polaroid-van-beach.jpg"),
      "The Curists van styled for a seaside celebration",
      "eager",
    );
    const topLayer = qs(".c-banner__media-top-layer");
    if (topLayer) topLayer.hidden = true;
    setText(qs(".c-banner__scroll"), "Scroll to start your experience");
  };

  const updateServices = () => {
    qsa(".c-usp-bar__media .c-usp-bar-item").forEach((item, index) => {
      const service = services[index];
      if (!service) return;
      replacePicture(qs("picture", item), service.photo, service.alt);
      item.classList.toggle("is-visible", index === 0);
    });

    qsa(".c-usp-bar__items .c-usp-bar__item").forEach((item, index) => {
      const service = services[index];
      if (!service) return;
      setText(qs(".c-usp-bar-item__title .h3, .c-usp-bar-item__title h3", item), service.title);
      setText(qs(".c-usp-bar-item__text p", item), service.text);
      setLink(qs(".c-usp-bar-item__link a", item), "Explore", service.href);
    });
  };

  const buildCard = (item, type = "service") => `
    <article class="curists-feature-card curists-feature-card--${type}">
      <span>${item.number}</span>
      <img src="${item.image || item.photo}" alt="${item.alt}" loading="lazy" decoding="async" />
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${type === "service" ? `<a href="${item.href}">Explore</a>` : ""}
    </article>
  `;

  const buildPagePanel = (panel) => `
    <article class="curists-page-panel" ${panel.anchor ? `id="${panel.anchor}"` : ""}>
      ${panel.image ? `<img src="${panel.image}" alt="${panel.alt || ""}" loading="lazy" decoding="async" />` : ""}
      <div>
        ${panel.eyebrow ? `<span>${panel.eyebrow}</span>` : ""}
        <h2>${panel.title}</h2>
        <p>${panel.text}</p>
        ${listMarkup(panel.items)}
        ${panel.href ? `<a class="curists-inline-link" href="${panel.href}">${panel.linkLabel || "Explore"}</a>` : ""}
      </div>
    </article>
  `;

  const buildPageSection = (section) => `
    <section class="curists-page-section" ${section.anchor ? `id="${section.anchor}"` : ""}>
      <div>
        <p class="curists-kicker">${section.kicker || "Details"}</p>
        <h2>${section.title}</h2>
      </div>
      <div>
        <p>${section.text}</p>
        ${listMarkup(section.items)}
      </div>
    </section>
  `;

  const buildContactForm = () => `
    <form class="curists-contact-form" action="mailto:hello@thecurists.com" method="post" enctype="text/plain">
      <label>
        <span>Name</span>
        <input name="name" autocomplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autocomplete="email" />
      </label>
      <label>
        <span>Occasion</span>
        <select name="occasion">
          <option>Wedding or baptism</option>
          <option>Corporate event</option>
          <option>Private celebration</option>
          <option>Wellbeing experience</option>
          <option>Merch or gifting</option>
        </select>
      </label>
      <label>
        <span>What should it feel like?</span>
        <textarea name="brief" rows="6"></textarea>
      </label>
      <button type="submit">Send brief</button>
    </form>
  `;

  const installServiceCardHoverEffects = () => {
    qsa(".curists-feature-card--service").forEach((card) => {
      if (card.dataset.curistsHoverReady) return;
      card.dataset.curistsHoverReady = "true";

      const activate = () => card.classList.add("is-hovered");
      const reset = () => {
        card.classList.remove("is-hovered");
        card.style.removeProperty("--hover-rotate-x");
        card.style.removeProperty("--hover-rotate-y");
      };

      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--hover-rotate-x", `${(-y * 2.4).toFixed(2)}deg`);
        card.style.setProperty("--hover-rotate-y", `${(x * 2.4).toFixed(2)}deg`);
      });
      card.addEventListener("pointerleave", reset);
      card.addEventListener("focusin", activate);
      card.addEventListener("focusout", reset);
    });
  };

  const buildInternalPage = (page) => {
    const panels = page.panels?.length
      ? `<section class="curists-page-panel-grid">${page.panels.map((panel) => buildPagePanel(panel)).join("")}</section>`
      : "";
    const sections = page.sections?.length ? page.sections.map((section) => buildPageSection(section)).join("") : "";
    const contactForm = page.layout === "contact" ? buildContactForm() : "";
    const cta = page.cta
      ? `
        <section class="curists-page-cta">
          <div>
            <p class="curists-kicker">Next step</p>
            <h2>${page.cta.title}</h2>
          </div>
          <div>
            <p>${page.cta.text}</p>
            <a class="curists-inline-link" href="${page.cta.href}">${page.cta.label}</a>
          </div>
        </section>
      `
      : "";

    return `
      <article class="curists-internal-page curists-internal-page--${page.layout || "standard"}">
        <section class="curists-page-intro">
          <p class="curists-kicker">${page.kicker}</p>
          <h2>${page.title}</h2>
          <p>${page.lede}</p>
          ${relatedMarkup(page.related)}
        </section>
        ${panels}
        ${sections}
        ${contactForm}
        ${cta}
      </article>
    `;
  };

  const renderInternalPage = (page) => {
    document.body.classList.add("curists-internal");
    setHtml(qs(".c-banner__title h1"), `<p>${page.title}</p>`);
    setText(qs(".c-banner__scroll"), page.kicker);
    replacePicture(qs(".c-banner__media picture"), page.heroImage, page.heroAlt, "eager");
    const topLayer = qs(".c-banner__media-top-layer");
    if (topLayer) topLayer.hidden = true;

    const content = qs(".field--name-field-content.field__items");
    if (content) {
      content.innerHTML = `<div class="field__item">${buildInternalPage(page)}</div>`;
    }

    window.setTimeout(() => {
      window.ScrollTrigger?.refresh?.();
      document.body.dispatchEvent(new Event("DOMrefresh"));
    }, 200);
  };

  const installReplacementSections = () => {
    const usp = qs(".pg-usp-bar");
    if (!usp) return;

    const contentItems = qsa(".field--name-field-content.field__items > .paragraph");
    let afterUsp = false;
    contentItems.forEach((item) => {
      if (afterUsp) item.remove();
      if (item === usp) afterUsp = true;
    });

    qsa(".pg-text-media, .pg-story-selection, .pg-steps, .pg-cta, .c-logos").forEach((section) => {
      const removable = section.closest(".field--name-field-content.field__items > .paragraph") || section.closest(".paragraph") || section;
      if (removable !== usp && !usp.contains(removable)) removable.remove();
    });

    if (qs(".curists-replacement")) return;

    const replacement = document.createElement("div");
    replacement.className = "curists-replacement";
    replacement.innerHTML = `
      <section class="curists-intro-section">
        <div class="curists-section-inner curists-intro-grid">
          <div>
            <p class="curists-kicker">Taste / People / Feeling</p>
            <h2>A tourist sees.<br>A Curist feels.</h2>
            <p>
              Let us create something that feels like you. Whether you are planning a wedding,
              baptism, corporate event or personal celebration, we curate experiences with soul,
              beauty and intention.
            </p>
            <a class="curists-inline-link" href="/about">More about The Curists</a>
          </div>
          <div class="curists-photo-grid" aria-label="Curists moments">
            <img src="${asset("photos/curists-polaroid-wedding-side.jpg")}" alt="A wedding couple beside The Curists van" loading="lazy" decoding="async" />
            <img src="${asset("photos/curists-polaroid-wedding-front.jpg")}" alt="A wedding couple kissing inside The Curists van" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section class="curists-feature-section">
        <div class="curists-section-inner">
          <p class="curists-kicker">Our Services</p>
          <h2>Curated differently. Designed to be felt.</h2>
          <div class="curists-card-grid">
            ${services.map((item) => buildCard(item)).join("")}
          </div>
        </div>
      </section>

      <section class="curists-feature-section curists-feature-section-dark">
        <div class="curists-section-inner">
          <p class="curists-kicker">Curists Experiences</p>
          <h2>The feeling is the destination.</h2>
          <div class="curists-card-grid">
            ${experiences.map((item) => buildCard(item, "experience")).join("")}
          </div>
        </div>
      </section>

      <section class="curists-journey-section">
        <div class="curists-section-inner curists-journey-grid">
          <div>
            <p class="curists-kicker">Start your journey</p>
            <h2>Tell us what you want to feel.</h2>
            <p>
              Moments fade. Memories remain. Emotions stay. Start with the mood, the people,
              the reason for gathering and the kind of memory you want to create.
            </p>
            <a class="curists-inline-link" href="/contact">Start your journey</a>
          </div>
          <ol class="curists-steps-list">
            <li><strong>01</strong><span>We listen for the feeling.</span></li>
            <li><strong>02</strong><span>We curate the setting, rhythm and sensory details.</span></li>
            <li><strong>03</strong><span>The Curist Van becomes the moving centerpiece.</span></li>
            <li><strong>04</strong><span>You carry the experience with you.</span></li>
          </ol>
        </div>
      </section>
    `;

    usp.insertAdjacentElement("afterend", replacement);
  };

  const updateIntroBlock = () => {
    const block = qs(".c-text-media");
    if (!block) return;
    setHtml(qs(".c-text-media__title-large h2", block), "A tourist sees.<br>A Curist feels.");
    setText(
      qs(".c-text-media__text p", block),
      "Let us create something that feels like you. Whether you are planning a wedding, baptism, corporate event or personal celebration, we curate experiences with soul, beauty and intention.",
    );
    setLink(qs(".c-text-media__button a", block), "More about The Curists", "/about");
    replacePicture(
      qs(".c-text-media__media-large picture", block),
      asset("photos/curists-polaroid-wedding-side.jpg"),
      "A wedding couple beside The Curists van",
    );
    replacePicture(
      qs(".c-text-media__media-small picture", block),
      asset("photos/curists-polaroid-wedding-front.jpg"),
      "A wedding couple kissing inside The Curists van",
    );
  };

  const updateSchedule = () => {
    const journeyItems = [...experiences, ...services];
    const schedule = qs("#travelschedule");
    if (!schedule) return;
    schedule.classList.add("curists-scroll-line");
    setHtml(qs("#travelschedule .c-schedule__title h2"), "The feeling is the destination.");
    qsa("#travelschedule .c-schedule__item").forEach((item, index) => {
      const data = journeyItems[index % journeyItems.length];
      setText(qs(".pg-schedule-item__coordinates", item), data.number);
      setText(qs(".pg-schedule-item__location .field__item, .pg-schedule-item__location", item), data.title);
      setText(qs(".pg-schedule-item__date .field__item, .pg-schedule-item__date", item), data.label);
      replacePicture(qs(".pg-schedule-item__media picture", item), data.image || data.photo, data.alt);
    });
    qsa("#travelschedule svg path").forEach((path) => {
      path.setAttribute("stroke", "#52C7B4");
    });
    qsa("#travelschedule .c-schedule__svg-placeholder").forEach((path) => {
      path.setAttribute("stroke-opacity", "0.22");
    });
    ensureVisibleScheduleLines();
    setHtml(
      qs("#travelschedule .c-schedule__text h3"),
      "<p>Experiences you don't just attend - but carry with you.</p>",
    );
    window.setTimeout(() => {
      window.ScrollTrigger?.refresh?.();
      document.body.dispatchEvent(new Event("DOMrefresh"));
      updateScheduleLineFallback();
    }, 350);
    installScheduleLineFallback();
  };

  const ensureVisibleScheduleLines = () => {
    qsa("#travelschedule .c-schedule__item__svg svg").forEach((svg) => {
      if (qs(".curists-drawn-line", svg)) return;
      const source = qs("g path", svg) || qs(".c-schedule__svg-placeholder", svg) || qs("[data-schedule-path]", svg);
      if (!source) return;

      const line = source.cloneNode(false);
      line.classList.remove("c-schedule__svg-placeholder");
      line.classList.add("curists-drawn-line");
      line.removeAttribute("mask");
      line.removeAttribute("stroke-dasharray");
      line.removeAttribute("stroke-dashoffset");
      line.removeAttribute("stroke-opacity");
      line.removeAttribute("data-schedule-path");
      line.setAttribute("stroke", "#52C7B4");
      line.setAttribute("stroke-width", "2.8");
      line.setAttribute("fill", "none");
      line.setAttribute("aria-hidden", "true");
      line.setAttribute("vector-effect", "non-scaling-stroke");
      line.style.pointerEvents = "none";
      svg.append(line);
    });
  };

  const installScheduleLineFallback = () => {
    const drawPath = (path, viewportHeight) => {
      const trigger = path.closest("[data-schedule-item]") || path.closest("svg");
      if (!trigger || typeof path.getTotalLength !== "function") return;
      const length = Number(path.dataset.curistsPathLength || path.getTotalLength());
      path.dataset.curistsPathLength = String(length);
      const rect = trigger.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (viewportHeight * 0.72 - rect.top) / (rect.height + viewportHeight * 0.18)));
      path.style.strokeDasharray = `${length}px`;
      path.style.strokeDashoffset = `${length * (1 - progress)}px`;
      path.style.strokeLinecap = "round";
    };

    const update = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      qsa("#travelschedule [data-schedule-path]").forEach((path) => {
        drawPath(path, viewportHeight);
      });
      qsa("#travelschedule .curists-drawn-line").forEach((path) => {
        drawPath(path, viewportHeight);
      });

      qsa("#travelschedule [data-schedule-content]").forEach((content) => {
        const trigger = content.closest("[data-schedule-item]") || content;
        const rect = trigger.getBoundingClientRect();
        const active = rect.top < viewportHeight * 0.62 && rect.bottom > viewportHeight * 0.28;
        content.classList.toggle("is-active", active);
      });
    };

    updateScheduleLineFallback = update;
    if (scheduleLineFallbackInstalled) {
      update();
      return;
    }

    scheduleLineFallbackInstalled = true;
    let ticking = false;
    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.setTimeout(update, 0);
    window.setTimeout(update, 700);
  };

  const installHeaderLogoVisibility = () => {
    const logo = qs(".page-header .site-logo");
    if (!logo) return;

    const update = () => {
      const doc = document.documentElement;
      const scrollY = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 1;
      const nearTop = scrollY <= viewportHeight * 0.88;
      document.body.classList.toggle("curists-header-logo-hidden", !nearTop);
      logo.tabIndex = nearTop ? 0 : -1;
      logo.setAttribute("aria-hidden", nearTop ? "false" : "true");
    };

    let ticking = false;
    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    if (!document.body.dataset.curistsLogoVisibilityReady) {
      document.body.dataset.curistsLogoVisibilityReady = "true";
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    }

    window.setTimeout(update, 0);
    window.setTimeout(update, 450);
  };

  const installBackToTopButton = () => {
    let button = qs(".curists-back-to-top");
    if (!button) {
      button = document.createElement("button");
      button.className = "curists-back-to-top";
      button.type = "button";
      button.setAttribute("aria-label", "Back to top");
      button.setAttribute("title", "Back to top");
      button.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
      button.innerHTML = `
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      `;
      document.body.append(button);
    }

    if (!button.dataset.curistsReady) {
      button.dataset.curistsReady = "true";
      button.addEventListener("click", () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const startY = window.scrollY || document.documentElement.scrollTop || 0;
        if (reduceMotion || startY <= 0) {
          window.scrollTo(0, 0);
          return;
        }

        const duration = Math.min(1100, Math.max(520, startY * 0.16));
        const startTime = window.performance.now();
        const step = (time) => {
          const progress = Math.min(1, (time - startTime) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          window.scrollTo(0, Math.round(startY * (1 - eased)));
          if (progress < 1) {
            window.requestAnimationFrame(step);
            return;
          }
          window.scrollTo(0, 0);
        };

        window.requestAnimationFrame(step);
      });
    }

    const update = () => {
      const doc = document.documentElement;
      const scrollY = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 1;
      const pageHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const distanceFromBottom = pageHeight - (scrollY + viewportHeight);
      const nearBottom = distanceFromBottom <= Math.max(180, viewportHeight * 0.22);
      const visible = nearBottom && scrollY > 120;
      button.classList.toggle("is-visible", visible);
      button.tabIndex = visible ? 0 : -1;
      button.setAttribute("aria-hidden", visible ? "false" : "true");
    };

    let ticking = false;
    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    if (!button.dataset.curistsScrollReady) {
      button.dataset.curistsScrollReady = "true";
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    }

    window.setTimeout(update, 0);
    window.setTimeout(update, 450);
  };

  const updateCards = () => {
    const cards = [...services, ...experiences];
    qsa(".c-story-selection .c-card").forEach((card, index) => {
      const data = cards[index % cards.length];
      card.href = data.href;
      setText(qs(".c-card__title", card), data.title);
      setText(qs(".c-card__coordinates", card), data.number);
      setHtml(qs(".c-card__location", card), `<p>${data.label}</p>`);
      replacePicture(qs("picture", card), data.image || data.photo, data.alt);
      card.classList.add("curists-card");
    });

    const buttons = qsa(".c-story-selection__button a");
    setLink(buttons[0], "Explore services", "/services");
    setLink(buttons[1], "Explore experiences", "/experiences");
  };

  const updateLogosAndMarquee = () => {
    const marqueeItems = qsa(".c-marquee__title");
    setText(marqueeItems[0], "Taste / People / Feeling");
    setText(marqueeItems[1], "A tourist sees. A Curist feels.");
    setHtml(
      qs(".c-logos__text .field__item"),
      "<p><strong>Small pleasures shape how we feel.</strong> We curate the details, atmosphere and rhythm of each gathering so the experience feels personal, intentional and alive.</p>",
    );
    const logos = qs(".c-logos__logos");
    if (logos) logos.hidden = true;
  };

  const updateStepsAndCta = () => {
    setText(qs(".c-steps__title h2"), "Start your journey");
    replacePicture(
      qs(".c-steps__media picture"),
      asset("photos/curists-polaroid-van-beach.jpg"),
      "The Curists van styled for a seaside celebration",
      "eager",
    );

    const steps = [
      {
        title: "Tell us what you want to feel",
        text: "Start with the mood, the people, the reason for gathering and the kind of memory you want to create.",
      },
      {
        title: "We shape the experience",
        text: "We curate the setting, flow, sensory details and service around your wedding, baptism, corporate event or private celebration.",
      },
      {
        title: "The Curist arrives",
        text: "The reimagined Volkswagen Type 2 becomes a bar, photobooth, meeting point and moving centerpiece for the moment.",
      },
      {
        title: "You carry it with you",
        text: "Moments fade. Memories remain. Emotions stay.",
      },
    ];

    qsa(".pg-step").forEach((step, index) => {
      const data = steps[index];
      if (!data) return;
      setText(qs(".pg-step__title h2", step), data.title);
      setText(qs(".pg-step__text p", step), data.text);
    });

    setHtml(qs(".c-cta__title h2"), "Let's create something<br>you'll feel.");
    setLink(qs(".c-cta__button a"), "Start your journey", "/contact");
  };

  const socialIcon = (name) => {
    const icons = {
      instagram: `
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4A3.8 3.8 0 0 0 20 16.2V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.15-2.05a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
        </svg>
      `,
      facebook: `
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M14 8h3V4h-3c-3.25 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.25l0.75-4h-4V9.25C13 8.4 13.35 8 14 8Z" />
        </svg>
      `,
      tiktok: `
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M14.55 3c0.38 2.95 2.17 4.85 5.45 5.05v3.22a8.04 8.04 0 0 1-5.16-1.78v6.11A6.4 6.4 0 1 1 8.44 9.2c0.38 0 0.76 0.03 1.12 0.1v3.38a3.07 3.07 0 1 0 2.02 2.88V3h2.97Z" />
        </svg>
      `,
    };
    return `<span class="curists-social-icon">${icons[name] || ""}</span>`;
  };

  const updateFooter = () => {
    const footerTop = qs(".page-footer-cols__inner");
    if (footerTop) {
      footerTop.innerHTML = `
        <section class="page-footer-cols__el curists-footer-unified" aria-label="The Curists footer">
          <div class="curists-footer-logo">
            <a class="site-logo" href="/" rel="home" aria-label="The Curists home">
              <img class="curists-logo-mark" src="${asset("thecurists-logo.png")}" alt="The Curists" loading="lazy" decoding="async" />
            </a>
          </div>
          <nav class="curists-footer-links" aria-label="Footer navigation">
            ${pageNavLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
          </nav>
          <div class="curists-footer-summary">
            <p><strong>The Curists.</strong><br>Curated experiences designed to be felt.<br>Weddings, baptisms, corporate events, private celebrations and wellbeing experiences.</p>
            <div class="curists-footer-socials" aria-label="Follow The Curists">
              <a class="curists-social-button" href="https://instagram.com" target="_blank" rel="noopener">${socialIcon("instagram")}<span>Follow The Curists on Instagram</span></a>
              <a class="curists-social-button" href="https://facebook.com" target="_blank" rel="noopener">${socialIcon("facebook")}<span>Follow The Curists on Facebook</span></a>
              <a class="curists-social-button" href="https://www.tiktok.com" target="_blank" rel="noopener">${socialIcon("tiktok")}<span>Follow The Curists on Tik Tok</span></a>
            </div>
          </div>
        </section>
      `;
    }
    setText(qs(".page-footer-centered__left > div:first-child"), "\u00a92026 The Curists");
    const footerLinks = qsa(".menu--footer a");
    setLink(footerLinks[0], "Privacy Policy", "/privacy-policy");
    setLink(footerLinks[1], "Terms of Service", "/terms-of-service");
    if (footerLinks[2]) footerLinks[2].hidden = true;
    setHtml(qs(".page-footer-centered__right"), "Experience is the cure.");
  };

  const updateMetadata = (page) => {
    document.title = page ? `${page.title} - The Curists` : "The Curists - Experience is the cure";
    const description = qs('meta[name="description"]');
    if (description) {
      description.content = page?.description || "The Curists storytelling website - curated experiences designed to be felt.";
    }
    const appTitle = qs('meta[name="apple-mobile-web-app-title"]');
    if (appTitle) appTitle.content = "The Curists";
    qsa('link[rel="canonical"], link[rel="shortlink"], link[rel="alternate"][hreflang="en"]').forEach((link) => {
      link.href = window.location.origin + (page ? currentPath() : "/");
    });
  };

  const run = () => {
    const page = currentPage();
    document.body.classList.add("curists-content");
    updateMetadata(page);
    replaceLogo();
    updateHeaderAndMenus();
    if (page) {
      renderInternalPage(page);
      updateFooter();
      replaceLegacyMedia();
      installHeaderLogoVisibility();
      installBackToTopButton();
      return;
    }
    updateHero();
    updateServices();
    installReplacementSections();
    installServiceCardHoverEffects();
    updateIntroBlock();
    updateSchedule();
    updateCards();
    updateLogosAndMarquee();
    updateStepsAndCta();
    updateFooter();
    replaceLegacyMedia();
    installHeaderLogoVisibility();
    installBackToTopButton();
  };

  const applyPreviewScroll = () => {
    const value = new URLSearchParams(window.location.search).get("previewScroll");
    if (!value) return;
    const y = Number.parseInt(value, 10);
    if (!Number.isFinite(y)) return;
    window.setTimeout(() => window.scrollTo(0, y), 450);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  window.addEventListener("load", () => {
    window.setTimeout(run, 250);
    applyPreviewScroll();
  });
})();
