export const whyCards = [
  {
    title: "Netwerksamenwerking versterken",
    text: "Netwerksamenwerkingen tussen organisaties op gang brengen of uit een impasse halen",
    icon: "network" as const,
  },
  {
    title: "Omgaan met asymmetrie",
    text: "Continu wijzigende asymmetrische belangen, prioriteiten en machtsrelaties op tafel krijgen en effectief te maken",
    icon: "scale" as const,
  },
  {
    title: "Vertrouwen opbouwen",
    text: "Een omgeving creëren waarin het vertrouwen tussen organisaties wordt bevorderd",
    icon: "heart" as const,
  },
  {
    title: "Organisaties toerusten",
    text: "Organisaties op bestuurs- management en vakinhoudelijk niveau toerusten om samenwerkingsverbanden met andere organisaties aan te gaan en met de complexe dynamiek die dat geeft",
    icon: "building" as const,
  },
];

export const accordionItems = [
  {
    title: "De netwerking komt niet van de grond",
    content:
      "We blijven om elkaar heen draaien. Echte uitwisseling en gezamenlijke activiteiten komen niet van de grond. Hoe krijgen we de samenwerking op gang?",
  },
  {
    title: "De fut is uit onze netwerksamenwerking",
    content:
      "Er zijn onderlinge conflicten en partijen wantrouwen elkaar. Wat nu?",
  },
  {
    title: "Weinig support van de achterban",
    content:
      "Wij zijn enthousiast, maar de steun binnen onze eigen organisaties is beperkt. Hoe kunnen we onze achterban meenemen en zorgen voor voldoende middelen en speelruimte?",
  },
  {
    title: "Uiteenlopende belangen en machtrelaties",
    content:
      "Onze verscheidenheid geeft kansen maar maakt het ook complex. Vooral bij uiteenlopende belangen en als partijen machtspelletjes spelen. Hoe gaan we hiermee om?",
  },
  {
    title: "Complexe uitdagingen waarvoor samenwerking noodzakelijk is",
    content:
      "We kunnen complexe maatschappelijke vraagstukken niet alleen oplossen en hebben andere partijen nodig. Hoe pakken we dit aan?",
  },
  {
    title: "Het delen van data is makkelijker gezegd dan gedaan",
    content:
      "We zien allemaal voordelen van data, maar daarvoor moeten we ook onze data willen delen. Niet iedere partij wil dit. Hoe doorbreken we de situatie?",
  },
];

export const services = [
  {
    title: "On the job proces begeleiding",
    description:
      "Bij het opstarten van of nieuw leven inblazen van bestaande samenwerkingsverbanden tussen publieke en commerciële organisaties",
  },
  {
    title: "Hands on onderzoek en advies",
    description:
      "(Wetenschappelijk) onderzoek naar de haalbaarheid, legitimiteit en doorstart-mogelijkheden van startende en bestaande samenwerkingsverbanden",
  },
  {
    title: "Inspiratieworkshops, masterclasses en lezingen",
    description:
      "Over de dynamiek van en het effectief omgaan met asymmetrie in netwerksamenwerkingen",
  },
  {
    title: "Simulaties en managementgames",
    description:
      "Het aan den lijve ervaren van wat het betekent om als publieke en commerciële organisaties samen te werken",
  },
];

export const clients = [
  "Geonovum",
  "Geospatial World Forum",
  "GKG",
  "Ministerie van BZK",
  "SVB-BGT",
  "ISPT",
  "PostNL",
  "Segula",
  "Provincie Overijssel",
  "Ministerie van I&W",
  "World Animal Protection",
];

export type ClientLogo = {
  src: string;
  alt: string;
};

export const clientLogos: ClientLogo[] = [
  { src: "/images/logos/1.Geonovum.png", alt: "Geonovum" },
  { src: "/images/logos/2.GKG.png", alt: "GKG" },
  { src: "/images/logos/3.SVB-BGT.png", alt: "SVB-BGT" },
  { src: "/images/logos/4.MinisterievanBZK.png", alt: "Ministerie van BZK" },
  { src: "/images/logos/5.ISPT.png", alt: "ISPT" },
  { src: "/images/logos/6.PostNL.png", alt: "PostNL" },
  { src: "/images/logos/7.Segula.png", alt: "Segula" },
  { src: "/images/logos/8.MinisterievanI&W.png", alt: "Ministerie van I&W" },
  { src: "/images/logos/9.provincieOverijssel.png", alt: "Provincie Overijssel" },
  { src: "/images/logos/10.GeospatialWorldForum.png", alt: "Geospatial World Forum" },
  { src: "/images/logos/11.WorldAnimalProtection.png", alt: "World Animal Protection" },
];

export const sustainabilityColumns = [
  "OpenPerspectief streeft naar duurzame klantrelaties door geen momentgebonden adviseursafhankelijke oplossing te bieden, maar te helpen bij het ontwikkelen en inzetten van kennis en het talent dat al binnen de organisatie aanwezig is.",
  "OpenPerspectief ziet het actief bijdragen aan het creëren van gelijke kansen en ontwikkelmogelijkheden als een integraal onderdeel van haar activiteiten en investeert daar actief in.",
  "Oog voor milieu en vermindering van verspilling zijn voor OpenPerspectief ook van groot belang. Daarom reizen we zoveel mogelijk met openbaar vervoer en gaan we bewust om met bedrijfsmiddelen.",
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "22 oktober 2021",
    title: "Doctoraat behaald",
    description:
      "Verdediging van mijn proefschrift Koorddansen met asymmetrie: omgaan met ongelijksoortigheid en ongelijkwaardigheid in een netwerksamenwerking aan de Universiteit van Utrecht. De graad van doctor (dr.) ontvangen. Mijn drijfveer om te promoveren lag in de wens me te specialiseren in netwerksamenwerkingen en de wens wetenschap en praktijk samen te brengen in OpenPerspectief.",
  },
  {
    year: "April 2014",
    title: "Master Bestuur- & Organisatiewetenschappen",
    description:
      "De reden voor deze studie was mijn kennis als organisatie-adviseur actueel te houden en op zoek te gaan naar een wetenschappelijke onderbouwing voor mijn visie op mensen en organisaties. De titel van mijn thesis was: Netwerk is maatwerk van waarden, ambities en belangen.",
  },
  {
    year: "Januari 2010",
    title: "OpenPerspectief gestart",
    description:
      "Gedurende de jaren had ik een eigen visie ontwikkeld op mijn vakgebied en de manier waarop ik dit in samenwerking met klanten wilde uitvoeren. Dat was de reden om na een aantal mooie en inspirerende jaren bij Altran mijn baan op te zeggen en OpenPerspectief te starten.",
  },
  {
    year: "September 2007",
    title: "Lead consultant change management bij Altran",
    description:
      "Altran is een internationaal hightech en business consultancybureau (sinds 2019 onderdeel van CapGemini). Ik heb als consultant opdrachten gedaan in de energiesector, telecom, logistiek, gezondheidszorg en bij de rijksoverheid.",
  },
  {
    year: "2007",
    title: "Kunstgeschiedenis aan de Universiteit Leiden",
    description:
      "Ik ben deze studie gestart vanuit een persoonlijke interesse in kunst en architectuur, en de drive om nieuwe kennis op te doen. Mijn aandacht ging vooral uit naar de sociologische, filosofische en maatschappelijke ontwikkelingen die aan kunst en architectuur ten grondslag liggen. Het onderwerp van mijn thesis was: het gezelschap: ontwikkelingen in het uitbeelden van gezelschappen.",
  },
  {
    year: "September 2002",
    title: "Manager bedrijfsvoering & projectleider bij de Parnassia Groep",
    description:
      "Algemeen manager van een paramedische dienst, ambulant team, dagbehandeling en de zorgadministratie. Als projectleider verantwoordelijk voor de herinrichting van het behandel- en zorgproces en de inrichting en invoering van een multidisciplinair elektronisch patiëntendossier (EPD).",
  },
  {
    year: "Mei 2000",
    title: "Business consultant bij Empact Process Innovation B.V.",
    description:
      "Business consultant voor klanten in de telecom, automatisering, overheid, handel en industrie.",
  },
  {
    year: "1999",
    title: "Kwaliteitsmanager bij Rijkswaterstaat",
    description:
      "Verantwoordelijk voor het kwaliteits-, arbo- en milieubeleid van de regionale vestiging en het uitvoeren van kwaliteitsaudits bij grote aannemerijen.",
  },
  {
    year: "1998",
    title: "Management, Economie & Recht aan de Hogeschool 's-Hertogenbosch",
    description:
      "Afstudeerrichting Bestuurskunde. Onderwerp thesis: Het managen van zorgprocessen. Kwaliteitsverbetering in de geestelijke gezondheidszorg.",
  },
  {
    year: "1997",
    title: "Kwaliteitsmanager bij JCB",
    description:
      "JCB is een wereldwijde fabrikant van bouwmachines. Ik was verantwoordelijk voor het ontwikkelen en implementeren van het kwaliteits- en arbobeleid binnen de Nederlandse en Belgische vestiging.",
  },
];

export type Publication = {
  date: string;
  sortKey: number;
  title: string;
  description: string;
  link: string;
};

export const publications: Publication[] = [
  {
    date: "Mei 2022",
    sortKey: 202205,
    title: "Datagericht werken: Gegevensknooppunt Groningen",
    description:
      "In de verandering naar datagestuurd werken gaat het vooral om 'the human factor'",
    link: "https://ibestuur.nl/praktijk/datagestuurd-werken-gegevensknooppunt-groningen",
  },
  {
    date: "Oktober 2021",
    sortKey: 202110,
    title: "Koorddansen met asymmetrie",
    description:
      "Omgaan met ongelijksoortigheid en ongelijkwaardigheid in een netwerksamenwerking (proefschrift)",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/20211102-PS_Rosemarie_digitaal_logo_abstract.pdf",
  },
  {
    date: "Juli 2019",
    sortKey: 201907,
    title: "Kijk naar netwerk, niet naar ervaring",
    description:
      "Een omroep die zich organiseert als netwerk, sluit beter bij het hedendaagse kijkerspubliek (Het Parool)",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/20190711-artikel_kijk-naar-netwerk-niet-naar-ervaring_c-amsterdam-PAROOL.pdf",
  },
  {
    date: "Januari 2019",
    sortKey: 201901,
    title: "Centrale regie en een community",
    description: "Sleutels voor een succesvolle transitie",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/20190125-artikel_centrale-regie-en-community-iBESTUUR.pdf",
  },
  {
    date: "Juli/augustus 2015",
    sortKey: 201507,
    title: "Netwerk is maatwerk",
    description:
      "Van waarden, ambities en belangen: mogelijkheden voor een netwerk van zelfstandig adviseurs en consultancybureau",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/MO04_2015_artikel-netwerk-is-maatwerk_pp_42-58.pdf",
  },
  {
    date: "April 2015",
    sortKey: 201504,
    title: "Excellent HBO-onderwijs: een kwestie van cultuur",
    description:
      "Leidt normatieve sturing tot excellent onderwijs en oplossingen voor maatschappelijke vraagstukken?",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/MC_002-foto-vz.pdf",
  },
  {
    date: "Maart 2014",
    sortKey: 201403,
    title: "Kwaliteit als identiteit",
    description:
      "Leiden ratings en prestatie-indicatoren daadwerkelijk tot betere kwaliteit van het onderwijs?",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/201403-artikel_kwaliteit-als-identiteit-THEMA.pdf",
  },
  {
    date: "Juni 2012",
    sortKey: 201206,
    title: "Voorwoord — Socratisch coachen",
    description:
      "Over organisatieverandering, de heersende rationele manier van leidinggeven en leidinggeven met respect voor de waarden en belangen van mensen.",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/201206-voorwoord-socratisch-coachen-OPPT.pdf",
  },
  {
    date: "Mei 2012",
    sortKey: 201205,
    title: "Verandering in de provincie",
    description: "Een uniforme werkwijze succesvol invoeren",
    link: "https://openperspectief.nl/wp-content/uploads/2022/07/201205-verandering-in-de-provincie_artikel-DE-GIDS.pdf",
  },
].sort((a, b) => b.sortKey - a.sortKey);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/over-ons", label: "Persoonlijk" },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  organization: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hier komt een quote van de klant over de samenwerking met OpenPerspectief en het resultaat dat is behaald.",
    name: "Naam Achternaam",
    title: "Functietitel",
    organization: "Organisatienaam",
    initials: "NA",
  },
  {
    quote:
      "Hier komt een quote van de klant over de aanpak van Rosemarie en wat het heeft opgeleverd voor de organisatie.",
    name: "Naam Achternaam",
    title: "Functietitel",
    organization: "Organisatienaam",
    initials: "NA",
  },
  {
    quote:
      "Hier komt een quote van de klant over de expertise en begeleiding die zij heeft ontvangen van OpenPerspectief.",
    name: "Naam Achternaam",
    title: "Functietitel",
    organization: "Organisatienaam",
    initials: "NA",
  },
];
