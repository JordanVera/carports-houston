import { getSiteImage, type SiteImage, type SiteImageKey } from '@/lib/images';

export type ServiceCategory = 'residential' | 'commercial';

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  name: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  intro: readonly string[];
  features: readonly string[];
  faqs: readonly ServiceFaq[];
  imageKeys: readonly SiteImageKey[];
  related: readonly string[];
};

const services: readonly Service[] = [
  {
    slug: 'custom-carports',
    category: 'residential',
    name: 'Custom Carports',
    title: 'Custom Carports in Houston, TX',
    metaDescription:
      'Custom metal carports in Houston and the Texas Gulf Coast. Carports Houston designs, builds, and installs residential carports for cars, trucks, and daily parking.',
    excerpt:
      'Custom metal carports built for Houston driveways, engineered for Gulf Coast weather, and sized around the vehicles you actually park.',
    intro: [
      'Looking for a custom carport in Houston? Carports Houston designs and installs residential metal carports that protect cars, trucks, and work vehicles from sun, hail, and Gulf Coast storms. Every custom carport is measured for your driveway, property line, and HOA requirements so the finished structure fits the home instead of fighting it.',
      'A Houston metal carport is one of the fastest ways to add covered parking without the cost of a full garage. We build single-car carports, two-car carports, and extra-wide custom carports with gabled or regular roofs, vertical siding, and USA-made steel. If you need a carport installer near Katy, Pearland, Cypress, or anywhere along the Texas Gulf Coast, we handle design, delivery, and installation.',
      'Homeowners choose our custom carports in Houston because the steel is made in the USA, the frames are built for local wind, and the layout can include extra height, extra length, or attached storage. Tell us what you park and how you use the driveway — we will recommend a carport size, roof style, and color that lasts.',
    ],
    features: [
      'Single-car, two-car, and oversized custom carports',
      'Gabled, regular, and vertical roof styles',
      'Engineered for Houston wind and weather',
      'USA-made steel, fasteners, and panels',
      'Optional sides, storage, and extra height',
      'Residential carport installation across the Gulf Coast',
    ],
    faqs: [
      {
        question: 'How much does a custom carport in Houston cost?',
        answer:
          'Custom carport pricing depends on size, roof style, height, and extras like sides or storage. Most Houston homeowners start with a two-car metal carport and add options from there. Call 281-387-1989 for a free custom carport quote.',
      },
      {
        question: 'Do I need a permit for a metal carport in Houston?',
        answer:
          'Many cities and HOAs in the Houston area require a permit or approval for a new carport. We help you plan a custom carport that matches local setbacks and can provide the measurements and drawings your permit office asks for.',
      },
      {
        question: 'Will a steel carport hold up in Gulf Coast storms?',
        answer:
          'Yes. We install residential metal carports with USA-made steel and fasteners selected for Houston heat, humidity, and wind. A properly anchored custom carport is built to stay put through typical Gulf Coast weather.',
      },
    ],
    imageKeys: ['residentialCarport', 'customBuilding'],
    related: ['rv-covers', 'patio-covers', 'metal-buildings'],
  },
  {
    slug: 'patio-covers',
    category: 'residential',
    name: 'Patio Covers',
    title: 'Patio Covers in Houston, TX',
    metaDescription:
      'Metal patio covers in Houston for decks, pools, and outdoor living. Carports Houston installs attached and freestanding patio covers across the Texas Gulf Coast.',
    excerpt:
      'Shade, rain protection, and outdoor living space — metal patio covers built for Houston heat and Gulf Coast storms.',
    intro: [
      'A patio cover in Houston turns a hot deck or uncovered porch into usable outdoor living space. Carports Houston builds metal patio covers for backyards, pool decks, and outdoor kitchens across the Texas Gulf Coast. Whether you want an attached patio cover on the house or a freestanding patio cover over a slab, we size the structure for shade, drainage, and the way you entertain.',
      'Houston patio covers take a beating from sun, humidity, and sudden downpours. That is why we use USA-made steel panels and frames instead of wood that warps, rots, or needs constant staining. A metal patio cover stays cooler, sheds rain, and can include ceiling fans, lighting, and screened sides so you can use the patio after work instead of only on perfect days.',
      'If you are searching for patio cover installation in Houston, Katy, Sugar Land, or The Woodlands, we handle the full project: measurements, color matching, and a clean install that looks like it belongs on the house. Ask about insulated patio covers, poolside patio covers, and custom patio covers for existing decks.',
    ],
    features: [
      'Attached and freestanding metal patio covers',
      'Poolside, deck, and outdoor kitchen coverage',
      'Insulated and open-roof patio cover options',
      'Fan, lighting, and screen-ready framing',
      'Colors matched to the home',
      'Patio cover installation throughout Greater Houston',
    ],
    faqs: [
      {
        question: 'What is the best patio cover for Houston heat?',
        answer:
          'A metal patio cover with a solid or insulated roof is the most durable option for Houston heat and UV. It blocks direct sun, sheds rain, and does not rot like wood. We can add insulation and fans for a cooler outdoor room.',
      },
      {
        question: 'Can you install a patio cover over an existing deck?',
        answer:
          'Yes. Many of our Houston patio cover projects attach to the home and cover an existing wood or composite deck. We confirm structure, pitch, and drainage before we install so the new patio cover protects the deck instead of trapping water.',
      },
      {
        question: 'How long does patio cover installation take?',
        answer:
          'Most residential patio covers in Houston install in one to a few days after materials are on site, depending on size and extras. We will give you a clear schedule when you request a patio cover quote.',
      },
    ],
    imageKeys: ['poolPatio', 'deckCover'],
    related: ['pergolas', 'awnings', 'custom-carports'],
  },
  {
    slug: 'metal-buildings',
    category: 'residential',
    name: 'Metal Buildings',
    title: 'Residential Metal Buildings in Houston, TX',
    metaDescription:
      'Residential metal buildings in Houston for workshops, storage, and backyard shops. Custom steel buildings installed by Carports Houston across the Texas Gulf Coast.',
    excerpt:
      'Custom residential metal buildings for workshops, storage, hobby shops, and backyard steel buildings that stand up to Houston weather.',
    intro: [
      'Need a residential metal building in Houston? Carports Houston designs custom steel buildings for workshops, equipment storage, hobby shops, and backyard buildings that look finished — not temporary. A metal building gives you more clear-span space than a typical wood shed and holds up to Gulf Coast humidity, heat, and storms.',
      'Homeowners across Harris County and the Texas Gulf Coast use our residential steel buildings as garages, lawn-equipment barns, home workshops, and climate-ready storage. We help you choose width, length, eave height, roll-up doors, walk-in doors, and window placement so the metal building works like a real room on your property.',
      'If you have been comparing prefab metal buildings in Houston, a custom install is usually the better long-term choice. We use USA-made steel, set the building on a proper foundation plan, and finish it in colors that match the house. Call for a residential metal building quote and we will walk the site with you.',
    ],
    features: [
      'Workshops, storage buildings, and backyard shops',
      'Custom sizes, door packages, and window layouts',
      'USA-made steel frames and panels',
      'Roll-up doors, walk doors, and insulation options',
      'Colors coordinated with the home',
      'Residential metal building installation across the Gulf Coast',
    ],
    faqs: [
      {
        question: 'Are residential metal buildings allowed in Houston HOAs?',
        answer:
          'Many HOAs allow a metal building if the colors, roof style, and placement match the home. We help Houston homeowners pick a residential steel building package that is more likely to get approval and can provide specs for the architectural review.',
      },
      {
        question: 'What foundation does a backyard metal building need?',
        answer:
          'Most residential metal buildings in Houston sit on a concrete slab sized to the building. We will recommend a foundation approach based on soil, drainage, and building size before installation.',
      },
      {
        question: 'Can a metal building be used as a workshop?',
        answer:
          'Yes. A custom metal workshop is one of our most requested residential buildings. We can plan extra height, lighting-ready framing, wide roll-up doors, and insulation so the shop is usable year-round in Houston.',
      },
    ],
    imageKeys: ['customBuilding', 'equipmentShelter'],
    related: ['custom-carports', 'rv-covers', 'patio-covers'],
  },
  {
    slug: 'pergolas',
    category: 'residential',
    name: 'Pergolas',
    title: 'Metal Pergolas in Houston, TX',
    metaDescription:
      'Custom metal pergolas in Houston for patios, gardens, and outdoor rooms. Powder-coated steel pergola installation from Carports Houston.',
    excerpt:
      'Steel pergolas that add shade, structure, and curb appeal to Houston patios without the rot and upkeep of wood.',
    intro: [
      'A metal pergola in Houston gives you filtered shade and a defined outdoor room without the yearly staining that wood pergolas demand. Carports Houston builds custom steel pergolas for patios, gardens, and pool decks across the Texas Gulf Coast. The frame stays straight, the finish holds color, and the structure can stand alone or attach to the house.',
      'Homeowners searching for pergola installation in Houston usually want something that looks architectural and still survives humidity. Our metal pergolas use USA-made steel and can be designed as an open-lattice pergola, a louvered-style shade structure, or a hybrid that pairs pergola beams with a partial metal roof.',
      'If you want a pergola that matches a new patio cover or carport, we can design the whole outdoor package in the same color family. From compact courtyard pergolas to wide backyard pergolas in Katy and Pearland, we install steel pergolas that look custom and stay low-maintenance.',
    ],
    features: [
      'Attached and freestanding metal pergolas',
      'Open-lattice and partial-roof pergola designs',
      'Powder-coated steel that resists Houston humidity',
      'Patio, garden, and poolside layouts',
      'Coordinated colors with existing metal structures',
      'Custom pergola installation across Greater Houston',
    ],
    faqs: [
      {
        question: 'Is a metal pergola better than wood in Houston?',
        answer:
          'For most Houston yards, yes. A steel pergola does not rot, warp, or need annual staining the way wood does. It holds a clean line and handles humidity, which makes a metal pergola the lower-maintenance choice on the Gulf Coast.',
      },
      {
        question: 'Can you add a roof to a pergola later?',
        answer:
          'Often we can design a Houston pergola so a solid or insulated metal roof can be added later. Tell us if you want open shade now and the option to convert it into a patio cover.',
      },
      {
        question: 'Do metal pergolas need a permit?',
        answer:
          'It depends on the city, size, and whether the pergola is attached to the house. We help you plan a custom pergola that fits local rules and HOA guidelines in the Houston area.',
      },
    ],
    imageKeys: ['pergola', 'pavilionBuild'],
    related: ['patio-covers', 'awnings', 'custom-carports'],
  },
  {
    slug: 'rv-covers',
    category: 'residential',
    name: 'RV Covers',
    title: 'RV Covers in Houston, TX',
    metaDescription:
      'Metal RV covers and RV carports in Houston. Tall steel RV covers for motorhomes, travel trailers, and fifth wheels from Carports Houston.',
    excerpt:
      'Tall metal RV covers that keep motorhomes, travel trailers, and fifth wheels out of Houston sun, hail, and storms.',
    intro: [
      'An RV cover in Houston is the difference between a motorhome that stays road-ready and one that bakes in the driveway. Carports Houston builds tall metal RV covers and RV carports for Class A motorhomes, travel trailers, fifth wheels, and toy haulers. We measure door height, unit length, and slide-out clearance so the RV cover actually fits the coach you own.',
      'Gulf Coast sun fades paint, dries seals, and cooks interiors. A steel RV cover blocks UV, sheds hail, and keeps the roof cleaner between trips. We install residential RV covers with extra eave height, extra length, and optional enclosed sides so you can add storage or a workshop beside the coach.',
      'If you are looking for an RV carport installer in Houston, Cypress, Conroe, or along the Texas Gulf Coast, we design the structure around your property access — not just a catalog size. Ask about extra-tall RV covers, enclosed RV buildings, and combo carport-and-RV-cover layouts.',
    ],
    features: [
      'Extra-tall RV covers for motorhomes and fifth wheels',
      'Travel trailer and toy-hauler carports',
      'Extended length for slides and towed vehicles',
      'Optional enclosed sides and storage bays',
      'USA-made steel framed for Houston wind',
      'RV cover installation across the Texas Gulf Coast',
    ],
    faqs: [
      {
        question: 'How tall should an RV cover be in Houston?',
        answer:
          'Height depends on the coach, A/C units, and whether you need extra clearance for satellite or vents. We measure the actual RV and recommend an RV cover eave height that lets you pull in without scraping. Most motorhome covers need more height than a standard carport.',
      },
      {
        question: 'Can I enclose my RV cover later?',
        answer:
          'Yes. Many Houston RV covers start open and add side panels, a shop bay, or a fully enclosed RV building later. We can plan the frame so those upgrades bolt on cleanly.',
      },
      {
        question: 'Will an RV cover protect against hail?',
        answer:
          'A metal RV cover is one of the best hail shields you can put over a coach in Houston. The steel roof takes the impact instead of the RV roof, which helps protect seals, solar, and air conditioners.',
      },
    ],
    imageKeys: ['rvCover', 'residentialCarport'],
    related: ['custom-carports', 'metal-buildings', 'parking-structures'],
  },
  {
    slug: 'awnings',
    category: 'residential',
    name: 'Awnings',
    title: 'Metal Awnings in Houston, TX',
    metaDescription:
      'Residential and storefront metal awnings in Houston. Custom steel awnings for doors, windows, and walkways from Carports Houston.',
    excerpt:
      'Custom metal awnings that shade entries, windows, and walkways while adding a finished look to Houston homes and storefronts.',
    intro: [
      'A metal awning in Houston does more than look finished — it keeps rain off the front door, cuts heat on west-facing windows, and protects walkways from sudden Gulf Coast downpours. Carports Houston fabricates and installs custom steel awnings for homes, offices, and storefronts across the Texas Gulf Coast.',
      'Unlike fabric awnings that fade and tear, a steel awning holds its line and color in Houston sun. We build door awnings, window awnings, and longer walkway awnings in colors that match the building. Architectural metal awnings are a simple upgrade that adds curb appeal and weather protection at the same time.',
      'If you need awning installation in Houston for a residence, clinic, restaurant, or office, we can match an existing canopy style or design a new metal awning package for several openings. Ask about standing-seam awnings, corrugated awnings, and commercial entry canopies.',
    ],
    features: [
      'Door, window, and walkway metal awnings',
      'Residential and light-commercial entry canopies',
      'Standing-seam and corrugated awning styles',
      'Colors matched to the building',
      'USA-made steel that handles Houston sun',
      'Custom awning installation across Greater Houston',
    ],
    faqs: [
      {
        question: 'Do metal awnings help with Houston energy bills?',
        answer:
          'A well-placed window awning or door awning shades glass and reduces afternoon heat gain, which can take load off interior cooling. Many Houston homeowners add metal awnings on west and south exposures for that reason.',
      },
      {
        question: 'Can you match an awning to my existing carport?',
        answer:
          'Yes. We regularly install metal awnings in the same color and panel style as a carport or patio cover so the property looks like one system, not leftover pieces.',
      },
      {
        question: 'Are metal awnings only for businesses?',
        answer:
          'No. We install residential metal awnings on Houston homes and commercial awnings on storefronts. The same steel construction works for both — the size and attachment details change with the building.',
      },
    ],
    imageKeys: ['architecturalAwning', 'restaurantPatio'],
    related: ['patio-covers', 'pergolas', 'commercial-roofing'],
  },
  {
    slug: 'parking-structures',
    category: 'commercial',
    name: 'Parking Structures',
    title: 'Commercial Parking Structures in Houston, TX',
    metaDescription:
      'Commercial parking structures and covered parking in Houston. Metal parking canopies for offices, retail, and job sites from Carports Houston.',
    excerpt:
      'Covered commercial parking structures that protect customers, employees, and fleet vehicles across Houston properties.',
    intro: [
      'A commercial parking structure in Houston is more than shade — it is a customer amenity, an employee perk, and protection for fleet vehicles that sit outside all day. Carports Houston designs and installs metal parking canopies and covered parking structures for offices, retail centers, churches, schools, and industrial sites along the Texas Gulf Coast.',
      'Our commercial parking structures use USA-made steel and can be laid out as single-loaded or double-loaded rows, drive-through canopies, or long covered walks between buildings. We plan column placement around traffic flow, ADA parking, and drainage so the parking structure works for the property instead of blocking it.',
      'If you are comparing covered parking contractors in Houston, we bring decades of commercial metal-building experience and a local install crew. Ask about multi-bay parking canopies, solar-ready parking structures, and matching canopies for loading zones.',
    ],
    features: [
      'Multi-bay commercial parking canopies',
      'Office, retail, church, and industrial layouts',
      'Drive-through and double-loaded parking rows',
      'Engineered for Houston wind loads',
      'USA-made steel frames and roof panels',
      'Commercial parking structure installation across the Gulf Coast',
    ],
    faqs: [
      {
        question: 'How long does a commercial parking canopy take to install?',
        answer:
          'Timeline depends on bay count, foundation work, and site access. After design and materials are ready, many Houston parking structures install in phases so the lot can stay partly open. We will map a schedule around your operations.',
      },
      {
        question: 'Can a parking structure include lighting or cameras?',
        answer:
          'Yes. We can plan a commercial parking canopy with lighting-ready framing and attachment points for cameras or signage. That keeps the covered parking useful after dark for employees and customers.',
      },
      {
        question: 'Do you build parking structures for churches and schools?',
        answer:
          'We install covered parking for churches, schools, medical offices, and retail in the Houston area. The same metal parking structure system scales from a small staff lot to a large visitor canopy.',
      },
    ],
    imageKeys: ['commercialCanopy', 'commercialInstall'],
    related: ['cantilever-carports', 'apartment-covers', 'car-wash-shelters'],
  },
  {
    slug: 'cantilever-carports',
    category: 'commercial',
    name: 'Cantilever Carports',
    title: 'Cantilever Carports in Houston, TX',
    metaDescription:
      'Cantilever carports and single-post parking canopies in Houston. Open-aisle commercial carports installed by Carports Houston.',
    excerpt:
      'Cantilever metal carports with a clear drive aisle — more parking, easier circulation, and fewer posts in the way.',
    intro: [
      'A cantilever carport in Houston keeps the drive aisle open. Posts sit on one side of the canopy so cars can pull through, doors can open, and maintenance vehicles can move without weaving around a forest of columns. Carports Houston installs commercial cantilever carports for offices, apartments, dealerships, and industrial lots across the Texas Gulf Coast.',
      'Cantilever parking canopies are the right call when you need covered parking but cannot afford to lose stall width or turning radius. We engineer the single-sided frame for Houston wind, use USA-made steel, and set the cantilever reach to cover the stall without crowding the aisle.',
      'If you have been searching for a cantilever carport installer in Houston, we can replace aging wood covers or add a new cantilever canopy beside an existing building. Ask about back-to-back cantilever carports, extra-wide commercial cantilevers, and matching apartment covers.',
    ],
    features: [
      'Single-sided cantilever parking canopies',
      'Open drive aisles with fewer center posts',
      'Office, apartment, and dealership layouts',
      'Engineered reach for full stall coverage',
      'USA-made steel for Gulf Coast wind',
      'Cantilever carport installation throughout Greater Houston',
    ],
    faqs: [
      {
        question: 'What is the advantage of a cantilever carport?',
        answer:
          'A cantilever carport puts the posts on one side so the parking aisle stays clear. That makes it easier to pull through, open doors, and maintain the lot — especially on tight Houston commercial sites.',
      },
      {
        question: 'Are cantilever carports strong enough for Houston storms?',
        answer:
          'Yes, when they are engineered and anchored correctly. We build commercial cantilever carports with USA-made steel and a foundation plan sized for local wind so the open side stays covered and the frame stays put.',
      },
      {
        question: 'Can you install cantilever carports at an apartment complex?',
        answer:
          'Apartment covered parking is one of the most common uses for cantilever carports in Houston. We can run rows of cantilevers along existing drives with less disruption than a two-sided canopy.',
      },
    ],
    imageKeys: ['cantileverCarport', 'commercialCanopy'],
    related: ['parking-structures', 'apartment-covers', 'custom-carports'],
  },
  {
    slug: 'apartment-covers',
    category: 'commercial',
    name: 'Apartment Covers',
    title: 'Apartment Covers in Houston, TX',
    metaDescription:
      'Apartment covered parking and multifamily carports in Houston. Metal apartment covers for resident parking from Carports Houston.',
    excerpt:
      'Multifamily apartment covers that give residents shaded parking and give property managers a durable, low-maintenance canopy.',
    intro: [
      'Apartment covers in Houston are one of the first amenities residents notice. Carports Houston installs metal apartment covers and multifamily carports that shade resident parking, reduce heat on vehicles, and hold up to constant daily use. We work with property managers, owners, and contractors across the Texas Gulf Coast.',
      'A good apartment parking cover has to survive Houston weather and look consistent across the whole complex. We use USA-made steel, repeatable bay layouts, and colors that match the buildings. Rows can be standard carports, cantilever covers, or a mix that follows the existing lot geometry.',
      'If you need apartment covered parking in Houston, Katy, or along the Gulf Coast, we can phase the install so residents keep access to the lot. Ask about replacing aging wood covers, adding extra rows, and coordinating apartment covers with new parking structures.',
    ],
    features: [
      'Multifamily resident parking canopies',
      'Repeating bay layouts for large complexes',
      'Standard and cantilever apartment covers',
      'Colors matched to the property',
      'Phased installation to keep lots usable',
      'Apartment cover installation across Greater Houston',
    ],
    faqs: [
      {
        question: 'How do you install apartment covers without shutting the lot down?',
        answer:
          'We typically phase Houston apartment cover projects by row or building so most of the lot stays open. That keeps residents parked and the property operating while new covers go up.',
      },
      {
        question: 'Can you replace old wood apartment carports?',
        answer:
          'Yes. Many complexes call us to replace rotting wood covers with steel apartment covers. Metal lasts longer in Houston humidity and gives the property a cleaner, more consistent look.',
      },
      {
        question: 'Do apartment covers help with leasing?',
        answer:
          'Covered resident parking is a selling point in Houston heat. Property managers often add apartment covers to improve curb appeal, protect vehicles, and support higher-demand units.',
      },
    ],
    imageKeys: ['apartmentCovers', 'cantileverCarport'],
    related: ['cantilever-carports', 'parking-structures', 'awnings'],
  },
  {
    slug: 'riding-arenas',
    category: 'commercial',
    name: 'Riding Arenas',
    title: 'Covered Riding Arenas in Houston, TX',
    metaDescription:
      'Covered riding arenas and metal horse arenas near Houston. Wide-span steel riding arenas installed by Carports Houston across the Texas Gulf Coast.',
    excerpt:
      'Wide-span metal riding arenas that keep horses, riders, and footing usable through Houston heat, rain, and summer storms.',
    intro: [
      'A covered riding arena near Houston lets you ride when the weather will not cooperate. Carports Houston builds wide-span metal riding arenas and horse arenas for ranches, trainers, and boarding facilities across the Texas Gulf Coast. The goal is simple: keep the footing usable and the arena open when it is raining, blazing, or both.',
      'Our riding arenas use clear-span steel so you are not dodging center posts. We plan eave height for lighting and ventilation, roof coverage for the riding surface, and openings that match how you move horses in and out. USA-made steel keeps the building honest in Gulf Coast wind and humidity.',
      'If you are looking for a riding arena builder in the Houston area, we can start with a covered arena roof, add lean-tos for stalls or equipment, or design a full metal riding arena package. Ask about arena lighting-ready frames, extra-wide spans, and matching barns.',
    ],
    features: [
      'Clear-span covered riding arenas',
      'Open-sided and fully enclosed arena options',
      'Heights planned for lighting and ventilation',
      'Lean-tos for stalls, tack, and equipment',
      'USA-made steel for Texas ranch weather',
      'Riding arena installation across the Gulf Coast',
    ],
    faqs: [
      {
        question: 'How wide can a metal riding arena be?',
        answer:
          'Span depends on the engineering package and how you ride. We design Houston-area riding arenas around your preferred width, length, and eave height so the steel building matches the discipline — not a generic shed.',
      },
      {
        question: 'Do you only build the roof, or a full arena building?',
        answer:
          'Either. Some clients want a covered riding arena roof over an existing outdoor arena. Others want a full metal horse arena with enclosed ends, lean-tos, and a finished riding surface plan.',
      },
      {
        question: 'Will a steel riding arena handle Gulf Coast storms?',
        answer:
          'A properly engineered metal riding arena is one of the most durable agricultural buildings you can put on a Texas property. We use USA-made steel and a foundation plan sized for local wind.',
      },
    ],
    imageKeys: ['ridingArena', 'pavilionInterior'],
    related: ['metal-buildings', 'aircraft-hangars', 'parking-structures'],
  },
  {
    slug: 'aircraft-hangars',
    category: 'commercial',
    name: 'Aircraft Hangars',
    title: 'Aircraft Hangars in Houston, TX',
    metaDescription:
      'Custom aircraft hangars and steel airplane hangars near Houston. Metal hangar buildings for private and general aviation from Carports Houston.',
    excerpt:
      'Custom steel aircraft hangars for private and general aviation — tall doors, clear-span interiors, and Gulf Coast durability.',
    intro: [
      'An aircraft hangar in the Houston area has to clear the tail, swallow the wingspan, and still leave room to work. Carports Houston builds custom steel aircraft hangars and airplane hangars for private owners, flight schools, and general aviation operators along the Texas Gulf Coast. We start with the aircraft, then design the hangar around door height, door type, and shop space.',
      'Metal hangar buildings give you a clear-span interior without a maze of columns. We can plan bi-fold or sliding hangar doors, extra depth for a workshop, and finishes that look right on an airfield. USA-made steel and a local install crew keep the project practical instead of a catalog building dropped on the pad.',
      'If you need an aircraft hangar builder near Houston, Hobby-area fields, or coastal airports, we will walk the site, confirm setbacks, and quote a hangar that fits the plane you fly today and the one you might add next.',
    ],
    features: [
      'Custom steel airplane hangars',
      'Clear-span interiors sized to the aircraft',
      'Tall hangar door packages',
      'Shop, storage, and office lean-to options',
      'USA-made steel for coastal conditions',
      'Aircraft hangar installation across the Texas Gulf Coast',
    ],
    faqs: [
      {
        question: 'What size aircraft hangar do I need?',
        answer:
          'Hangar size starts with wingspan, tail height, and how you want to move around the plane. We design Houston-area aircraft hangars around the actual aircraft plus shop space, not a generic box.',
      },
      {
        question: 'Can you build a hangar with a workshop?',
        answer:
          'Yes. Many private hangars include a lean-to or enclosed shop for tools, parts, and a small office. We can add that to a steel aircraft hangar from the start or leave the frame ready for a later addition.',
      },
      {
        question: 'Do you work with airport and FBO requirements?',
        answer:
          'We coordinate hangar design with site rules, access, and the pad you already have. Tell us the field and the aircraft — we will plan a metal hangar that fits both.',
      },
    ],
    imageKeys: ['aircraftHangar', 'customBuilding'],
    related: ['metal-buildings', 'riding-arenas', 'parking-structures'],
  },
  {
    slug: 'car-wash-shelters',
    category: 'commercial',
    name: 'Car Wash Shelters',
    title: 'Car Wash Shelters in Houston, TX',
    metaDescription:
      'Metal car wash shelters and canopies in Houston. Steel car wash covers for self-serve, automatic, and detail bays from Carports Houston.',
    excerpt:
      'Open metal car wash shelters that keep equipment, customers, and bays usable through Houston rain and summer sun.',
    intro: [
      'A car wash shelter in Houston has to handle water, chemicals, and constant traffic. Carports Houston builds metal car wash canopies and shelters for self-serve bays, automatic washes, and detail shops across the Texas Gulf Coast. The structure stays open for airflow and equipment access while the steel roof keeps the bay usable when it storms.',
      'We design car wash shelters around bay width, equipment height, and drainage. USA-made steel and a clean column layout leave room for vacuums, pay stations, and drive lanes. If you already have a wash, we can add a new canopy, replace a tired cover, or extend coverage over vacuum islands.',
      'Property owners searching for a car wash canopy contractor in Houston get a local crew that already builds commercial parking structures and industrial covers. Ask about multi-bay car wash shelters, vacuum canopies, and matching commercial roofing.',
    ],
    features: [
      'Self-serve and automatic car wash canopies',
      'Vacuum island and detail-bay covers',
      'Open-sided steel frames for equipment access',
      'Layouts planned around drainage and drive lanes',
      'USA-made steel for wet, high-use sites',
      'Car wash shelter installation across Greater Houston',
    ],
    faqs: [
      {
        question: 'Can you cover an existing car wash bay?',
        answer:
          'Often yes. We measure the existing equipment, clearance, and slab, then design a metal car wash shelter that covers the bay without blocking hoses, arches, or pay equipment.',
      },
      {
        question: 'Do car wash shelters need special steel?',
        answer:
          'Car wash environments are wet and chemical-heavy. We spec USA-made steel and finishes suited to Houston commercial sites and will talk through the best panel and frame package for a wash.',
      },
      {
        question: 'Can you add a vacuum canopy too?',
        answer:
          'Yes. Many Houston car wash projects include a matching vacuum island cover so customers stay dry and equipment lasts longer. We can design the wash shelter and vacuum canopy as one system.',
      },
    ],
    imageKeys: ['carWashShelter', 'equipmentShelter'],
    related: ['parking-structures', 'commercial-roofing', 'cantilever-carports'],
  },
  {
    slug: 'commercial-roofing',
    category: 'commercial',
    name: 'Commercial Roofing',
    title: 'Commercial Metal Roofing in Houston, TX',
    metaDescription:
      'Commercial metal roofing in Houston for shops, warehouses, and retail. Standing-seam and steel roof installation from Carports Houston.',
    excerpt:
      'Commercial metal roofing that sheds Houston storms, cuts heat, and lasts longer than a patchwork of aging built-up roofs.',
    intro: [
      'Commercial metal roofing in Houston is a long-term fix for leaks, heat, and constant repairs. Carports Houston installs steel commercial roofs on shops, warehouses, retail buildings, and agricultural structures across the Texas Gulf Coast. If the building already has a metal roof that is failing, we can plan a reroof. If you are building new, we can supply the commercial roofing as part of the structure.',
      'Metal roofs handle Houston sun and sudden rain better than many aging built-up systems. Standing-seam and corrugated commercial roofing shed water, resist UV, and can be specified in colors that match the rest of the property. We use USA-made panels and fasteners selected for coastal conditions.',
      'If you are looking for a commercial metal roofing contractor in Houston, we already live in this work — canopies, buildings, hangars, and roofs. Ask about warehouse roofing, retail metal roofs, and coordinating new commercial roofing with a parking structure or awning package.',
    ],
    features: [
      'Standing-seam and corrugated commercial roofs',
      'Warehouse, shop, and retail metal roofing',
      'Reroof and new-construction packages',
      'Colors matched to the building',
      'USA-made panels and fasteners',
      'Commercial roofing installation across the Texas Gulf Coast',
    ],
    faqs: [
      {
        question: 'Is a metal roof a good idea for a Houston commercial building?',
        answer:
          'For many shops, warehouses, and retail buildings, yes. Commercial metal roofing sheds Gulf Coast rain, handles heat, and typically outlasts a cycle of patch repairs on an aging roof. We will look at the existing deck and recommend the right system.',
      },
      {
        question: 'Can you reroof over an existing commercial roof?',
        answer:
          'Sometimes a metal reroof can go over a prepared existing roof; other times the old system needs to come off. We inspect the Houston building and quote the approach that will actually stay dry.',
      },
      {
        question: 'Do you only roof buildings you also construct?',
        answer:
          'No. We install commercial metal roofing on buildings we build and on existing shops, warehouses, and canopies. If the project also needs a parking structure or awning, we can coordinate that work too.',
      },
    ],
    imageKeys: ['commercialRoofing', 'commercialInstall'],
    related: ['metal-buildings', 'awnings', 'parking-structures'],
  },
];

export const serviceCategories: Record<
  ServiceCategory,
  { label: string; href: string; description: string }
> = {
  residential: {
    label: 'Residential',
    href: '/services#residential',
    description: 'Custom metal structures for Houston homes',
  },
  commercial: {
    label: 'Commercial',
    href: '/services#commercial',
    description: 'Metal buildings and canopies for Gulf Coast businesses',
  },
};

export function getAllServices(): readonly Service[] {
  return services;
}

export function getServicesByCategory(
  category: ServiceCategory,
): readonly Service[] {
  return services.filter((service) => service.category === category);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceHref(slug: string): string {
  return `/services/${slug}`;
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => related !== undefined);
}

export function getServiceImages(service: Service): SiteImage[] {
  return service.imageKeys.map((key) => getSiteImage(key));
}

export function getServiceNavGroups() {
  return (['residential', 'commercial'] as const).map((category) => ({
    ...serviceCategories[category],
    category,
    items: getServicesByCategory(category).map((service) => ({
      name: service.name,
      href: getServiceHref(service.slug),
    })),
  }));
}
