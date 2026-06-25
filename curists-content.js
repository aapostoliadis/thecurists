(() => {
  const rootAsset = "/curists/";
  const asset = (path) => `${rootAsset}${path}`;
  const logoAsset = "/logo.svg?v=instant-cache-20260621-4";
  const photo = (name) => asset(`photos/${name}`);
  const photos = {
    akisAnna10Years: photo("akis-anna-10years.jpg"),
    akisAnnaDance: photo("akis-anna-dance.jpg"),
    heroAperolSunset: photo("the-curists-hero-aperol-sunset.jpeg"),
    bachelorHats: photo("wedding-photobooth-child.jpg"),
    baptismBookTable: photo("baptism-book-table.jpg"),
    baptismCandleFamily: photo("baptism-family-scooter.jpg"),
    baptismCeremonyVows: photo("baptism-ceremony-vows.jpg"),
    baptismFamilyScooter: photo("wedding-journey-train.jpg"),
    baptismFatherHand: photo("baptism-father-hand.jpg"),
    baptismGentlemanSuitcase: photo("baptism-gentleman-suitcase.jpg"),
    baptismLittleGentleman: photo("baptism-little-gentleman.jpg"),
    corporateBrandActivation: photo("thecurists-corporate.jpg"),
    corporateBrandActivationClose: photo("curist-van-aperol-sunset.jpg"),
    corporateTeamRitual: photo("the-curists-wellbeing-experiences.jpg"),
    curistVanAperolSunset: photo("curist-van-aperol-sunset.jpg"),
    feelingCoupleBalcony: photo("wedding-run-sign.jpg"),
    weddingBoardingPass: photo("wedding-boarding-pass.jpg"),
    weddingBrandingBottle: photo("wedding-bachelor-hats.jpg"),
    weddingBrandingCakepops: photo("bachelor-hats.jpg"),
    weddingBrandingFavors: photo("wedding-branding-cakepops.jpg"),
    weddingChampagneBucket: photo("wedding-stamp-boxes.jpg"),
    weddingFlowersCandle: photo("wedding-flowers-candle.jpg"),
    weddingFoodCharcuterie: photo("wedding-food-vegetables.jpg"),
    weddingFoodNapkin: photo("wedding-branding-bottle.jpg"),
    weddingFoodVegetables: photo("wedding-food-napkin.jpg"),
    weddingGiftBoxes: photo("wedding-boarding-pass.jpg"),
    weddingGroomBouquet: photo("wedding-boy-camera.jpg"),
    weddingHandsBouquet: photo("wedding-groom-bouquet.jpg"),
    weddingJourneyTrain: photo("wedding-journey-train.jpg"),
    weddingJustMarriedCheese: photo("wedding-food-charcuterie.jpg"),
    weddingKissBlueHour: photo("wedding-kiss-blue-hour.jpg"),
    weddingMiniCooper: photo("wedding-mini-cooper.jpg"),
    weddingPhotoboothChild: photo("wedding-photobooth-child.jpg"),
    weddingPhotoshootCouple: photo("wedding-photoshoot-couple.jpg"),
    weddingPocketWatch: photo("wedding-hats-bowties.jpg"),
    weddingPresentationChef: photo("wedding-presentation-chef.jpg"),
    privateCelebrationsHero: photo("thecurists-private-celebrations.jpg"),
    servicesHero: photo("thecurists-services.jpg"),
    weddingRunSign: photo("wedding-run-sign.jpg"),
    weddingSettingBeachSign: photo("wedding-setting-beach-sign.jpg"),
    weddingSettingTrain: photo("wedding-setting-train.jpg"),
    weddingSignHands: photo("wedding-pocket-watch.jpg"),
    weddingSpiceItUpFavors: photo("wedding-setting-beach-sign.jpg"),
    weddingStartYourJourney: photo("wedding-start-your-journey.jpg"),
    weddingTableBeach: photo("wedding-table-beach.jpg"),
    weddingTableBeachPortrait: photo("wedding-table-beach-portrait.jpg"),
    weddingTableSeasideDusk: photo("wedding-table-seaside-dusk.jpg"),
    weddingVanCoupleView: photo("wedding-van-couple-view.jpg"),
    wellbeingExperiences: photo("the-curists-wellbeing-experiences.jpg"),
  };
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const svgNamespace = "http://www.w3.org/2000/svg";
  const xlinkNamespace = "http://www.w3.org/1999/xlink";

  const services = [
    {
      number: "01",
      title: "Weddings & Baptisms",
      href: "/weddingsandbaptisms",
      image: photos.weddingHandsBouquet,
      photo: photos.baptismFamilyScooter,
      alt: "A wedding couple holding hands beside a pink and lavender bouquet",
      photoAlt: "A baptism family gathered around a decorated blue scooter",
      label: "Taste",
      text:
        "Weddings and baptisms curated as emotional experiences - from welcome drinks and van styling to photobooth moments, guest flow and the small gestures people carry home.",
    },
    {
      number: "02",
      title: "Corporate Events",
      href: "/corporateevents",
      image: photos.corporateBrandActivation,
      photo: photos.corporateBrandActivationClose,
      alt: "The Curists van styled for a corporate client reception on a city terrace",
      photoAlt: "The Curists van configured as a branded Aperol Spritz tasting station",
      label: "People",
      text:
        "Corporate gatherings shaped around connection, hospitality and clear brand purpose - team experiences, client receptions, launch moments, content and media designed to feel human.",
    },
    {
      number: "03",
      title: "Private Celebrations",
      href: "/privatecelebrations",
      image: photos.weddingFoodCharcuterie,
      photo: photos.weddingTableSeasideDusk,
      alt: "A private celebration table set beside the sea at sunset",
      photoAlt: "A beachside dinner table set with glassware and white linens",
      label: "Feeling",
      text:
        "Private celebrations for birthdays, anniversaries and family gatherings - built around shared tables, sensory details, playful services and the feeling guests should remember.",
    },
  ];

  const experiences = [
    {
      number: "01",
      title: "The Curist Van",
      href: "/experiences#van",
      image: asset("photos/curist-van-aperol-sunset.jpg"),
      alt: "The Curists van transformed into an Aperol Spritz bar at sunset",
      label: "Van",
      text:
        "Not a van. A curated experience in motion. The reimagined Volkswagen Type 2 can become a mobile bar, photobooth, welcome point or space for movement and connection.",
    },
    {
      number: "02",
      title: "Wellbeing Experiences",
      href: "/experiences#wellbeing",
      image: photos.wellbeingExperiences,
      alt: "The Curists van serving wellbeing tonics during a beachside sunset session",
      label: "Wellbeing",
      text:
        "Custom wellbeing experiences that reconnect body, mind and self. Yoga, movement, picnics, wine tastings, cooking and team rituals blend simple pleasure with deeper awareness.",
    },
    {
      number: "03",
      title: "Let's create something you'll feel.",
      href: "/contact",
      image: photos.akisAnnaDance,
      alt: "A wedding couple dancing under warm evening lights",
      label: "Feel",
      text: "Experiences you don't just attend - but carry with you.",
    },
  ];

  const journeySteps = [
    {
      number: "01",
      value: "feeling",
      title: "Name the feeling",
      text: "You tell us how you want people to feel.",
      note: "Everything begins with the emotional brief: calm, playful, generous, cinematic, intimate or unexpected.",
      image: photos.weddingStartYourJourney,
      alt: "A boarding pass style invitation card on textured fabric",
      label: "Brief",
    },
    {
      number: "02",
      value: "shape",
      title: "Shape the flow",
      text: "We shape the concept, service list and guest rhythm.",
      note: "We turn the feeling into a clear route: arrival, service, timing, partners, taste and the small gestures between.",
      image: photos.weddingTableBeach,
      alt: "A beachside dinner table set with glassware and white linens",
      label: "Flow",
    },
    {
      number: "03",
      value: "details",
      title: "Layer the details",
      text: "The van, partners and sensory details support the feeling.",
      note: "The visible pieces earn their place: the van, drinks, music, flowers, food, rituals and details all serve the same mood.",
      image: photos.curistVanAperolSunset,
      alt: "The Curists van transformed into an Aperol Spritz bar at sunset",
      label: "Details",
    },
    {
      number: "04",
      value: "memory",
      title: "Leave a memory",
      text: "The experience becomes something people carry home.",
      note: "When the day is over, the work is measured by what people still remember, repeat and feel.",
      image: photos.akisAnnaDance,
      alt: "A wedding couple dancing under warm evening lights",
      label: "Memory",
    },
  ];

  const contactOccasions = [
    "Wedding or baptism",
    "Corporate event",
    "Private celebration",
    "Wellbeing experience",
    "Merch or gifting",
  ];

  const pageNavLinks = [
    { label: "Services", href: "/services" },
    { label: "Experiences", href: "/experiences" },
    { label: "Weddings & Baptisms", href: "/weddingsandbaptisms" },
    { label: "Corporate Events", href: "/corporateevents" },
    { label: "Private Celebrations", href: "/privatecelebrations" },
    { label: "About", href: "/about" },
    { label: "Start your Experience", href: "/contact" },
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
      description: "Curated event services and emotional experiences from The Curists.",
      heroImage: photos.servicesHero,
      heroAlt: "Guests gathering beside The Curists van during a curated outdoor service",
      lede:
        "Emotion first. Clarity next. We curate experiences supported by complete event services, so people understand what we do and remember how it felt.",
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
          title: "Curated experiences, complete event services",
          text:
            "The experience is emotional, but the offer is clear. We shape the concept, then support it with practical services and carefully selected premium partners.",
          items: [
            "Weddings, baptisms, corporate events and private celebrations",
            "Mobile bar experience",
            "Photobooth experience",
            "Vintage van setup",
            "Interactive guest experiences",
            "Event videography and social media content",
            "Thematic setups and custom experience design",
            "Team building experiences",
          ],
          variant: "interactive-services",
          options: [
            {
              number: "01",
              value: "ceremonies",
              label: "Wedding & baptism",
              text: "Ceremony days shaped with welcome drinks, guest flow, styling details and small gestures people carry home.",
              caption: "Ritual, taste and guest rhythm.",
              image: photos.weddingHandsBouquet,
              alt: "A wedding couple holding hands beside a pink and lavender bouquet",
            },
            {
              number: "02",
              value: "mobile-bar",
              label: "Mobile bar",
              text: "A service moment built around the van, the drinks, the timing and the mood of the gathering.",
              caption: "A bar that becomes part of the scene.",
              image: photos.servicesHero,
              alt: "The Curists van serving guests during an outdoor event",
            },
            {
              number: "03",
              value: "photobooth",
              label: "Photobooth",
              text: "A playful guest pause with styling, props and a memory point that feels integrated into the day.",
              caption: "Guest interaction with a keepsake.",
              image: photos.weddingPhotoboothChild,
              alt: "A child posing beside a wedding photobooth setup",
            },
            {
              number: "04",
              value: "vintage-van",
              label: "Vintage van",
              text: "The VW T2 becomes a visual anchor: bar, welcome point, photo moment or curated service station.",
              caption: "The van as a service stage.",
              image: photos.curistVanAperolSunset,
              alt: "The Curists van transformed into an Aperol Spritz bar at sunset",
            },
            {
              number: "05",
              value: "guest-experiences",
              label: "Guest rituals",
              text: "Interactive moments are designed to help people connect, participate and feel present inside the event.",
              caption: "Tiny rituals, warmer rooms.",
              image: photos.akisAnnaDance,
              alt: "A wedding couple dancing under warm evening lights",
            },
            {
              number: "06",
              value: "content",
              label: "Content capture",
              text: "Photo, video and social content support the memory without turning the day into a production.",
              caption: "Content with atmosphere, not interruption.",
              image: photos.corporateBrandActivation,
              alt: "The Curists van styled for a corporate client reception on a city terrace",
            },
            {
              number: "07",
              value: "thematic-setups",
              label: "Thematic setups",
              text: "Flowers, food, signs, objects and partner details are selected around one clear emotional direction.",
              caption: "A coherent world, not scattered decor.",
              image: photos.weddingFlowersCandle,
              alt: "Wedding flowers and candles arranged on a celebration table",
            },
            {
              number: "08",
              value: "team-building",
              label: "Team building",
              text: "Corporate experiences become more human through hospitality, shared tasks, taste and simple connection.",
              caption: "Teams meeting through experience.",
              image: photos.corporateTeamRitual,
              alt: "A wellbeing experience with guests gathered around The Curists van",
            },
          ],
        },
        {
          title: "How we begin",
          text:
            "You do not need to arrive with a fixed list. Tell us how you want people to feel, what practical services interest you and what the moment is for. We take care of the rest.",
        },
      ],
      cta: {
        title: "Tell us what you want to feel.",
        text: "We'll design the experience around the occasion, the people, the services and the memory you want to leave behind.",
        href: "/contact",
        label: "Start Your Experience",
      },
    },
    "/weddingsandbaptisms": {
      title: "Weddings & Baptisms",
      kicker: "Ceremonies with feeling",
      description: "Curated wedding and baptism experiences by The Curists.",
      heroImage: photos.weddingKissBlueHour,
      heroAlt: "A wedding couple kissing by the sea at blue hour",
      lede:
        "Not just a ceremony. A feeling to remember. Weddings and baptisms should not simply be attended - they should be experienced.",
      panels: [
        {
          eyebrow: "01",
          title: "A welcome that feels personal",
          text:
            "We design the first touchpoint around your story: drinks, flowers, signage, scent, music, mobile bar service and the small gestures that tell guests they have arrived somewhere meaningful.",
          image: photos.baptismFamilyScooter,
          alt: "A baptism family gathered around a decorated blue scooter",
        },
        {
          eyebrow: "02",
          title: "A feeling to remember",
          text:
            "The van can hold the in-between moments beautifully, from post-ceremony drinks and portraits to photobooth play, guest books, late-night espresso or a quiet space for a breath.",
          image: photos.weddingHandsBouquet,
          alt: "A wedding couple holding hands beside a pink and lavender bouquet",
        },
      ],
      sections: [
        {
          title: "Proposed inclusions",
          text: "Each plan is tailored, but these are the pieces couples and families often ask us to shape.",
          items: ["Welcome drinks or signature serves", "Mobile bar", "Van styling", "Guest photobooth moment", "Vintage car touchpoint", "Baptism reception corner"],
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
        title: "Not just a wedding.",
        text: "Tell us what you want to feel. We'll design the experience.",
        href: "/contact",
        label: "Start Your Experience",
      },
    },
    "/corporateevents": {
      title: "Corporate Events",
      kicker: "Teams, taste, connection",
      description: "Corporate event experiences curated by The Curists.",
      heroImage: photos.corporateBrandActivation,
      heroAlt: "The Curists van styled for a corporate client reception on a city terrace",
      lede:
        "Corporate events can feel warm, human and memorable. We create brand moments, team experiences and client gatherings that replace the usual event formula with presence, taste and connection.",
      panels: [
        {
          eyebrow: "01",
          title: "Brand moments with a pulse",
          text:
            "Use the van as a mobile hospitality point, product reveal, tasting station or photo-ready brand object, supported by content and media that keep the moment useful after the event.",
          image: photos.corporateBrandActivationClose,
          alt: "The Curists van configured as a branded Aperol Spritz tasting station",
        },
        {
          eyebrow: "02",
          title: "Team rituals people remember",
          text:
            "We can design wellbeing sessions, cooking moments, picnics, wine tastings and relaxed gatherings that give teams a real reason to connect.",
          image: photos.corporateTeamRitual,
          alt: "The Curists van serving wellbeing tonics during a beachside sunset session",
        },
      ],
      sections: [
        {
          title: "Formats",
          text: "Designed for events that need warmth and clarity without becoming overproduced.",
          items: ["Team offsites", "Client receptions", "Brand activations", "Launch moments", "Wellbeing days", "Event videography", "Social media content"],
        },
        {
          title: "How we work",
          text:
            "We align with your brand tone, event objective and guest profile, then build a concise experience plan with flow, styling, service, production, partner and media notes.",
        },
      ],
      related: [
        { label: "Wellbeing experiences", href: "/experiences#wellbeing" },
        { label: "Start your Experience", href: "/contact" },
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
      heroImage: photos.privateCelebrationsHero,
      heroAlt: "Friends celebrating a birthday beside The Curists van at sunset",
      lede:
        "Small pleasures. Real impact. For birthdays, anniversaries, family gatherings and just-because moments, we create space for connection to happen naturally.",
      panels: [
        {
          eyebrow: "01",
          title: "A reason to gather beautifully",
          text:
            "The Curists can shape the welcome, food and drink ritual, music cues, sensory details, van styling and playful guest services around the person or moment being celebrated.",
          image: photos.weddingFoodCharcuterie,
          alt: "A charcuterie tray arranged for a private celebration",
        },
        {
          eyebrow: "02",
          title: "A centerpiece with character",
          text:
            "The van brings focus without demanding attention. It can become a bar, dessert station, memory booth, picnic anchor or quiet place to pause.",
          image: photos.weddingChampagneBucket,
          alt: "Champagne bottles chilled in a silver bucket for an evening celebration",
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
            "A private celebration should feel effortless to guests and deeply considered underneath. A shared table, a quiet pause, a meaningful connection - these are not small things. They are everything.",
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
      heroImage: photos.weddingVanCoupleView,
      heroAlt: "A wedding couple looking across the bay at moonrise",
      lede:
        "Experience in motion. The van, the ritual and the sensory details work together to bring people into the moment.",
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
          title: "Not a van. A curated experience in motion.",
          anchor: "van",
          text:
            "A reimagined Volkswagen Type 2 that is not created to take you somewhere, but to bring you into the moment.",
          items: ["Mobile bar", "Photobooth", "Welcome point", "Picnic anchor", "Brand object", "Vintage van setup"],
        },
        {
          title: "Wellbeing Experiences",
          anchor: "wellbeing",
          image: photos.wellbeingExperiences,
          alt: "The Curists van serving wellbeing tonics during a beachside sunset session",
          text:
            "These are not activities to simply attend. They are experiences to feel, understand and take with you.",
          items: ["Yoga and movement", "Cooking and tasting", "Picnics", "Wine tastings", "Team wellbeing", "Sensory rituals"],
        },
      ],
      cta: {
        title: "Tell us what you want to feel.",
        text: "We'll design the experience after we understand the people and the moment.",
        href: "/contact",
        label: "Start Your Experience",
        moods: [
          {
            label: "Present",
            value: "present",
            text: "Presence gives the experience a calm center before anything else begins.",
            image: photos.weddingVanCoupleView,
            alt: "A couple looking across the bay at moonrise",
            caption: "A calm arrival point for the people inside the moment.",
          },
          {
            label: "Connected",
            value: "connected",
            text: "Connection shapes the flow so guests do not just attend, they meet.",
            image: photos.curistVanAperolSunset,
            alt: "The Curists van serving drinks at sunset",
            caption: "A shared service point that brings people closer.",
          },
          {
            label: "Restored",
            value: "restored",
            text: "Restoration brings movement, taste and quiet rituals into balance.",
            image: photos.wellbeingExperiences,
            alt: "The Curists van during a wellbeing experience by the sea",
            caption: "Movement, taste and quiet rituals in the same rhythm.",
          },
          {
            label: "Playful",
            value: "playful",
            text: "Play makes the details lighter, warmer and easier to remember.",
            image: photos.akisAnnaDance,
            alt: "A couple dancing under warm evening lights",
            caption: "Small bursts of joy that stay with the day.",
          },
        ],
      },
    },
    "/about": {
      title: "About The Curists",
      kicker: "Taste, people, feeling",
      description: "About The Curists and its feeling-led approach to curated experiences.",
      heroImage: photos.akisAnna10Years,
      heroAlt: "A couple sharing a quiet kiss by the sea",
      lede:
        "We live in a world that moves fast. We attend, scroll and pass through moments - but rarely do we truly experience them. The Curists began as a quiet response to that.",
      panels: [
        {
          eyebrow: "01",
          title: "From Tourist to Curist",
          text:
            "A tourist passes through moments. A Curist lives them. We look beyond decor and logistics to ask what the moment should do for the people inside it.",
          image: photos.akisAnna10Years,
          alt: "A couple sharing a quiet kiss by the sea",
        },
        {
          eyebrow: "02",
          title: "The van is only the beginning",
          text:
            "The VW T2 gives the experience a recognizable heart, but the real work is in the curation: atmosphere, service, partners, timing, memory and feeling.",
          image: photos.weddingMiniCooper,
          alt: "A red vintage car decorated with white wedding flowers",
        },
      ],
      sections: [
        {
          title: "Experience is the cure",
          text: "We do not offer more for the sake of more. We offer meaning: presence, emotional openness, sensory pleasure and connection.",
          items: ["Make it personal", "Let people feel at ease", "Use taste as memory", "Keep beauty useful", "Design the rhythm"],
        },
        {
          title: "Small pleasures. Real impact.",
          text:
            "Happiness lives in the smallest, most meaningful moments: a shared table, a quiet pause, a taste, a touch, a feeling of connection.",
        },
      ],
      related: [
        { label: "Services", href: "/services" },
        { label: "Experiences", href: "/experiences" },
      ],
      cta: {
        title: "Tell us what you want to feel.",
        text: "We'll design the experience with taste, people and feeling.",
        href: "/contact",
        label: "Start Your Experience",
      },
    },
    "/merch": {
      title: "Curists Merch",
      kicker: "Objects for the feeling",
      description: "Curists merchandise and keepsake concepts.",
      heroImage: photos.weddingGiftBoxes,
      heroAlt: "Small guest gift boxes wrapped with travel stamps and string",
      lede:
        "The Curists merch collection is a small set of useful, beautiful objects for experiences you do not just live, but carry with you.",
      panels: [
        {
          eyebrow: "01",
          title: "The Picnic Edit",
          text:
            "A linen tote, enamel cups, cotton blanket and simple printed guide for slow outdoor gatherings.",
          image: photos.bachelorHats,
          alt: "A vintage suitcase with hats prepared for a celebration",
        },
        {
          eyebrow: "02",
          title: "The Memory Pack",
          text:
            "Postcards, matchbooks, custom stickers and a small photo sleeve designed as take-home pieces for guests.",
          image: photos.weddingSpiceItUpFavors,
          alt: "Guest favor jars arranged below a Spice It Up sign",
        },
        {
          eyebrow: "03",
          title: "The Host Kit",
          text:
            "A proposed kit with playlist card, scent cue, menu template and hosting notes for intimate celebrations.",
          image: photos.weddingBrandingFavors,
          alt: "Small branded favor jars wrapped in fabric and lace",
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
      title: "Start your Experience",
      kicker: "Start Your Experience",
      description: "Start your Experience The Curists to start an event or experience brief.",
      heroImage: photos.weddingStartYourJourney,
      heroAlt: "A boarding pass style invitation card on textured fabric",
      layout: "contact",
      lede:
        "You do not tell us only what you need. You tell us how you want to feel. We take care of the rest.",
      sections: [
        {
          title: "Helpful details",
          text: "Share what you already know. Leave the rest open.",
          items: ["Occasion and date", "Location or region", "Estimated guests", "Mood or feeling", "Services you are curious about", "Partners or media needs"],
        },
      ],
      cta: {
        title: "Tell us what you want to feel.<br>We'll design the experience.",
        text: "Send a note directly and we will respond with a clear next step.",
        href: "mailto:hello@thecurists.com",
        label: "hello@thecurists.com",
      },
    },
    "/privacy-policy": {
      title: "Privacy Policy",
      kicker: "Privacy",
      description: "Proposed privacy policy content for The Curists.",
      heroImage: logoAsset,
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
      heroImage: logoAsset,
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
            "The Curists provides curation, styling, partner coordination and experience direction based on the agreed brief. Final details may adapt to venue, weather, safety and supplier constraints.",
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
      src: photos.weddingTableSeasideDusk,
      alt: "A private celebration table set beside the sea at sunset",
    },
    {
      src: photos.weddingKissBlueHour,
      alt: "A wedding couple kissing by the sea at blue hour",
    },
    {
      src: photos.baptismFamilyScooter,
      alt: "A baptism family gathered around a decorated blue scooter",
    },
    {
      src: photos.weddingFoodCharcuterie,
      alt: "A charcuterie tray arranged for a private celebration",
    },
    {
      src: photos.weddingFlowersCandle,
      alt: "Florals and candlelight arranged for an evening table",
    },
    {
      src: photos.weddingMiniCooper,
      alt: "A red vintage car decorated with white wedding flowers",
    },
    {
      src: photos.weddingPresentationChef,
      alt: "A live dessert presentation with guests gathered around the table",
    },
    {
      src: photos.weddingBrandingFavors,
      alt: "Small branded favor jars wrapped in fabric and lace",
    },
    {
      src: photos.weddingPocketWatch,
      alt: "A groom holding a pocket watch before the ceremony",
    },
    {
      src: photos.baptismCandleFamily,
      alt: "Children and family blowing out a baptism candle",
    },
  ];

  const curistsMoments = [
    {
      src: photos.weddingStartYourJourney,
      alt: "A boarding pass style invitation card on textured fabric",
      label: "Arrival",
      caption: "A welcome that sets the tone.",
    },
    {
      src: photos.weddingTableBeach,
      alt: "A beachside dinner table set with glassware and white linens",
      label: "Setting",
      caption: "Tables that make people slow down.",
    },
    {
      src: photos.weddingHandsBouquet,
      alt: "A wedding couple holding hands beside a pink and lavender bouquet",
      label: "Ceremony",
      caption: "Details close enough to feel.",
    },
    {
      src: photos.baptismCeremonyVows,
      alt: "A baptism table with a book, flowers and ceremonial objects",
      label: "Ritual",
      caption: "Quiet signatures with meaning.",
    },
    {
      src: photos.weddingFoodVegetables,
      alt: "A colorful vegetable platter prepared for a shared food experience",
      label: "Taste",
      caption: "Food as a generous first language.",
    },
    {
      src: photos.weddingJustMarriedCheese,
      alt: "A tiered cheese display with a Just Married topper",
      label: "Play",
      caption: "Humor and theatre in small things.",
    },
    {
      src: photos.weddingSignHands,
      alt: "Hands holding playful just married signs",
      label: "Keepsakes",
      caption: "Objects that keep the feeling alive.",
    },
    {
      src: photos.akisAnnaDance,
      alt: "A wedding couple dancing under warm evening lights",
      label: "Feeling",
      caption: "The moment people remember first.",
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

  const attrValue = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const slugValue = (value = "") =>
    String(value)
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "chapter";

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

  const pageChapters = (page) => {
    const panels = page.panels || [];
    const sections = page.sections || [];
    return [
      ...panels.map((panel, index) => ({
        id: panel.anchor || `story-${slugValue(panel.title)}-${index + 1}`,
        eyebrow: panel.eyebrow || String(index + 1).padStart(2, "0"),
        label: panel.title,
      })),
      ...sections.map((section, index) => ({
        id: section.anchor || `detail-${slugValue(section.title)}-${index + 1}`,
        eyebrow: String(panels.length + index + 1).padStart(2, "0"),
        label: section.title,
      })),
    ];
  };

  let scheduleLineFallbackInstalled = false;
  let menuButtonSyncInstalled = false;
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
      if (logo.closest(".page-overlay")) {
        logo.innerHTML = `<span class="visually-hidden">The Curists home</span>`;
        return;
      }
      logo.innerHTML = `
        <img class="curists-logo-mark" src="${logoAsset}" alt="The Curists" />
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
    qsa(".block-cta-link, .c-cta-mobile, .page-overlay__close").forEach((block) => {
      block.remove();
    });

    const menuButton = qs(".page-header .page-overlay__open");
    if (menuButton) {
      menuButton.type = "button";
      menuButton.setAttribute("aria-controls", "curists-overlay-menu");
      if (!menuButton.hasAttribute("aria-expanded")) {
        menuButton.setAttribute("aria-expanded", "false");
      }
    }

    const overlayMenu = qs(".page-overlay__middle .menu-level-0");
    if (overlayMenu) {
      overlayMenu.id = "curists-overlay-menu";
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

    const syncMenuButton = () => {
      const button = qs(".page-header .page-overlay__open");
      if (!button) return;
      const isOpen = document.documentElement.classList.contains("overlay-open");
      const label = isOpen ? "Close" : "Menu";
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      button.title = label;
      const menuLabel = qs(".c-menu", button);
      if (menuLabel) {
        menuLabel.innerHTML = `
          <div class="c-menu__before">${label}</div>
          ${label}
          <div class="c-menu__after">${label}</div>
        `;
      }
    };

    syncMenuButton();
    if (!menuButtonSyncInstalled) {
      menuButtonSyncInstalled = true;
      new MutationObserver(syncMenuButton).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  };

  const updateNavigationPreviews = () => {
    const previews = [
      {
        src: photos.weddingTableBeach,
        alt: "A beachside dinner table set with glassware and white linens",
      },
      {
        src: photos.weddingVanCoupleView,
        alt: "A wedding couple looking across the bay at moonrise",
      },
      {
        src: photos.baptismFamilyScooter,
        alt: "A baptism family gathered around a decorated blue scooter",
      },
      {
        src: photos.weddingPresentationChef,
        alt: "A live dessert presentation with guests gathered around the table",
      },
      {
        src: photos.weddingFoodCharcuterie,
        alt: "A charcuterie tray arranged for a private celebration",
      },
    ];

    qsa(".page-overlay picture").forEach((picture, index) => {
      const item = previews[index % previews.length];
      replacePicture(picture, item.src, item.alt);
    });
  };

  const updateHero = () => {
    const existingTitle = qs(".c-banner__title h1, .c-banner__title h2");
    let title = existingTitle;
    if (existingTitle && existingTitle.tagName.toLowerCase() !== "h2") {
      title = document.createElement("h2");
      title.className = existingTitle.className.replace(/\bh1\b/g, "h2").trim() || "h2";
      Array.from(existingTitle.attributes).forEach(({ name, value }) => {
        if (name !== "class") title.setAttribute(name, value);
      });
      existingTitle.replaceWith(title);
    }
    if (title) {
      title.hidden = false;
      title.removeAttribute("aria-hidden");
      title.innerHTML = `
        <p>The Curists</p>
      `;
    }
    const titleInner = qs(".c-banner__title__inner");
    if (titleInner && !qs(".curists-hero-copy", titleInner)) {
      titleInner.insertAdjacentHTML(
        "beforeend",
        `
          <p class="curists-hero-copy">Curated weddings, baptisms, corporate and private experiences - designed not only to be seen, but to be felt.</p>
          <a class="curists-hero-cta" href="/contact">Start Your Experience</a>
        `,
      );
    }
    replacePicture(
      qs(".c-banner__media picture"),
      photos.heroAperolSunset,
      "The Curists van serving Aperol Spritz on a beach at sunset",
      "eager",
    );
    const topLayer = qs(".c-banner__media-top-layer");
    if (topLayer) topLayer.hidden = true;
    const scrollText = qs(".c-banner__scroll");
    if (scrollText) {
      scrollText.hidden = false;
      scrollText.removeAttribute("aria-hidden");
      scrollText.textContent = "Please scroll down to start your experience.";
    }
  };

  const updateServices = () => {
    qsa(".c-usp-bar__media .c-usp-bar-item").forEach((item, index) => {
      const service = services[index];
      if (!service) return;
      replacePicture(qs("picture", item), service.photo, service.photoAlt || service.alt);
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
      ${type === "service" ? `<a class="curists-cta-button" href="${item.href}">Explore</a>` : ""}
    </article>
  `;

  const buildPagePanel = (panel, index, id) => `
    <article class="curists-page-panel" id="${attrValue(id)}" data-curists-page-block style="--block-index: ${index};">
      ${
        panel.image
          ? `
            <div class="curists-page-panel__media">
              <img src="${panel.image}" alt="${panel.alt || ""}" loading="lazy" decoding="async" />
            </div>
          `
          : ""
      }
      <div class="curists-page-panel__copy">
        ${panel.eyebrow ? `<span>${panel.eyebrow}</span>` : ""}
        <h2>${panel.title}</h2>
        <p>${panel.text}</p>
        ${listMarkup(panel.items)}
        ${panel.href ? `<a class="curists-cta-button" href="${panel.href}">${panel.linkLabel || "Explore"}</a>` : ""}
      </div>
    </article>
  `;

  const buildInteractiveServicesSection = (section, index, id) => {
    const options = section.options || [];
    const initial = options[0] || {};

    return `
    <section class="curists-page-section curists-page-section--services-interactive curists-page-cta--interactive curists-page-cta--visual" id="${attrValue(id)}" data-curists-page-block data-curists-page-cta style="--block-index: ${index};">
      <div class="curists-page-cta__header curists-service-detail__header">
        <p class="curists-kicker">${section.kicker || "Details"}</p>
        <h2>${section.title}</h2>
      </div>
      <div class="curists-page-cta__copy curists-service-detail__copy">
        <div class="curists-cta-photo-stage curists-service-detail__photos" aria-label="Selected service preview" data-curists-cta-stage>
          ${options
            .map(
              (option, optionIndex) => `
            <figure
              class="curists-cta-photo${optionIndex === 0 ? " is-active" : ""}"
              data-curists-cta-photo
              data-feeling="${attrValue(option.value || option.label)}"
              aria-hidden="${optionIndex === 0 ? "false" : "true"}"
            >
              <img src="${option.image}" alt="${attrValue(option.alt || option.label)}" loading="lazy" decoding="async" />
              <figcaption>
                <span>${option.label}</span>
                ${option.caption || option.text}
              </figcaption>
            </figure>
          `,
            )
            .join("")}
        </div>
      </div>
      <div class="curists-page-cta__action curists-service-detail__action">
        <p>${section.text}</p>
        <p class="curists-cta-response" data-curists-cta-note aria-live="polite">${initial.text || section.text}</p>
        <div class="curists-cta-feeling-grid curists-service-detail__grid" aria-label="Service details">
          ${options
            .map(
              (option, optionIndex) => `
            <button
              class="curists-cta-feeling curists-service-detail__option${optionIndex === 0 ? " is-active" : ""}"
              type="button"
              aria-pressed="${optionIndex === 0 ? "true" : "false"}"
              data-curists-cta-feeling
              data-feeling="${attrValue(option.value || option.label)}"
              data-copy="${attrValue(option.text)}"
            >
              <span class="curists-cta-feeling__number">${option.number}</span>
              <span class="curists-cta-feeling__label">${option.label}</span>
            </button>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
  };

  const buildPageSection = (section, index, id) => {
    if (section.variant === "interactive-services" && section.options?.length) {
      return buildInteractiveServicesSection(section, index, id);
    }

    return `
    <section class="curists-page-section" id="${attrValue(id)}" data-curists-page-block style="--block-index: ${index};">
      <div>
        <p class="curists-kicker">${section.kicker || "Details"}</p>
        <h2>${section.title}</h2>
      </div>
      <div>
        ${section.image ? `<img class="curists-page-section-image" src="${section.image}" alt="${section.alt || ""}" loading="lazy" decoding="async" />` : ""}
        <p>${section.text}</p>
        ${listMarkup(section.items)}
      </div>
    </section>
  `;
  };

  const buildPageFlow = (page, chapters) => {
    if (!chapters.length) return "";
    return `
      <nav class="curists-page-flow" aria-label="${attrValue(page.title)} sections" data-curists-page-flow>
        <p class="curists-kicker">Route</p>
        <div class="curists-page-flow__track">
          ${chapters
            .map(
              (chapter) => `
                <button class="curists-page-flow__item" type="button" data-curists-flow-target="${attrValue(chapter.id)}" aria-current="false">
                  <span>${chapter.eyebrow}</span>
                  <strong>${chapter.label}</strong>
                </button>
              `,
            )
            .join("")}
        </div>
      </nav>
    `;
  };

  const buildContactForm = () => `
    <form class="curists-contact-form" action="mailto:hello@thecurists.com" method="post" enctype="text/plain">
      <label class="form-required">
        <span>Name *</span>
        <input name="name" autocomplete="name" required aria-required="true" />
      </label>
      <label class="form-required">
        <span>Email *</span>
        <input name="email" type="email" autocomplete="email" required aria-required="true" />
      </label>
      <label class="form-required">
        <span>Occasion *</span>
        <span class="curists-select-wrap">
          <input type="hidden" name="occasion" data-curists-select-input />
          <button class="curists-select-button" type="button" aria-haspopup="listbox" aria-expanded="false" data-curists-select-button>
            <span data-curists-select-label>Select occasion</span>
          </button>
          <span class="curists-select-menu" role="listbox" data-curists-select-menu hidden>
            ${contactOccasions
              .map(
                (occasion) => `
                  <button class="curists-select-option" type="button" role="option" aria-selected="false" data-curists-select-option data-value="${attrValue(occasion)}">
                    ${occasion}
                  </button>
                `,
              )
              .join("")}
          </span>
        </span>
      </label>
      <label>
        <span>What should it feel like?</span>
        <textarea name="brief" rows="6"></textarea>
      </label>
      <button type="submit">Send brief</button>
    </form>
  `;

  const installContactSelect = () => {
    qsa("[data-curists-select-button]").forEach((button) => {
      const select = button.closest(".curists-select-wrap");
      if (!select || select.dataset.curistsSelectReady) return;
      select.dataset.curistsSelectReady = "true";

      const input = qs("[data-curists-select-input]", select);
      const label = qs("[data-curists-select-label]", select);
      const menu = qs("[data-curists-select-menu]", select);
      const options = qsa("[data-curists-select-option]", select);
      const form = select.closest("form");

      const close = () => {
        select.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        if (menu) menu.hidden = true;
      };

      const open = () => {
        select.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        if (menu) menu.hidden = false;
      };

      const choose = (option) => {
        if (!option || !input || !label) return;
        input.value = option.dataset.value || "";
        label.textContent = option.textContent.trim();
        options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
        select.classList.remove("is-invalid");
        input.dispatchEvent(new Event("change", { bubbles: true }));
        close();
        button.focus();
      };

      button.addEventListener("click", () => {
        if (select.classList.contains("is-open")) {
          close();
          return;
        }
        open();
      });

      button.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "Enter", " "].includes(event.key)) return;
        event.preventDefault();
        open();
        const activeOption = options.find((option) => option.getAttribute("aria-selected") === "true") || options[0];
        activeOption?.focus();
      });

      options.forEach((option, index) => {
        option.addEventListener("click", () => choose(option));
        option.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close();
            button.focus();
            return;
          }
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            choose(option);
            return;
          }
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const offset = event.key === "ArrowDown" ? 1 : -1;
            const next = options[(index + offset + options.length) % options.length];
            next?.focus();
          }
        });
      });

      document.addEventListener("click", (event) => {
        if (!select.contains(event.target)) close();
      });

      form?.addEventListener("submit", (event) => {
        if (input?.value) return;
        event.preventDefault();
        select.classList.add("is-invalid");
        open();
        button.focus();
      });
    });
  };

  const buildPageCta = (cta) => {
    if (!cta) return "";

    const moods = cta.moods || [];
    const hasVisuals = moods.some((mood) => mood.image);
    const moodMarkup = moods.length
      ? `
        <div class="curists-cta-feeling-grid" role="group" aria-label="Feeling options">
          ${moods
        .map(
          (mood, index) => `
            <button
              class="curists-cta-feeling${index === 0 ? " is-active" : ""}"
              type="button"
              aria-pressed="${index === 0 ? "true" : "false"}"
              data-curists-cta-feeling
              data-feeling="${attrValue(mood.value || mood.label)}"
              data-copy="${attrValue(mood.text)}"
            >
              <span class="curists-cta-feeling__number">${String(index + 1).padStart(2, "0")}</span>
              <span class="curists-cta-feeling__label">${mood.label}</span>
            </button>
          `,
        )
        .join("")}
        </div>
        <p class="curists-cta-response" data-curists-cta-note aria-live="polite">${moods[0].text}</p>
      `
      : "";
    const photoMarkup = hasVisuals
      ? `
        <div class="curists-cta-photo-stage" aria-label="Selected feeling preview" data-curists-cta-stage>
          ${moods
        .filter((mood) => mood.image)
        .map(
          (mood, index) => `
            <figure
              class="curists-cta-photo${index === 0 ? " is-active" : ""}"
              data-curists-cta-photo
              data-feeling="${attrValue(mood.value || mood.label)}"
              aria-hidden="${index === 0 ? "false" : "true"}"
            >
              <img src="${mood.image}" alt="${attrValue(mood.alt || mood.label)}" loading="lazy" decoding="async" />
              <figcaption>
                <span>${mood.label}</span>
                ${mood.caption || mood.text}
              </figcaption>
            </figure>
          `,
        )
        .join("")}
        </div>
      `
      : "";

    return `
      <section class="curists-page-cta${moods.length ? " curists-page-cta--interactive" : ""}${hasVisuals ? " curists-page-cta--visual" : ""}" ${moods.length ? "data-curists-page-cta" : ""}>
        ${
          hasVisuals
            ? `
              <div class="curists-page-cta__header">
                <p class="curists-kicker">Next step</p>
                <h2>${cta.title}</h2>
              </div>
              <div class="curists-page-cta__copy">
                ${photoMarkup}
              </div>
            `
            : `
              <div class="curists-page-cta__copy">
                <p class="curists-kicker">Next step</p>
                <h2>${cta.title}</h2>
              </div>
            `
        }
        <div class="curists-page-cta__action">
          <p>${cta.text}</p>
          ${moodMarkup}
          <a class="curists-cta-button" href="${cta.href}" data-curists-cta-link data-base-href="${attrValue(cta.href)}">${cta.label}</a>
        </div>
      </section>
    `;
  };

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

  const installMomentDissolve = () => {
    const section = qs(".curists-moments-section");
    if (!section || section.dataset.curistsDissolveReady) return;

    const moments = qsa(".curists-moment", section);
    if (!moments.length) return;

    section.dataset.curistsDissolveReady = "true";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealMoments = () => {
      moments.forEach((moment, index) => {
        window.setTimeout(() => {
          moment.classList.add("is-visible");
        }, reduceMotion ? 0 : index * 140);
      });
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealMoments();
      return;
    }

    section.classList.add("is-dissolve-ready");

    const trigger = qs(".curists-moments-heading", section) || section;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        revealMoments();
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(trigger);
  };

  const installPageCtaInteractions = () => {
    qsa("[data-curists-page-cta]").forEach((cta) => {
      if (cta.dataset.curistsCtaReady) return;
      cta.dataset.curistsCtaReady = "true";

      const buttons = qsa("[data-curists-cta-feeling]", cta);
      const photos = qsa("[data-curists-cta-photo]", cta);
      const note = qs("[data-curists-cta-note]", cta);
      const link = qs("[data-curists-cta-link]", cta);
      const baseHref = link?.dataset.baseHref || link?.getAttribute("href") || "/contact";

      const setActive = (button) => {
        const feeling = button.dataset.feeling;

        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        photos.forEach((photo) => {
          const isActive = photo.dataset.feeling === feeling;
          photo.classList.toggle("is-active", isActive);
          photo.setAttribute("aria-hidden", String(!isActive));
        });

        if (note && button.dataset.copy) {
          note.textContent = button.dataset.copy;
        }

        if (link && feeling) {
          const url = new URL(baseHref, window.location.origin);
          url.searchParams.set("feeling", feeling);
          link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
        }
      };

      cta.addEventListener("pointermove", (event) => {
        const rect = cta.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        cta.style.setProperty("--cta-x", `${event.clientX - rect.left}px`);
        cta.style.setProperty("--cta-y", `${event.clientY - rect.top}px`);
      });

      cta.addEventListener("pointerleave", () => {
        cta.style.removeProperty("--cta-x");
        cta.style.removeProperty("--cta-y");
      });

      buttons.forEach((button) => {
        button.addEventListener("click", () => setActive(button));
      });

      if (buttons[0]) setActive(buttons.find((button) => button.classList.contains("is-active")) || buttons[0]);
    });
  };

  const installInternalPageInteractions = () => {
    const pageRoot = qs(".curists-internal-page");
    if (!pageRoot || pageRoot.dataset.curistsEnhanced) return;
    pageRoot.dataset.curistsEnhanced = "true";

    const blocks = qsa("[data-curists-page-block]", pageRoot);
    const flowButtons = qsa("[data-curists-flow-target]", pageRoot);
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const setActive = (block) => {
      if (!block) return;
      flowButtons.forEach((button) => {
        const isActive = button.dataset.curistsFlowTarget === block.id;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-current", String(isActive));
      });
    };

    flowButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = qs(`#${CSS.escape(button.dataset.curistsFlowTarget)}`);
        if (!target) return;
        target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        setActive(target);
      });
    });

    blocks.forEach((block) => {
      block.addEventListener("pointermove", (event) => {
        const rect = block.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        block.style.setProperty("--page-x", `${event.clientX - rect.left}px`);
        block.style.setProperty("--page-y", `${event.clientY - rect.top}px`);
      });

      block.addEventListener("pointerleave", () => {
        block.style.removeProperty("--page-x");
        block.style.removeProperty("--page-y");
      });
    });

    if (!("IntersectionObserver" in window)) {
      blocks.forEach((block) => block.classList.add("is-visible"));
      setActive(blocks[0]);
      return;
    }

    const visibleBlocks = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            visibleBlocks.set(entry.target, entry.intersectionRatio);
          } else {
            visibleBlocks.delete(entry.target);
          }
        });

        const activeBlock = [...visibleBlocks.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
        if (activeBlock) setActive(activeBlock);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: [0.01, 0.18, 0.42, 0.68],
      },
    );

    blocks.forEach((block) => observer.observe(block));
    window.setTimeout(() => {
      blocks.forEach((block) => {
        const rect = block.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) block.classList.add("is-visible");
      });
      setActive(blocks.find((block) => block.classList.contains("is-visible")) || blocks[0]);
    }, 100);
  };

  const installJourneyInteractions = () => {
    qsa("[data-curists-journey]").forEach((section) => {
      if (section.dataset.curistsJourneyReady) return;
      section.dataset.curistsJourneyReady = "true";

      const buttons = qsa("[data-curists-journey-step]", section);
      const note = qs("[data-curists-journey-note]", section);
      const image = qs("[data-curists-journey-image]", section);
      const label = qs("[data-curists-journey-label]", section);
      const link = qs("[data-curists-journey-link]", section);
      const baseHref = link?.dataset.baseHref || link?.getAttribute("href") || "/contact";

      const setActive = (button) => {
        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        if (note && button.dataset.note) note.textContent = button.dataset.note;
        if (label && button.dataset.label) label.textContent = button.dataset.label;
        if (image && button.dataset.image) {
          window.clearTimeout(section.curistsJourneyImageTimer);
          if (image.getAttribute("src") === button.dataset.image) {
            image.alt = button.dataset.alt || "";
          } else {
            image.classList.add("is-switching");
            section.curistsJourneyImageTimer = window.setTimeout(() => {
              image.src = button.dataset.image;
              image.alt = button.dataset.alt || "";
              image.classList.remove("is-switching");
            }, 120);
          }
        }
        if (link && button.dataset.stage) {
          const url = new URL(baseHref, window.location.origin);
          url.searchParams.set("stage", button.dataset.stage);
          link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
        }
      };

      section.addEventListener("pointermove", (event) => {
        const rect = section.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        section.style.setProperty("--journey-x", `${event.clientX - rect.left}px`);
        section.style.setProperty("--journey-y", `${event.clientY - rect.top}px`);
      });

      section.addEventListener("pointerleave", () => {
        section.style.removeProperty("--journey-x");
        section.style.removeProperty("--journey-y");
      });

      buttons.forEach((button) => {
        button.addEventListener("click", () => setActive(button));
      });

      if (buttons[0]) setActive(buttons.find((button) => button.classList.contains("is-active")) || buttons[0]);
    });
  };

  const buildInternalPage = (page) => {
    const chapters = pageChapters(page);
    const panelCount = page.panels?.length || 0;
    const panels = page.panels?.length
      ? `<section class="curists-page-panel-grid">${page.panels.map((panel, index) => buildPagePanel(panel, index, chapters[index].id)).join("")}</section>`
      : "";
    const sections = page.sections?.length
      ? page.sections.map((section, index) => buildPageSection(section, panelCount + index, chapters[panelCount + index].id)).join("")
      : "";
    const contactForm = page.layout === "contact" ? buildContactForm() : "";
    const cta = buildPageCta(page.cta);

    return `
      <article class="curists-internal-page curists-internal-page--${page.layout || "standard"}">
        <section class="curists-page-intro">
          <p class="curists-kicker">${page.kicker}</p>
          <h2>${page.title}</h2>
          <p>${page.lede}</p>
          ${relatedMarkup(page.related)}
        </section>
        ${buildPageFlow(page, chapters)}
        ${panels}
        ${sections}
        ${contactForm}
        ${cta}
      </article>
    `;
  };

  const renderInternalPage = (page) => {
    document.body.classList.add("curists-internal");
    setHtml(qs(".c-banner__title h1, .c-banner__title h2"), `<p>${page.title}</p>`);
    const scrollText = qs(".c-banner__scroll");
    if (scrollText) {
      scrollText.hidden = true;
      scrollText.setAttribute("aria-hidden", "true");
      scrollText.textContent = "";
    }
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
      <section class="curists-journey-section" data-curists-journey>
        <div class="curists-section-inner curists-journey-grid">
          <div class="curists-journey-copy">
            <p class="curists-kicker">Start Your Experience</p>
            <h2>Moments fade.<br>What we feel stays.</h2>
            <p>
              The Curists began with a simple belief: experience reconnects us
              to ourselves, to others and to the beauty of the present moment.
            </p>
            <p class="curists-journey-note" data-curists-journey-note aria-live="polite">${journeySteps[0].note}</p>
            <a class="curists-cta-button" href="/contact?stage=${journeySteps[0].value}" data-curists-journey-link data-base-href="/contact">Start Your Experience</a>
          </div>
          <div class="curists-journey-console">
            <figure class="curists-journey-visual">
              <img data-curists-journey-image src="${journeySteps[0].image}" alt="${journeySteps[0].alt}" loading="lazy" decoding="async" />
              <span class="curists-journey-label" data-curists-journey-label>${journeySteps[0].label}</span>
            </figure>
            <ol class="curists-steps-list" aria-label="Experience journey steps">
              ${journeySteps
        .map(
          (step, index) => `
              <li>
                <button
                  class="curists-step-button${index === 0 ? " is-active" : ""}"
                  type="button"
                  aria-pressed="${index === 0 ? "true" : "false"}"
                  data-curists-journey-step
                  data-stage="${attrValue(step.value)}"
                  data-note="${attrValue(step.note)}"
                  data-image="${attrValue(step.image)}"
                  data-alt="${attrValue(step.alt)}"
                  data-label="${attrValue(step.label)}"
                >
                  <strong>${step.number}</strong>
                  <span class="curists-step-copy">
                    <span>${step.title}</span>
                    <small>${step.text}</small>
                  </span>
                </button>
              </li>
          `,
        )
        .join("")}
            </ol>
          </div>
        </div>
      </section>

      <section class="curists-intro-section">
        <div class="curists-section-inner curists-intro-grid">
          <div>
            <p class="curists-kicker">Taste / People / Feeling</p>
            <h2>A tourist sees.<br>A Curist feels.</h2>
            <p>
              A tourist passes through moments. A Curist lives them. Whether you are
              planning a wedding, baptism, corporate event or personal celebration,
              we curate experiences with soul, beauty, service and intention.
            </p>
            <a class="curists-cta-button" href="/contact">Start Your Experience</a>
          </div>
          <div class="curists-photo-grid" aria-label="Curists moments">
            <img src="${photos.baptismCandleFamily}" alt="Children and family blowing out a baptism candle" loading="lazy" decoding="async" />
            <img src="${photos.weddingMiniCooper}" alt="A red vintage car decorated with white wedding flowers" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section class="curists-feature-section">
        <div class="curists-section-inner">
          <p class="curists-kicker">Our Services</p>
          <h2>Curated experiences, supported by complete event services.</h2>
          <div class="curists-card-grid">
            ${services.map((item) => buildCard(item)).join("")}
          </div>
        </div>
      </section>

      <section class="curists-feature-section curists-feature-section-dark">
        <div class="curists-section-inner">
          <p class="curists-kicker">Curists Experiences</p>
          <h2>Not a van. A curated experience in motion.</h2>
          <div class="curists-card-grid">
            ${experiences.map((item) => buildCard(item, "experience")).join("")}
          </div>
        </div>
      </section>

      <section class="curists-moments-section">
        <div class="curists-section-inner">
          <div class="curists-moments-heading">
            <p class="curists-kicker">Curists moments</p>
            <h2>Designed to be felt, not just seen.</h2>
          </div>
          <div class="curists-moments-grid">
            ${curistsMoments
        .map(
          (item, index) => `
            <figure class="curists-moment curists-moment--${(index % 4) + 1}">
              <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
            </figure>
          `,
        )
        .join("")}
          </div>
        </div>
      </section>
    `;

    usp.insertAdjacentElement("afterend", replacement);
    usp.remove();
  };

  const updateIntroBlock = () => {
    const block = qs(".c-text-media");
    if (!block) return;
    setHtml(qs(".c-text-media__title-large h2", block), "A tourist sees.<br>A Curist feels.");
    setText(
      qs(".c-text-media__text p", block),
      "A tourist passes through moments. A Curist lives them. We design experiences that reconnect people to themselves, to others and to the present moment.",
    );
    setLink(qs(".c-text-media__button a", block), "More about The Curists", "/about");
    replacePicture(
      qs(".c-text-media__media-large picture", block),
      photos.baptismCandleFamily,
      "Children and family blowing out a baptism candle",
    );
    replacePicture(
      qs(".c-text-media__media-small picture", block),
      photos.weddingMiniCooper,
      "A red vintage car decorated with white wedding flowers",
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
      path.setAttribute("stroke", "#E8890C");
    });
    qsa("#travelschedule .c-schedule__svg-placeholder").forEach((path) => {
      path.setAttribute("stroke-opacity", "0.22");
    });
    ensureVisibleScheduleLines();
    setHtml(
      qs("#travelschedule .c-schedule__text h3"),
      "<p>Experiences you don't just live - but carry with you.</p>",
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
      const existingLine = qs(".curists-drawn-line", svg);
      if (existingLine) {
        ensureScheduleVanMarker(svg);
        return;
      }

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
      line.setAttribute("stroke", "#E8890C");
      line.setAttribute("stroke-width", "2.8");
      line.setAttribute("fill", "none");
      line.setAttribute("aria-hidden", "true");
      line.setAttribute("vector-effect", "non-scaling-stroke");
      line.style.pointerEvents = "none";
      svg.append(line);
      ensureScheduleVanMarker(svg);
    });
  };

  const ensureScheduleVanMarker = (svg) => {
    let marker = qs(".curists-schedule-van", svg);
    if (marker) return marker;

    const viewBox = svg.viewBox?.baseVal;
    const viewWidth = viewBox?.width || Number(svg.getAttribute("width")) || 623;
    const markerWidth = Math.max(52, Math.min(118, viewWidth * 0.18));
    const markerHeight = markerWidth * (654 / 1268);
    marker = document.createElementNS(svgNamespace, "g");
    marker.classList.add("curists-schedule-van");
    marker.setAttribute("aria-hidden", "true");
    marker.dataset.markerWidth = String(markerWidth);
    marker.dataset.markerHeight = String(markerHeight);

    const image = document.createElementNS(svgNamespace, "image");
    image.setAttribute("href", asset("van.png"));
    image.setAttributeNS(xlinkNamespace, "href", asset("van.png"));
    image.setAttribute("x", String(-markerWidth));
    image.setAttribute("y", String(-markerHeight * 0.8));
    image.setAttribute("width", String(markerWidth));
    image.setAttribute("height", String(markerHeight));
    image.setAttribute("preserveAspectRatio", "xMidYMid meet");
    marker.append(image);
    svg.append(marker);
    return marker;
  };

  const updateScheduleVanMarker = (path, progress) => {
    const svg = path.ownerSVGElement;
    if (!svg || typeof path.getPointAtLength !== "function") return;
    const marker = ensureScheduleVanMarker(svg);
    const length = Number(path.dataset.curistsPathLength || path.getTotalLength());
    if (!Number.isFinite(length) || length <= 0) return;

    const distance = length * progress;
    const point = path.getPointAtLength(distance);
    const sampleDistance = Math.max(1, length * 0.006);
    const previous = path.getPointAtLength(Math.max(0, distance - sampleDistance));
    const next = path.getPointAtLength(Math.min(length, distance + sampleDistance));
    const deltaX = next.x - previous.x;
    const previousFacing = Number(marker.dataset.curistsFacing || 1);
    const facing = Math.abs(deltaX) > 0.35 ? (deltaX >= 0 ? -1 : 1) : previousFacing;

    marker.dataset.curistsFacing = String(facing);
    marker.style.opacity = progress > 0.015 && progress < 0.985 ? "1" : "0";
    marker.setAttribute("transform", `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)}) scale(${facing} 1)`);
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
      if (path.classList.contains("curists-drawn-line")) {
        updateScheduleVanMarker(path, progress);
      }
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

  const installHeroTaglineVisibility = () => {
    const tagline = qs(".c-banner__scroll");
    if (!tagline) return;

    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const hidden = scrollY > 24;
      document.body.classList.toggle("curists-hero-tagline-hidden", hidden);
      tagline.setAttribute("aria-hidden", hidden ? "true" : "false");
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

    if (!document.body.dataset.curistsHeroTaglineReady) {
      document.body.dataset.curistsHeroTaglineReady = "true";
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    }

    window.setTimeout(update, 0);
    window.setTimeout(update, 250);
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
    setText(qs(".c-steps__title h2"), "Start Your Experience");
    replacePicture(
      qs(".c-steps__media picture"),
      photos.weddingStartYourJourney,
      "A boarding pass style invitation card on textured fabric",
      "eager",
    );

    const steps = [
      {
        title: "Tell us how you want it to feel",
        text: "Tell us what you want to feel. We'll design the experience.",
      },
      {
        title: "We shape the concept and services",
        text: "We curate the setting, flow, sensory details, partners and service list around your wedding, baptism, corporate event or private celebration.",
      },
      {
        title: "The experience comes to life",
        text: "The reimagined Volkswagen Type 2 can become a mobile bar, photobooth, meeting point or moving centerpiece for the moment.",
      },
      {
        title: "You carry it with you",
        text: "Moments fade. What we feel stays.",
      },
    ];

    qsa(".pg-step").forEach((step, index) => {
      const data = steps[index];
      if (!data) return;
      setText(qs(".pg-step__title h2", step), data.title);
      setText(qs(".pg-step__text p", step), data.text);
    });

    setHtml(qs(".c-cta__title h2"), "Tell us what you want to feel.<br>We'll design it.");
    setLink(qs(".c-cta__button a"), "Start Your Experience", "/contact");
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
              <img class="curists-logo-mark" src="${logoAsset}" alt="The Curists" loading="lazy" decoding="async" />
            </a>
          </div>
          <nav class="curists-footer-links" aria-label="Footer navigation">
            ${pageNavLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
          </nav>
          <div class="curists-footer-summary">
            <p><strong>The Curists.</strong><br>Experience is the Cure.<br>We don't create events. We create feelings.</p>
          </div>
          <div class="curists-footer-socials" aria-label="Follow The Curists">
            <a class="curists-social-button" href="https://www.instagram.com/thecurists_/" target="_blank" rel="noopener">${socialIcon("instagram")}<span>Follow The Curists on Instagram</span></a>
            <a class="curists-social-button" href="https://www.facebook.com/profile.php?id=61585105097189" target="_blank" rel="noopener">${socialIcon("facebook")}<span>Follow The Curists on Facebook</span></a>
            <a class="curists-social-button" href="https://www.tiktok.com/@thecurists" target="_blank" rel="noopener">${socialIcon("tiktok")}<span>Follow The Curists on Tik Tok</span></a>
          </div>
        </section>
      `;
    }
    setText(qs(".page-footer-centered__left > div:first-child"), "\u00a92026 The Curists");
    const footerLinks = qsa(".menu--footer a");
    setLink(footerLinks[0], "Privacy Policy", "/privacy-policy");
    setLink(footerLinks[1], "Terms of Service", "/terms-of-service");
    if (footerLinks[2]) footerLinks[2].hidden = true;
    setHtml(qs(".page-footer-centered__right"), "Experience is the Cure.");
  };

  const updateMetadata = (page) => {
    document.title = page ? `${page.title} - The Curists` : "The Curists - Experience is the Cure";
    const description = qs('meta[name="description"]');
    if (description) {
      description.content = page?.description || "The Curists curates emotional experiences and event services for weddings, baptisms, corporate events, private celebrations, wellbeing moments and the Curist Van.";
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
    updateNavigationPreviews();
    if (page) {
      renderInternalPage(page);
      installInternalPageInteractions();
      installContactSelect();
      installPageCtaInteractions();
      updateFooter();
      replaceLegacyMedia();
      installHeaderLogoVisibility();
      installBackToTopButton();
      return;
    }
    updateHero();
    updateServices();
    installReplacementSections();
    installJourneyInteractions();
    installServiceCardHoverEffects();
    installMomentDissolve();
    updateIntroBlock();
    updateSchedule();
    updateCards();
    updateLogosAndMarquee();
    updateStepsAndCta();
    updateFooter();
    replaceLegacyMedia();
    installHeaderLogoVisibility();
    installHeroTaglineVisibility();
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
