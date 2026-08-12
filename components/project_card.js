/* eslint-disable react/jsx-no-target-blank */
export default function ProjectCard({ title, description, github, link, tags = [] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <p className="mt-3 text-sm text-gray-700">
        <a href={github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
        {' • '}
        <a href={link} target="_blank" rel="noreferrer" className="underline">Project Link</a>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
