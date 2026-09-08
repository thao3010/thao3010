export const profile = {
  name: 'Vo Thi Thu Thao',
  role: 'Frontend Engineer',
  location: 'Ho Chi Minh City',
  tagline:
    'Frontend engineer with 4+ years of experience. I ship production UIs (booking, CMS, payments) with React/Next — measured by Lighthouse and conversion, not just screenshots.',
  email: 'vothithuthao3010@gmail.com',
  phone: '+84359856979',
  phoneLabel: '0359 856 979',
  github: 'https://github.com/thao3010',
  cta: 'Open to Mid Frontend / Junior Full-stack roles. 20 minutes — I can walk you through WeAreSpaces (Lighthouse 70→92+) and my NestJS repo.',
}

export const metrics = [
  { value: '4+', label: 'years FE in production' },
  { value: '70→92+', label: 'Lighthouse Performance' },
  { value: '−15%', label: 'payment dropout' },
  { value: '+30%', label: 'tournament ops speed' },
]

export const featured = [
  {
    id: 'wearespaces',
    index: '01',
    name: 'WeAreSpaces',
    period: 'Jan 2026 – May 2026',
    domain: 'Venue booking · Event marketplace',
    stack: [
      'Next.js App Router',
      'TypeScript',
      'React Query',
      'Zustand',
      'NextAuth',
      'React Hook Form',
      'Zod',
      'Tailwind CSS',
    ],
    situation:
      'A venue/event booking platform needed discovery, auth, and booking flows in production, while Lighthouse Performance sat around 70.',
    task: 'Build auth → venue discovery → booking flows; bring technical SEO to production grade.',
    action:
      'Next.js App Router with reusable Tailwind components. Zustand for client state, React Query for API caching, NextAuth, and Zod forms. SEO via Metadata API, Open Graph, and canonical URLs. Daily standups to catch API blockers early.',
    result:
      'Lighthouse Performance improved from 70 to 92+. Search visibility is on the CV but without traffic numbers — not claimed beyond Lighthouse.',
  },
  {
    id: 'efeedlink',
    index: '02',
    name: 'eFeedLink Platform',
    period: 'Jan 2023 – Dec 2023',
    domain: 'Agribusiness · B2B checkout',
    stack: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Redux-Saga',
      'Stripe',
      'next-intl',
      'Material UI',
      'OAuth',
    ],
    situation:
      'Cross-border checkout had high dropout and UX was not localized for multi-market users.',
    task: 'Multi-currency payments, 5-locale i18n, and an internal CMS with RBAC.',
    action:
      'Integrated Stripe and OAuth. Five locales via next-intl. CMS with RBAC and rich-text editing. Agile sprints to resolve cross-border payment blockers.',
    result:
      'Reduced payment dropout by 15%. Expanded reach through multi-currency checkout and localized UX.',
  },
  {
    id: 'tiebreak',
    index: '03',
    name: 'Tiebreak CMS',
    period: 'Oct 2025 – Jan 2026',
    domain: 'SportsTech · Tournament operations',
    stack: [
      'React 19',
      'Vite',
      'TanStack Query',
      'TanStack Table',
      'Zustand',
      'shadcn/ui',
      'Zod',
      'Vitest',
    ],
    situation:
      'Tournament organizers needed a complex CMS (draws, multi-tab workflows); operations were slow.',
    task: 'Domain-driven SPA with state-gated operations tied to tournament status.',
    action:
      'React 19 + Vite. Drag-and-drop draw generation, status-gated operations, Google Places autocomplete, type-safe Axios interceptors. AI-assisted Vitest generation.',
    result:
      'Increased tournament operations speed by 30%. Test coverage improved; CV does not cite a specific percentage.',
  },
]

export const archive = [
  {
    name: 'NextGig',
    domain: 'HRTech / ATS',
    note: 'Employer dashboard: filter, sort, pagination with TanStack Table. React 19 + Vite SWC.',
  },
  {
    name: 'Cameralla',
    domain: 'Media platform',
    href: 'https://cameralla.com',
    note: 'Maintained legacy Angular 6/7 (500+ files), S3 uploads, Socket.IO notifications.',
  },
  {
    name: 'Cisgenics',
    domain: 'IoT / AgriTech',
    note: 'Real-time sensor charts, CSV export, maps. React + MUI + TanStack Query.',
  },
  {
    name: 'Labbit',
    domain: 'FinTech portal',
    note: 'Multi-tenant admin/pro: JWT/OAuth, RBAC, PDF/Excel export, Stripe.',
  },
]

export const learning = {
  name: 'E-commerce Backend API',
  type: 'Guided training — not production',
  href: 'https://github.com/thao3010/learn-nestjs',
  note: 'NestJS modules/guards, JWT + RBAC, Stripe Payment Intent & webhooks, TypeORM/PostgreSQL, Redis, S3, SES, Docker, Swagger.',
}

export const skills = {
  core: [
    'TypeScript',
    'React 19',
    'Next.js App Router',
    'TanStack Query',
    'Zustand',
    'Tailwind CSS',
  ],
  tools: [
    'React Hook Form + Zod',
    'shadcn/ui · MUI',
    'NextAuth / OAuth / JWT',
    'Stripe',
    'Socket.IO',
    'Vitest + Vite',
  ],
  backend: [
    'NestJS (training)',
    'PostgreSQL + TypeORM',
    'Redis',
    'Docker',
    'AWS S3 / SES',
    'Swagger',
  ],
}

export const about = `I'm Thao — four years on the frontend at Vinova. Agency work means many domains: booking, tournament CMS, ATS, cross-border payments. I prioritize architected UI (reusable components, TanStack Query server state, type-safe forms) over demo-only polish. I'm learning NestJS with mentor review: enough to discuss JWT, Stripe webhooks, and Redis caching with backend teams — not claiming production full-stack experience.`
