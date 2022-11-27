/* eslint-disable react/jsx-no-target-blank */
import ProjectCard from '../components/project_card'
import Head from 'next/head'

export default function Home() {

  const projects = [
    {
      title: "Shopon",
      description: "Ecommerce Project built with Angular & NodeJS.",
      github: "https://github.com/sahilofficial671/shopon",
      piplelineImageLink: "https://img.shields.io/github/deployments/sahilofficial671/shopon/production?label=vercel&logo=vercel",
      link: "https://shopon.webiggle.com/",
      tags: ['angular', 'nodejs', 'html5', 'css3'],
    }
  ];

  return (
    <>
      <Head>
        <title>About | Sahil Bhatia</title>
      </Head>
      <h1 className="text-2xl md:text-4xl text-primary font-extrabold mb-6 lg:mb-8 border-l-8 border-indigo-500 pl-2 tracking-normal">
        Hello, I am Sahil Bhatia
      </h1>
      <p className="text-lg tracking-wide pb-4 md:pb-12">
        A Full Stack Developer with passion for softwares. I take pride in providing robust solutions for my clients. I also like to explore more about the new technologies of this world.
        <div className="pt-6">
          <a href="https://drive.google.com/file/d/1F9dbSkMHXMvlK85aE1bsWjq2lLlNdzDT/view?usp=sharing" target="_blank">
            <a className="inline-block py-2 px-3 text-sm font-medium uppercase tracking-widest rounded text-primary bg-green-200 hover:bg-green-300 hover:bg-opacity-75 shadow-sm hover:shadow text-left border-2 border-green-300 border-opacity-60 transition-all ease-linear duration-100">View Resume</a>
          </a>
        </div>
      </p>

      <section className="py-8" id="portfolio">
        <div className="flex justify-center items-center pb-10 lg:pb-16">
          <div className="w-32 absolute">
            <h3 className="text-3xl font-bold text-primary capitalize text-center z-20 relative">Portfolio</h3>
            <div className="art w-32 mx-auto h-3 bg-green-200 absolute bottom-0 z-10"> </div>
          </div>
        </div>

        <div className="sm:grid grid-cols-2">
          {projects.length && (
            // eslint-disable-next-line react/jsx-key
            projects.map((project) => <ProjectCard {...project}  />)
          )}

          <ProjectCard title="Twello" description="Working on projects Made Easy." github="https://github.com/sahilofficial671/twello" pipelineLink="https://github.com/sahilofficial671/twello/actions" piplelineImageLink="https://github.com/sahilofficial671/twello/actions/workflows/build.yml/badge.svg" link="https://twello.webiggle.com/" />
          
          <ProjectCard title="Cloud Life" description="Manage your life in cloud. Sleek personal crm." github="https://github.com/sahilofficial671/cloud-life" pipelineLink="https://github.com/sahilofficial671/cloud-life/actions" piplelineImageLink="https://github.com/sahilofficial671/cloud-life/actions/workflows/tests.yml/badge.svg" link="https://cloud-life.webiggle.com/" />

          <ProjectCard title="Laravel Boilerplate" description="Simple laravel essentials to kik start your new project." github="https://github.com/sahilofficial671/laravel-boilerplate" pipelineLink="https://github.com/sahilofficial671/laravel-boilerplate/actions" piplelineImageLink="https://github.com/sahilofficial671/laravel-boilerplate/actions/workflows/build.yml/badge.svg" link="https://boilerplate.webiggle.com/" />

          <ProjectCard title="Orbit CRM" description="Light weight Contacts Management Software." github="https://github.com/sahilofficial671/orbit-crm" pipelineLink="https://github.com/sahilofficial671/orbit-crm/actions" piplelineImageLink="https://github.com/sahilofficial671/orbit-crm/workflows/Build/badge.svg" link="https://orbit-crm.webiggle.com/" />
        </div>
      </section>
    </>
  )
}
