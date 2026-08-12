import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">
          <Navbar />
          <main className="mt-6">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
