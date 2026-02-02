export type Media = {
  images: string[];
  videos?: string[];
  diagrams?: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  playStore?: string;
  overview: string;
  built?: string[];
  decisions?: string[];
  impact: string[];
  tech: string[];
  media: Media;
};

export const experiences: Experience[] = [
  {
    id: 'rapido',
    company: 'Rapido',
    role: 'Product Engineer II',
    start: '05/2025',
    end: 'Present',
    playStore: 'https://play.google.com/store/apps/details?id=com.rapido.rider',
    overview: 'Owned the Captain onboarding experience — shipped a server-driven onboarding flow, Compose identity-capture components, and platform compatibility work to let product iterate without app releases.',
    built: [
      'Server-driven onboarding engine with explicit state-machine execution on the client',
      'Reusable Jetpack Compose image-cropper for identity/photo capture',
      'Android 14 → 15 compatibility fixes and migration tasks'
    ],
    decisions: [
      'Server-driven UI + explicit state-machine to enable flow updates without client releases',
      'Adopted Orbit MVI for deterministic state transitions and easier async debugging',
      'Accepted backend coupling and schema/versioning complexity for runtime flexibility'
    ],
    impact: [
      'Enabled product team to change onboarding flows without app updates, reducing rollout time for experiments and bug fixes.',
      'Delivered high-impact features (Buddy Pay, Rapido for Corporate, Ambulance Service) end-to-end on the Captain app.'
    ],
    tech: ['Kotlin','Jetpack Compose','Orbit MVI','State machines','Hilt','Coroutines','WorkManager'],
    media: { images: ['/media/rapido/onboarding-01.png','/media/rapido/onboarding-02.png','/media/rapido/buddypay.png'], videos: ['/media/rapido/rapido-demo.mp4'], diagrams: ['/media/rapido/rapido-state-machine.png'] }
  },
  {
    id: 'wayo',
    company: 'Wayo (BluSmart group)',
    role: 'Senior Android Developer',
    start: '04/2024',
    end: '04/2025',
    playStore: 'https://play.google.com/store/apps/details?id=com.lmev.rider',
    overview: 'Rewrote the customer app with a Compose-first, multi-module architecture to improve reliability, cold-start, and enable targeted offers for segmented users.',
    built: [
      'Compose-first rewrite with feature-wise multi-module boundaries',
      'Version-based caching for offline-first home screen and reduced API load',
      'Remote Config segmentation for targeted discounts and experiments',
      'APK and asset optimizations (R8/ProGuard, image compression)'
    ],
    decisions: [
      'Multi-module structure to improve ownership and reduce build times despite CI complexity',
      'Version-based caching to trade freshness for offline reliability and faster perceived loads',
      'Remote Config for server-controlled experiments without releases'
    ],
    impact: [
      'Reached 99.99% crash-free rate across ~40K MAU.',
      'Home screen: 88% of views served from local cache, reducing API load and improving perceived speed.',
      'Segment-based discounts drove an estimated 12–18% uplift in order conversion for targeted cohorts.',
      'Cold start reduced to ~550ms and APK size to ~8MB.'
    ],
    tech: ['Kotlin','Jetpack Compose','Hilt','Remote Config','Room','R8/ProGuard','Version Catalogs'],
    media: { images: ['/media/wayo/home-cached.png','/media/wayo/discount-flow.png','/media/wayo/location-selection.png'], videos: ['/media/wayo/wayo-demo.mp4'], diagrams: ['/media/wayo/wayo-modules.png'] }
  },
  {
    id: 'blusmart',
    company: 'BluSmart',
    role: 'Senior Android Developer',
    start: '02/2022',
    end: '03/2024',
    playStore: 'https://play.google.com/store/apps/details?id=com.blusmart.rider',
    overview: 'Stabilized and modularized the rider app to support new products and reduce UI jank while enabling safer feature launches.',
    built: [
      'Server-driven help content and new product features (Rental flows)',
      'Incremental rewrite into Clean Architecture with feature modularization',
      'Lazy inflation and Compose optimizations to reduce UI jank',
      'UI and unit test suites to prevent regressions'
    ],
    decisions: [
      'Incremental rewrite to limit regressions versus full rewrite',
      'Use lazy inflation to defer heavy view inflation and reduce memory/CPU spikes',
      'Invest in test coverage to speed long-term delivery'
    ],
    impact: [
      'Reduced frame freezes by ~50% using lazy inflation and reduced recompositions.',
      'Increased test coverage ~60%, enabling safer merges and fewer manual QA cycles; reviewed and merged 50+ PRs while mentoring junior engineers.'
    ],
    tech: ['Kotlin','MVVM','Clean Architecture','UI Automator','JUnit','Room','ViewStub'],
    media: { images: ['/media/blusmart/rental-01.png','/media/blusmart/help-section.png'], videos: ['/media/blusmart/blusmart-demo.mp4'], diagrams: ['/media/blusmart/blusmart-modularization.png'] }
  },
  {
    id: 'myelsa',
    company: 'myELSA',
    role: 'Android Developer',
    start: '07/2020',
    end: '02/2022',
    overview: 'Built reliable background uploads and timed exam workflows to support tutors working on intermittent networks.',
    built: [
      'Resumable large-file upload system to AWS S3 using WorkManager with persistent state and retry/backoff',
      'Timed exam module with auto-submit and immediate analytics',
      'Calendar/Meet integration for scheduling live sessions'
    ],
    decisions: [
      'Use WorkManager for reliable background uploads and persistence across restarts',
      'Choose resumable multipart uploads to guarantee completion on poor networks despite additional server-side tracking'
    ],
    impact: [
      'Significantly improved upload completion rates under poor networks via resumable uploads and retries.',
      'Delivered exam and scheduling features that enabled tutors to run assessments and live classes within the app.'
    ],
    tech: ['Kotlin','WorkManager','AWS S3','REST APIs','Google Calendar/Meet'],
    media: { images: ['/media/myelsa/upload-progress.png','/media/myelsa/exam-timer.png'], videos: ['/media/myelsa/myelsa-demo.mp4'], diagrams: ['/media/myelsa/myelsa-upload-flow.png'] }
  }
];

export function getExperienceById(id: string){
  return experiences.find(e => e.id === id) || null;
}
