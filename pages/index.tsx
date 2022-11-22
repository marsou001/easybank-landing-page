import Features from "../components/Features/Features";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <HeaderBar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  )
}
