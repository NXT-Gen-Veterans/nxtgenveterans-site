import HeroSection from "./components/HeroSection"
import OfferSection from "./components/OfferSection"
import ServicesSection from "./components/ServicesSection"


function Home() {
  return (
    <>
      <h1 className="sr-only">Home Page</h1>
      <HeroSection />
      <ServicesSection />
      <OfferSection />
    </>
  )
}

Home.propTypes = {}

export default Home
