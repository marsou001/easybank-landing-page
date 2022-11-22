import Features from "../components/Features/Features";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Hero from "../components/Hero/Hero";
import LatestArticles from "../components/LatestArticles/LatestArticles";

export default function Home() {
  return (
    <>
      <HeaderBar />
      <main>
        <Hero />
        <Features />
        <LatestArticles />
      </main>
    </>
  )
}
