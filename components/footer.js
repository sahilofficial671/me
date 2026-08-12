export default function Footer() {
  return (
    <footer className="mt-6 card p-4 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Sahil Bhatia • Senior Full Stack Engineer</p>
      <p className="mt-1">
        <a href="https://github.com/sahilofficial671" target="_blank" rel="noreferrer">GitHub</a>
        {' • '}
        <a href="https://linkedin.com/in/sahilofficial671" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </footer>
  )
}
