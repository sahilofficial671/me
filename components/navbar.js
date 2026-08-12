/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const { basePath } = useRouter()

  return (
    <header className="card p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={`${basePath}/image/profile.jpg`} alt="Sahil Bhatia" className="h-14 w-14 rounded-full object-cover" />
          <div>
            <p className="font-semibold">Sahil Bhatia</p>
            <p className="text-sm text-gray-600">Senior Full Stack Engineer</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
