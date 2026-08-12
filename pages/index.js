import Head from 'next/head'
import { useRouter } from 'next/router'
import ProjectCard from '../components/project_card'

const skills = {
  Languages: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'PHP'],
  Frontend: ['Angular', 'Nx', 'RxJS', 'NgRx', 'Angular Signals', 'Module Federation', 'Webpack', 'Tailwind CSS', 'Storybook', 'PrimeNG', 'IndexedDB', 'PDFTron WebViewer'],
  'Backend & Architecture': ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'CQRS', 'Event-Driven Architecture', 'TypeORM', 'Swagger'],
  Data: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'Redis', 'Weaviate'],
  'Cloud & Infrastructure': ['AWS (Lambda, SQS, SNS, EC2, CloudWatch, API Gateway WebSocket)', 'GCP (GKE, Cloud Run, IAM, Terraform)', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  'Security & Realtime': ['JWT', 'OAuth', 'RBAC', 'CSRF', 'FusionAuth', 'WebSocket', 'Socket.IO', 'Azure Web PubSub', 'Vault'],
  'Testing & Engineering': ['Jest', 'Git', 'GitHub Actions', 'GitLab CI', 'OpenFeature'],
}

const experiences = [
  {
    role: 'Senior Consultant, Full Stack',
    company: 'JK Tech | Client: Inveniam',
    location: 'Remote',
    duration: 'Apr 2023 – Present',
    highlights: [
      'Contributed across Angular 11 legacy and Angular 21/Nx modernization for a private-markets SaaS platform spanning frontend architecture, backend services, document intelligence, realtime systems, and IAM.',
      'Owned end-to-end development of Artifact Browser and Extraction Template Builder with PDFTron integration, document-level deltas, IndexedDB autosave, and structured extraction workflows.',
      'Led architecture and delivery of Smart Content Mapper, an OCR-powered workflow for extracting, annotating, and validating structured document content inside PDFTron.',
      'Designed and delivered a reusable permissions platform adopted across Federated Shell, Chat, and Studio with SSR-aware route guards, directives, and centralized authorization state.',
      'Led Angular platform modernization from Angular 11 to Angular 21/Nx with Module Federation, Angular Signals, shared platform services, and federated architecture.',
      'Led Permissions V2 by replacing legacy permission flags with centralized NgRx authorization state, route guards, directives, and folder-level federated access controls.',
      'Designed a hybrid WebSocket architecture supporting Socket.IO (local/Kubernetes) and native WebSockets (AWS API Gateway and Azure Web PubSub) using adapter patterns, retry with jitter, and JWT-based auth.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Skuad | Client: CarDekho',
    location: 'Gurugram',
    duration: 'Jul 2022 – Apr 2023',
    highlights: [
      'Built features for Connx, a used-car retail, auction, and payments platform using Angular, Node.js, JavaScript, and MySQL.',
      'Integrated AWS Lambda, SQS, SNS, EC2, and CloudWatch for asynchronous workflows and operational monitoring.',
    ],
  },
  {
    role: 'Senior Associate, Full Stack Developer',
    company: 'Z1 Media',
    location: 'Gurugram',
    duration: 'Aug 2021 – Jul 2022',
    highlights: [
      'Developed Receptix and an omni-channel job ingestion platform integrating data from multiple career vendors using Node.js and Express.js.',
      'Integrated Google Ads, Microsoft Ads, and Google Analytics APIs with CI/CD via Bitbucket Pipelines.',
      'Developed ad-tech aggregation services using PHP/Laravel and MongoDB for Search Operations.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Trilasoft Solutions Pvt. Ltd.',
    location: 'Noida',
    duration: 'Aug 2020 – Aug 2021',
    highlights: [
      'Built and maintained full-stack applications including EIS resource information systems and ShiftKarado logistics workflows.',
      'Integrated Google Maps APIs and implemented GitLab CI promotion workflows from development through production.',
    ],
  },
  {
    role: 'Web Application Developer',
    company: 'WOW Factors India Pvt. Ltd.',
    location: 'Faridabad',
    duration: 'Apr 2019 – Aug 2020',
    highlights: [
      'Developed product and CMS modules using Node.js, PHP/Laravel, MariaDB, and JavaScript.',
      'Integrated Google and Bing APIs and supported continuous delivery through GitLab CI.',
    ],
  },
]

const projects = [
  {
    title: 'Blogpost',
    description: 'Full-stack blogging application with secure authentication and modern UI.',
    github: 'https://github.com/sahilofficial671/blogpost',
    link: 'https://github.com/sahilofficial671/blogpost',
    tags: ['NestJS', 'Angular', 'Google Authentication', 'Tailwind CSS'],
  },
  {
    title: 'Twello',
    description: 'Trello-style project and task management application with REST architecture.',
    github: 'https://github.com/sahilofficial671/twello',
    link: 'https://github.com/sahilofficial671/twello',
    tags: ['PHP 7.4', 'Laravel 8', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'REST'],
  },
]

const certifications = [
  'Google Cloud Certified — Professional Cloud Developer | Google | Mar 2025 – Mar 2027 | Credential ID 12423 | Credential',
  'Responsive Web Design | freeCodeCamp | Feb 2022 | Credential',
]

const education = [
  'Post Graduate Program, Software Engineering (Full Stack) — NIIT | Nov 2019 – Jun 2021 | MEAN Stack, Java (Spring Boot)',
  'Bachelor of Computer Applications — DAVIM, Faridabad (MDU, Rohtak) | Jul 2016 – Apr 2019',
]

export default function Home() {
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <title>Sahil Bhatia | Senior Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Sahil Bhatia, Senior Full Stack Engineer with 7+ years of experience in Angular, TypeScript, Node.js/NestJS, PostgreSQL, and cloud platforms."
        />
      </Head>

      <section className="card p-6 md:p-8" id="summary">
        <h1 className="heading">Sahil Bhatia</h1>
        <p className="subheading">Senior Full Stack Engineer</p>
        <p className="contact-line">+91-9560487757 • sahilofficial671@gmail.com • Faridabad, Haryana, India (121001)</p>
        <p className="contact-line">
          <a href="https://linkedin.com/in/sahilofficial671" target="_blank" rel="noreferrer">linkedin.com/in/sahilofficial671</a>
          {' • '}
          <a href="https://github.com/sahilofficial671" target="_blank" rel="noreferrer">github.com/sahilofficial671</a>
        </p>
        <p className="mt-5 text-gray-700 leading-7">
          Senior Full Stack Engineer with 7+ years of experience building and modernizing SaaS products across TypeScript, Angular, Node.js/NestJS, PostgreSQL and cloud platforms. Strong experience in application architecture, backend services, IAM/RBAC, and event-driven workflows. Google Cloud Certified Professional Cloud Developer with production experience across AWS, GCP, and Azure.
        </p>
        <div className="mt-5">
          <a className="button" href={`${basePath}/resume.pdf`} target="_blank" rel="noreferrer">View Resume (PDF)</a>
        </div>
      </section>

      <section className="card mt-6 p-6 md:p-8" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-semibold text-gray-900">{group}</h3>
              <p className="text-gray-700 mt-1">{items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mt-6 p-6 md:p-8" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.role}-${experience.company}`}>
              <h3 className="font-semibold text-gray-900">{experience.role} — {experience.company}</h3>
              <p className="text-sm text-gray-600">{experience.location} | {experience.duration}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card mt-6 p-6 md:p-8" id="projects">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="card mt-6 p-6 md:p-8" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {certifications.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="card mt-6 p-6 md:p-8" id="education">
        <h2 className="section-title">Education</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {education.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </>
  )
}
