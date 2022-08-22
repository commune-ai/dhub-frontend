import NavBar from './Nav'
import Image from 'next/image'
import Head from 'next/head'
import Footer from './Footer/index'



type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Head>
        <title>Algovera.ai | Decentralized AI</title>
        <meta name="description" content="Algovera is a collective of people working to facilitate and accelerate the development of decentralized AI products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className='container'>{children}</main>

      <Footer />
    </>
  )
}