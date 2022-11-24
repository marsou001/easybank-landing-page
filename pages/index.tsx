import AppFooterInfo from "../components/AppFooterInfo/AppFooterInfo";
import Features from "../components/Features/Features";
import AppBar from "../components/AppBar/AppBar";
import Hero from "../components/Hero/Hero";
import LatestArticles from "../components/LatestArticles/LatestArticles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easybank</title>
      </Head>
      <AppBar />
      <main>
        <Hero />
        <Features />
        <LatestArticles />
      </main>
      <AppFooterInfo />
    </>
  )
}
