import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"


function Home() {
  return (
    <>
      <h1 className="sr-only">Home Page</h1>
      <HeroSection />
      <ServicesSection />
    </>
  )
}

Home.propTypes = {}

export default Home
