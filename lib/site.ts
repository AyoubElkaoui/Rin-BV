export const company = {
  name: 'R.I.N. B.V.',
  tagline: 'Zakelijk koeriers- en transportbedrijf',
  // TODO: echte gegevens invullen
  phone: '033 20 23 485',
  phoneHref: 'tel:+31332023485',
  email: 'info@rinlogistiek.nl',
  addressLines: ['Siliciumweg 53', '3812 SW Amersfoort'],
  kvk: '87104822',
  btw: 'NL864204693B01',
  hours: 'ma–zo 09:00–17:00 · spoed 24/7',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    slug: 'spoedtransport',
    n: '01',
    title: 'Spoedtransport',
    tag: 'Snel inzetbaar',
    card: 'Eén duidelijke aanvraag en we kijken direct welke rit haalbaar is. Rechtstreeks van A naar B, zonder onnodige tussenstops.',
    lead: 'Voor zendingen die extra aandacht en een snelle reactie vragen. We stemmen ophaal- en levertijd vooraf met u af.',
    seoTitle: 'Spoedtransport voor zakelijke zendingen',
    seo: 'Een productielijn die stilvalt, een onderdeel dat vandaag nog op locatie moet zijn of documenten die niet kunnen wachten: R.I.N. B.V. organiseert spoedtransport met een vaste planner. We bespreken de route, het tijdvenster en het passende voertuig voordat de rit vertrekt.',
    photo: '/photos/small-van-sunset.jpg',
    detailPhoto: '/photos/small-van-team.jpg',
    faqs: [
      { q: 'Wanneer is spoedtransport geschikt?', a: 'Spoedtransport past bij zendingen die niet kunnen wachten op een reguliere route, zoals een kritisch onderdeel, productiedocumenten of een nalevering. We beoordelen eerst de route, het gewenste tijdvenster en de beschikbare capaciteit.' },
      { q: 'Rijdt mijn zending rechtstreeks naar de bestemming?', a: 'Als dat vooraf is afgesproken, rijdt de zending rechtstreeks van laadadres naar losadres zonder onnodige hub of overdracht. De gekozen uitvoering leggen we vast in het voorstel.' },
      { q: 'Welke gegevens zijn nodig voor een spoedrit?', a: 'Geef laad- en losadres, gewenste tijden, afmetingen, gewicht en bijzonderheden door. Ook informatie over toegang, laadmiddelen of een tijdkritische afspraak helpt ons om de rit goed voor te bereiden.' },
    ],
    specs: [
      { v: 'Snel', l: 'Reactie op uw aanvraag' },
      { v: '24/7', l: 'Ook nacht, weekend en feestdagen' },
      { v: '0', l: 'Overslagpunten' },
    ],
    bullets: [
      { t: 'Snel geschakeld', d: 'We bekijken direct welke chauffeur en welk voertuig bij uw zending passen.' },
      { t: 'Geen overslag', d: 'Uw zending gaat rechtstreeks mee. Geen distributiecentrum, geen extra handling, geen onnodige vertraging.' },
      { t: 'Altijd op de hoogte', d: 'Met track & trace weet u waar de zending is; bij aflevering krijgt u direct het bewijs van levering.' },
      { t: 'Eén aanspreekpunt', d: 'U spreekt de planner die uw rit kent, geen callcenter dat het moet uitzoeken.' },
    ],
    cargo: 'Van een envelop met documenten tot een pallet met machineonderdelen. Zit uw zending er niet bij? Neem contact op, dan kijken we mee.',
    chips: ['Documenten', 'Machineonderdelen', 'Colli', 'Pallets', 'Waardevol', 'Maatwerk'],
  },
  {
    slug: 'sameday-delivery',
    n: '02',
    title: 'Sameday delivery',
    tag: 'Vandaag op, vandaag af',
    card: 'Ophalen en afleveren op dezelfde werkdag, afgestemd op uw route en tijdvenster.',
    lead: 'Uw klant verwacht het vandaag. We plannen ophalen en aflevering binnen dezelfde werkdag wanneer route en capaciteit dat toelaten.',
    seoTitle: 'Sameday delivery in Nederland en België',
    seo: 'Met same-day delivery houdt u beloftes aan uw klanten zonder uw eigen planning om te gooien. Wij halen de zending op het afgesproken moment op en leveren die dezelfde werkdag af, met een digitale terugkoppeling na de aflevering.',
    photo: '/photos/small-van-box.jpg',
    detailPhoto: '/photos/small-van-delivery.jpg',
    faqs: [
      { q: 'Wat betekent same-day delivery bij R.I.N. B.V.?', a: 'Same-day delivery betekent dat we uw zakelijke zending ophalen en dezelfde werkdag afleveren, wanneer route en capaciteit dat toelaten. Vooraf stemmen we het tijdvenster en de haalbaarheid met u af.' },
      { q: 'Kan ik een specifiek tijdvenster afspreken?', a: 'Ja. Geef bij uw aanvraag de openingstijden, gewenste aankomst en eventuele laad- of losinstructies door. We verwerken dit in de planning en bevestigen wat uitvoerbaar is.' },
      { q: 'Voor welke zendingen is same-day delivery geschikt?', a: 'Denk aan B2B-orders, reserveonderdelen, monsters, documenten en andere zendingen die dezelfde dag bij een klant of vestiging moeten zijn.' },
    ],
    specs: [
      { v: 'Zelfde dag', l: 'Ophalen en afleveren' },
      { v: 'NL + BE', l: 'Standaard dekking' },
      { v: 'POD', l: 'Digitaal bewijs bij aflevering' },
    ],
    bullets: [
      { t: 'Geen nacht in een hub', d: 'De zending gaat mee met de chauffeur die ook aflevert. Minder handling, minder schaderisico.' },
      { t: 'Tijdvenster op maat', d: 'Levering voor 17:00, tegen sluitingstijd of exact op een afgesproken slot, u kiest.' },
      { t: 'Live inzicht', d: 'U en uw klant zien waar de bus is en wanneer hij aankomt.' },
      { t: 'Bewijs binnen een minuut', d: 'Naam, tijdstip en foto van de aflevering, direct te delen met uw opdrachtgever.' },
    ],
    cargo: 'Spoedorders, reserveonderdelen, monsters en zendingen die de standaard pakketstroom niet haalt.',
    chips: ['E-commerce', 'Reserveonderdelen', 'Monsters', 'B2B-leveringen', 'Colli'],
  },
  {
    slug: 'vaste-ritten',
    n: '03',
    title: 'Vaste ritten & contractvervoer',
    tag: 'Op afspraak',
    card: 'Terugkerende ritten met duidelijke afspraken over route, stops, tijdvenster en aanspreekpunt.',
    lead: 'Voor terugkerende ritten leggen we samen de route, stops, laadmomenten en gewenste terugkoppeling vast. Frequentie, voertuig en tarief stemmen we af op uw planning.',
    seoTitle: 'Vaste ritten en contractvervoer met vaste capaciteit',
    seo: 'Voor dagelijkse distributie, pendelritten en vaste leveringen krijgt u één herkenbare werkwijze. Samen leggen we route, stops, laadtijden en contactpersonen vast. Zo weet uw team waar het aan toe is en blijft de uitvoering voorspelbaar.',
    photo: '/photos/small-van-arranging.jpg',
    detailPhoto: '/photos/small-van-clipboard.jpg',
    faqs: [
      { q: 'Hoe werkt een vaste rit of contractrit?', a: 'We brengen eerst uw route, stops, laadmomenten en gewenste terugkoppeling in kaart. Daarna maken we een voorstel voor frequentie, voertuig, tijdvenster en tarief dat past bij uw dagelijkse planning.' },
      { q: 'Kunnen route of volumes later wijzigen?', a: 'Dat kan. Geef veranderingen in stops, volume of tijden zo vroeg mogelijk door. We bekijken samen welke aanpassing nodig is en bevestigen de nieuwe afspraken vooraf.' },
      { q: 'Is een contract verplicht voor terugkerende ritten?', a: 'Nee. We kunnen een losse terugkerende afspraak of een uitgebreider contractvoorstel maken. De vorm hangt af van uw volume, looptijd en gewenste capaciteit.' },
    ],
    specs: [
      { v: 'Op maat', l: 'Route, stops en tijdvenster' },
      { v: '1', l: 'Planner als aanspreekpunt' },
      { v: 'In overleg', l: 'Frequentie en tarief' },
    ],
    bullets: [
      { t: 'Capaciteit die u kunt plannen', d: 'We leggen vooraf vast wat er nodig is en wanneer de rit plaatsvindt.' },
      { t: 'Vaste werkwijze', d: 'Contactpersonen, laadlocaties en instructies staan per route duidelijk beschreven.' },
      { t: 'Heldere kostenafspraak', d: 'Tarief, wachttijd en eventuele extra stops spreken we vooraf met u af.' },
      { t: 'Opschalen bij piek', d: 'Extra volume bespreken we tijdig en organiseren we met vaste partners.' },
    ],
    cargo: 'Dagelijkse lijnritten, distributie tussen vestigingen, vaste leveringen aan uw klanten en retourstromen.',
    chips: ['Lijnritten', 'Interne distributie', 'Retourstromen', 'Milk runs', 'Dagroutes'],
  },
  {
    slug: 'internationaal',
    n: '04',
    title: 'Internationaal koeriersvervoer',
    tag: 'Direct naar BE, DE, FR',
    card: 'Rechtstreeks de grens over met eigen chauffeur. Geen overslag, geen wachtdagen in een hub.',
    lead: 'Naar België, Duitsland, Frankrijk of verder Europa in: wij rijden rechtstreeks onder CMR. Eén rit, één verantwoordelijke, geen overdracht aan onbekende partijen.',
    seoTitle: 'Internationaal koeriersvervoer vanuit Nederland',
    seo: 'Internationale spoedzendingen vragen om voorbereiding. Wij controleren adressen, tijdvensters en CMR-informatie vooraf en rijden rechtstreeks naar België, Duitsland, Frankrijk en andere bestemmingen in Europa. U houdt één aanspreekpunt voor de hele rit.',
    photo: '/photos/small-van-city.jpg',
    detailPhoto: '/photos/small-van-documents.jpg',
    faqs: [
      { q: 'Naar welke Europese landen rijden jullie?', a: 'We verzorgen ritten vanuit Nederland naar onder meer België, Duitsland en Frankrijk en bekijken ook andere Europese bestemmingen. Beschikbaarheid, route en gewenste aankomst stemmen we per aanvraag af.' },
      { q: 'Welke documenten zijn nodig voor internationaal vervoer?', a: 'Voor de meeste ritten is een correcte CMR-instructie nodig. Afhankelijk van goederen en route kunnen aanvullende douane- of productdocumenten gelden; we bespreken dit vooraf.' },
      { q: 'Wordt een internationale zending rechtstreeks gereden?', a: 'Bij een directe rit blijft de zending bij dezelfde chauffeur van laadadres tot losadres. We spreken vooraf af of dit de juiste uitvoering is en welke planning daarbij hoort.' },
    ],
    specs: [
      { v: 'CMR', l: 'Verzekerd internationaal vervoer' },
      { v: 'Direct', l: 'Zonder overslag' },
      { v: 'EU', l: 'BE, DE, FR, PL e.o.' },
    ],
    bullets: [
      { t: 'Eén chauffeur, hele rit', d: 'Van ophaaladres tot afleveradres dezelfde verantwoordelijke. Niets raakt zoek bij een overdracht.' },
      { t: 'Papieren op orde', d: 'CMR, douanedocumenten en instructies vooraf gecheckt, zodat u niet aan de grens stilstaat.' },
      { t: 'Nacht doorrijden', d: 'Waar dat kan rijden wij door, zodat de zending bij opening op bestemming is.' },
      { t: 'Terugvracht mogelijk', d: 'Vaak kunnen we op de terugweg iets meenemen, scherper tarief, minder leegkilometers.' },
    ],
    cargo: 'Spoedzendingen voor productielijnen, colli, pallets en tijdkritische leveringen binnen Europa.',
    chips: ['België', 'Duitsland', 'Frankrijk', 'Polen', 'CMR', 'Douanepapieren'],
  },
  {
    slug: 'nachttransport',
    n: '05',
    title: 'Nachttransport',
    tag: 'Klaar bij opening',
    card: 'Avond- en nachtleveringen voor locaties die vóór opening bevoorraad moeten zijn.',
    lead: 'We laden in de avond of nacht en stemmen het aflevermoment af op de openingstijd van uw locatie.',
    seoTitle: 'Nachttransport voor levering vóór opening',
    seo: 'Nachttransport geeft uw magazijn of productielocatie een rustige start. We plannen het laadmoment, maken afspraken over toegang en leveren de zending af voordat uw eerste ploeg begint. Ideaal voor voorraad, onderdelen en materialen die direct nodig zijn.',
    photo: '/photos/small-van-sitting.jpg',
    detailPhoto: '/photos/small-van-route.jpg',
    faqs: [
      { q: 'Wanneer is nachttransport een goede oplossing?', a: 'Nachttransport past wanneer een locatie vóór opening moet zijn bevoorraad, of wanneer u dagdrukte en spits wilt vermijden. We stemmen het laad- en aflevervenster af op uw ploegendienst.' },
      { q: 'Hoe werkt aflevering bij een gesloten locatie?', a: 'We leggen vooraf vast hoe de chauffeur toegang krijgt, bijvoorbeeld via een sleutelkluis, poortcode of nachtportier. Zonder duidelijke toegangsinstructie plannen we de rit niet definitief in.' },
      { q: 'Welke goederen kunnen ’s nachts worden geleverd?', a: 'Voorraadaanvullingen, onderdelen, bouw- en installatiematerialen en andere zakelijke zendingen zijn geschikt wanneer de laad- en losvoorwaarden vooraf duidelijk zijn.' },
    ],
    specs: [
      { v: '22:00–06:00', l: 'Vast nachtvenster' },
      { v: 'Geen file', l: 'Betrouwbaardere aankomsttijd' },
      { v: 'Op maat', l: 'Aflevermoment bij opening' },
    ],
    bullets: [
      { t: 'Klaar voor de eerste dienst', d: 'Onderdelen, voorraad of gereedschap staat er voordat uw mensen binnenkomen.' },
      { t: 'Geen dagvertraging', d: 'Zonder spits is de rijtijd voorspelbaar. Dat maakt het aflevermoment betrouwbaarder.' },
      { t: 'Sleutel- en poortafspraken', d: 'Afleveren op een gesloten locatie regelen wij vooraf: sleutelkluis, poortcode of nachtportier.' },
      { t: 'Rustige ochtend', d: 'Uw dock is \u2019s ochtends vrij voor uw eigen stromen.' },
    ],
    cargo: 'Voorraadaanvullingen, bouw- en installatiematerialen, onderdelen voor de eerste productiedienst.',
    chips: ['Voorraadaanvulling', 'Bouwmaterialen', 'Onderdelen', 'Retail', 'Sleutelafspraak'],
  },
  {
    slug: 'medisch-waardevol',
    n: '06',
    title: 'Medisch & waardevol transport',
    tag: 'Geconditioneerd, geregistreerd',
    card: 'Transport voor temperatuurgevoelige of waardevolle zendingen, afgestemd op uw protocol.',
    lead: 'Temperatuurgevoelige of waardevolle lading vraagt om een duidelijke keten. We bespreken de vereisten vooraf en leggen registratie en dekking schriftelijk vast.',
    seoTitle: 'Medisch en waardevol transport met registratie',
    seo: 'Voor laboratoria, zorginstellingen en bedrijven met kostbare goederen is aantoonbare zorgvuldigheid essentieel. We stemmen verpakking, temperatuur en overdracht vooraf af en leveren de beschikbare registratie en het bewijs van aflevering mee.',
    photo: '/photos/stock-lab-pexels.jpg',
    detailPhoto: '/photos/stock-medical-pexels.jpg',
    faqs: [
      { q: 'Hoe gaan jullie om met temperatuurgevoelige zendingen?', a: 'We bespreken vooraf de vereiste temperatuur, verpakking, maximale transportduur en eventuele registratie. Alleen wanneer de afgesproken voorwaarden haalbaar zijn, bevestigen we de rit.' },
      { q: 'Kunnen waardevolle apparatuur en goederen worden vervoerd?', a: 'Ja, mits we de handling, verpakking, toegangsafspraken en eventuele aanvullende dekking vooraf schriftelijk vastleggen. Zo is duidelijk wie welke verantwoordelijkheid draagt.' },
      { q: 'Welk bewijs ontvang ik na aflevering?', a: 'Na aflevering ontvangt u het beschikbare digitale bewijs van levering. Als temperatuurregistratie onderdeel is van de opdracht, leveren we die volgens de gemaakte afspraak mee.' },
    ],
    specs: [
      { v: 'Op maat', l: 'Temperatuurafspraak' },
      { v: 'Op aanvraag', l: 'Temperatuurregistratie' },
      { v: 'Extra', l: 'Aanvullende dekking mogelijk' },
    ],
    bullets: [
      { t: 'Onafgebroken keten', d: 'Van laden tot lossen op temperatuur, ook tijdens wachten en tussenstops.' },
      { t: 'Meetbaar bewijs', d: 'U ontvangt de temperatuurlogging bij het bewijs van levering, handig bij audits.' },
      { t: 'Vaste chauffeurs', d: 'Gescreende chauffeurs die de protocollen van uw sector kennen.' },
      { t: 'Spoed blijft spoed', d: 'Ook geconditioneerd rijden wij direct, zonder overslag in een koelhub.' },
    ],
    cargo: 'Laboratorium- en ziekenhuiszendingen, farmaceutische goederen, monsters en waardevolle apparatuur.',
    chips: ['Lab', 'Ziekenhuis', 'Farma', '2–8 °C', 'Waardetransport'],
  },
];

export const stats = [
  { v: 'Snel', l: 'Reactie op uw aanvraag' },
  { v: '24/7', l: 'Ook nacht en weekend' },
  { v: 'NL + EU', l: 'NL · BE · DE · FR · PL' },
  { v: 'AVC · CMR', l: 'Verzekerd vervoer' },
];

export const routes = [
  { t: 'Vestiging ↔ vestiging', d: 'vaste lijn', f: 'op afspraak' },
  { t: 'Productie ↔ magazijn', d: 'pendelrit', f: 'op afspraak' },
  { t: 'Levering aan klanten', d: 'dagroute', f: 'op afspraak' },
  { t: 'Nederland → België', d: 'grensrit', f: 'in overleg' },
  { t: 'Nederland → Duitsland', d: 'grensrit', f: 'in overleg' },
  { t: 'Avond- of nachtrit', d: 'tijdvenster', f: 'in overleg' },
];

export const steps = [
  { n: '01', t: 'U belt of mailt', d: 'Adressen, tijdvenster en soort zending. We vragen alleen wat nodig is.' },
  { n: '02', t: 'Wij maken een passend plan', d: 'We bevestigen de beschikbare chauffeur, het voertuig en het afgesproken tijdvenster.' },
  { n: '03', t: 'Rechtstreeks rijden', d: 'Van A naar B zonder overslag, met live inzicht in de rit.' },
  { n: '04', t: 'Bewijs van levering', d: 'Naam, tijdstip en foto direct in uw mailbox.' },
];

export const proof = [
  { v: 'Duidelijk', l: 'Vooraf een passend voorstel voor uw route' },
  { v: '24/7', l: 'Spoedaanvragen ook buiten kantooruren' },
  { v: 'Live', l: 'Track & trace en digitale POD' },
  { v: '1 planner', l: 'Eén aanspreekpunt voor de hele rit' },
];

export const faqs = [
  { q: 'Hoe snel kunnen jullie schakelen?', a: 'We reageren zo snel mogelijk en bevestigen vooraf wat haalbaar is voor uw route en tijdvenster. Ook buiten kantooruren kunt u een spoedaanvraag indienen; de beschikbaarheid stemmen we vooraf met u af.' },
  { q: 'Wat kost een spoedrit?', a: 'Wij rekenen per rit: voorrijkosten plus kilometertarief. U krijgt de prijs vooraf en die verandert niet, behalve als de rit zelf verandert.' },
  { q: 'Kan ik de zending volgen?', a: 'Ja. U ontvangt bericht bij het laden en bij aflevering, met naam, tijdstip en foto als bewijs van levering.' },
  { q: 'Rijden jullie ook vaste ritten?', a: 'Dat doen wij graag. Bij contractvervoer zetten wij bus, chauffeur en tijdvenster vast op uw route, tegen een tarief dat u kunt doorrekenen.' },
];

export const values = [
  { n: '01', t: 'Snelheid', d: 'Uw zending komt direct in beweging, geen wachttijd, geen tussenstations.' },
  { n: '02', t: 'Communicatie', d: 'Kort en duidelijk. U hoort van ons bij het laden, bij vertraging en bij aflevering.' },
  { n: '03', t: 'Maatwerk', d: 'Elke zending is anders. Wij passen route, materieel en tijdvenster aan uw stroom aan.' },
  { n: '04', t: 'Bereikbaar', d: 'Korte lijnen en snel duidelijkheid over wat haalbaar is voor uw zending.' },
];

export const story = [
  { t: 'Klein team, korte lijnen', d: 'Wij zijn met een klein vast team en dat is bewust. U hoeft niet uit te leggen wie u bent, wat u vervoert of hoe uw locatie werkt, dat weten wij. Daardoor kunnen wij beslissingen nemen terwijl u nog aan de telefoon bent.' },
  { t: 'Eigen materieel, eigen chauffeurs', d: 'Wij rijden zelf. Alleen bij piek of extra volume schakelen wij vaste partners in die wij persoonlijk kennen en die dezelfde afspraken naleven.' },
  { t: 'Onze belofte', d: 'Wat wij toezeggen, rijden wij. En als er onverwacht iets verandert, hoort u dat van ons voordat u ernaar moet vragen.' },
];

export const terms = [
  { t: 'Aansprakelijkheid', d: 'Beperkt conform AVC/CMR. Aanvullende dekking is mogelijk in overleg en wordt vooraf schriftelijk vastgelegd.' },
  { t: 'Betaling', d: 'Betaaltermijn 14 dagen na factuurdatum, tenzij anders overeengekomen in een contractafspraak.' },
  { t: 'Annulering', d: 'Kosteloos tot het moment dat de chauffeur onderweg is naar de laadlocatie; daarna worden gemaakte kilometers in rekening gebracht.' },
];

export const rideTypes = [
  'Spoedtransport', 'Sameday delivery', 'Vaste ritten / contract', 'Internationaal', 'Nachtrit', 'Medisch / waardevol',
];
