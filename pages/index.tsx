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
import CookieConsent from "react-cookie-consent";



const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Languages/>
        <Header/>
        <Presentation/>
        <Carrousel/>
        <Contact/>
        
  <CookieConsent
    location="bottom"
    buttonText="Accepter"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#646161" }}
    buttonStyle={{ background: "#FFFFFF", color: "#646161", fontSize: "13px" }}
    expires={150}
  >
    Ce site utilise des cookies pour vous faire vivre la meilleure expérience sur notre site. En savoir plus{" "}
  </CookieConsent>
      </Layout>
    </>
  )
}

export default Home


