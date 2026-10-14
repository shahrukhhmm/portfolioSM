export const projects = [
  {
    id: 'almulla-travels',
    name: 'Al Mulla Travels - Flight & Hotel Multi-Provider Booking Platform',
    category: 'E-Commerce & Logistics',
    eyebrow: 'TRAVEL TECH · MULTI-GDS APIS · FLUTTER · DUBAI',
    image: '/images/projects/almulla-travels.png',
    url: 'https://almullatravels.com/en',
    summary: 'A multi-provider flight and hotel reservation platform integrating Travelport and TBO GDS APIs, N-Genius payment gateway, and partner vendor portals.',
    fullDescription: 'Developed for a prominent Dubai-based travel company, Al Mulla Travels is an enterprise flight and hotel reservation ecosystem. Integrated multi-provider global distribution systems (Travelport and TBO) to aggregate real-time flight schedules, fare classes, and worldwide hotel accommodations. Customers can search, compare, book, and manage itineraries with multi-currency checkout via N-Genius payment gateway. Includes a comprehensive vendor back-office portal enabling travel partners to control flight allocations and room rates, accompanied by companion Flutter mobile applications.',
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL', 'Travelport API', 'TBO API', 'N-Genius Gateway', 'Flutter', 'Tailwind CSS'],
    highlights: [
      'Multi-provider GDS API integration with Travelport and TBO for real-time flight and hotel aggregation',
      'Secure regional payment processing via N-Genius payment gateway with automated e-ticket issuance',
      'Self-service customer portal for booking modifications, cancellations, and reservation history',
      'Dedicated vendor management dashboard enabling partners to configure allocations and seasonal pricing',
      'Cross-platform companion mobile application engineered with Flutter for on-the-go travel bookings'
    ],
    role: 'Full-Stack Lead Architect & API Integrator',
    location: 'Dubai, UAE',
    hosting: 'Cloudflare VPS / Enterprise Cloud'
  },
  {
    id: 'box-tech',
    name: 'BoxTech IoT Telemetry & Real-Time Device Tracking Platform',
    category: 'AI & Automation',
    eyebrow: 'IOT TELEMETRY · APACHE KAFKA · C# · NEXT.JS · DUBAI',
    image: '/images/projects/box-tech.png',
    url: 'https://boxtech.ai/',
    summary: 'A real-time IoT hardware telemetry and device tracking platform utilizing Next.js, C#, Kafka message streams, Flespi telematics API, and OpenStreetMap.',
    fullDescription: 'Engineered for a Dubai-based IoT solutions enterprise, BoxTech delivers high-throughput hardware telematics and live geospatial tracking. Low-level device communication is orchestrated via custom C# services interacting directly with IoT field hardware. Real-time sensor metrics, speed, and GPS coordinates are streamed through Apache Kafka message brokers and the Flespi telematics gateway before persistent storage in MongoDB. A responsive Next.js frontend renders real-time location vectors and device diagnostics over interactive OpenStreetMap (OSM) layers with sub-second latency.',
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'C#', 'Apache Kafka', 'Flespi API', 'OpenStreetMap'],
    highlights: [
      'High-throughput telematics data streaming pipeline powered by Apache Kafka message brokers',
      'Low-level hardware protocol integration and device communication services engineered in C#',
      'Seamless gateway integration with Flespi telematics platform for telemetry normalization',
      'Sub-second geospatial mapping interface on OpenStreetMap with live breadcrumb trails and vitals',
      'Scalable Node.js & Express REST API layer managing historical sensor logs and device configurations'
    ],
    role: 'Full-Stack IoT & Backend Systems Engineer',
    location: 'Dubai, UAE',
    hosting: 'Enterprise Cloud'
  },
  {
    id: 'meryal-waterpark',
    name: 'Meryal Waterpark Ticketing & Resort Booking Platform',
    category: 'E-Commerce & Logistics',
    eyebrow: 'TICKETING PLATFORM · QPAY & GPAY · NEXT.JS & FLUTTER · DUBAI',
    image: '/images/projects/meryal-waterpark.png',
    url: 'https://meryalwaterpark.com/',
    summary: 'An enterprise ticketing and tourism booking platform for Meryal Waterpark featuring QPay and Google Pay gateways, cab/hotel reservations, and Flutter mobile apps.',
    fullDescription: 'Developed for the iconic premier waterpark destination Meryal Waterpark, this omni-channel e-commerce ecosystem automates visitor bookings and resort activities at scale. The platform connects a Laravel REST API backend with a high-performance Next.js and Tailwind CSS frontend, alongside cross-platform Flutter applications. Guests can seamlessly purchase park admission passes, reserve private luxury cabanas, book chauffeur cab transfers, and secure partner hotel stays. Integrated with regional payment providers including QPay and Google Pay, with automated QR voucher issuance for fast gate turnstile scanning.',
    stack: ['Laravel', 'Next.js', 'Blade', 'MySQL', 'REST APIs', 'Tailwind CSS', 'QPay API', 'Google Pay', 'Flutter', 'Cloudflare VPS'],
    highlights: [
      'Comprehensive leisure e-commerce engine for park passes, cabana rentals, cab rides, and hotel bookings',
      'Multi-gateway payment processing integrated with QPay and Google Pay for high-conversion checkouts',
      'Next.js & Tailwind CSS high-performance customer portal deployed on Cloudflare-protected VPS',
      'Automated QR voucher generation and validation system for instant park turnstile entry',
      'Companion Flutter mobile application providing guest itinerary schedules and park navigation'
    ],
    role: 'Full-Stack Lead Developer & Mobile API Architect',
    location: 'Dubai, UAE / Qatar',
    hosting: 'Cloudflare VPS'
  },
  {
    id: 'zitransfer',
    name: 'ZiTransfer Enterprise Cloud File Transfer & S3 Edge Delivery',
    category: 'SaaS & Platforms',
    eyebrow: 'CLOUD STORAGE · AWS S3 & LAMBDA · CLOUDFRONT · UK',
    image: '/images/projects/zitransfer.png',
    url: 'https://zitransfer.com/',
    summary: 'A high-performance WeTransfer-style cloud transfer platform with direct AWS S3 multipart uploads, AWS Lambda processing, and CloudFront global CDN distribution.',
    fullDescription: 'Engineered at UK-based Zimo Group, ZiTransfer provides frictionless transfer of massive files and video assets without web server bottlenecking. The architecture connects a Next.js interface with a Laravel API, direct AWS S3 presigned multipart chunked uploads, and serverless AWS Lambda background jobs for file validation and storage optimization. Files are globally distributed via Amazon CloudFront CDN edge points, featuring password protection, custom vanity download URLs, real-time upload progress meters, and automated expiration purging rules.',
    stack: ['Laravel', 'Next.js', 'AWS S3', 'AWS Lambda', 'Amazon CloudFront', 'AWS EC2', 'MySQL', 'REST APIs'],
    highlights: [
      'Direct presigned multipart chunked uploads to AWS S3 bypassing web application bottlenecks',
      'Serverless automated background processing via AWS Lambda for file integrity and storage cleanup',
      'Global low-latency download delivery powered by Amazon CloudFront CDN edge network',
      'Custom link expiry, password encryption, download access logging, and automated file purging',
      'Intuitive drag-and-drop client interface built with Next.js featuring real-time upload metrics'
    ],
    role: 'Senior Backend Developer (Zimo Group)',
    location: 'United Kingdom',
    hosting: 'AWS EC2 · S3 · Lambda · CloudFront'
  },
  {
    id: 'zimo-meet',
    name: 'ZimoMeet Enterprise Video Conferencing & Virtual Rooms',
    category: 'SaaS & Platforms',
    eyebrow: 'VIDEO CONFERENCING · JITSI MEET · NEXT.JS & AWS EC2 · UK',
    image: '/images/projects/zimo-meet.png',
    url: 'https://zimomeet.com/',
    summary: 'A low-latency video conferencing platform built with Next.js, Laravel, and Jitsi Meet on AWS EC2 with screen sharing, meeting scheduling, and host controls.',
    fullDescription: 'Engineered during tenure at UK-based Zimo Group, ZimoMeet is an enterprise cloud video meeting and collaboration suite. The platform integrates a Next.js frontend with a high-performance Laravel REST API backend, coordinating dynamic meeting rooms powered by a customized Jitsi Meet WebRTC bridge hosted on AWS EC2. Users can create instant meetings, schedule future collaborative sessions with calendar invites, share high-resolution screens, chat in real time, and manage participant audio/video privileges with enterprise-grade token security.',
    stack: ['Next.js', 'Laravel', 'Jitsi Meet / WebRTC', 'MySQL', 'REST APIs', 'AWS EC2', 'Tailwind CSS'],
    highlights: [
      'Low-latency HD multi-party video conferencing powered by customized Jitsi Meet WebRTC engines',
      'Comprehensive meeting lifecycle engine: instant room launch, scheduled calls, and calendar invitations',
      'Interactive collaboration tools: high-fps screen sharing, in-room text chat, and host moderation controls',
      'Scalable cloud infrastructure architected on AWS EC2 with optimized media stream routing',
      'Token-based access authorization ensuring private, tamper-proof corporate conference sessions'
    ],
    role: 'Senior Backend Developer & Video Systems Engineer (Zimo Group)',
    location: 'United Kingdom',
    hosting: 'AWS EC2'
  },
  {
    id: 'zimopro',
    name: 'ZimoPro Luxury Goods Bidding & Real-Time Auction Engine',
    category: 'SaaS & Platforms',
    eyebrow: 'LUXURY AUCTION · REAL-TIME BID ENGINE · AWS CLOUDFRONT · UK',
    image: '/images/projects/zimo-pro.png',
    url: 'https://zipro.com/',
    summary: 'A luxury asset bidding and auction platform engineered with Laravel, Next.js, and AWS CloudFront featuring anti-sniping bid algorithms and live price updates.',
    fullDescription: 'Engineered at UK-based Zimo Group, ZimoPro is an exclusive digital auction and exchange platform for high-ticket luxury assets including fine horology, supercars, and art. The backend coordinates high-concurrency competitive bidding with transactional database locking to prevent race conditions. Features an intelligent anti-sniping algorithm that automatically extends auction countdowns when bids occur in the final seconds, alongside escrow verification workflows. High-resolution asset galleries are cached and distributed via AWS S3 and Amazon CloudFront.',
    stack: ['Laravel', 'Next.js', 'MySQL', 'REST APIs', 'AWS S3', 'Amazon CloudFront', 'Redis / Real-Time'],
    highlights: [
      'High-concurrency bidding engine with strict transactional locks to guarantee bid integrity',
      'Anti-sniping auto-extension algorithm preventing last-second bot and sniper exploits',
      'High-resolution media galleries and asset catalogs cached on Amazon CloudFront CDN',
      'Multi-tiered buyer verification, escrow payment workflows, and comprehensive audit history',
      'Responsive luxury marketplace interface built with Next.js delivering premium aesthetic polish'
    ],
    role: 'Senior Backend Developer (Zimo Group)',
    location: 'United Kingdom',
    hosting: 'AWS S3 · CloudFront'
  },
  {
    id: 'zimo-team',
    name: 'Zimo Team Enterprise Collaboration & Application Portal',
    category: 'SaaS & Platforms',
    eyebrow: 'ENTERPRISE PORTAL · RECRUITMENT · AWS CLOUD · UK',
    image: '/images/projects/zimo-team.png',
    url: 'https://zimomeet.com/',
    summary: 'A high-availability enterprise recruitment and workforce management portal engineered for Zimo Group with custom application workflows and AWS cloud storage.',
    fullDescription: 'Engineered during tenure at UK-based Zimo Group, Zimo Team is an enterprise portal managing global talent recruitment, candidate applications, and workforce collaboration. Built with a Laravel REST API core, Next.js frontend, and AWS cloud storage, the system provides high-volume candidate intake pipelines, digital document verification, and team collaboration workflows.',
    stack: ['Laravel', 'Next.js', 'MySQL', 'REST APIs', 'AWS S3', 'Amazon CloudFront', 'Tailwind CSS'],
    highlights: [
      'High-concurrency candidate application and recruitment intake pipeline',
      'Secure document upload and identity verification backed by AWS S3 storage',
      'Dynamic multi-step application forms with real-time client & server validation',
      'Administrative dashboard for evaluating candidates and managing talent pools',
      'Responsive design delivering modern UK enterprise branding standards'
    ],
    role: 'Senior Backend Developer (Zimo Group)',
    location: 'United Kingdom',
    hosting: 'AWS S3 · CloudFront · EC2'
  },
  {
    id: 'simplefixx',
    name: 'SimpleFixx On-Demand Handyman & Service Booking Platform',
    category: 'SaaS & Platforms',
    eyebrow: 'HOME SERVICES · DISPATCH & BOOKING · REACT · USA MARKET',
    image: '/images/projects/simplefixx.png',
    url: 'https://www.simplefixrx.com/',
    summary: 'An on-demand handyman service marketplace connecting homeowners with verified technicians, featuring dynamic scheduling, job dispatch, and provider portals.',
    fullDescription: 'Developed for a US-based home maintenance and repair services company, SimpleFixx is a two-sided service booking marketplace. Homeowners and commercial clients can search repair categories (plumbing, electrical, HVAC, carpentry), discover verified local technicians, and book appointments via an interactive calendar. Service providers receive a dedicated dashboard to accept requests, manage job milestones, coordinate arrival times, and track customer payments. Engineered with Laravel, React, Blade, and MySQL on Hostinger infrastructure.',
    stack: ['Laravel', 'React.js', 'Blade', 'MySQL', 'REST APIs', 'Hostinger VPS'],
    highlights: [
      'Two-sided marketplace connecting homeowners with background-checked local handyman contractors',
      'Interactive booking calendar with automated appointment slot availability and confirmation',
      'Handyman provider management console for accepting jobs, updating statuses, and logging work',
      'Automated customer SMS/email notifications for booking reminders and technician arrivals',
      'Mobile-optimized responsive interface ensuring effortless booking on any device'
    ],
    role: 'Full-Stack Lead Developer',
    location: 'United States',
    hosting: 'Hostinger VPS'
  },
  {
    id: 'startexoil',
    name: 'Startex Oil Commercial Fuel Dispatch & Live Price Sync',
    category: 'E-Commerce & Logistics',
    eyebrow: 'PETROLEUM LOGISTICS · FTP AUTOMATION · WEBSOCKETS · USA & KUWAIT',
    image: '/images/projects/startexoil.png',
    url: 'https://startexoil.net/',
    summary: 'A commercial fuel distribution and dispatch platform featuring automated FTP spot price ingestion, dynamic PDF rate generation, and Flutter driver dispatch apps.',
    fullDescription: 'Engineered for Startex Oil, a commercial fuel logistics firm serving enterprise clients in the USA and Kuwait. The system automates daily spot market petroleum pricing by executing background cron jobs that pull raw pricing files over secure FTP, parses market indices into MySQL, and dynamically renders branded PDF rate sheets for instant client download. Commercial buyers place bulk fuel delivery orders through the web portal, while dispatch managers route tanker trucks in real time via WebSockets to a dedicated Flutter mobile application for field drivers.',
    stack: ['Laravel', 'MySQL', 'WebSockets / Socket.io', 'FTP Data Ingestion', 'Cron Automations', 'Flutter', 'Hostinger VPS'],
    highlights: [
      'Automated daily FTP cron ingestion pipeline parsing spot market petroleum prices into database records',
      'Dynamic on-demand PDF price sheet generation with historical price auditing and download logs',
      'Commercial bulk fuel ordering workflow with tank volume verification and dispatch routing',
      'Real-time WebSocket event streaming connecting dispatchers with drivers on the road',
      'Cross-platform Flutter driver application providing GPS delivery itineraries and electronic confirmations'
    ],
    role: 'Lead Backend & Logistics Architect',
    location: 'USA & Kuwait',
    hosting: 'Hostinger VPS'
  },
  {
    id: 'technocheck',
    name: 'TechnoCheck Automated Cheque Printing & Institutional ERP',
    category: 'Business Systems & CRM',
    eyebrow: 'FINTECH AUTOMATION · CHEQUE PRINTING · SCHOOL ERP · DUBAI',
    image: '/images/projects/technocheck.png',
    url: 'https://techno-check.com/',
    summary: 'An enterprise financial system automating bank-grade cheque printing workflows, MICR alignment, multi-bank templates, and institutional school management.',
    fullDescription: 'Developed for a Dubai-based financial automation specialist, TechnoCheck delivers precision automated cheque printing and institutional financial management. The cheque platform automates high-volume corporate disbursements with MICR alignment, multi-currency layout calibration across major regional and international banks, algorithmic payee verification, and tamper-proof audit trails. The system also powers a comprehensive school management ERP module handling student fee structures, tuition fee collection, payment receipts, and staff payroll.',
    stack: ['PHP', 'MySQL', 'Precision Print Engine', 'Cloudflare FTP', 'JavaScript', 'HTML5 / CSS3'],
    highlights: [
      'Bank-compliant automated cheque layout calibrator supporting dozens of UAE and global bank templates',
      'High-volume batch cheque printing with tamper-proof numeric-to-words conversion and MICR alignment',
      'Complete institutional school ERP module managing student admissions, tuition schedules, and fee collections',
      'Granular role-based security ensuring compliance, financial separation of duties, and audit tracking',
      'Cloudflare-secured deployment with automated FTP data backup synchronization'
    ],
    role: 'Full-Stack Architect & Financial Systems Lead',
    location: 'Dubai, UAE',
    hosting: 'Cloudflare VPS / FTP'
  },
  {
    id: 'waywegaming',
    name: 'WayWeGaming Interactive Game Studio Web Platform',
    category: 'SaaS & Platforms',
    eyebrow: 'GAME STUDIO · REACT · JSON ARCHITECTURE · USA',
    image: '/images/projects/waywegaming-site.png',
    url: 'https://www.waywegaming.com/',
    summary: 'A high-performance interactive web portal for a US game studio featuring reactive title showcases, dynamic career recruitment pipelines, and lightweight JSON architecture.',
    fullDescription: 'Engineered for WayWeGaming, a creative game studio in the United States, this web platform provides an immersive digital home for studio titles and community engagement. Built with React.js, the system utilizes a streamlined JSON data layer enabling swift content modifications for upcoming games, trailers, and studio news without the latency of heavy databases. Includes dedicated interactive career applicant submission pipelines, dynamic game detail modals, and inquiry forms, deployed on GoDaddy VPS cPanel with rapid static asset caching.',
    stack: ['React.js', 'JavaScript / ES6+', 'JSON Data Architecture', 'Tailwind CSS', 'GoDaddy VPS cPanel'],
    highlights: [
      'Interactive game showcase catalog featuring rich media, gameplay trailers, and release countdowns',
      'Lightweight JSON data architecture allowing instant content editing and sub-second page transitions',
      'Talent acquisition and career recruitment module handling developer portfolios and inquiries',
      'Custom responsive UI engineered for both high-end gaming desktop displays and mobile visitors',
      'Production deployment on GoDaddy VPS cPanel with automated static caching rules'
    ],
    role: 'Lead Frontend & Studio Web Architect',
    location: 'United States',
    hosting: 'GoDaddy VPS cPanel'
  },
  {
    id: 'zaman-cargo',
    name: 'Zaman Cargo International Freight Financial ERP & Ledgers',
    category: 'E-Commerce & Logistics',
    eyebrow: 'FREIGHT ERP · DOUBLE-ENTRY ACCOUNTING · PAYROLL · LARAVEL',
    image: '/images/projects/zaman-cargo.png',
    url: 'https://zamanscargo.com/',
    summary: 'An enterprise cargo accounting ERP automating double-entry client ledgers, international freight invoices, payment vouchers, and staff payroll records.',
    fullDescription: 'Developed for Zaman Cargo, an international cargo and logistics enterprise, this platform is a mission-critical financial ERP system. Built with Laravel and MySQL on Hostinger, the system manages all financial aspects of global cargo shipments: client profiles, automated multi-currency freight invoices, payment vouchers, and official receipts. It features a robust double-entry accounting engine maintaining real-time balance sheets and customer ledgers, as well as a complete employee payroll module tracking staff salaries, advances, and payment ledgers with instant PDF generation and printing.',
    stack: ['Laravel', 'MySQL', 'Double-Entry Accounting', 'Automated PDF Generation', 'Hostinger VPS'],
    highlights: [
      'Comprehensive double-entry general ledger tracking international freight revenue, expenses, and balances',
      'Automated client freight invoicing, official payment vouchers, and receipt generation with print support',
      'Employee salary ledger managing staff compensation, monthly payroll disbursements, and advance deductions',
      'Instant client balance sheet calculation showing real-time outstanding balances and payment statuses',
      'High-speed PDF export and print formatting for international commercial audits'
    ],
    role: 'Lead Backend & Financial Systems Architect',
    location: 'International',
    hosting: 'Hostinger VPS'
  },
  {
    id: 'lead-selling',
    name: 'LeadExchange B2B Lead Marketplace & Dual-Wallet System',
    category: 'Business Systems & CRM',
    eyebrow: 'B2B MARKETPLACE · DUAL WALLET · LARAVEL LIVEWIRE · PAKISTAN',
    image: '/images/projects/lead%20selling.jpeg',
    summary: 'A multi-user B2B lead generation trading platform with dual buyer/seller digital wallets, escrow transactions, and Livewire-powered dashboards.',
    fullDescription: 'Developed for a Pakistan-based digital lead generation enterprise, LeadExchange is an advanced marketplace facilitating high-velocity lead transactions between verified buyers and sellers. Built using Laravel, Livewire, and MySQL, the platform features a proprietary dual-wallet architecture (separate buying and selling wallet balances) enabling users to deposit funds, sell verified business leads, purchase exclusive or shared leads, and request withdrawals. Administrators maintain full oversight over escrow funds, user KYC, lead verification, and marketplace transaction commissions.',
    stack: ['Laravel', 'Livewire', 'MySQL', 'Digital Wallet Architecture', 'REST APIs', 'Hostinger VPS'],
    highlights: [
      'Dual-wallet financial engine isolating buyer deposit balances from seller earnings and payouts',
      'Dynamic peer-to-peer lead trading marketplace with instant balance debit/credit and escrow protection',
      'Reactive single-page user interface built with Laravel Livewire for real-time lead updates',
      'Granular administrator control room for approving leads, managing dispute resolutions, and auditing transactions',
      'Automated commission deduction logic ensuring platform profitability on every marketplace exchange'
    ],
    role: 'Full-Stack Architect & Backend Lead',
    location: 'Pakistan',
    hosting: 'Hostinger VPS'
  },
  {
    id: 'grid-solar-installation',
    name: 'Grid Solar Installations Commercial Portal & Dynamic CMS',
    category: 'Business Systems & CRM',
    eyebrow: 'CLEANTECH · CUSTOM CMS · TECHNICAL SEO · LARAVEL',
    image: '/images/projects/gridsolarinstallation.png',
    url: 'https://gridsolarinstallations.com/',
    summary: 'A commercial clean-energy portal featuring a custom administrative CMS for dynamic landing pages, product catalogs, and complete technical SEO optimization.',
    fullDescription: 'Developed for a clean energy and solar installations company, this web platform provides an end-to-end customer acquisition and content management infrastructure. Built on Laravel, MySQL, and Blade, the system features a bespoke administrative CMS allowing team members to publish and update page content, manage high-resolution project galleries, and showcase modular solar hardware products across Home, About, Contact, and Product catalog pages. Engineered with complete technical SEO schema and on-page optimization for top local search ranking.',
    stack: ['Laravel', 'Blade', 'MySQL', 'Technical SEO', 'JavaScript', 'CSS3 / Bootstrap'],
    highlights: [
      'Custom administrative CMS allowing dynamic page editing, content publishing, and media upload',
      'Full technical SEO architecture with semantic schema, meta controls, and sitemap generation',
      'Modular product catalog showcasing solar panels, hybrid inverters, and battery storage setups',
      'High-converting customer inquiry capture pipeline storing customer requirements directly in database',
      'Optimized lightweight frontend delivering sub-second load times and high mobile responsiveness'
    ],
    role: 'Lead Full-Stack Developer & SEO Specialist',
    location: 'Local / Regional',
    hosting: 'VPS'
  },
  // {
  //   id: 'techanalytica',
  //   name: 'TechAnalytica - AI Tools Directory & Comparison Platform',
  //   category: 'AI & Automation',
  //   eyebrow: 'AI TOOLS DIRECTORY · COMPARISON CALCULATOR · LARAVEL & REACT',
  //   image: '/images/projects/techanalytica.png',
  //   summary: 'A curated AI software discovery and intelligence platform featuring verified software reviews, interactive comparison calculators, and vendor directory.',
  //   fullDescription: 'TechAnalytica is a modern AI ecosystem directory built to help businesses discover, evaluate, and adopt vetted AI tools. Developed with Laravel, MySQL, and modern frontend components, the platform features smart faceted filtering across AI categories, side-by-side tool comparison calculators, verified customer ratings, and comprehensive vendor profiles.',
  //   stack: ['Laravel', 'MySQL', 'React', 'Vite', 'REST APIs', 'Bootstrap / Tailwind'],
  //   highlights: [
  //     'Intelligent search and faceted filtering across enterprise AI tools and SaaS solutions',
  //     'Interactive side-by-side AI tool comparison calculator and evaluation matrix',
  //     'Vendor profile management with verified ratings, reviews, and feature matrices',
  //     'Automated administrative submission and curation workflow for AI startups'
  //   ],
  //   role: 'Full-Stack Developer & Product Architect',
  //   location: 'Global',
  //   hosting: 'Local Dev / Cloud'
  // }
]

export const categoryOptions = [
  'All',
  'SaaS & Platforms',
  'Business Systems & CRM',
  'AI & Automation',
  'E-Commerce & Logistics'
]
