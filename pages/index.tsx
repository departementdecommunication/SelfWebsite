import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageTitle from '../components/title'
import Header from '../components/header'
import Languages from '../components/languages'
import Presentation from '../components/presentation'
import Carrousel from '../components/carrousel'
import Contact from '../components/contact'
import Layout from '../components/layout'



const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-[#747171]">
        <Languages/>
        <Header/>
        <Presentation/>
        <Carrousel/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default Home
